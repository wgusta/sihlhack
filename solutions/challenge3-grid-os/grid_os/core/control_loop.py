"""Grid-OS Control Loop: 10Hz tick pipeline."""
import os
import time
import logging
import requests
from .types import SensorState, PowerBudget, HubConfig, MarketPrices
from .state_machine import GridOSStateMachine, OperationalMode, TransitionCondition
from .pid import PIDConfig, PIDController
from ..scheduler.solar_budget import calculate_solar_budget, utility
from ..compute.deferred import DeferredComputeScheduler
from ..shedding.policies import LoadSheddingController

logger = logging.getLogger("grid_os.loop")


class SafetyClearanceClient:
    """Fail-closed clearance client for actuator dispatch."""

    def __init__(self, base_url: str | None = None, timeout_s: float = 0.5):
        self.base_url = (base_url or os.getenv("SAFETY_API_URL", "http://localhost:3002")).rstrip("/")
        self.timeout_s = timeout_s

    def request_clearance(self, hub_id: str, command: str) -> tuple[bool, dict]:
        url = f"{self.base_url}/api/v1/safety/clearance"
        try:
            resp = requests.get(url, params={"hub_id": hub_id, "command": command}, timeout=self.timeout_s)
            if resp.status_code != 200:
                return False, {"reason": f"safety_api_status_{resp.status_code}"}
            payload = resp.json()
            return bool(payload.get("clear", False)), payload
        except Exception as exc:
            return False, {"reason": "safety_api_unreachable", "error": str(exc)}


class GridOSControlLoop:
    def __init__(self, config: HubConfig, sim_client=None, safety_client: SafetyClearanceClient | None = None):
        self.config = config
        self.sim_client = sim_client
        self.safety_client = safety_client or SafetyClearanceClient()
        self.state_machine = GridOSStateMachine(config)
        self.pid = PIDController(PIDConfig(setpoint=config.t_water_setpoint, cpu_override_c=config.t_cpu_limit))
        self.scheduler = DeferredComputeScheduler()
        self.shedding = LoadSheddingController()
        self.sensors = SensorState()
        self.budget = PowerBudget()
        self.last_clearance: dict = {"clear": False, "reason": "uninitialized"}
        self.last_actuators: dict = {}
        self.manual_mode_override: OperationalMode | None = None
        self.running = False
        self.tick_count = 0
        self.tick_times: list[float] = []

    def start(self):
        self.running = True
        tick_interval = 1.0 / self.config.tick_hz
        logger.info(f"Grid-OS starting at {self.config.tick_hz}Hz ({tick_interval*1000:.0f}ms/tick)")
        while self.running:
            tick_start = time.monotonic()
            self._tick()
            self.tick_count += 1
            elapsed = time.monotonic() - tick_start
            self.tick_times.append(elapsed)
            if len(self.tick_times) > 100:
                self.tick_times.pop(0)
            sleep_time = max(0, tick_interval - elapsed)
            if sleep_time > 0:
                time.sleep(sleep_time)

    def stop(self):
        self.running = False

    def _tick(self):
        # 1. Read sensors
        if self.sim_client:
            state = self.sim_client.get_sensor_state()
            if state:
                self.sensors = state
        # 2. Evaluate mode
        cond = TransitionCondition(
            grid_freq=self.sensors.grid_freq,
            soc=self.sensors.soc,
            grid_price=self.sensors.grid_price,
            heat_demand=self.sensors.t_ambient < 15,
            solar_available=self.sensors.p_solar_w > 100,
            grid_connected=abs(self.sensors.grid_freq - 50.0) < 0.5,
            safety_ok=self.sensors.t_cpu < self.config.t_cpu_limit,
            manual_mode=self.manual_mode_override,
        )
        mode = self.state_machine.evaluate(cond)
        # 3. Calculate power budget
        self.budget = calculate_solar_budget(self.sensors, self.config, mode.value)
        # 4. Load shedding
        self.shedding.evaluate(self.sensors.soc, self.sensors.t_cpu, self.sensors.grid_freq)
        compute_mult = self.shedding.get_compute_multiplier()
        effective_compute = self.budget.compute_w * compute_mult
        # 5. Schedule compute
        allowed = self.shedding.get_allowed_classes()
        self.scheduler.schedule(effective_compute, allowed)
        # 6. PID thermal control
        pump_duty = self.pid.update(self.sensors.t_water_out, self.sensors.t_cpu)
        # 7. Safety clearance gate + actuator dispatch (fail-closed)
        if self.sim_client:
            commands = {
                "compute_limit_w": effective_compute,
                "pump_pwm_pct": pump_duty,
                "fan_pwm_pct": min(100, pump_duty * 1.2),
                "battery_cmd_w": self.budget.battery_w,
            }
            clear, clearance = self.safety_client.request_clearance(self.config.hub_id, "set_actuators")
            self.last_clearance = clearance
            if clear:
                if clearance.get("clearance_id"):
                    commands["clearance_id"] = clearance["clearance_id"]
                self.last_actuators = commands
                self.sim_client.set_actuators(commands)
            else:
                logger.error("Actuation blocked by safety clearance: %s", clearance.get("reason"))
                self.state_machine.force_emergency_stop("safety_clearance_denied")
        # 8. Compute heat output
        if self.sensors.flow_rate_lpm > 0:
            delta_t = self.sensors.t_water_out - self.sensors.t_water_in
            self.sensors.heat_output_w = self.sensors.flow_rate_lpm * delta_t * 4186 / 60

    def get_full_status(self) -> dict:
        avg_tick = sum(self.tick_times) / max(1, len(self.tick_times))
        max_tick = max(self.tick_times) if self.tick_times else 0
        prices = MarketPrices(grid_import_chf_kwh=self.sensors.grid_price,
                              grid_export_chf_kwh=self.sensors.grid_price * 0.7)
        return {
            "hub_id": self.config.hub_id,
            "uptime_ticks": self.tick_count,
            "avg_tick_ms": avg_tick * 1000,
            "max_tick_ms": max_tick * 1000,
            "mode": self.state_machine.get_status(),
            "shedding": {"level": self.shedding.current_level.value,
                         "compute_multiplier": self.shedding.get_compute_multiplier()},
            "budget": {"compute_w": self.budget.compute_w, "battery_w": self.budget.battery_w,
                       "grid_w": self.budget.grid_w, "heat_w": self.budget.heat_w},
            "utility_chf_h": utility(self.budget, self.sensors, prices),
            "scheduler": self.scheduler.get_status(),
            "pid": self.pid.get_status(),
            "safety_clearance": self.last_clearance,
            "manual_mode_override": self.manual_mode_override.value if self.manual_mode_override else None,
            "last_actuators": self.last_actuators,
        }

    def set_manual_mode(self, mode: OperationalMode | None):
        self.manual_mode_override = mode
        if mode == OperationalMode.EMERGENCY_STOP:
            self.state_machine.force_emergency_stop("manual_api")

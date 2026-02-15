"""Sihl-Sim client: mock sensor generation for development and testing."""
import math
import time
from dataclasses import dataclass
from typing import Optional, Dict
from ..core.types import SensorState

@dataclass
class SimConfig:
    base_url: str = "http://localhost:9090"
    hub_id: str = "hub_01"
    api_key: str = ""
    timeout_s: float = 1.0

class SihlSimClient:
    def __init__(self, config: SimConfig = None):
        self.config = config or SimConfig()
        self._connected = False
        self._mock_mode = True
        self._mock_time = time.time()
        self._mock_soc = 60.0
        self._mock_t_cpu = 55.0

    def connect(self) -> bool:
        self._connected = True
        return True

    def get_sensor_state(self) -> Optional[SensorState]:
        if self._mock_mode:
            return self._generate_mock_sensors()
        return None

    def set_actuators(self, commands: Dict[str, float]):
        if self._mock_mode:
            self._apply_mock_actuators(commands)

    def _generate_mock_sensors(self) -> SensorState:
        now = time.time()
        dt = now - self._mock_time
        self._mock_time = now
        hour = (now % 86400) / 3600
        p_solar = max(0, 3000 * math.sin(math.pi * (hour - 6) / 14)) if 6 <= hour <= 20 else 0
        p_solar = max(0, p_solar + 200 * math.sin(now * 0.01))
        grid_freq = 50.0 + 0.02 * math.sin(now * 0.1)
        if 0 <= hour < 6: price = 0.12
        elif 6 <= hour < 9: price = 0.28
        elif 9 <= hour < 15: price = 0.15
        elif 15 <= hour < 20: price = 0.32
        else: price = 0.18
        self._mock_t_cpu += (0.5 * math.sin(now * 0.01)) * min(dt, 1)
        self._mock_t_cpu = max(40, min(80, self._mock_t_cpu))
        self._mock_soc += 0.01 * math.sin(now * 0.001) * min(dt, 1)
        self._mock_soc = max(10, min(95, self._mock_soc))
        return SensorState(
            timestamp=now, p_solar_w=p_solar,
            p_grid_w=500 + 100 * math.sin(now * 0.02),
            p_compute_w=800 + 200 * math.sin(now * 0.03),
            soc=self._mock_soc, battery_voltage=48 + self._mock_soc * 0.05,
            t_cpu=self._mock_t_cpu, t_water_in=25 + 3 * math.sin(now * 0.005),
            t_water_out=45 + 5 * math.sin(now * 0.005),
            t_ambient=20 + 5 * math.sin(now * 0.0001),
            flow_rate_lpm=5 + math.sin(now * 0.01),
            grid_freq=grid_freq, grid_voltage=230 + 2 * math.sin(now * 0.05),
            grid_price=price,
        )

    def _apply_mock_actuators(self, commands: Dict[str, float]):
        if "compute_limit_w" in commands:
            self._mock_t_cpu += (commands["compute_limit_w"] / 3000) * 0.1
        if "pump_pwm_pct" in commands:
            self._mock_t_cpu -= (commands["pump_pwm_pct"] / 100) * 0.05
        if "battery_cmd_w" in commands:
            self._mock_soc += commands["battery_cmd_w"] * 0.1 / 36000

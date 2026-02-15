"""Sihl-Sim client: physics-coupled mock sensor generation.

Thermal model uses lumped-capacitance approach with proper energy balance:
  THERMAL_MASS × dT/dt = Q_compute - Q_flow - Q_ambient_loss

All feedback paths are coupled:
  - pump PWM → flow rate → heat removal → coolant temperature
  - compute load → heat input → coolant temperature → CPU temperature
  - battery command → SOC (coulomb counting with efficiency)
  - solar follows Swiss irradiation data (5kWp, Zurich latitude)
  - grid power balances the node (conservation of energy)
"""
import math
import time
import random
from dataclasses import dataclass
from typing import Optional, Dict
from ..core.types import SensorState

# Physical constants
WATER_CP = 4186.0         # J/(kg·K), specific heat of water
MAX_FLOW_LPM = 5.0        # L/min at 100% pump duty
MIN_FLOW_LPM = 0.3        # L/min at 0% pump (leakage/gravity)

# Thermal model parameters
CPU_THERMAL_R = 0.008      # °C/W, aggregate node-to-coolant (immersion cooling path)
THERMAL_MASS = 20000.0     # J/K, coolant loop thermal mass (~5L water + metal)
AMBIENT_LOSS = 5.0         # W/K, passive heat loss coefficient to ambient

# Battery model
BATTERY_CAPACITY_WH = 10000.0
BATTERY_EFFICIENCY = 0.92  # round-trip efficiency (charge × discharge)
BATTERY_V_EMPTY = 44.0     # V at 0% SOC
BATTERY_V_FULL = 54.0      # V at 100% SOC

# Solar model (5kWp system, Zurich ~47.4°N)
SOLAR_PEAK_W = 2500.0      # realistic Swiss clear-sky peak for 5kWp
SOLAR_DAY_START = 6.0       # hour (sunrise effective)
SOLAR_DAY_END = 18.0        # hour (sunset effective, 12h effective day)
# yields ~19 kWh/day clear sky → annual avg ~3.2 kWh/kWp/day with clouds

# Pump power (small circulation pump)
PUMP_MAX_W = 50.0


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
        self._last_time = time.time()

        # State variables (initial conditions)
        self._soc = 60.0            # % battery SOC
        self._t_coolant = 30.0      # °C coolant bulk temperature
        self._compute_w = 800.0     # W current compute load
        self._cloud_factor = 0.85   # 0-1, cloud cover (1=clear)

        # Actuator state (from control loop)
        self._pump_pwm = 50.0       # % pump duty cycle
        self._compute_limit_w = 3000.0  # W compute power limit
        self._battery_cmd_w = 0.0   # W (positive=charge, negative=discharge)

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
        dt = min(now - self._last_time, 1.0)  # cap at 1s for numerical stability
        if dt <= 0:
            dt = 0.001
        self._last_time = now
        hour = (now % 86400) / 3600

        # === Solar generation (Swiss 5kWp, cloud-coupled) ===
        if SOLAR_DAY_START <= hour <= SOLAR_DAY_END:
            clear_sky = SOLAR_PEAK_W * math.sin(
                math.pi * (hour - SOLAR_DAY_START) / (SOLAR_DAY_END - SOLAR_DAY_START)
            )
            clear_sky = max(0, clear_sky)
        else:
            clear_sky = 0
        # Cloud random walk (slow drift, realistic intermittency)
        self._cloud_factor += random.gauss(0, 0.015) * dt
        self._cloud_factor = max(0.15, min(1.0, self._cloud_factor))
        p_solar = clear_sky * self._cloud_factor

        # === Grid (realistic Swiss 50Hz) ===
        grid_freq = 50.0 + random.gauss(0, 0.015)
        grid_voltage = 230.0 + random.gauss(0, 1.5)

        # === Swiss time-of-use pricing (realistic HT/NT spread 0.06-0.08 CHF) ===
        if 0 <= hour < 6:
            price = 0.16      # NT (Niedertarif)
        elif 6 <= hour < 7:
            price = 0.19      # transition
        elif 7 <= hour < 11:
            price = 0.24      # HT morning
        elif 11 <= hour < 13:
            price = 0.20      # midday solar depression
        elif 13 <= hour < 17:
            price = 0.22      # HT afternoon
        elif 17 <= hour < 20:
            price = 0.26      # HT evening peak
        elif 20 <= hour < 22:
            price = 0.20      # transition
        else:
            price = 0.17      # NT late night

        # === Ambient temperature (diurnal cycle, 12-24°C) ===
        t_ambient = 18.0 + 6.0 * math.sin(math.pi * (hour - 6) / 12)

        # === Compute load (ramps toward limit, 1s time constant) ===
        target = min(self._compute_limit_w, 3000)
        alpha = min(1.0, dt / 1.0)
        self._compute_w += (target - self._compute_w) * alpha
        self._compute_w = max(0, self._compute_w)

        # === Flow rate (coupled to pump PWM, linear with minimum) ===
        flow_lpm = MIN_FLOW_LPM + (self._pump_pwm / 100.0) * (MAX_FLOW_LPM - MIN_FLOW_LPM)
        flow_kg_s = flow_lpm / 60.0  # L/min → kg/s (water density ≈ 1 kg/L)

        # === Thermal model (energy balance, lumped capacitance) ===
        # Water inlet: return from building, slightly above ambient
        t_water_in = t_ambient + 3.0

        # Heat input: ALL compute power becomes heat (1st law of thermodynamics)
        q_compute = self._compute_w

        # Heat removed by water flow: Q = ṁ × cp × (T_coolant - T_inlet)
        q_flow = flow_kg_s * WATER_CP * max(0, self._t_coolant - t_water_in)

        # Passive heat loss to ambient
        q_loss = AMBIENT_LOSS * max(0, self._t_coolant - t_ambient)

        # Energy balance: thermal_mass × dT/dt = Q_in - Q_out
        d_coolant = (q_compute - q_flow - q_loss) / THERMAL_MASS * dt
        self._t_coolant += d_coolant
        self._t_coolant = max(t_water_in, min(95.0, self._t_coolant))

        # Water outlet = coolant bulk temperature (lumped model)
        t_water_out = self._t_coolant

        # CPU temperature: coolant + thermal resistance × power
        t_cpu = t_water_out + CPU_THERMAL_R * self._compute_w
        t_cpu = max(t_ambient, min(105.0, t_cpu))

        # === Battery SOC (coulomb counting with efficiency) ===
        if self._battery_cmd_w > 0:
            # Charging: less energy stored than consumed (losses)
            eff = math.sqrt(BATTERY_EFFICIENCY)
        else:
            # Discharging: less energy delivered than removed (losses)
            eff = 1.0 / math.sqrt(BATTERY_EFFICIENCY)
        # soc_delta = P × η × dt / (capacity_Wh × 3600 s/h) × 100%
        soc_delta = (self._battery_cmd_w * eff * dt) / (BATTERY_CAPACITY_WH * 36.0)
        self._soc += soc_delta
        self._soc = max(5.0, min(98.0, self._soc))

        # Battery voltage (linear model)
        bat_v = BATTERY_V_EMPTY + (self._soc / 100.0) * (BATTERY_V_FULL - BATTERY_V_EMPTY)
        bat_i = self._battery_cmd_w / max(bat_v, 1.0)

        # === Grid power balance (conservation of energy) ===
        p_pump = (self._pump_pwm / 100.0) * PUMP_MAX_W
        # P_grid = P_consumed - P_generated
        # Consumed: compute + pump + battery_charge
        # Generated: solar + battery_discharge
        p_grid = self._compute_w + p_pump + self._battery_cmd_w - p_solar
        p_grid = max(-3500, min(3500, p_grid))

        # === Heat output (computed from actual energy balance, not assumed) ===
        heat_output_w = q_flow  # heat carried away by water = useful heat

        return SensorState(
            timestamp=now,
            p_solar_w=round(p_solar, 1),
            p_grid_w=round(p_grid, 1),
            p_compute_w=round(self._compute_w, 1),
            p_battery_w=round(self._battery_cmd_w, 1),
            soc=round(self._soc, 2),
            battery_voltage=round(bat_v, 2),
            battery_current=round(bat_i, 2),
            t_cpu=round(t_cpu, 1),
            t_water_in=round(t_water_in, 1),
            t_water_out=round(t_water_out, 1),
            t_ambient=round(t_ambient, 1),
            flow_rate_lpm=round(flow_lpm, 2),
            grid_freq=round(grid_freq, 3),
            grid_voltage=round(grid_voltage, 1),
            grid_price=price,
            heat_output_w=round(heat_output_w, 1),
        )

    def _apply_mock_actuators(self, commands: Dict[str, float]):
        if "compute_limit_w" in commands:
            self._compute_limit_w = max(0, min(3000, commands["compute_limit_w"]))
        if "pump_pwm_pct" in commands:
            self._pump_pwm = max(0, min(100, commands["pump_pwm_pct"]))
        if "battery_cmd_w" in commands:
            self._battery_cmd_w = max(-3500, min(3500, commands["battery_cmd_w"]))

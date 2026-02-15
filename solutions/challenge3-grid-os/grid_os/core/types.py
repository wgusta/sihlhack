"""Core data types for Grid-OS."""
from dataclasses import dataclass, field
import time

@dataclass
class SensorState:
    timestamp: float = field(default_factory=time.time)
    p_solar_w: float = 0.0
    p_grid_w: float = 0.0
    p_compute_w: float = 0.0
    p_battery_w: float = 0.0
    soc: float = 50.0
    battery_voltage: float = 48.0
    battery_current: float = 0.0
    t_cpu: float = 50.0
    t_water_in: float = 25.0
    t_water_out: float = 40.0
    t_ambient: float = 20.0
    flow_rate_lpm: float = 5.0
    grid_freq: float = 50.0
    grid_voltage: float = 230.0
    grid_price: float = 0.20
    heat_output_w: float = 0.0

@dataclass
class PowerBudget:
    compute_w: float = 0.0
    battery_w: float = 0.0
    grid_w: float = 0.0
    heat_w: float = 0.0

@dataclass
class HubConfig:
    hub_id: str = "hub_01"
    leg_id: str = "leg_01"
    battery_capacity_wh: float = 10000.0
    max_compute_w: float = 3000.0
    max_solar_w: float = 5000.0
    max_grid_import_w: float = 3500.0
    max_grid_export_w: float = 3500.0
    t_water_setpoint: float = 60.0
    t_cpu_limit: float = 85.0
    t_cpu_throttle: float = 80.0
    soc_min_pct: float = 10.0
    soc_max_pct: float = 95.0
    tick_hz: float = 10.0
    compute_value_chf_kwh: float = 0.15
    heat_value_chf_kwh: float = 0.08

@dataclass
class MarketPrices:
    compute_chf_kwh: float = 0.15
    heat_chf_kwh: float = 0.08
    grid_import_chf_kwh: float = 0.20
    grid_export_chf_kwh: float = 0.14

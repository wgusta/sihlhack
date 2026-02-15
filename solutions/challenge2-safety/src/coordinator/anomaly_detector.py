"""
anomaly_detector.py
Multi-algorithm anomaly detection for Sihlicon Hub sensors.
"""
import time
import logging
import math
from enum import Enum
from dataclasses import dataclass, field
from typing import Optional
from collections import deque

logger = logging.getLogger("anomaly")

class Severity(Enum):
    INFO = "INFO"
    WARNING = "WARNING"
    CRITICAL = "CRITICAL"
    EMERGENCY = "EMERGENCY"

@dataclass
class SensorConfig:
    name: str
    unit: str
    normal_min: float
    normal_max: float
    warn_min: float
    warn_max: float
    crit_min: float
    crit_max: float
    max_rate_per_sec: float
    zscore_warn: float = 3.0
    zscore_crit: float = 4.0
    window_size: int = 60

@dataclass
class AnomalyEvent:
    sensor_id: str
    hub_id: str
    severity: Severity
    algorithm: str
    value: float
    threshold: float
    message: str
    timestamp: float = field(default_factory=time.time)

SENSOR_CONFIGS = {
    "battery_temp": SensorConfig("battery_temp", "C", 10, 45, 5, 50, 0, 60, 2.0),
    "battery_voltage": SensorConfig("battery_voltage", "V", 44, 56, 42, 58, 40, 60, 5.0),
    "battery_current": SensorConfig("battery_current", "A", -100, 100, -120, 120, -150, 150, 50.0),
    "oil_temp": SensorConfig("oil_temp", "C", 20, 65, 15, 70, 10, 80, 3.0),
    "oil_level": SensorConfig("oil_level", "%", 80, 100, 70, 100, 50, 100, 5.0),
    "water_flow": SensorConfig("water_flow", "L/min", 1.0, 10.0, 0.5, 12.0, 0.1, 15.0, 2.0),
    "cpu_temp": SensorConfig("cpu_temp", "C", 30, 75, 20, 85, 10, 95, 5.0),
    "coolant_in": SensorConfig("coolant_in", "C", 15, 40, 10, 50, 5, 60, 2.0),
    "coolant_out": SensorConfig("coolant_out", "C", 25, 60, 20, 70, 15, 80, 3.0),
    "ground_fault": SensorConfig("ground_fault", "mA", 0, 10, 0, 20, 0, 30, 100.0),
    "gas_ppm": SensorConfig("gas_ppm", "ppm", 0, 100, 0, 200, 0, 400, 200.0),
    "smoke": SensorConfig("smoke", "ppm", 0, 50, 0, 100, 0, 150, 100.0),
    "flame": SensorConfig("flame", "bool", 0, 0.5, 0, 0.5, 0, 0.5, 1.0),
}

class AnomalyDetector:
    def __init__(self, hub_id: str):
        self.hub_id = hub_id
        self.configs: dict[str, SensorConfig] = {}
        self.windows: dict[str, deque] = {}
        self.last_values: dict[str, tuple[float, float]] = {}
        self.sensor_health: dict[str, float] = {}

    def register_sensor(self, config: SensorConfig):
        self.configs[config.name] = config
        self.windows[config.name] = deque(maxlen=config.window_size)
        self.sensor_health[config.name] = 100.0

    def process_reading(self, sensor_name: str, value: float) -> list[AnomalyEvent]:
        config = self.configs.get(sensor_name)
        if not config:
            return []
        events = []
        now = time.time()
        self.windows[sensor_name].append((now, value))
        # 1. Absolute threshold check
        evt = self._check_thresholds(sensor_name, value, config)
        if evt:
            events.append(evt)
        # 2. Rate of change check
        evt = self._check_rate(sensor_name, value, now, config)
        if evt:
            events.append(evt)
        # 3. Z-score check
        evt = self._check_zscore(sensor_name, value, config)
        if evt:
            events.append(evt)
        self.last_values[sensor_name] = (now, value)
        # Update health score
        if events:
            worst = max(events, key=lambda e: list(Severity).index(e.severity) if e.severity in list(Severity) else 0)
            if worst.severity == Severity.EMERGENCY:
                self.sensor_health[sensor_name] = max(0, self.sensor_health[sensor_name] - 50)
            elif worst.severity == Severity.CRITICAL:
                self.sensor_health[sensor_name] = max(0, self.sensor_health[sensor_name] - 20)
            elif worst.severity == Severity.WARNING:
                self.sensor_health[sensor_name] = max(0, self.sensor_health[sensor_name] - 5)
        else:
            self.sensor_health[sensor_name] = min(100, self.sensor_health[sensor_name] + 1)
        return events

    def _check_thresholds(self, name: str, value: float, cfg: SensorConfig) -> Optional[AnomalyEvent]:
        if value > cfg.crit_max or value < cfg.crit_min:
            return AnomalyEvent(name, self.hub_id, Severity.CRITICAL, "threshold",
                value, cfg.crit_max if value > cfg.crit_max else cfg.crit_min,
                f"{name} = {value}{cfg.unit} exceeds critical limit")
        if value > cfg.warn_max or value < cfg.warn_min:
            return AnomalyEvent(name, self.hub_id, Severity.WARNING, "threshold",
                value, cfg.warn_max if value > cfg.warn_max else cfg.warn_min,
                f"{name} = {value}{cfg.unit} exceeds warning limit")
        return None

    def _check_rate(self, name: str, value: float, now: float, cfg: SensorConfig) -> Optional[AnomalyEvent]:
        if name not in self.last_values:
            return None
        last_time, last_value = self.last_values[name]
        dt = now - last_time
        if dt <= 0:
            return None
        rate = abs(value - last_value) / dt
        if rate > cfg.max_rate_per_sec * 2:
            return AnomalyEvent(name, self.hub_id, Severity.CRITICAL, "rate_of_change",
                rate, cfg.max_rate_per_sec, f"{name} rate {rate:.2f}/s exceeds 2x limit")
        if rate > cfg.max_rate_per_sec:
            return AnomalyEvent(name, self.hub_id, Severity.WARNING, "rate_of_change",
                rate, cfg.max_rate_per_sec, f"{name} rate {rate:.2f}/s exceeds limit")
        return None

    def _check_zscore(self, name: str, value: float, cfg: SensorConfig) -> Optional[AnomalyEvent]:
        window = self.windows[name]
        if len(window) < 30:
            return None
        values = [v for _, v in window]
        mean = sum(values) / len(values)
        std = math.sqrt(sum((v - mean) ** 2 for v in values) / len(values))
        if std == 0:
            return None
        zscore = abs(value - mean) / std
        if zscore > cfg.zscore_crit:
            return AnomalyEvent(name, self.hub_id, Severity.CRITICAL, "zscore",
                zscore, cfg.zscore_crit, f"{name} z-score {zscore:.1f} (>{cfg.zscore_crit}σ)")
        if zscore > cfg.zscore_warn:
            return AnomalyEvent(name, self.hub_id, Severity.WARNING, "zscore",
                zscore, cfg.zscore_warn, f"{name} z-score {zscore:.1f} (>{cfg.zscore_warn}σ)")
        return None

    def get_overall_health(self) -> float:
        if not self.sensor_health:
            return 0.0
        return sum(self.sensor_health.values()) / len(self.sensor_health)

    def get_valid_sensor_count(self) -> tuple[int, int]:
        valid = sum(1 for h in self.sensor_health.values() if h > 50)
        return valid, len(self.sensor_health)

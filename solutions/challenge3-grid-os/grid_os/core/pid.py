"""PID Controller for thermal management. Setpoint 55C water out, CPU override at 80C.

Physics constraint: at 3kW compute with immersion cooling (R=0.008 °C/W),
t_cpu = t_water_out + 24°C. For t_cpu < 80°C, t_water_out < 56°C.
PID settles at ~54°C with 20% minimum pump duty.
For 60°C water, use heat pump booster or reduce compute load.
"""
import time
import logging
from dataclasses import dataclass

logger = logging.getLogger("grid_os.pid")

@dataclass
class PIDConfig:
    kp: float = 2.0
    ki: float = 0.5
    kd: float = 0.1
    setpoint: float = 55.0  # °C, achievable max with 3kW compute + immersion cooling
    output_min: float = 20.0
    output_max: float = 100.0
    integral_max: float = 50.0
    cpu_override_c: float = 80.0

class PIDController:
    def __init__(self, config: PIDConfig = None):
        self.config = config or PIDConfig()
        self.integral = 0.0
        self.last_error = 0.0
        self.last_time = time.monotonic()
        self.output = 50.0

    def update(self, t_water_out: float, t_cpu: float) -> float:
        now = time.monotonic()
        dt = now - self.last_time
        if dt <= 0:
            return self.output
        self.last_time = now
        # CPU safety override: if CPU too hot, pump at max
        if t_cpu > self.config.cpu_override_c:
            self.output = self.config.output_max
            logger.warning(f"CPU override: {t_cpu:.1f}C > {self.config.cpu_override_c:.1f}C, pump at {self.output}%")
            return self.output
        # Inverted PID: we want t_water_out near setpoint
        # If water too cold, slow pump (less flow = more heat transfer time)
        # If water too hot, speed pump (more flow = less heat transfer time)
        error = self.config.setpoint - t_water_out
        self.integral += error * dt
        self.integral = max(-self.config.integral_max, min(self.config.integral_max, self.integral))
        derivative = (error - self.last_error) / dt
        self.last_error = error
        # Inverted: positive error (too cold) = slow pump = lower duty
        raw = 50.0 - (self.config.kp * error + self.config.ki * self.integral + self.config.kd * derivative)
        self.output = max(self.config.output_min, min(self.config.output_max, raw))
        return self.output

    def reset(self):
        self.integral = 0.0
        self.last_error = 0.0
        self.output = 50.0

    def get_status(self) -> dict:
        return {
            "output_pct": round(self.output, 1),
            "integral": round(self.integral, 2),
            "last_error": round(self.last_error, 2),
            "setpoint": self.config.setpoint,
        }

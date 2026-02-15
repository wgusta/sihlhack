"""Grid-OS State Machine: 4 operational modes + EMERGENCY_STOP + MAINTENANCE."""
import time
import logging
from enum import Enum
from dataclasses import dataclass
from typing import Optional
from .types import SensorState, HubConfig

logger = logging.getLogger("grid_os.state_machine")

class OperationalMode(Enum):
    BOOT = "BOOT"
    ISLAND = "ISLAND"
    WINTER_WARM = "WINTER_WARM"
    SUMMER_EARN = "SUMMER_EARN"
    ARBITRAGE = "ARBITRAGE"
    EMERGENCY_STOP = "EMERGENCY_STOP"
    MAINTENANCE = "MAINTENANCE"

@dataclass
class TransitionCondition:
    grid_freq: float = 50.0
    soc: float = 50.0
    grid_price: float = 0.20
    heat_demand: bool = False
    solar_available: bool = False
    grid_connected: bool = True
    safety_ok: bool = True
    manual_mode: Optional[OperationalMode] = None

class GridOSStateMachine:
    def __init__(self, config: HubConfig):
        self.config = config
        self.mode = OperationalMode.BOOT
        self.mode_entered_at = time.monotonic()
        self.transition_history: list[dict] = []
        self.MIN_MODE_DURATION_S = 10.0

    def evaluate(self, cond: TransitionCondition) -> OperationalMode:
        if cond.manual_mode == OperationalMode.EMERGENCY_STOP:
            self._transition(OperationalMode.EMERGENCY_STOP, "manual_estop")
            return self.mode
        if cond.manual_mode == OperationalMode.MAINTENANCE:
            self._transition(OperationalMode.MAINTENANCE, "manual_maintenance")
            return self.mode
        if not cond.safety_ok:
            self._transition(OperationalMode.EMERGENCY_STOP, "safety_override")
            return self.mode
        elapsed = time.monotonic() - self.mode_entered_at
        if elapsed < self.MIN_MODE_DURATION_S and self.mode != OperationalMode.BOOT:
            return self.mode
        new_mode = self._select_mode(cond)
        if new_mode != self.mode:
            self._transition(new_mode, "auto")
        return self.mode

    def _select_mode(self, cond: TransitionCondition) -> OperationalMode:
        if cond.grid_freq < 49.8 or not cond.grid_connected:
            return OperationalMode.ISLAND
        if cond.heat_demand and cond.grid_price > 0.15:
            return OperationalMode.WINTER_WARM
        if cond.solar_available and not cond.heat_demand:
            return OperationalMode.SUMMER_EARN
        if cond.grid_price < 0.10 or cond.grid_price > 0.30:
            return OperationalMode.ARBITRAGE
        return OperationalMode.SUMMER_EARN

    def _transition(self, new_mode: OperationalMode, reason: str):
        old = self.mode
        self.mode = new_mode
        self.mode_entered_at = time.monotonic()
        self.transition_history.append({
            "from": old.value, "to": new_mode.value,
            "reason": reason, "time": time.time(),
        })
        logger.info(f"Mode: {old.value} -> {new_mode.value} ({reason})")

    def force_emergency_stop(self, reason: str = "operator"):
        self._transition(OperationalMode.EMERGENCY_STOP, reason)

    def get_status(self) -> dict:
        return {
            "mode": self.mode.value,
            "duration_s": time.monotonic() - self.mode_entered_at,
            "transitions": len(self.transition_history),
        }

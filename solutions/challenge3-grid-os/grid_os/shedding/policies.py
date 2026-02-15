"""Load Shedding Controller: L0 (normal) through L4 (emergency), with hysteresis."""
import time
import logging
from enum import Enum
from dataclasses import dataclass
from ..compute.deferred import JobClass

logger = logging.getLogger("grid_os.shedding")

class SheddingLevel(Enum):
    L0_NORMAL = 0
    L1_LIGHT = 1
    L2_MODERATE = 2
    L3_HEAVY = 3
    L4_EMERGENCY = 4

LEVEL_CONFIG = {
    SheddingLevel.L0_NORMAL: {"compute_mult": 1.0, "allowed": [JobClass.REALTIME, JobClass.INTERACTIVE, JobClass.BATCH, JobClass.OPPORTUNISTIC]},
    SheddingLevel.L1_LIGHT: {"compute_mult": 0.8, "allowed": [JobClass.REALTIME, JobClass.INTERACTIVE, JobClass.BATCH]},
    SheddingLevel.L2_MODERATE: {"compute_mult": 0.5, "allowed": [JobClass.REALTIME, JobClass.INTERACTIVE]},
    SheddingLevel.L3_HEAVY: {"compute_mult": 0.2, "allowed": [JobClass.REALTIME]},
    SheddingLevel.L4_EMERGENCY: {"compute_mult": 0.0, "allowed": []},
}

@dataclass
class SheddingThresholds:
    l1_soc_below: float = 30.0
    l2_soc_below: float = 20.0
    l3_soc_below: float = 10.0
    l4_soc_below: float = 5.0
    l4_t_cpu_above: float = 90.0
    recovery_hysteresis: float = 5.0
    min_hold_s: float = 30.0

class LoadSheddingController:
    def __init__(self, thresholds: SheddingThresholds = None):
        self.thresholds = thresholds or SheddingThresholds()
        self.current_level = SheddingLevel.L0_NORMAL
        self.level_entered_at = time.monotonic()
        self.history: list[dict] = []
        self.manual_override = False

    def evaluate(self, soc: float, t_cpu: float, grid_freq: float = 50.0) -> SheddingLevel:
        if self.manual_override:
            return self.current_level
        now = time.monotonic()
        elapsed = now - self.level_entered_at
        if elapsed < self.thresholds.min_hold_s:
            return self.current_level
        t = self.thresholds
        new_level = SheddingLevel.L0_NORMAL
        if t_cpu > t.l4_t_cpu_above or soc < t.l4_soc_below:
            new_level = SheddingLevel.L4_EMERGENCY
        elif soc < t.l3_soc_below:
            new_level = SheddingLevel.L3_HEAVY
        elif soc < t.l2_soc_below:
            new_level = SheddingLevel.L2_MODERATE
        elif soc < t.l1_soc_below:
            new_level = SheddingLevel.L1_LIGHT
        # Hysteresis: require higher threshold for recovery
        if new_level.value < self.current_level.value:
            recovery_soc = soc - t.recovery_hysteresis
            if recovery_soc < t.l1_soc_below and self.current_level.value >= SheddingLevel.L1_LIGHT.value:
                new_level = max(new_level, SheddingLevel.L1_LIGHT, key=lambda x: x.value)
        if new_level != self.current_level:
            self._transition(new_level)
        return self.current_level

    def _transition(self, new_level: SheddingLevel):
        old = self.current_level
        self.current_level = new_level
        self.level_entered_at = time.monotonic()
        self.history.append({"from": old.value, "to": new_level.value, "time": time.time()})
        logger.warning(f"Shedding: {old.name} -> {new_level.name}")

    def get_compute_multiplier(self) -> float:
        return LEVEL_CONFIG[self.current_level]["compute_mult"]

    def get_allowed_classes(self) -> list[JobClass]:
        return LEVEL_CONFIG[self.current_level]["allowed"]

    def manual_reset(self):
        if self.current_level == SheddingLevel.L4_EMERGENCY:
            self._transition(SheddingLevel.L2_MODERATE)
            self.manual_override = False
            logger.info("Manual reset from L4 to L2")

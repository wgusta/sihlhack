"""
estop_state_machine.py
E-Stop state machine: NORMAL -> WARNING -> CRITICAL -> E_STOP -> LOCKOUT
"""
import json
import time
import logging
from enum import Enum
from typing import Optional, Callable
import paho.mqtt.client as mqtt

logger = logging.getLogger("estop")

WARNING_AUTO_CLEAR_S = 60
CRITICAL_ESCALATION_S = 30

class SafetyState(Enum):
    NORMAL = "NORMAL"
    WARNING = "WARNING"
    CRITICAL = "CRITICAL"
    E_STOP = "E_STOP"
    LOCKOUT = "LOCKOUT"

class EStopReason(Enum):
    BATTERY_THERMAL = "BATTERY_THERMAL"
    ELECTRICAL_FAULT = "ELECTRICAL_FAULT"
    OIL_LEAK = "OIL_LEAK"
    GAS_DETECTED = "GAS_DETECTED"
    FIRE_DETECTED = "FIRE_DETECTED"
    SENSOR_FAILURE = "SENSOR_FAILURE"
    COMMUNICATION_LOSS = "COMMUNICATION_LOSS"
    OPERATOR_COMMAND = "OPERATOR_COMMAND"

VALID_TRANSITIONS = {
    SafetyState.NORMAL: [SafetyState.WARNING, SafetyState.CRITICAL, SafetyState.E_STOP],
    SafetyState.WARNING: [SafetyState.NORMAL, SafetyState.CRITICAL, SafetyState.E_STOP],
    SafetyState.CRITICAL: [SafetyState.WARNING, SafetyState.E_STOP],
    SafetyState.E_STOP: [SafetyState.LOCKOUT],
    SafetyState.LOCKOUT: [SafetyState.NORMAL],
}

STATE_ACTIONS = {
    SafetyState.NORMAL: ["compute_on", "pump_normal", "grid_connect"],
    SafetyState.WARNING: ["compute_throttle_50", "pump_high", "log_warning"],
    SafetyState.CRITICAL: ["compute_off", "pump_max", "battery_disconnect", "log_critical"],
    SafetyState.E_STOP: ["compute_off", "pump_max", "battery_disconnect", "grid_disconnect", "alarm_on"],
    SafetyState.LOCKOUT: ["compute_off", "pump_idle", "battery_disconnect", "await_inspection"],
}

FIRE_ACTIONS = ["compute_off", "pump_off", "battery_disconnect", "grid_disconnect", "alarm_on", "ventilation_off"]

class EStopStateMachine:
    WATCHDOG_TIMEOUT_S = 5.0

    def __init__(self, entity_id: str, mqtt_client: mqtt.Client, execute_actions: Optional[Callable] = None):
        self.entity_id = entity_id
        self.mqtt = mqtt_client
        self.execute_actions = execute_actions
        self.state = SafetyState.NORMAL
        self.reason: Optional[EStopReason] = None
        self.state_entered_at = time.monotonic()
        self.last_anomaly_time = 0.0
        self.anomaly_count_in_window = 0
        self.last_tick_time = time.monotonic()
        self.transition_log = []

    def transition(self, new_state: SafetyState, reason: Optional[EStopReason]):
        if new_state not in VALID_TRANSITIONS.get(self.state, []):
            if new_state != SafetyState.E_STOP:
                logger.warning(f"{self.entity_id}: Invalid transition {self.state.value} -> {new_state.value}")
                return
        old_state = self.state
        self.state = new_state
        self.reason = reason
        self.state_entered_at = time.monotonic()
        self.transition_log.append({
            "time": time.time(), "from": old_state.value,
            "to": new_state.value, "reason": reason.value if reason else None,
        })
        logger.warning(f"{self.entity_id}: {old_state.value} -> {new_state.value} (reason: {reason})")
        actions = FIRE_ACTIONS if reason == EStopReason.FIRE_DETECTED else STATE_ACTIONS[new_state]
        if self.execute_actions:
            self.execute_actions(actions)
        self.mqtt.publish(
            f"sihlhack/safety/{self.entity_id}/status",
            json.dumps({"entity_id": self.entity_id, "state": new_state.value,
                "reason": reason.value if reason else None, "timestamp": time.time()}),
            qos=2, retain=True,
        )

    def on_anomaly(self, severity, reason: EStopReason):
        from .anomaly_detector import Severity
        if severity == Severity.EMERGENCY:
            self.transition(SafetyState.E_STOP, reason)
        elif severity == Severity.CRITICAL:
            if self.state in (SafetyState.NORMAL, SafetyState.WARNING):
                self.transition(SafetyState.CRITICAL, reason)
        elif severity == Severity.WARNING:
            if self.state == SafetyState.NORMAL:
                self.transition(SafetyState.WARNING, reason)
        self.last_anomaly_time = time.monotonic()
        self.anomaly_count_in_window += 1

    def on_operator_estop(self):
        self.transition(SafetyState.E_STOP, EStopReason.OPERATOR_COMMAND)

    def on_operator_acknowledge(self):
        if self.state == SafetyState.E_STOP:
            self.transition(SafetyState.LOCKOUT, self.reason)

    def on_operator_reset(self):
        if self.state == SafetyState.LOCKOUT:
            self.transition(SafetyState.NORMAL, None)

    def tick(self):
        now = time.monotonic()
        elapsed = now - self.state_entered_at
        self.last_tick_time = now
        if self.state == SafetyState.WARNING and elapsed > WARNING_AUTO_CLEAR_S:
            if now - self.last_anomaly_time > WARNING_AUTO_CLEAR_S:
                logger.info(f"{self.entity_id}: WARNING auto-cleared")
                self.transition(SafetyState.NORMAL, None)
                self.anomaly_count_in_window = 0
        if self.state == SafetyState.CRITICAL and elapsed > CRITICAL_ESCALATION_S:
            logger.warning(f"{self.entity_id}: CRITICAL unresolved, escalating to E_STOP")
            self.transition(SafetyState.E_STOP, self.reason)

    def check_watchdog(self):
        elapsed = time.monotonic() - self.last_tick_time
        if elapsed > self.WATCHDOG_TIMEOUT_S:
            logger.critical(f"{self.entity_id}: WATCHDOG TIMEOUT ({elapsed:.1f}s)")
            self.transition(SafetyState.E_STOP, EStopReason.SENSOR_FAILURE)

"""Main Safety Coordinator: ties together heartbeat, anomaly detection, E-stop, failover."""
import json
import logging
import os
import signal
import time
from datetime import datetime, timezone
from typing import Any

import paho.mqtt.client as mqtt

from .anomaly_detector import AnomalyDetector, SENSOR_CONFIGS, Severity
from .estop_state_machine import EStopReason, EStopStateMachine, SafetyState
from .failover_coordinator import FailoverCoordinator
from .heartbeat_monitor import HeartbeatMonitor, HubStatus

logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(name)s] %(levelname)s: %(message)s")
logger = logging.getLogger("coordinator")

DEFAULT_HUB_IDS = ["hub_a", "hub_b", "hub_c", "hub_d"]
TICK_INTERVAL_S = 0.5

SENSOR_ID_MAP = {
    "T_coolant_in": "coolant_in",
    "T_coolant_out": "coolant_out",
    "T_cpu_die": "cpu_temp",
    "V_battery": "battery_voltage",
    "I_battery": "battery_current",
    "Flow_water": "water_flow",
    "Gas_battery": "gas_ppm",
    "Smoke_room": "smoke",
}

ANOMALY_REASON_BY_SENSOR = {
    "coolant_in": EStopReason.BATTERY_THERMAL,
    "coolant_out": EStopReason.BATTERY_THERMAL,
    "cpu_temp": EStopReason.BATTERY_THERMAL,
    "battery_voltage": EStopReason.ELECTRICAL_FAULT,
    "battery_current": EStopReason.ELECTRICAL_FAULT,
    "water_flow": EStopReason.SENSOR_FAILURE,
    "gas_ppm": EStopReason.GAS_DETECTED,
    "smoke": EStopReason.FIRE_DETECTED,
    "flame": EStopReason.FIRE_DETECTED,
}


class SafetyCoordinator:
    def __init__(self, hub_ids: list[str] | None = None, mqtt_client: mqtt.Client | None = None):
        self.running = True
        self.hub_ids = hub_ids or os.getenv("HUB_IDS", ",".join(DEFAULT_HUB_IDS)).split(",")
        self.hub_ids = [hub.strip() for hub in self.hub_ids if hub.strip()]

        client_id = os.getenv("MQTT_CLIENT_ID", "safety-coordinator")
        self.mqtt = mqtt_client or mqtt.Client(client_id=client_id, protocol=mqtt.MQTTv5)
        self.mqtt.on_connect = self._on_connect
        self.mqtt.on_message = self._on_message
        self.mqtt.will_set(
            "sihlhack/safety/coordinator/status",
            json.dumps({"status": "OFFLINE", "timestamp": time.time()}),
            qos=2,
            retain=True,
        )

        self.allowed_commands = {
            "set_actuators",
            "apply_control",
            "actuator_dispatch",
            "compute_limit",
            "battery_cmd",
            "pump_pwm",
            "fan_pwm",
        }
        self.clearance_ttl_ms = int(os.getenv("SAFETY_CLEARANCE_TTL_MS", "5000"))
        self._clearance_counter = 0
        self.node_to_hub_map = self._parse_node_map(os.getenv("NODE_TO_HUB_MAP", "hub-001:hub_a,hub-002:hub_b,hub-003:hub_c,hub-004:hub_d"))

        self.heartbeat = HeartbeatMonitor(self.mqtt, self.hub_ids, on_status_change=self._on_hub_status_change)
        self.detectors: dict[str, AnomalyDetector] = {}
        self.estop_machines: dict[str, EStopStateMachine] = {}
        self.failover = FailoverCoordinator(self.mqtt, self.heartbeat)

        for hub_id in self.hub_ids:
            detector = AnomalyDetector(hub_id)
            for config in SENSOR_CONFIGS.values():
                detector.register_sensor(config)
            self.detectors[hub_id] = detector
            self.estop_machines[hub_id] = EStopStateMachine(hub_id, self.mqtt)

        self.global_estop = EStopStateMachine("global", self.mqtt)

    @staticmethod
    def _iso_now() -> str:
        return datetime.now(timezone.utc).isoformat()

    @staticmethod
    def _parse_node_map(raw_map: str) -> dict[str, str]:
        mapping: dict[str, str] = {}
        for item in raw_map.split(","):
            if ":" not in item:
                continue
            node_id, hub_id = item.split(":", 1)
            node_id = node_id.strip()
            hub_id = hub_id.strip()
            if node_id and hub_id:
                mapping[node_id] = hub_id
        return mapping

    def _on_connect(self, client, userdata, flags, rc, properties=None):
        logger.info("Connected to MQTT broker (rc=%s)", rc)
        client.subscribe("sihlhack/safety/#", qos=1)
        client.subscribe("sihlhack/+/sensors/#", qos=1)
        client.subscribe("sihlhub/+/sensors/#", qos=1)

    def _on_message(self, client, userdata, msg):
        _ = (client, userdata)
        topic = msg.topic or ""
        if "/sensors/" not in topic:
            return
        try:
            payload = json.loads(msg.payload.decode("utf-8"))
        except Exception as exc:
            logger.warning("Invalid sensor payload on %s: %s", topic, exc)
            return
        self.process_sensor_payload(topic, payload)

    def _normalize_sensor_id(self, sensor_id: str) -> str:
        return SENSOR_ID_MAP.get(sensor_id, sensor_id)

    def _resolve_hub_id(self, topic: str, payload: dict[str, Any]) -> str | None:
        payload_hub = payload.get("hub_id") or payload.get("node_id")
        if payload_hub:
            mapped = self.node_to_hub_map.get(payload_hub, payload_hub.replace("-", "_"))
            if mapped in self.estop_machines:
                return mapped
        parts = topic.split("/")
        if len(parts) >= 2:
            topic_hub = parts[1]
            mapped = self.node_to_hub_map.get(topic_hub, topic_hub.replace("-", "_"))
            if mapped in self.estop_machines:
                return mapped
        return None

    def process_sensor_payload(self, topic: str, payload: dict[str, Any]):
        hub_id = self._resolve_hub_id(topic, payload)
        if not hub_id:
            logger.debug("Ignored sensor payload with unresolved hub: topic=%s payload=%s", topic, payload)
            return

        sensor_name = self._normalize_sensor_id(str(payload.get("sensor_id", "")))
        if sensor_name not in SENSOR_CONFIGS:
            return

        value = payload.get("value")
        try:
            numeric_value = float(value)
        except (TypeError, ValueError):
            logger.warning("Non-numeric sensor value for %s: %s", sensor_name, value)
            return

        events = self.detectors[hub_id].process_reading(sensor_name, numeric_value)
        for event in events:
            reason = ANOMALY_REASON_BY_SENSOR.get(event.sensor_id, EStopReason.SENSOR_FAILURE)
            self.estop_machines[hub_id].on_anomaly(event.severity, reason)
            self.mqtt.publish(
                f"sihlhack/safety/{hub_id}/anomaly",
                json.dumps(
                    {
                        "hub_id": hub_id,
                        "sensor_id": event.sensor_id,
                        "severity": event.severity.value,
                        "algorithm": event.algorithm,
                        "value": event.value,
                        "threshold": event.threshold,
                        "reason": reason.value,
                        "message": event.message,
                        "timestamp": event.timestamp,
                    }
                ),
                qos=1,
            )

    def _on_hub_status_change(self, hub_id, old_status, new_status):
        self.failover.on_hub_status_change(hub_id, old_status, new_status)
        if new_status == HubStatus.FAILED:
            self.estop_machines[hub_id].on_anomaly(Severity.CRITICAL, EStopReason.COMMUNICATION_LOSS)

    def _next_clearance_id(self, hub_id: str) -> str:
        self._clearance_counter += 1
        return f"clr-{hub_id}-{int(time.time() * 1000)}-{self._clearance_counter}"

    def evaluate_clearance(self, hub_id: str, command: str) -> dict[str, Any]:
        """Fail-closed safety clearance for actuation requests."""
        response: dict[str, Any] = {
            "clear": False,
            "reason": "uncertain_state",
            "ttl_ms": self.clearance_ttl_ms,
            "safety_state": "UNKNOWN",
            "timestamp": self._iso_now(),
        }

        if not hub_id or hub_id not in self.estop_machines:
            response["reason"] = "unknown_hub"
            return response

        if not command:
            response["reason"] = "missing_command"
            return response

        machine = self.estop_machines[hub_id]
        response["safety_state"] = machine.state.value

        heartbeat_state = self.heartbeat.get_hub_state(hub_id)
        if heartbeat_state is None:
            response["reason"] = "heartbeat_unknown"
            return response

        if heartbeat_state.status != HubStatus.ALIVE:
            response["reason"] = f"hub_{heartbeat_state.status.value.lower()}"
            return response

        if self.global_estop.state in (SafetyState.E_STOP, SafetyState.LOCKOUT):
            response["reason"] = "global_estop"
            return response

        if machine.state in (SafetyState.CRITICAL, SafetyState.E_STOP, SafetyState.LOCKOUT):
            response["reason"] = f"state_{machine.state.value.lower()}"
            return response

        if command not in self.allowed_commands:
            response["reason"] = "command_not_allowlisted"
            return response

        response.update(
            {
                "clear": True,
                "reason": "allowed",
                "clearance_id": self._next_clearance_id(hub_id),
            }
        )
        return response

    def get_hub_state(self, hub_id: str) -> dict[str, Any] | None:
        if hub_id not in self.estop_machines:
            return None

        hb = self.heartbeat.get_hub_state(hub_id)
        detector = self.detectors[hub_id]
        valid, total = detector.get_valid_sensor_count()

        return {
            "hub_id": hub_id,
            "safety_state": self.estop_machines[hub_id].state.value,
            "heartbeat_status": hb.status.value if hb else "UNKNOWN",
            "missed_heartbeats": hb.missed_count if hb else None,
            "sensor_health": round(detector.get_overall_health(), 1),
            "sensors_valid": valid,
            "sensors_total": total,
            "timestamp": self._iso_now(),
        }

    def get_summary(self) -> dict[str, Any]:
        hubs: dict[str, Any] = {}
        for hub_id in self.hub_ids:
            hubs[hub_id] = self.get_hub_state(hub_id)

        return {
            "global_state": self.global_estop.state.value,
            "degradation_level": self.failover.degradation_level,
            "hubs": hubs,
            "timestamp": self._iso_now(),
        }

    def run(self):
        mqtt_broker = os.getenv("MQTT_BROKER", "localhost")
        mqtt_port = int(os.getenv("MQTT_PORT", "1883"))

        self.mqtt.connect(mqtt_broker, mqtt_port)
        self.mqtt.loop_start()

        signal.signal(signal.SIGINT, lambda *_: setattr(self, "running", False))
        signal.signal(signal.SIGTERM, lambda *_: setattr(self, "running", False))

        logger.info("Safety Coordinator started")
        while self.running:
            loop_start = time.monotonic()
            self.heartbeat.check_all()
            for machine in self.estop_machines.values():
                machine.tick()
                machine.check_watchdog()
            self.global_estop.tick()
            self.global_estop.check_watchdog()
            self._publish_status()
            elapsed = time.monotonic() - loop_start
            time.sleep(max(0, TICK_INTERVAL_S - elapsed))

        self.mqtt.loop_stop()
        self.mqtt.disconnect()

    def _publish_status(self):
        payload = self.get_summary()
        self.mqtt.publish("sihlhack/safety/coordinator/summary", json.dumps(payload), qos=1)


if __name__ == "__main__":
    SafetyCoordinator().run()

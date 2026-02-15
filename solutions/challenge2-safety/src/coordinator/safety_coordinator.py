"""Main Safety Coordinator: ties together heartbeat, anomaly detection, E-stop, failover."""
import time
import json
import signal
import logging
import paho.mqtt.client as mqtt
from .heartbeat_monitor import HeartbeatMonitor, HubStatus
from .anomaly_detector import AnomalyDetector, Severity, SENSOR_CONFIGS
from .estop_state_machine import EStopStateMachine, EStopReason, SafetyState
from .failover_coordinator import FailoverCoordinator

logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(name)s] %(levelname)s: %(message)s")
logger = logging.getLogger("coordinator")

MQTT_BROKER = "localhost"
MQTT_PORT = 1883
HUB_IDS = ["hub_a", "hub_b", "hub_c", "hub_d"]
TICK_INTERVAL_S = 0.5

class SafetyCoordinator:
    def __init__(self):
        self.running = True
        self.mqtt = mqtt.Client(client_id="safety-coordinator", protocol=mqtt.MQTTv5)
        self.mqtt.on_connect = self._on_connect
        self.mqtt.will_set("sihlhack/safety/coordinator/status",
            json.dumps({"status": "OFFLINE", "timestamp": time.time()}), qos=1, retain=True)
        self.heartbeat = HeartbeatMonitor(self.mqtt, HUB_IDS, on_status_change=self._on_hub_status_change)
        self.detectors: dict[str, AnomalyDetector] = {}
        self.estop_machines: dict[str, EStopStateMachine] = {}
        self.failover = FailoverCoordinator(self.mqtt, self.heartbeat)
        for hub_id in HUB_IDS:
            detector = AnomalyDetector(hub_id)
            for config in SENSOR_CONFIGS.values():
                detector.register_sensor(config)
            self.detectors[hub_id] = detector
            self.estop_machines[hub_id] = EStopStateMachine(hub_id, self.mqtt)
        self.global_estop = EStopStateMachine("global", self.mqtt)

    def _on_connect(self, client, userdata, flags, rc, properties=None):
        logger.info(f"Connected to MQTT broker (rc={rc})")
        client.subscribe("sihlhack/safety/#", qos=1)

    def _on_hub_status_change(self, hub_id, old_status, new_status):
        self.failover.on_hub_status_change(hub_id, old_status, new_status)
        if new_status == HubStatus.FAILED:
            self.estop_machines[hub_id].on_anomaly(Severity.CRITICAL, EStopReason.COMMUNICATION_LOSS)

    def run(self):
        self.mqtt.connect(MQTT_BROKER, MQTT_PORT)
        self.mqtt.loop_start()
        signal.signal(signal.SIGINT, lambda *_: setattr(self, "running", False))
        signal.signal(signal.SIGTERM, lambda *_: setattr(self, "running", False))
        logger.info("Safety Coordinator started")
        while self.running:
            loop_start = time.monotonic()
            self.heartbeat.check_all()
            for machine in self.estop_machines.values():
                machine.tick()
            self.global_estop.tick()
            self._publish_status()
            elapsed = time.monotonic() - loop_start
            time.sleep(max(0, TICK_INTERVAL_S - elapsed))
        self.mqtt.loop_stop()
        self.mqtt.disconnect()

    def _publish_status(self):
        hub_states = {}
        for hub_id in HUB_IDS:
            det = self.detectors[hub_id]
            valid, total = det.get_valid_sensor_count()
            hub_states[hub_id] = {
                "safety_state": self.estop_machines[hub_id].state.value,
                "sensor_health": round(det.get_overall_health(), 1),
                "sensors_valid": valid, "sensors_total": total,
            }
        self.mqtt.publish("sihlhack/safety/coordinator/summary",
            json.dumps({"global_state": self.global_estop.state.value,
                "degradation_level": self.failover.degradation_level,
                "hubs": hub_states, "timestamp": time.time()}), qos=1)

if __name__ == "__main__":
    SafetyCoordinator().run()

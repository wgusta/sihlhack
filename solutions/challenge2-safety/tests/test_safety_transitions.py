import time
import unittest

from src.coordinator.estop_state_machine import CRITICAL_ESCALATION_S, EStopReason, SafetyState
from src.coordinator.heartbeat_monitor import FAILURE_THRESHOLD, HEARTBEAT_TIMEOUT_S, HubStatus
from src.coordinator.safety_coordinator import SafetyCoordinator


class FakeMqtt:
    def __init__(self):
        self.callbacks = {}
        self.published = []

    def message_callback_add(self, topic, callback):
        self.callbacks[topic] = callback

    def publish(self, topic, payload, qos=0, retain=False):
        self.published.append((topic, payload, qos, retain))

    def subscribe(self, topic, qos=0):
        return (0, 1)

    def will_set(self, topic, payload, qos=0, retain=False):
        _ = (topic, payload, qos, retain)


class SafetyTransitionTests(unittest.TestCase):
    def setUp(self):
        self.coordinator = SafetyCoordinator(mqtt_client=FakeMqtt())

    def test_sensor_anomaly_warning_critical_estop_path(self):
        hub_id = "hub_a"
        machine = self.coordinator.estop_machines[hub_id]

        self.coordinator.process_sensor_payload(
            "sihlhub/hub-001/sensors/environment",
            {"node_id": "hub-001", "sensor_id": "Gas_battery", "value": 250},
        )
        self.assertEqual(machine.state, SafetyState.WARNING)

        self.coordinator.process_sensor_payload(
            "sihlhub/hub-001/sensors/environment",
            {"node_id": "hub-001", "sensor_id": "Gas_battery", "value": 450},
        )
        self.assertEqual(machine.state, SafetyState.CRITICAL)
        self.assertEqual(machine.reason, EStopReason.GAS_DETECTED)

        machine.state_entered_at -= CRITICAL_ESCALATION_S + 1
        machine.tick()
        self.assertEqual(machine.state, SafetyState.E_STOP)

    def test_heartbeat_timeout_triggers_failover_and_state(self):
        hub_id = "hub_a"
        hub_state = self.coordinator.heartbeat.hubs[hub_id]
        hub_state.last_heartbeat = time.monotonic() - HEARTBEAT_TIMEOUT_S - 1
        hub_state.missed_count = FAILURE_THRESHOLD - 1

        self.coordinator.heartbeat.check_all()

        self.assertEqual(hub_state.status, HubStatus.FAILED)
        self.assertIn(hub_id, self.coordinator.failover.failed_hubs)
        self.assertEqual(self.coordinator.estop_machines[hub_id].state, SafetyState.CRITICAL)

    def test_watchdog_timeout_forces_estop(self):
        machine = self.coordinator.estop_machines["hub_a"]
        machine.last_tick_time = time.monotonic() - machine.WATCHDOG_TIMEOUT_S - 1

        machine.check_watchdog()

        self.assertEqual(machine.state, SafetyState.E_STOP)
        self.assertEqual(machine.reason, EStopReason.SENSOR_FAILURE)


if __name__ == "__main__":
    unittest.main()

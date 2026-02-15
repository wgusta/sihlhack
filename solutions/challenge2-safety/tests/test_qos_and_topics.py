import unittest

from src.coordinator.estop_state_machine import EStopReason, EStopStateMachine, SafetyState
from src.coordinator.failover_coordinator import FailoverCoordinator
from src.coordinator.heartbeat_monitor import HubStatus
from src.coordinator.safety_coordinator import SafetyCoordinator


class FakeMqtt:
    def __init__(self):
        self.published = []
        self.subscriptions = []
        self.callbacks = {}

    def publish(self, topic, payload, qos=0, retain=False):
        self.published.append((topic, payload, qos, retain))

    def subscribe(self, topic, qos=0):
        self.subscriptions.append((topic, qos))

    def message_callback_add(self, topic, callback):
        self.callbacks[topic] = callback

    def will_set(self, topic, payload, qos=0, retain=False):
        _ = (topic, payload, qos, retain)


class QosAndTopicTests(unittest.TestCase):
    def test_estop_status_published_qos2_retain(self):
        mqtt = FakeMqtt()
        machine = EStopStateMachine("hub_a", mqtt)

        machine.transition(SafetyState.E_STOP, EStopReason.OPERATOR_COMMAND)

        topic, _, qos, retain = mqtt.published[-1]
        self.assertEqual(topic, "sihlhack/safety/hub_a/status")
        self.assertEqual(qos, 2)
        self.assertTrue(retain)

    def test_failover_degradation_published_qos2_retain(self):
        mqtt = FakeMqtt()
        failover = FailoverCoordinator(mqtt, heartbeat_monitor=None)

        failover.on_hub_status_change("hub_a", HubStatus.ALIVE, HubStatus.FAILED)

        degradation_msgs = [m for m in mqtt.published if m[0] == "sihlhack/safety/global/degradation"]
        self.assertTrue(degradation_msgs)
        _, _, qos, retain = degradation_msgs[-1]
        self.assertEqual(qos, 2)
        self.assertTrue(retain)

    def test_safety_coordinator_subscribes_dual_sensor_topics(self):
        mqtt = FakeMqtt()
        coordinator = SafetyCoordinator(mqtt_client=mqtt)

        coordinator._on_connect(mqtt, None, None, 0)

        topics = [topic for topic, _ in mqtt.subscriptions]
        self.assertIn("sihlhack/+/sensors/#", topics)
        self.assertIn("sihlhub/+/sensors/#", topics)


if __name__ == "__main__":
    unittest.main()

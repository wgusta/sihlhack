import unittest

from edge.sensor_reader import SensorReader, SensorReading


class FakeMqtt:
    def __init__(self):
        self.published = []

    def publish(self, topic, payload, qos=0, retain=False):
        self.published.append((topic, payload, qos, retain))


class TopicTransitionTests(unittest.TestCase):
    def test_sensor_reader_dual_publishes_during_transition(self):
        reader = SensorReader(node_id="hub-001")
        reader.mqtt_client = FakeMqtt()
        readings = [
            SensorReading(
                node_id="hub-001",
                sensor_id="T_cpu_die",
                measurement="temperature",
                value=52.0,
                raw_value=52.0,
                unit="°C",
                quality=0,
                timestamp="2026-02-15T00:00:00.000Z",
            )
        ]

        reader.publish(readings)

        topics = [entry[0] for entry in reader.mqtt_client.published]
        self.assertIn("sihlhack/hub-001/sensors/temperature", topics)
        self.assertIn("sihlhub/hub-001/sensors/temperature", topics)


if __name__ == "__main__":
    unittest.main()

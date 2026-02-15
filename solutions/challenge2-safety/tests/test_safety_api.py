import unittest

from fastapi.testclient import TestClient

from src.api.server import create_app
from src.coordinator.heartbeat_monitor import HubStatus
from src.coordinator.safety_coordinator import SafetyCoordinator


class SafetyApiTests(unittest.TestCase):
    def setUp(self):
        self.coordinator = SafetyCoordinator()
        self.app = create_app(self.coordinator)
        self.client = TestClient(self.app)

    def test_clearance_allowed_when_hub_alive_and_normal(self):
        response = self.client.get(
            "/api/v1/safety/clearance",
            params={"hub_id": "hub_a", "command": "set_actuators"},
        )
        self.assertEqual(response.status_code, 200)
        body = response.json()
        self.assertTrue(body["clear"])
        self.assertEqual(body["reason"], "allowed")
        self.assertIn("clearance_id", body)

    def test_clearance_denied_fail_closed_for_unknown_hub(self):
        response = self.client.get(
            "/api/v1/safety/clearance",
            params={"hub_id": "unknown_hub", "command": "set_actuators"},
        )
        self.assertEqual(response.status_code, 200)
        body = response.json()
        self.assertFalse(body["clear"])
        self.assertEqual(body["reason"], "unknown_hub")

    def test_clearance_denied_when_heartbeat_failed(self):
        self.coordinator.heartbeat.hubs["hub_a"].status = HubStatus.FAILED
        response = self.client.get(
            "/api/v1/safety/clearance",
            params={"hub_id": "hub_a", "command": "set_actuators"},
        )
        self.assertEqual(response.status_code, 200)
        body = response.json()
        self.assertFalse(body["clear"])
        self.assertEqual(body["reason"], "hub_failed")


if __name__ == "__main__":
    unittest.main()

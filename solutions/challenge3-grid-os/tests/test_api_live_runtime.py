import unittest

from fastapi.testclient import TestClient

from grid_os.api.server import app
from grid_os.core.control_loop import GridOSControlLoop
from grid_os.core.state_machine import OperationalMode
from grid_os.core.types import HubConfig, SensorState
from grid_os.runtime import set_control_loop


class DummySimClient:
    def __init__(self):
        self.last_commands = None

    def get_sensor_state(self):
        return SensorState(
            p_solar_w=1500,
            p_grid_w=200,
            p_compute_w=800,
            soc=64,
            t_cpu=52,
            t_water_in=30,
            t_water_out=44,
            flow_rate_lpm=3.2,
        )

    def set_actuators(self, commands):
        self.last_commands = commands


class AllowSafetyClient:
    def request_clearance(self, hub_id: str, command: str):
        _ = (hub_id, command)
        return True, {"clear": True, "reason": "allowed", "clearance_id": "clr-test"}


class ApiLiveRuntimeTests(unittest.TestCase):
    def setUp(self):
        self.sim = DummySimClient()
        self.loop = GridOSControlLoop(HubConfig(hub_id="hub_a"), sim_client=self.sim, safety_client=AllowSafetyClient())
        self.loop.tick_count = 7
        self.loop._tick()
        set_control_loop(self.loop)
        self.client = TestClient(app)

    def tearDown(self):
        set_control_loop(None)

    def test_health_and_sensors_use_live_runtime(self):
        health = self.client.get("/api/v1/health")
        self.assertEqual(health.status_code, 200)
        self.assertEqual(health.json()["uptime_ticks"], 7)

        sensors = self.client.get("/api/v1/sensors")
        self.assertEqual(sensors.status_code, 200)
        body = sensors.json()
        self.assertEqual(body["p_solar_w"], 1500)
        self.assertEqual(body["soc"], 64)

    def test_manual_mode_endpoint_affects_state_machine(self):
        response = self.client.post("/api/v1/scheduler/mode", params={"mode": "MAINTENANCE", "reason": "operator"})
        self.assertEqual(response.status_code, 200)

        self.loop._tick()
        self.assertEqual(self.loop.state_machine.mode, OperationalMode.MAINTENANCE)


if __name__ == "__main__":
    unittest.main()

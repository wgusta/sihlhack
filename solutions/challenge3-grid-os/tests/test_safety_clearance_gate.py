import unittest

from grid_os.core.control_loop import GridOSControlLoop
from grid_os.core.state_machine import OperationalMode
from grid_os.core.types import HubConfig, SensorState


class DummySimClient:
    def __init__(self):
        self.actuator_calls = []

    def get_sensor_state(self):
        return SensorState()

    def set_actuators(self, commands):
        self.actuator_calls.append(commands)


class DenySafetyClient:
    def request_clearance(self, hub_id: str, command: str):
        _ = (hub_id, command)
        return False, {"reason": "forced_deny"}


class AllowSafetyClient:
    def request_clearance(self, hub_id: str, command: str):
        _ = (hub_id, command)
        return True, {"clear": True, "reason": "allowed", "clearance_id": "clr-123"}


class SafetyGateTests(unittest.TestCase):
    def test_actuation_blocked_when_no_clearance(self):
        sim = DummySimClient()
        loop = GridOSControlLoop(HubConfig(hub_id="hub_a"), sim_client=sim, safety_client=DenySafetyClient())

        loop._tick()

        self.assertEqual(len(sim.actuator_calls), 0)
        self.assertEqual(loop.state_machine.mode, OperationalMode.EMERGENCY_STOP)

    def test_actuation_allowed_with_clearance(self):
        sim = DummySimClient()
        loop = GridOSControlLoop(HubConfig(hub_id="hub_a"), sim_client=sim, safety_client=AllowSafetyClient())

        loop._tick()

        self.assertEqual(len(sim.actuator_calls), 1)
        self.assertEqual(sim.actuator_calls[0].get("clearance_id"), "clr-123")


if __name__ == "__main__":
    unittest.main()

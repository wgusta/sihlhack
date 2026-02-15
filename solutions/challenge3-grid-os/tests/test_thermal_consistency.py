import unittest

from grid_os.core.control_loop import GridOSControlLoop
from grid_os.core.pid import PIDConfig
from grid_os.core.types import HubConfig


class DummySafetyClient:
    def request_clearance(self, hub_id: str, command: str):
        _ = (hub_id, command)
        return True, {"clear": True, "reason": "allowed"}


class ThermalConsistencyTests(unittest.TestCase):
    def test_thermal_thresholds_are_coherent(self):
        cfg = HubConfig()
        pid_cfg = PIDConfig()

        self.assertEqual(cfg.t_cpu_limit, pid_cfg.cpu_override_c)
        self.assertLessEqual(cfg.t_water_setpoint, cfg.t_cpu_limit - 24)
        self.assertLessEqual(cfg.t_cpu_throttle, cfg.t_cpu_limit)

    def test_control_loop_uses_config_aligned_pid_override(self):
        cfg = HubConfig()
        loop = GridOSControlLoop(cfg, sim_client=None, safety_client=DummySafetyClient())

        self.assertEqual(loop.pid.config.cpu_override_c, cfg.t_cpu_limit)
        self.assertEqual(loop.pid.config.setpoint, cfg.t_water_setpoint)


if __name__ == "__main__":
    unittest.main()

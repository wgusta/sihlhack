import json
import tempfile
import unittest

import edge.sensor_reader as sensor_reader


class CalibrationValidationTests(unittest.TestCase):
    def test_calibration_loads_valid_file(self):
        with tempfile.NamedTemporaryFile(mode="w", suffix=".json", delete=False) as handle:
            json.dump({"sensors": [{"sensor_id": "T_cpu_die", "offset": 1.0, "scale": 1.0}]}, handle)
            path = handle.name

        reader = sensor_reader.SensorReader.__new__(sensor_reader.SensorReader)
        calibration = reader._load_calibration(path)

        self.assertIn("T_cpu_die", calibration)

    def test_calibration_validation_fails_in_secure_mode(self):
        with tempfile.NamedTemporaryFile(mode="w", suffix=".json", delete=False) as handle:
            json.dump({"invalid": []}, handle)
            path = handle.name

        reader = sensor_reader.SensorReader.__new__(sensor_reader.SensorReader)
        old_secure = sensor_reader.SECURE_MODE
        old_dev = sensor_reader.ALLOW_INSECURE_LOCAL_DEV
        sensor_reader.SECURE_MODE = True
        sensor_reader.ALLOW_INSECURE_LOCAL_DEV = False
        try:
            with self.assertRaises(RuntimeError):
                reader._load_calibration(path)
        finally:
            sensor_reader.SECURE_MODE = old_secure
            sensor_reader.ALLOW_INSECURE_LOCAL_DEV = old_dev


if __name__ == "__main__":
    unittest.main()

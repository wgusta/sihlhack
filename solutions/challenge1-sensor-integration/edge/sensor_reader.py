#!/usr/bin/env python3
"""
sensor_reader.py — Sihlicon Hub Sensor Reader
Reads all 13 sensors from Raspberry Pi GPIO/I2C/SPI and publishes to MQTT.
"""

import json
import logging
import os
import time
from dataclasses import asdict, dataclass
from typing import Optional

import paho.mqtt.client as mqtt

# Sensor libraries (install via requirements.txt)
try:
    import adafruit_bmp280
    import adafruit_ds18x20
    import adafruit_ina219
    import board
    import busio
    from adafruit_onewire.bus import OneWireBus

    HW_AVAILABLE = True
except ImportError:
    HW_AVAILABLE = False

logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(name)s] %(levelname)s: %(message)s")
logger = logging.getLogger("sensor_reader")

# Configuration
SECURE_MODE = os.getenv("SECURE_MODE", "true").lower() == "true"
ALLOW_INSECURE_LOCAL_DEV = os.getenv("ALLOW_INSECURE_LOCAL_DEV", "false").lower() == "true"
MQTT_BROKER = os.getenv("MQTT_BROKER")
MQTT_PORT = int(os.getenv("MQTT_PORT", "1883"))
NODE_ID = os.getenv("NODE_ID", "hub-001")
SAMPLE_INTERVAL_S = 1.0  # 1Hz
HEARTBEAT_INTERVAL_S = 2.0
CANONICAL_TOPIC_NAMESPACE = os.getenv("CANONICAL_TOPIC_NAMESPACE", "sihlhack")
ENABLE_LEGACY_TOPIC_PUBLISH = os.getenv("ENABLE_LEGACY_TOPIC_PUBLISH", "true").lower() == "true"
CALIBRATION_PATH = os.getenv(
    "CALIBRATION_PATH",
    os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "config", "calibration.json")),
)


@dataclass
class SensorReading:
    node_id: str
    sensor_id: str
    measurement: str
    value: float
    raw_value: float
    unit: str
    quality: int  # 0=good, 1=degraded, 2=bad
    timestamp: str
    location: Optional[str] = None


class SensorReader:
    def __init__(self, node_id: str = NODE_ID):
        self.node_id = node_id
        self.hub_id = os.getenv("HUB_ID", self._normalize_hub_id(node_id))
        self.mqtt_client = mqtt.Client(client_id=f"sensor-reader-{node_id}")
        self.calibration = self._load_calibration(CALIBRATION_PATH)
        self.sensors = {}
        self._init_sensors()

    @staticmethod
    def _normalize_hub_id(node_id: str) -> str:
        defaults = {
            "hub-001": "hub_a",
            "hub-002": "hub_b",
            "hub-003": "hub_c",
            "hub-004": "hub_d",
        }
        if node_id in defaults:
            return defaults[node_id]
        return node_id.replace("-", "_")

    def _load_calibration(self, path: str) -> dict:
        strict = SECURE_MODE and not ALLOW_INSECURE_LOCAL_DEV
        try:
            with open(path, "r", encoding="utf-8") as handle:
                payload = json.load(handle)
        except FileNotFoundError as exc:
            if strict:
                raise RuntimeError(f"Calibration file missing: {path}") from exc
            logger.warning("Calibration file missing (%s), using passthrough", path)
            return {}
        except json.JSONDecodeError as exc:
            if strict:
                raise RuntimeError(f"Calibration file invalid JSON: {path}") from exc
            logger.warning("Calibration parse failed (%s), using passthrough", path)
            return {}

        sensors = payload.get("sensors")
        if not isinstance(sensors, list):
            if strict:
                raise RuntimeError("Calibration file must include a 'sensors' list")
            logger.warning("Calibration missing sensors list, using passthrough")
            return {}

        normalized: dict[str, dict] = {}
        for entry in sensors:
            if not isinstance(entry, dict):
                if strict:
                    raise RuntimeError("Calibration entries must be objects")
                continue
            sensor_id = entry.get("sensor_id")
            if not isinstance(sensor_id, str) or not sensor_id:
                if strict:
                    raise RuntimeError("Calibration entry missing sensor_id")
                continue
            normalized[sensor_id] = entry

        logger.info("Loaded calibration for %d sensors from %s", len(normalized), path)
        return normalized

    def _init_sensors(self):
        if not HW_AVAILABLE:
            logger.warning("Hardware libraries not available, using mock data")
            return
        try:
            self.i2c = busio.I2C(board.SCL, board.SDA)
            # DS18B20 temperature sensors (1-Wire)
            ow_bus = OneWireBus(board.D4)
            devices = ow_bus.scan()
            for i, device in enumerate(devices):
                sensor = adafruit_ds18x20.DS18X20(ow_bus, device)
                self.sensors[f"DS18B20_{i}"] = sensor
            # INA219 power monitor
            self.ina219 = adafruit_ina219.INA219(self.i2c)
            logger.info(f"Initialized {len(self.sensors)} temperature sensors + INA219")
        except Exception as e:
            logger.error(f"Sensor init failed: {e}")

    def read_all(self) -> list[SensorReading]:
        ts = time.strftime("%Y-%m-%dT%H:%M:%S.000Z", time.gmtime())
        if not HW_AVAILABLE:
            return self._mock_readings(ts)
        return self._hardware_readings(ts)

    def _mock_readings(self, ts: str) -> list[SensorReading]:
        import math
        import random

        t = time.time()
        base_temp = 45 + 10 * math.sin(t * 0.01)
        return [
            SensorReading(self.node_id, "T_coolant_in", "temperature", round(base_temp - 5 + random.gauss(0, 0.3), 2), round(base_temp - 5, 2), "°C", 0, ts, "inlet"),
            SensorReading(self.node_id, "T_coolant_out", "temperature", round(base_temp + 15 + random.gauss(0, 0.3), 2), round(base_temp + 15, 2), "°C", 0, ts, "outlet"),
            SensorReading(self.node_id, "T_cpu_die", "temperature", round(base_temp + 25 + random.gauss(0, 0.5), 2), round(base_temp + 25, 2), "°C", 0, ts, "cpu"),
            SensorReading(self.node_id, "T_ambient", "temperature", round(22 + random.gauss(0, 0.2), 2), 22.0, "°C", 0, ts, "room"),
            SensorReading(self.node_id, "V_battery", "electrical", round(48.5 + random.gauss(0, 0.1), 2), 48.5, "V", 0, ts, "battery"),
            SensorReading(self.node_id, "I_battery", "electrical", round(5.2 + random.gauss(0, 0.2), 2), 5.2, "A", 0, ts, "battery"),
            SensorReading(self.node_id, "V_solar", "electrical", round(38 + 5 * math.sin(t * 0.005), 2), 38.0, "V", 0, ts, "solar"),
            SensorReading(self.node_id, "I_line", "electrical", round(2.1 + random.gauss(0, 0.1), 2), 2.1, "A", 0, ts, "grid"),
            SensorReading(self.node_id, "Flow_water", "flow", round(2.5 + random.gauss(0, 0.1), 2), 2.5, "L/min", 0, ts, "coolant"),
            SensorReading(self.node_id, "Gas_battery", "environment", round(max(0, 50 + random.gauss(0, 10)), 1), 50.0, "ppm", 0, ts, "battery_room"),
            SensorReading(self.node_id, "Smoke_room", "environment", round(max(0, 20 + random.gauss(0, 5)), 1), 20.0, "ppm", 0, ts, "server_room"),
        ]

    def _hardware_readings(self, ts: str) -> list[SensorReading]:
        readings = []
        sensor_map = {
            "DS18B20_0": ("T_coolant_in", "inlet"),
            "DS18B20_1": ("T_coolant_out", "outlet"),
            "DS18B20_2": ("T_cpu_die", "cpu"),
        }
        for hw_id, sensor in self.sensors.items():
            if hw_id in sensor_map:
                sid, loc = sensor_map[hw_id]
                try:
                    raw = sensor.temperature
                    cal = self.calibration.get(sid, {"offset": 0, "scale": 1})
                    value = raw * float(cal.get("scale", 1)) + float(cal.get("offset", 0))
                    readings.append(SensorReading(self.node_id, sid, "temperature", round(value, 2), round(raw, 2), "°C", 0, ts, loc))
                except Exception as e:
                    readings.append(SensorReading(self.node_id, sid, "temperature", 0.0, 0.0, "°C", 2, ts, loc))
                    logger.error(f"Read {sid} failed: {e}")
        try:
            v = self.ina219.bus_voltage
            i = self.ina219.current / 1000
            readings.append(SensorReading(self.node_id, "V_battery", "electrical", round(v, 2), round(v, 2), "V", 0, ts, "battery"))
            readings.append(SensorReading(self.node_id, "I_battery", "electrical", round(i, 2), round(i, 2), "A", 0, ts, "battery"))
        except Exception as e:
            logger.error(f"INA219 read failed: {e}")
        return readings

    def calibrate(self, reading: SensorReading) -> SensorReading:
        cal = self.calibration.get(reading.sensor_id)
        if cal and "scale" in cal:
            reading.value = reading.raw_value * float(cal.get("scale", 1)) + float(cal.get("offset", 0))
        return reading

    def publish(self, readings: list[SensorReading]):
        for r in readings:
            payload = json.dumps(asdict(r))
            canonical_topic = f"{CANONICAL_TOPIC_NAMESPACE}/{r.node_id}/sensors/{r.measurement}"
            self.mqtt_client.publish(canonical_topic, payload, qos=0)
            if ENABLE_LEGACY_TOPIC_PUBLISH and CANONICAL_TOPIC_NAMESPACE != "sihlhub":
                legacy_topic = f"sihlhub/{r.node_id}/sensors/{r.measurement}"
                self.mqtt_client.publish(legacy_topic, payload, qos=0)

    def publish_heartbeat(self):
        topic = f"sihlhack/safety/{self.hub_id}/heartbeat"
        payload = json.dumps(
            {
                "hub_id": self.hub_id,
                "node_id": self.node_id,
                "timestamp": time.time(),
                "status": "alive",
            }
        )
        self.mqtt_client.publish(topic, payload, qos=1)

    def run(self):
        broker = MQTT_BROKER
        if not broker:
            if ALLOW_INSECURE_LOCAL_DEV:
                broker = "localhost"
                logger.warning("MQTT_BROKER not set, using localhost because ALLOW_INSECURE_LOCAL_DEV=true")
            else:
                raise RuntimeError("MQTT_BROKER is required when secure mode is enabled")

        self.mqtt_client.connect(broker, MQTT_PORT)
        self.mqtt_client.loop_start()
        logger.info(f"Sensor reader started for {self.node_id}")
        next_heartbeat_at = 0.0
        try:
            while True:
                readings = self.read_all()
                self.publish(readings)
                now = time.monotonic()
                if now >= next_heartbeat_at:
                    self.publish_heartbeat()
                    next_heartbeat_at = now + HEARTBEAT_INTERVAL_S
                logger.debug(f"Published {len(readings)} readings")
                time.sleep(SAMPLE_INTERVAL_S)
        except KeyboardInterrupt:
            logger.info("Shutting down")
        finally:
            self.mqtt_client.loop_stop()
            self.mqtt_client.disconnect()


if __name__ == "__main__":
    reader = SensorReader()
    reader.run()

#!/usr/bin/env python3
"""
sensor_reader.py — Sihlicon Hub Sensor Reader
Reads all 13 sensors from Raspberry Pi GPIO/I2C/SPI and publishes to MQTT.
"""

import json
import time
import logging
from dataclasses import dataclass, asdict
from typing import Optional

import paho.mqtt.client as mqtt

# Sensor libraries (install via requirements.txt)
try:
    import board
    import busio
    import adafruit_ds18x20
    from adafruit_onewire.bus import OneWireBus
    import adafruit_ina219
    import adafruit_bmp280
    HW_AVAILABLE = True
except ImportError:
    HW_AVAILABLE = False

logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(name)s] %(levelname)s: %(message)s")
logger = logging.getLogger("sensor_reader")

# Configuration
MQTT_BROKER = "localhost"
MQTT_PORT = 1883
NODE_ID = "hub-001"
SAMPLE_INTERVAL_S = 1.0  # 1Hz

# Calibration offsets (loaded from calibration.json)
CALIBRATION = {
    "T_coolant_in": {"offset": -0.3, "scale": 1.0},
    "T_coolant_out": {"offset": 0.1, "scale": 1.0},
    "T_cpu_die": {"offset": 0.0, "scale": 1.0},
    "T_ambient": {"offset": 0.0, "scale": 1.0},
    "V_battery": {"offset": 0.02, "scale": 1.001},
    "I_battery": {"offset": -0.01, "scale": 0.998},
    "Flow_water": {"pulses_per_liter": 450, "offset": 0.0},
}

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
        self.mqtt_client = mqtt.Client(client_id=f"sensor-reader-{node_id}")
        self.sensors = {}
        self._init_sensors()

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
        readings = []
        if not HW_AVAILABLE:
            readings = self._mock_readings(ts)
        else:
            readings = self._hardware_readings(ts)
        return readings

    def _mock_readings(self, ts: str) -> list[SensorReading]:
        import math, random
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
        sensor_map = {"DS18B20_0": ("T_coolant_in", "inlet"), "DS18B20_1": ("T_coolant_out", "outlet"), "DS18B20_2": ("T_cpu_die", "cpu")}
        for hw_id, sensor in self.sensors.items():
            if hw_id in sensor_map:
                sid, loc = sensor_map[hw_id]
                try:
                    raw = sensor.temperature
                    cal = CALIBRATION.get(sid, {"offset": 0, "scale": 1})
                    value = raw * cal["scale"] + cal["offset"]
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
        cal = CALIBRATION.get(reading.sensor_id)
        if cal and "scale" in cal:
            reading.value = reading.raw_value * cal["scale"] + cal["offset"]
        return reading

    def publish(self, readings: list[SensorReading]):
        for r in readings:
            topic = f"sihlhub/{r.node_id}/sensors/{r.measurement}"
            payload = json.dumps(asdict(r))
            self.mqtt_client.publish(topic, payload, qos=0)

    def run(self):
        self.mqtt_client.connect(MQTT_BROKER, MQTT_PORT)
        self.mqtt_client.loop_start()
        logger.info(f"Sensor reader started for {self.node_id}")
        try:
            while True:
                readings = self.read_all()
                self.publish(readings)
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

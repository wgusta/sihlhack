# Challenge 1: Sensor Integration (Einzelne LEG)

## Stack
Python (Pi) → MQTT → InfluxDB → TypeScript Pipeline → React Dashboard

## Run
```bash
docker-compose up -d  # Mosquitto + InfluxDB + Pipeline
cd edge && python sensor_reader.py  # On Raspberry Pi
```

## Key Files
- `edge/sensor_reader.py`: 13 sensors at 1Hz, MQTT publish
- `services/pipeline/pipeline_service.ts`: MQTT → validation → InfluxDB → WebSocket
- `config/calibration.json`: Sensor calibration offsets
- `docker-compose.yml`: Full stack

## Sensors
DS18B20 (temp x4), INA219 (V/I battery), ACS712 (I line), YF-S201 (flow), MQ-2 (gas/smoke), PZEM-004T (grid)

## API
- `GET /api/v1/sensors`: Grid-OS HAL endpoint
- `POST /api/v1/actuators`: Receive Grid-OS commands
- `GET /api/v1/sensors/history`: Time-series query

License: Apache 2.0 | sihlhack.ch

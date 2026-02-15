# Integration Architecture

## Runtime Topology
- Challenge 1 (`sensor_reader.py`) publishes flat sensor events on MQTT.
- Challenge 1 pipeline (`pipeline_service.ts`) consumes canonical + legacy sensor topics, writes InfluxDB, emits WebSocket snapshots.
- Challenge 2 safety coordinator consumes sensor/heartbeat streams, computes anomaly state, exposes fail-closed safety clearance API.
- Challenge 3 Grid-OS control loop requests safety clearance before actuator dispatch.

## Safety Precedence
- Grid-OS actuation path is fail-closed.
- Safety API unreachable/deny => command blocked + Grid-OS emergency stop path.
- Safety state `CRITICAL/E_STOP/LOCKOUT` denies actuator clearance.

## Topic Migration Policy
- Canonical namespace: `sihlhack/*`
- Transitional support: dual publish/consume for `sihlhub/*`
- Migration window: until **2026-06-30**
- Planned deprecation date for `sihlhub/*`: **2026-07-01**

# Integration Architecture: Sihlicon Hub Hackathon

## Quick Reference

| Challenge | Port | Protocol | Key File |
|-----------|------|----------|----------|
| 1 Sensor | :3001 | REST + MQTT | shared/types.ts: SensorReading |
| 2 Safety | :3002 | REST + MQTT | shared/types.ts: SafetyState |
| 3 Grid-OS | :3003 | REST | shared/types.ts: ControlDecision |
| 4 Legal | :3004 | REST | shared/types.ts: AuditEvent |
| MQTT | :1883 | Mosquitto | mqtt-topics.md |

## Critical Rule
Grid-OS MUST call `GET :3002/api/v1/safety/clearance` before every actuator command.
Safety can override everything. No exceptions.

## MQTT QoS
- Sensors: QoS 0 (high freq, loss ok)
- Safety overrides/estop: QoS 2 + retain (must arrive, must persist)
- Grid-OS mode: QoS 1 + retain

## Files
- `shared/types.ts`: All TypeScript interfaces
- `architecture.md`, `api-contracts.md`, `mqtt-topics.md`: Docs (in agent output)

## Integration Checkpoints
- IC#1 (Day 1 17:00): Sensor data flows on MQTT
- IC#2 (Day 2 13:00): Safety override stops Grid-OS
- IC#3 (Day 2 17:00): Full loop, all layers interact
- IC#4 (Day 3 09:00): End-to-end, all dashboards live

## Thermal Path: Water Loop (recommended)
Fastest setup (1-2h), lowest risk, CHF 100-200 parts.

Lizenz: Apache 2.0 | sihlhack.ch

# API Contracts

## Challenge 2 Safety API
Base path: `/api/v1/safety`

### `GET /clearance?hub_id=<id>&command=<cmd>`
Response:
- `clear: boolean`
- `clearance_id?: string`
- `reason: string`
- `ttl_ms: number`
- `safety_state: string`
- `timestamp: string`

Fail-closed semantics:
- Unknown hub, heartbeat uncertainty, denied safety state, non-allowlisted command, or API errors => `clear=false`.

### `GET /state/{hub_id}`
Response fields:
- `hub_id`, `safety_state`, `heartbeat_status`, `missed_heartbeats`
- `sensor_health`, `sensors_valid`, `sensors_total`, `timestamp`

### `GET /summary`
Response fields:
- `global_state`, `degradation_level`, `hubs`, `timestamp`

## Challenge 3 Grid-OS API
Base path: `/api/v1`

Runtime-backed endpoints:
- `GET /health`
- `GET /sensors`
- `GET /sensors/electrical`
- `GET /sensors/thermal`
- `GET /scheduler/status`
- `GET /scheduler/budget`
- `POST /scheduler/mode` (`AUTO`, `MAINTENANCE`, `EMERGENCY_STOP`)
- `POST /jobs`, `GET /jobs`, `DELETE /jobs/{job_id}`
- `GET /shedding/status`
- `POST /actuators` (clearance checked before apply)

## Shared Types
Source of truth:
- `shared/types.ts`

Key additions:
- `SafetyClearanceResponse`
- `ActuatorCommand` with `clearance_id`
- `SensorEventContract` for flat + canonical dual-schema period

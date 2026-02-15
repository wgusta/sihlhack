# Sim Runner (Sandbox)

Minimal remote runner for `/api/sim/*`.

## Endpoints
- `POST /v1/runs`
- `POST /v1/runs/:id/cancel`
- `GET /v1/challenges/:id/files`

## Required env
- `SIM_RUNNER_API_KEY`
- `SIM_RUNNER_WEBHOOK_URL`
- `SIM_RUNNER_WEBHOOK_SECRET`

Optional:
- `PORT` (default `8099`)
- `SIM_RUNNER_ARTIFACT_DIR` (default `.artifacts`)

## Security model
- Bearer auth on all endpoints.
- Strict challenge/file allowlists for dev mode file reads and overrides.
- Override payload size cap.
- Intended container constraints in production deployment:
  - no outbound network for sandbox jobs
  - CPU/memory/pids/time limits
  - fixed evaluator images only

This implementation runs local evaluators to keep integration deterministic and lightweight.

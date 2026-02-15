# Service API Contracts

Compact reference for active API surface.

## Auth

- Session cookie auth for participant routes.
- Unauthenticated calls return 401 where required.

## Simulation APIs

- `POST /api/sim/runs`
  - Create a simulation run for one package.
- `GET /api/sim/runs`
  - List run history for current participant.
- `GET /api/sim/runs/[id]`
  - Fetch run detail.
- `POST /api/sim/runs/[id]/cancel`
  - Cancel a queued or running run when allowed.
- `POST /api/sim/webhook/complete`
  - Runner callback for final run state.

Notes:
- Shared contracts live in `types/sim.ts`.
- If `simulation_runs` schema changes, also update `lib/db/ensure.ts`.

## Core Participant APIs

- `POST /api/stripe/checkout`
  - Main event checkout session.
- `POST /api/snackathons/checkout`
  - Snackathon checkout session.
- `POST /api/stripe/webhook`
  - Payment completion and status updates.
- `GET/PATCH /api/participants/me`
  - Participant profile data.
- `GET /api/team-matching`
  - Discover opt-in participants.
- `POST /api/team-matching/request`
  - Send team request.
- `POST /api/team-matching/respond`
  - Accept or decline team request.

## Infrastructure APIs

- `POST /api/compute`, `GET /api/compute/[jobId]`
- `POST /api/storage`, `GET /api/storage`
- `GET /api/heat/credits`, `GET /api/heat/stats`, `POST /api/heat/settle`

These endpoints are platform-facing service primitives. Keep request and response shapes backward compatible.

## Contract Rules

- Do not rename challenge identifiers in APIs without migration handling.
- Do not break existing response keys consumed by dashboard routes.
- Keep new optional fields additive first.

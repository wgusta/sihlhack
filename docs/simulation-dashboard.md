# Simulation Dashboard

## Route

- `/dashboard/sim`

## Purpose

- Run package-specific simulation jobs.
- Tune inputs live before submit.
- Inspect run history, artifacts, and comments.

## Package Tabs

- `Sensor Integration`
- `Multi-Node Safety Coordination`
- `Grid-OS Logic`

Package names in UI, docs, and API payloads must stay aligned.

## Modes

- Default mode: config-driven runs.
- Dev mode: allowlisted users only, restricted override paths.

## 3D Layer

- Feature flag: `NEXT_PUBLIC_ENABLE_SIM_3D=true`
- Location: `components/sim3d`
- Fallback: auto 2D state when WebGL is unavailable

## Live Tuning Panel

- Location: `components/sim/SimulationTuningPanel.tsx`
- Sensor package controls: sensor count, cpu temp, flow, gas
- Safety package controls: leg node count, heartbeat settings, force e-stop
- Grid-OS package controls: scenario, compute limit, temp limits, shedding thresholds

## Run Comments

- Optional note before submit
- Max length: 500 chars
- Stored at `simulation_runs.comment`
- Shown in run history and run detail

## Key Files

- `app/dashboard/sim/page.tsx`
- `components/sim/RunPanel.tsx`
- `components/sim/RunHistory.tsx`
- `components/sim/SimulationTuningPanel.tsx`
- `components/sim3d/SceneShell.tsx`
- `components/sim3d/SimulationScene3D.tsx`
- `lib/sim/scene-mapper.ts`
- `lib/sim/featureRegistry.ts`
- `types/sim.ts`
- `app/api/sim/runs/route.ts`
- `app/api/sim/runs/[id]/route.ts`
- `lib/db/ensure.ts`

## Validation

- `npm run lint`
- `npx tsc --noEmit`
- `npm run test:sim:smoke -- --reporter=line`
- `npm run build`

# Simulation Dashboard

## Route

- `/dashboard/sim`

## Scope

- Sandbox run control for 3 challenges
- 3D visualization layer with challenge specific composition
- Dev inspector with feature to code mapping
- Run history and artifacts

## Challenge Tabs

- `Sensor Integration`
- `Multi-Node Safety Coordination`
- `Grid-OS Logic`

## Modes

- Default mode: config driven runs
- Dev mode: allowlisted users only, editable override paths only

## 3D Layer

- Enabled by `NEXT_PUBLIC_ENABLE_SIM_3D=true`
- WebGL fallback automatically shows 2D only state
- Shared scene framework with challenge specific:
  - camera presets
  - node visibility
  - lighting and palette
  - props and background animation

## Live Tuning

- Sensor Integration controls:
  - sensor count
  - CPU temp, flow, gas values
- Multi Node Safety controls:
  - LEG node count
  - heartbeat, missed heartbeat threshold
  - force E Stop toggle
- Grid OS controls:
  - scenario selector
  - max compute
  - CPU temp limit
  - shedding thresholds

## Run Comments

- Users can add a run comment before submit
- Max length: 500 chars
- Stored in `simulation_runs.comment`
- Exposed in run list and run detail APIs
- Shown in run history cards

## Key Files

- `app/dashboard/sim/page.tsx`
- `components/sim/RunPanel.tsx`
- `components/sim/RunHistory.tsx`
- `components/sim/SimulationTuningPanel.tsx`
- `components/sim3d/SceneShell.tsx`
- `components/sim3d/SimulationScene3D.tsx`
- `components/sim3d/hooks/useGuidedCamera.ts`
- `lib/sim/scene-mapper.ts`
- `lib/sim/featureRegistry.ts`
- `app/api/sim/runs/route.ts`
- `app/api/sim/runs/[id]/route.ts`
- `lib/sim/validation.ts`
- `lib/sim/serialization.ts`
- `lib/db/schema.ts`
- `lib/db/ensure.ts`

## Test Commands

- `npm run lint`
- `npx tsc --noEmit`
- `npm run test:sim:smoke -- --reporter=line`
- `npm run build`

# AGENTS.md

## Style

- Be concise, use short bullets.
- Keep changes scoped, no broad refactors.
- Preserve existing naming, especially challenge IDs.

## Product and Naming

- Main package names must stay exact:
  - `Sensor Integration`
  - `Multi-Node Safety Coordination`
  - `Grid-OS Logic`
- Do not reintroduce alternate challenge framing in docs or UI labels.

## Simulation Dashboard

- Main route: `/dashboard/sim`
- 3D scene code in `components/sim3d`
- Live tuning controls in `components/sim/SimulationTuningPanel.tsx`
- Run comments are user-facing, max 500 chars unless product asks otherwise

## API and Data Contracts

- Simulation APIs under `app/api/sim/*`
- Shared sim contracts in `types/sim.ts`
- Keep request and response shapes backward compatible
- If schema changes touch `simulation_runs`, also update `lib/db/ensure.ts`

## Validation Before Handoff

- `npm run lint`
- `npx tsc --noEmit`
- `npm run test:sim:smoke -- --reporter=line`
- `npm run build`

## Docs To Update When Sim Changes

- `README.md`
- `docs/service-apis.md`
- `docs/simulation-dashboard.md`
- `CLAUDE.md`

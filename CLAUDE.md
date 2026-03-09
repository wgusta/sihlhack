# CLAUDE.md

Repository guidance for code assistants.

## Style

- Be concise, short bullets.
- Keep changes scoped.
- Preserve existing naming, especially challenge IDs and route names.

## Product Model

- Participant-oriented hackathon for Sihlicon Hub.
- Main event fee: CHF 150.
- Snackathons: CHF 80 per event.
- 3 package model only:
  - `Sensor Integration`
  - `Multi-Node Safety Coordination`
  - `Grid-OS Logic`
- Thermal path choices are evaluation dimensions, not package names.

## Simulation Dashboard

- Main route: `/dashboard/sim`
- Tabs must match package names exactly.
- 3D scene code: `components/sim3d`
- Live tuning panel: `components/sim/SimulationTuningPanel.tsx`
- Run comments: max 500 chars

## API and Contracts

- Simulation APIs: `app/api/sim/*`
- Shared sim contracts: `types/sim.ts`
- Keep API changes backward compatible.
- If `simulation_runs` changes, update `lib/db/ensure.ts`.

## Validation

- `npm run lint`
- `npx tsc --noEmit`
- `npm run test:sim:smoke -- --reporter=line`
- `npm run build`

## Docs To Keep Aligned

- `README.md`
- `docs/service-apis.md`
- `docs/simulation-dashboard.md`
- `AGENTS.md`
- `SCHEDULING-ARCHITECTURE.md`

## Public/Private Split

- `private/` directory is gitignored; contains strategy, financials, internal analysis
- Root .md files and `docs/` are public (visible on GitHub)
- When creating new docs, decide public vs private upfront
- Never commit private analysis to root; always place in `private/`

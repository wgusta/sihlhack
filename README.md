# SIHLHACK.CH

Participant-oriented hackathon for the Sihlicon Hub: battery, compute, heat, resilience.

## Current Model

- Participants pay, participants build, participants own code.
- Main registration fee: CHF 150.
- Snackathons: CHF 80 per event.
- Corporate sponsors do not set challenge scope.
- Refund rules are defined in `app/agb/page.tsx`.

## Main Event Scope

- 3 mandatory packages, team picks one:
  - `Sensor Integration`
  - `Multi-Node Safety Coordination`
  - `Grid-OS Logic`
- Thermal path choice (immersion, water loop, heat pump) is an evaluation dimension, not a separate package.
- Delivery model: simulator first, supervised reference run / demo deployment for finalists.

## Key Routes

- Public:
  - `/`
  - `/register`
  - `/challenges`
  - `/snackathons`
  - `/about`
- Participant:
  - `/dashboard`
  - `/dashboard/sim`
  - `/dashboard/team-matching`
- Legal:
  - `/agb`
  - `/datenschutz`
  - `/licensing`
  - `/safety`

## Simulation

- Route: `/dashboard/sim`
- Tabs must stay aligned with website package names:
  - `Sensor Integration`
  - `Multi-Node Safety Coordination`
  - `Grid-OS Logic`
- 3D scene code lives in `components/sim3d`.
- Live tuning panel lives in `components/sim/SimulationTuningPanel.tsx`.
- Run comments are user-facing and capped at 500 chars.

## Tech Stack

- Next.js 16, TypeScript, Tailwind CSS 3
- Vercel Postgres + Drizzle ORM
- Stripe, Resend
- Playwright smoke test for sim dashboard

## Commands

```bash
npm run dev
npm run lint
npx tsc --noEmit
npm run test:sim:smoke -- --reporter=line
npm run build
```

## Canonical Docs

- `CONCEPT.md` for product model and package framing
- `SCHEDULING-ARCHITECTURE.md` for the energy-temporal scheduling framing across all three packages
- `docs/simulation-dashboard.md` for sim behavior and file map
- `docs/service-apis.md` for active API surface
- `AGENTS.md` and `CLAUDE.md` for contributor instructions

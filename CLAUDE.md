# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

**Be extremely concise, sacrifice grammar for concision. No dashes (—, –, -) in prose, use commas/colons/semicolons. German: active voice (Aktiv), direct verbs.**

Switzerland's first participant-oriented hackathon building Sihlicon Hub (Active Energy Node: Battery, Compute, Heat, Resilience). Participants fund, propose, vote, own outcomes (Apache 2.0).

## Core Model (Non-Negotiable)

```
Traditional:  Companies pay → Companies decide → Participants execute
sihlhack:     Participants pay → Participants decide → Participants execute
```

- CHF 150 registration, participants vote on projects
- Companies: data only, no money/influence | All code Apache 2.0
- Public finances, auto-refunds if minimum not met
- Reject features moving toward corporate model

## Tech Stack

Next.js 16 (App Router, TS strict), Tailwind CSS 3, Vercel Postgres + Drizzle, Vercel Blob
Auth: Magic link (Resend), Payments: Stripe Connect (manual), SWR cache, Heroicons
3D sim stack: `three`, `@react-three/fiber`, `@react-three/drei`, `@react-three/postprocessing`
Testing: Playwright smoke test for simulation dashboard

**Env:** POSTGRES_URL, BLOB_READ_WRITE_TOKEN, STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET, NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY, RESEND_API_KEY, CRON_SECRET, NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_ENABLE_SIM_DASHBOARD, NEXT_PUBLIC_ENABLE_SIM_3D, SIM_RUNNER_URL, SIM_RUNNER_API_KEY, SIM_DEV_MODE_ALLOW_EMAILS

## Key Directories

- `/app`: Next.js (api, auth, admin, challenges, dashboard, proposals, registration, team)
- `/components`: React (auth, challenges, data, landing, proposals, registration, sim, sim3d, ui, visualizations)
- `/lib`: Utilities (db/, auth.ts, stripe.ts, email.ts, funds.ts, refunds.ts, admin.ts, roles.ts, sim/)
- `/solutions`: Hackathon reference solutions (challenge1-sensor-integration, challenge2-safety, challenge3-grid-os, challenge4-legal, integration/)
- `/future-comms`: Offline content (investor pitch, post-reg emails, detailed docs)

## Challenge Architecture (Critical)

**4 Challenges, All Mandatory, All Equal:**
1. **Sensor Integration** (📡) → Einzelne LEG (innermost layer)
2. **Multi-Node Safety Coordination** (🛡️) → LEG-Verbund
3. **Grid-OS Logic** (⚡) → Netzanschluss
4. **LEG Legal & Hardware Compliance** (⚖️) → Rechtliche Grundlagen

**Key constraints:**
- Pro Team nur 1 Challenge (teams pick ONE challenge only)
- NO prize percentages displayed on website (removed: 35/35/25/5 split)
- Jury-based evaluation, technical quality + completeness + integration

**Architecture Visualization:**
- Desktop: horizontal stacked layers with visual hub illustrations
- Mobile: simplified stacked cards with arrows showing data flow
- Layer 1 (bottom): Sensor Integration → Single Sihlicon Hub (🏠⚡)
- Layer 2: Multi-Node Safety → Two synchronized LEGs (LEG 1 ↔ LEG 2)
- Layer 3: Grid-OS Logic → Three hubs connected to grid (⚡)
- Layer 4 (top): LEG Legal → Rechtlicher Rahmen (📜, no hubs)
- Flow shows progression: single hub → multiple hubs → grid-connected → legal framework

**Page locations:**
- `/challenges`: Main page with zwiebel visualization, thermal paths, all challenge details
- `/snackathons`: Pilot events (April/Mai 2026) + Historik Hack (online, async, 2-4 weeks pre-event)
- Historik Hack ONLY on /snackathons (removed from /challenges)

## Simulation Dashboard

- Route: `/dashboard/sim`, feature flagged by `NEXT_PUBLIC_ENABLE_SIM_DASHBOARD`
- Tabs mirror website package names: Sensor Integration, Multi-Node Safety Coordination, Grid-OS Logic
- Default mode: config-based sandbox runs
- Dev mode: allowlisted users only, strict override path allowlist
- 3D layer: challenge specific node composition, camera rails, props, palette
- Live tuning panel: sensor values, LEG safety values, grid scenarios and limits
- Run comments: optional per run note, max 500 chars, stored on `simulation_runs.comment`

## Content Strategy

**Homepage (Fast-Track):**
- Hero → Three Questions → QuickCTA → Who Should Join → Before/After → Why It Matters → Privacy → Fund Transparency → FAQ (8 questions) → Timeline → Final CTA

**Moved to subpages:**
- Energy Trilemma/Thermal Paths → `/about`
- Compute Scenarios → `/challenges`
- Prototype Visualization → `/challenges`
- Historik Hack complete section → `/snackathons`

**Principles:**
- Don't overexplain on landing page
- Depth content on subpages for committed visitors
- Technical details for builders, not for conversion

## Database Schema

Core tables in `/lib/db/schema.ts`:
- **participants**: User accounts with role/skill matching
- **payments**: Stripe payment tracking
- **budgetPositions**: Event budget breakdown
- **projectProposals**: Participant-submitted ideas
- **proposalVotes**: One vote per participant
- **companies**: Data partner profiles
- **historicalData**: Uploaded datasets

Financial amounts: integers in centimes (CHF 150 = 15000)

## Authentication Flow

1. User enters email → `/api/auth/magic-link` sends link via Resend
2. Link contains hashed token, valid 24h
3. `/auth/verify?token=X` validates and creates session
4. Session as httpOnly cookie at `/api/auth/session`
5. Logout clears cookie at `/api/auth/logout`

No passwords ever. Tokens SHA-256 hashed before storage.

## Payment & Refund

1. Registration creates Stripe customer
2. `/api/stripe/checkout` creates PaymentIntent
3. `/api/stripe/webhook` handles success/failure
4. `/api/cron/check-event-status` triggers auto-refunds
5. `lib/refunds.ts`: if participants < minimum, refund all

Payment state in database, not reliant on Stripe API.

## Development Commands

```bash
npm run dev              # Start dev server (localhost:3000, hot reload)
npm run build            # Build for production (checks TypeScript)
npm run start            # Start production server (local)
npm run lint             # Focused lint for sim and 3D files
npm run lint:all         # Full repo lint, legacy warnings/errors may exist
npm run test:sim:smoke   # Playwright smoke test for /dashboard/sim
npm run test:sim:smoke:install   # Install Playwright chromium browser

# Database
npm run db:push          # Push schema to database (⚠️ destructive)
npm run db:generate      # Generate migration files
npm run db:migrate       # Run pending migrations
npm run db:studio        # Open Drizzle Studio (localhost:3001)
```

## Writing Guidelines

**Gendering (female first):**
- Tüftlerinnen und Tüftler, Handwerkerinnen und Handwerker
- Programmiererinnen und Programmierer
- Designerinnen und Designer
- Juristinnen und Juristen

**German:**
- Use "Teilnehmende" (not "Teilnehmer")
- Active voice (Aktiv), direct verbs
- Swiss formatting: `CHF 150`, `CHF 11'000` (apostrophe separator)
- No dashes in prose (use commas/colons/semicolons)

## Code Standards

- **Financial amounts**: Always integers in centimes
- **Responsive design**: Mobile-first
- **Accessibility**: Focus states, ARIA labels, keyboard navigation
- **Type safety**: TypeScript strict mode enabled
- **No prize percentages**: Removed from all pages (PackageCard, challenges FAQ, AGB, about)

## Key Business Logic Files

- `/lib/db/schema.ts` - Complete Drizzle schema
- `/lib/auth.ts` - Magic link token generation
- `/lib/stripe.ts` - Stripe client
- `/lib/refunds.ts` - Auto-refund logic
- `/lib/funds.ts` - Fund calculations
- `/lib/roles.ts` - Hackathon challenges and roles (CRITICAL: 4 mandatory challenges, all equal)
- `/app/api/stripe/webhook/route.ts` - Stripe webhook (critical)
- `/app/api/cron/check-event-status/route.ts` - Refund trigger

## Physics & Economics Constraints

**Thermal model (lumped capacitance):**
- All compute power becomes heat (1st law thermodynamics)
- THERMAL_MASS × dT/dt = Q_compute − Q_flow − Q_ambient
- CPU_THERMAL_R = 0.008 °C/W (immersion cooling), t_cpu = t_water_out + R × P_compute
- At 3kW compute: t_cpu = t_water + 24°C, max safe water output ~55°C (CPU < 80°C)
- Water temp range: 45–55°C across all pages, docs, legal templates

**Economics (Swiss market):**
- Compute value: CHF 0.35/kWh (AI inference, only viable workload class)
- Heat credit: CHF 0.10/kWh thermal (Swiss heating displacement)
- Grid import: CHF 0.22/kWh avg, NT 0.16, HT peak 0.26
- Grid export: CHF 0.12/kWh (feed-in)
- Net margin ~0.23 CHF/kWh, payback 2.5–4 years
- Solar: 2500W peak, 3.2 kWh/kWp/day Swiss average

**tsconfig.json** excludes `solutions/` (solution Python/TS files lack project npm deps).

## Recent Changes (Feb 2026)

1. **Solutions directory:** Reference implementations for all 4 challenges + integration layer
2. **Simulator physics rewrite:** Coupled lumped-capacitance thermal model replacing decorrelated sinusoidal sim
3. **Thermal params corrected:** Water 45–55°C (was 30–60°C), CPU setpoint 55°C (was 60°C)
4. **Economics corrected:** Compute 0.35 CHF/kWh (was 0.15), heat 0.10 (was 0.05), Swiss HT/NT pricing
5. **Cross-codebase coherence:** All thermal/economic values aligned across website, docs, legal templates, services
6. **Simulation dashboard:** `/dashboard/sim` added with run APIs, history, logs, dev inspector
7. **3D challenge layer:** low poly interactive scene, challenge specific composition, rural animated background
8. **Live tuning controls:** challenge specific controls for sensor, safety, grid scenarios
9. **Run comments:** optional run note persisted and shown in run history

## Timeline & Thresholds

- **April 2026:** Pilot #1 (Sihl-Sim API, 18h, gratis, 10-20)
- **Mai 2026:** Pilot #2 (Sihl-Sim Iteration, 18h, gratis, 10-20)
- **Historik Hack:** Async archive research (2-4 weeks pre-event, unlimited, online)
- **Main Event:** September 2026 (3d, CHF 150, 100 participants target)
- **Refund:** Auto-refund if <100 participants in final weeks

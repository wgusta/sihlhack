# sihlhack.ch

**Be extremely concise, sacrifice grammar for concision. No dashes (—, –, -) in prose, use commas/colons/semicolons. German: active voice (Aktiv), direct verbs.**

Switzerland's first participant-oriented hackathon building Sihlicon Hub (Active Energy Node: Battery, Compute, Heat, Resilience). Participants fund, propose, vote, own outcomes (Apache 2.0).

## Core Model (Non-Negotiable)

```
Traditional:  Companies pay → Companies decide → Participants execute
sihlhack:     Participants pay → Participants decide → Participants execute
```

- CHF 150 registration (70% prize pool, 30% ops), participants vote on projects
- Companies: data only, no money/influence | All code Apache 2.0
- Public finances, auto-refunds if minimum not met
- Reject features moving toward corporate model

## Tech Stack

Next.js 16 (App Router, TS strict), Tailwind CSS 3, Vercel Postgres + Drizzle, Vercel Blob
Auth: Magic link (Resend), Payments: Stripe Connect (manual), SWR cache, Heroicons

**Env:** POSTGRES_URL, BLOB_READ_WRITE_TOKEN, STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET, NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY, RESEND_API_KEY, CRON_SECRET, NEXT_PUBLIC_SITE_URL

## Key Directories

- `/app`: Next.js (api, auth, admin, challenges, dashboard, proposals, registration, team)
- `/components`: React (auth, challenges, data, landing, proposals, registration, ui, visualizations)
- `/lib`: Utilities (db/, auth.ts, stripe.ts, email.ts, funds.ts, refunds.ts, admin.ts, roles.ts)
- `/future-comms`: Offline content (investor pitch, post-reg emails, detailed docs)

### Page Content Strategy

The website is optimized for conversion with progressive disclosure:

**Homepage (Fast-Track Flow):**
```
Hero → Three Questions → QuickCTA → Who Should Join → Before/After →
Why It Matters → Privacy → Fund Transparency → FAQ (8 questions) →
Timeline → Final CTA
```

**Content moved to subpages:**
- Energy Trilemma/Thermal Paths → `/about`
- Compute Scenarios → `/challenges`
- Prototype Visualization → `/challenges`
- Data Providers/Sponsors → `/about`
- Endgame Vision → `future-comms/` (offline pitch materials)
- Post-Event Paths → `future-comms/` (post-registration emails)

**Communication Principles:**
- Don't overexplain on landing page; leave gaps for curiosity
- Depth content on subpages for committed visitors
- Technical details for builders, not for conversion
- Endgame/investor content kept offline

### Database Schema

Core tables in `/lib/db/schema.ts`:

- **participants**: User accounts with role/skill matching, email preferences
- **payments**: Stripe payment tracking, refund timestamps
- **budgetPositions**: Event budget breakdown (fixed vs per-participant costs)
- **projectProposals**: Participant-submitted project ideas
- **proposalVotes**: One vote per participant per proposal
- **companies**: Data partner profiles with NDA tracking
- **historicalData**: Uploaded datasets with metadata

Key constraint: all financial amounts stored as integers in centimes (CHF 150 = 15000).

### Authentication Flow

1. User enters email → `/api/auth/magic-link` sends link via Resend
2. Link contains hashed token, valid for 24 hours
3. Clicking link → `/auth/verify?token=X` validates and creates session
4. Session stored as httpOnly cookie, verified at `/api/auth/session`
5. Logout clears cookie at `/api/auth/logout`

No passwords ever. All sensitive tokens hashed before storage.

### Payment & Refund System

1. Registration creates Stripe customer (stored in participants table)
2. Checkout flow: `/api/stripe/checkout` creates PaymentIntent
3. Webhook at `/api/stripe/webhook` handles success/failure
4. Automatic refund trigger: `/api/cron/check-event-status` runs daily
5. Refund logic in `lib/refunds.ts`: if participants < minimum, refund all payments

All payment state stored durably in database, not reliant on Stripe API state.

### Fund Transparency

- `/api/funds` returns real-time fund calculations
- Uses `budgetPositions` table for break-even analysis
- Response includes: total collected, spent, remaining, days to event
- Visible on homepage countdown timer

## Development Commands

```bash
npm run dev              # Start dev server (localhost:3000, hot reload)
npm run build            # Build for production (checks TypeScript)
npm run start            # Start production server (local)
npm run lint             # Run Next.js ESLint (TS + React rules)

# Database management
npm run db:push          # Push schema changes to live database (⚠️ destructive)
npm run db:generate      # Generate migration files from schema changes
npm run db:migrate       # Run pending migrations
npm run db:studio        # Open Drizzle Studio UI (localhost:3001)
```

## Multi-Agent Workflow

| Agent | Task | Trigger |
|-------|------|---------|
| architect | Design, schema, API contracts | Major features, DB changes |
| frontend | UI, pages, styling, client effects | Component work, layout |
| backend | API, queries, auth | Endpoints, complex logic |
| payment | Stripe, funds, refunds | Payment flows, billing |
| reviewer | Code review, security, bugs | Pre-deployment QA |
| deployer | Deployment, environment | Production push |

**Protocol:** Agent work → Discussion file (`.claude/discussions/`) → `/reviewer` → Resolution → `/deployer`

## Writing

- Inclusive: "Teilnehmende" (not "Teilnehmer"), English role titles
- Swiss: `CHF 150`, `CHF 11'000` (apostrophe separator)

## Code Standards

- **Financial amounts**: Always store as integers in centimes
- **Responsive design**: Mobile-first, test on small screens first
- **Accessibility**: Focus states, ARIA labels, keyboard navigation
- **Authentication**: Magic links only, never passwords
- **Fund transparency**: Public display at all times
- **Type safety**: TypeScript strict mode enabled

## Swiss Compliance

Legal: Verein/GmbH, liability insurance, German `/agb` + `/datenschutz`
DSG: DPA vendors, no PII logs, breach notification, data access/deletion
Payments: No escrow language, Stripe 90d payout, VAT, public transparency

## Key Business Logic Files

- `/lib/db/schema.ts` - Complete Drizzle schema with all tables
- `/lib/auth.ts` - Magic link token generation and session verification
- `/lib/stripe.ts` - Stripe client configuration
- `/lib/refunds.ts` - Automatic refund logic and triggers
- `/lib/funds.ts` - Fund calculation and break-even analysis
- `/lib/roles.ts` - Hackathon role definitions and matching
- `/lib/email.ts` - Email template library (Resend)
- `/app/api/stripe/webhook/route.ts` - Stripe webhook handler (critical)
- `/app/api/cron/check-event-status/route.ts` - Refund trigger (production)

## Important Implementation Notes

### Magic Link Auth Token Security
- Tokens are SHA-256 hashed before storage in database
- Unhashed token only visible in email (never logged or displayed)
- 24-hour expiration enforced
- One-time use: token deleted after verification

### Stripe Integration Safeguards
- Payment state stored redundantly in database (not just Stripe API)
- Webhook signature verification required (no unsigned requests)
- Test mode and production keys completely separate
- Manual payout enabled (not automatic sweep)

### Financial Calculations
- All amounts in centimes internally, displayed as CHF to users
- Break-even calculation: fixed costs + (per-participant cost × expected participants)
- Refund trigger checks: current participants < minimum && days to event < threshold
- No floating-point arithmetic: all integer math

### Database Migrations
- Schema changes go in `/lib/db/schema.ts`
- Run `npm run db:generate` to create migration files
- Review generated SQL before running `npm run db:push` on production
- Migrations are timestamped and cumulative (never modify existing migrations)

## Common Tasks

**New Participant Flow:** Form component → API route → update `participants` schema → `lib/roles.ts`
**New Admin Feature:** Page `/app/admin/` → API `/app/api/admin/` → use `isAdmin()` from `lib/admin.ts`
**Financial Change:** Discussion file → `lib/funds.ts` → schema → `db:generate` → `db:push` → test
**Deploy:** Commit → lint → discussion → `/reviewer` → `/deployer` → Vercel via GitHub

## Timeline & Thresholds

- April 2026: Pilot #1 (Sihl-Sim API, 18h, free, 10-20)
- Mai 2026: Pilot #2 (Sihl-Sim Iteration, 18h, free, 10-20)
- Historik Hack: Async archive research (2-4 weeks pre-event, unlimited)
- **Main:** September 2026 (3d, CHF 150, 100 min for break-even)
- Prize: 70% revenue, auto-refund if <100 participants final weeks

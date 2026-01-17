# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

sihlhack.ch is Switzerland's first participant-oriented hackathon building the Sihlicon Hub: an Active Energy Node combining Battery, Compute, Heat, and Resilience. The hackathon inverts the traditional model where participants fund the event, propose challenges, and own all outcomes under Apache 2.0.

Read STRATEGY.md for the authoritative vision and non-negotiable principles.

## Core Model (Non-Negotiable)

The fundamental inversion that defines this project:

```
Traditional:  Companies pay → Companies decide → Participants execute
sihlhack:     Participants pay → Participants decide → Participants execute
```

Key principles never to dilute:
- Participants fund through registration fees (CHF 150)
- 70% of collected funds go to prize pool, 30% to operations
- Participants propose and vote on projects
- Companies contribute historical data only, never money or influence
- All code is Apache 2.0: participants own their work
- All finances public in real time
- Automatic refunds if minimum threshold not met

Reject any features or changes that move toward traditional corporate hackathon dynamics.

## Tech Stack

- **Framework**: Next.js 16 (App Router), TypeScript (strict mode)
- **Styling**: Tailwind CSS 3 with custom design system
- **Database**: Vercel Postgres + Drizzle ORM
- **Storage**: Vercel Blob
- **Auth**: Magic link via Resend (no passwords ever)
- **Payments**: Stripe Connect with manual payouts
- **Data fetching**: SWR for client-side caching
- **Icons**: Heroicons React (solid style)

Environment variables required: `POSTGRES_URL`, `BLOB_READ_WRITE_TOKEN`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`, `RESEND_API_KEY`, `CRON_SECRET`, `NEXT_PUBLIC_SITE_URL`

## Architecture

### Directory Structure

```
/app                    - Next.js App Router pages and routes
  /api                  - API endpoints (auth, payments, proposals, admin)
  /auth                 - Authentication pages (login, verify)
  /admin                - Admin dashboard pages
  /challenges           - Challenge descriptions and thermal architecture
  /company              - Company profile and NDA flows
  /dashboard            - Participant dashboards
  /proposals            - Project proposal pages
  /register             - Registration flow
  /team                 - Team matching interface

/components             - React components organized by feature
  /auth                 - Login, verification components
  /challenges           - Challenge cards, thermal paths
  /data                 - Data catalog display
  /landing              - Homepage components (hero, features, FAQ)
  /proposals            - Proposal forms and listings
  /registration         - Registration form components
  /ui                   - Reusable UI (buttons, inputs, modals, etc.)
  /visualizations       - Data visualizations and charts

/lib                    - Utilities and business logic
  /db                   - Drizzle schema and migrations
  /admin.ts             - Admin-only operations
  /auth.ts              - Session and token management
  /email.ts             - Email templates (Resend)
  /funds.ts             - Fund calculations and breakeven
  /refunds.ts           - Automatic refund logic
  /roles.ts             - Hackathon role definitions
  /stripe.ts            - Stripe client wrapper
  /icon-mapping.ts      - Heroicon name to role/skill mapping
  /utils.ts             - Common utilities

/public                 - Static assets, images, data files

/drizzle                - Migration files (auto-generated)

/.claude                - Multi-agent discussion files
```

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

## Multi-Agent Development Workflow

This project uses specialized agents for different concerns. Coordination happens through discussion files:

### Agent Roles

| Agent | Responsibility | When to Use |
|-------|---------------|------------|
| `/architect` | System design, schema changes, API contracts | Planning major features, database changes |
| `/frontend` | UI, pages, styling, client-side effects | Component work, page layout, responsive design |
| `/backend` | API routes, database queries, auth logic | API endpoints, complex business logic |
| `/payment` | Stripe integration, fund calculations, refunds | Payment flows, financial transactions |
| `/reviewer` | Code review, security, bug detection | Pre-deployment QA, security audit |
| `/deployer` | Deployment orchestration, environment setup | Final deployment to production |

### Discussion Protocol

Before any deployment:

1. **Agent Work**: Each agent completes assigned tasks
2. **Documentation**: Create discussion file in `.claude/discussions/YYYY-MM-DD-[topic].md`
3. **Review**: `/reviewer` analyzes all changes and discussions
4. **Resolution**: Issues discussed and resolved in response sections
5. **Deployment**: `/deployer` proceeds only after consensus

Discussion file template:

```markdown
# Discussion: [Topic]
Date: YYYY-MM-DD
Agent: [agent-name]
Status: [open|resolved|blocked]

## Context
What triggered this work

## Findings
What was discovered or built

## Concerns
Potential issues, security risks, edge cases

## Proposed Actions
Recommended next steps

## Responses
[Other agents add input here]
```

## Writing Guidelines

### German Text
- Always use active voice (Aktiv): "Wir bauen" not "Es wird gebaut"
- Direct, action-oriented verbs
- No passive voice constructions

### Swiss Number Formatting
- Currency: always `CHF` prefix, e.g., `CHF 150`
- Thousands separator: apostrophe, not comma: `CHF 11'000` not `CHF 11,000`
- Examples: `CHF 4'500`, `CHF 105'000`, `CHF 1'234.50`

### Punctuation
- Avoid em dashes, en dashes, hyphens in prose
- Use commas, colons, semicolons to structure sentences

## Code Standards

- **Financial amounts**: Always store as integers in centimes
- **Responsive design**: Mobile-first, test on small screens first
- **Accessibility**: Focus states, ARIA labels, keyboard navigation
- **Authentication**: Magic links only, never passwords
- **Fund transparency**: Public display at all times
- **Type safety**: TypeScript strict mode enabled

## Swiss Compliance Requirements

Before collecting real payments, ensure these legal requirements are met:

### Legal & Governance
- Legal entity established (Verein or GmbH)
- Event liability insurance (Haftpflicht-Versicherung)
- Terms of participation at `/agb` in German
- Code of conduct at appropriate route
- Historical data access agreements with companies

### Data Protection (DSG)
- Privacy policy at `/datenschutz` in German
- Data Processing Agreements with Vercel, Stripe, Resend
- No personally identifiable information in logs or public displays
- Breach notification procedure documented
- User access/deletion/export request process implemented

### Payments & Finances
- Avoid "escrow" language (not licensed for escrow services)
- Respect Stripe 90-day payout constraint
- VAT (MWST) assessment and reporting with accountant
- Public budget transparency maintained

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

### Adding a New Participant Flow
1. Create form component in `/components/registration/`
2. Create API route in `/app/api/` to handle submission
3. Add new fields to `participants` table schema if needed
4. Update `lib/roles.ts` with new role/skill options
5. Use `/backend` agent for database work, `/frontend` for UI

### Adding an Admin Feature
1. Create page in `/app/admin/` (protected by auth middleware)
2. Add API route in `/app/api/admin/` with admin check
3. Import `isAdmin()` from `lib/admin.ts` to verify permissions
4. Document in admin section of schema

### Changing Financial Model
1. Document changes in discussion file first
2. Update budget table or calculations in `lib/funds.ts`
3. Add new fields to schema if needed
4. Run `npm run db:generate` then `npm run db:push`
5. Update `/api/funds` response format if needed
6. Test break-even calculation edge cases

### Deploying to Production
1. Ensure all changes are committed and pushed to GitHub
2. All tests passing, lint clean: `npm run lint`
3. Create discussion documenting what changed and why
4. Get approval from `/reviewer` agent
5. Use `/deployer` agent to push to Vercel (connected via GitHub)

## Swiss Context Notes

- **Pilot event (Snack-Hackathon)**: April/May 2026 (2 days, free, 30-40 participants)
- **Main event date**: September 2026 (3 days)
- Target participants: 100 at CHF 150 registration
- Prize pool: 70% of revenue (percentage-based, not fixed amount)
- Event minimum threshold: approximately 100 participants for break-even
- Automatic refunds triggered if participants drop below minimum in final weeks
- All terminology uses Swiss German where appropriate (Sihltal, LEG, etc.)
- See CRITICAL-ANALYSIS.md for vulnerabilities and strategic pivots

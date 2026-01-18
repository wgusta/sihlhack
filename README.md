# SIHLHACK.CH

Switzerland's first participant-oriented hackathon building the **Sihlicon Hub**: an Active Energy Node combining Battery + Compute + Heat + Resilience for decentralized energy infrastructure.

## Quick Links

| Document | Description |
|----------|-------------|
| [STRATEGY.md](./STRATEGY.md) | **Authoritative strategy: vision, principles, Swiss compliance** |
| [CONCEPT.md](./CONCEPT.md) | The vision, heritage, and participant model |
| [TECHNICAL-REQUIREMENTS.md](./TECHNICAL-REQUIREMENTS.md) | Tech stack, database schema, APIs |
| [PAYMENT-SYSTEM.md](./PAYMENT-SYSTEM.md) | Stripe integration, fund holding, automatic refunds |
| [DESIGN-SYSTEM.md](./DESIGN-SYSTEM.md) | Colors, typography, historic transformation effects |
| [SITE-STRUCTURE.md](./SITE-STRUCTURE.md) | Pages, routes, navigation |
| [IMPLEMENTATION-ROADMAP.md](./IMPLEMENTATION-ROADMAP.md) | Phases and file breakdown |
| [BUILD-PROMPT.md](./BUILD-PROMPT.md) | AI prompt for building the project |
| [METRICS-AND-RISKS.md](./METRICS-AND-RISKS.md) | Success criteria, risks, and Swiss legal requirements |

## Executive Summary

**sihlhack.ch** is a sub-brand of sihliconvalley.ch presenting a new hackathon model where:

- **Participants build the Sihlicon Hub**: an Active Energy Node (Battery + Server + Heat + Resilience)
- **Three mandatory challenges**: End-to-End Demo-Kit, Hardware Safety, Grid-OS Controller
- **Open thermal architecture**: Teams choose between Immersion Cooling, Water Loop, or Heat Pump Integration
- **Open-source tools only**: Apache-2.0/MIT licensed resources for commercial LEG compatibility
- **Prize money comes from participants**, not corporate sponsors
- **All finances are public** with automatic refunds if event is cancelled

## Core Innovation

**The Sihlicon Hub Concept:**
- **Active Energy Node**: Server + Battery + Heat + Resilience in one system
- **Time-Shift Architecture**: Solar energy stored in batteries, used for compute and heat when needed
- **Load Shedding**: Grid stable? Run compute. Grid down? Power the neighborhood.
- **Three Thermal Paths**: Teams evaluate and choose (Immersion, Water Loop, Heat Pump)
- **Deferred Compute**: Batch jobs scheduled based on solar availability

**The Hackathon Model:**
- Participants pay registration fees (CHF 150)
- 30-36 teams compete on 3 mandatory packages
- Multiple teams per package, best solution wins
- Prize pool distributed: 35% Demo-Kit, 35% Hardware Safety, 20% Grid-OS, 10% Best Integration
- All code is Apache 2.0 - participants own their work

## Visual Concept

Black and white historical photographs and data tables "develop" into colorful modern insights, representing the transformation of forgotten industrial knowledge into new paradigms.

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS 3
- Vercel Postgres + Drizzle ORM
- Vercel Blob (file storage)
- Magic Link Auth (via Resend)
- Stripe Connect (Manual Payouts)
- Resend (Email)
- Vercel (Hosting)

## Brand Alignment

This project extends the sihliconvalley.ch design system:
- Same fonts: Playfair Display, IBM Plex Mono, Permanent Marker
- Same core colors: deep-pink, teal, sun-red, brand-black, off-white
- Extended with historic palette: sepia, cream, rust, insight-cyan

## Current Status (January 2026)

### ✅ Completed Features

**Homepage (Streamlined):**
- Hero section with tagline: "Server, die Häuser heizen. Batterien, die das Quartier versorgen."
- Three engineering challenges: Zeit-Frage, Wärme-Frage, Resilienz-Frage
- QuickCTA for immediate conversion after Three Questions
- Condensed FAQ (8 questions, punchy answers)
- Fund transparency calculator
- Event timeline
- Final CTA

**About/Concept Page:**
- Vision: Sihlvalley vs Silicon Valley attitude
- Problem → Solution visualization (VORHER/NACHHER)
- Role-based hackathon explanation (11 roles)
- Open source commitment with transparency messaging
- Energy Quadrilemma and Thermal Paths (moved from homepage)
- Partner/Sponsor ecosystem (moved from homepage)
- Legal framework FAQ

**Challenges Page:**
- Three mandatory packages with detailed descriptions
- Thermal Architecture Challenge: Three paths (Oil, Water, Heat Pump)
- Sihlicon Hub v1.0 Prototype visualization (moved from homepage)
- Compute Scenarios: What runs on the Hub (moved from homepage)
- Team Red: Security challenge with selection process
- Competition model with scoring criteria
- Glossary accordion: 26 technical terms explained

**Core Policies:**
- **Open Source First**: All code Apache 2.0, participants own their work
- **Permissive Licenses Only**: Only Apache-2.0/MIT tools recommended for commercial LEG use
- **Thermal Architecture Open**: Teams choose their path (Immersion, Water, Heat Pump)
- **Participant Agency**: "Du baust es" - participants solve the problems
- **Transparency**: Budget public, prize pool transparent, no hidden agendas

**Technical Infrastructure:**
- Next.js 16 with App Router
- TypeScript strict mode
- Tailwind CSS with custom design system
- Drizzle ORM with complete schema
- Magic link authentication ready
- Stripe integration prepared
- Vercel deployment active

### 🚀 Live Site

**Production:** https://sihlhack.ch

### 📅 Event Details

- **Pilot:** Snackathons (April/May 2026, 2 days, 10-20 participants, free)
- **Main Event:** September 2026 (3 days)
- **Location:** Zürich area
- **Registration:** CHF 150 per participant
- **Model:** 70% to prize pool (35% Demo-Kit, 35% Hardware Safety, 20% Grid-OS, 10% Best Integration), 30% operations
- **Teams:** 20 teams of 5 people
- **Participants:** 100 target
- **Refund Policy:** Automatic refund if minimum participants not reached

## Key Design Decisions

### Active Energy Node Architecture
The Sihlicon Hub is not a "water heater" - it's an Active Energy Node that:
- Stores solar energy in batteries (time-shift)
- Runs compute jobs when energy is available (deferred compute)
- Provides heat to buildings (thermal recovery)
- Powers neighborhoods during grid outages (load shedding)

### Open Source Commitment
- All code Apache 2.0 - participants can fork, compete, commercialize
- Only permissive licenses (Apache-2.0/MIT) recommended for tools
- AGPL-3.0 tools excluded (Grafana, OpenEMS) to protect commercial LEG use
- Resource submission form allows community to suggest additional repos

### Participant Agency
- "Du/Ihr" voice throughout - participants own the solutions
- Three thermal paths, teams choose
- No prescribed solutions, only constraints
- Cheeky Sihlvalley vs Silicon Valley attitude

## Development Commands

```bash
# Development
npm run dev              # Start dev server (localhost:3000)

# Database
npm run db:push          # Push schema changes to database
npm run db:generate      # Generate migrations
npm run db:studio        # Open Drizzle Studio

# Build & Deploy
npm run build            # Build for production
npm run start            # Start production server
npx vercel --prod        # Deploy to production
```

## Environment Setup

Required environment variables:
- `POSTGRES_URL` - Vercel Postgres connection
- `BLOB_READ_WRITE_TOKEN` - Vercel Blob storage
- `STRIPE_SECRET_KEY` - Stripe API key
- `RESEND_API_KEY` - Resend email API
- `NEXT_PUBLIC_SITE_URL` - Site URL (https://sihlhack.ch)

## Next Steps

1. **Database Setup:** Configure Vercel Postgres and run migrations
2. **API Keys:** Set up Stripe and Resend accounts
3. **Content:** Add historical sample data and company profiles
4. **Testing:** Full flow testing (registration, proposals, payments)
5. **Legal:** Terms of Service, Privacy Policy, NDA templates
6. **Partnerships:** Reach out to Sihl Valley companies and libraries

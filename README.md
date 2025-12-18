# SIHLHACK.CH

Switzerland's first participant-oriented hackathon focused on digitalizing historical industrial records from the Sihl Valley.

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

- **Participants front the costs** and decide which projects to pursue
- **Companies share historical data** from Zurich's industrial era
- **AI digitalizes records** using image recognition and OCR
- **Prize money comes from participants**, not corporate sponsors
- **All finances are public** with automatic refunds if event is cancelled

## Core Innovation

Traditional hackathons: Companies pay, companies set challenges, participants compete for company prizes.

**SihlHack inverts this:**
- Participants pay registration fees
- Participants propose and vote on projects
- Prize pool comes from participant contributions
- Companies contribute data, not money
- All finances are public and transparent

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

## Current Status (December 2024)

### ✅ Completed Features

**Homepage:**
- Hero section with live prize pool tracker
- Countdown timer to registration deadline
- Historic photo reveal effect (grayscale to color)
- "Why It Matters" section (save knowledge + AI-ready data)
- Privacy section (local-first AI approach)
- Data providers section
- Dynamic funding transparency
- FAQ accordion
- Event timeline
- Typewriter logo animation

**About/Concept Page:**
- Role-based hackathon explanation
- Traditional vs. SihlHack comparison
- How it works (4-step process)
- Data privacy & AI processing policy (3-tier approach)
- Open source commitment
- Library partnership plans
- Comprehensive FAQ

**Core Policies:**
- Local-first AI: Primary use of local LLMs and offline processing
- Cloud AI only with data provider consent
- Three-tier data protection (local/cloud/protected)
- Open source pipelines and datasets (MIT/Apache 2.0)
- Partnerships with Zentralbibliothek Zürich, ETH-Bibliothek, Schweizerisches Bundesarchiv

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

- **Date:** End of August / Beginning of September 2025 (TBD)
- **Location:** To be announced
- **Registration:** CHF 480 per participant
- **Model:** 70% to prize pool, 30% to operations
- **Refund Policy:** Automatic refund if minimum participants not reached

## Key Design Decisions

### Privacy First
All historical data processing prioritizes local AI (Llama, Mistral, local OCR) with cloud providers (Anthropic, OpenAI, Google) only used with explicit consent from data providers.

### Open Source Commitment
All processing pipelines, ML models, and structured datasets will be released under MIT/Apache 2.0 licenses for maximum reusability and scientific integrity.

### Public Library Partnerships
Seeking long-term hosting partnerships with Swiss institutions to ensure sustainable access to digitized historical data beyond the hackathon event.

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

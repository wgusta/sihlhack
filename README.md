# SIHLHACK.CH

Switzerland's first participant-oriented hackathon focused on digitalizing historical industrial records from the Sihl Valley.

## Quick Links

| Document | Description |
|----------|-------------|
| [CONCEPT.md](./CONCEPT.md) | The vision, heritage, and participant model |
| [TECHNICAL-REQUIREMENTS.md](./TECHNICAL-REQUIREMENTS.md) | Tech stack, database schema, APIs |
| [PAYMENT-SYSTEM.md](./PAYMENT-SYSTEM.md) | Stripe integration, escrow, automatic refunds |
| [DESIGN-SYSTEM.md](./DESIGN-SYSTEM.md) | Colors, typography, historic transformation effects |
| [SITE-STRUCTURE.md](./SITE-STRUCTURE.md) | Pages, routes, navigation |
| [IMPLEMENTATION-ROADMAP.md](./IMPLEMENTATION-ROADMAP.md) | Phases and file breakdown |
| [BUILD-PROMPT.md](./BUILD-PROMPT.md) | AI prompt for building the project |
| [METRICS-AND-RISKS.md](./METRICS-AND-RISKS.md) | Success criteria and risk mitigation |

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

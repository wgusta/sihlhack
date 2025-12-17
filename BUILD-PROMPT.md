# Build Prompt for sihlhack.ch

Use this prompt to initialize the project with an AI coding assistant.

---

## The Prompt

```
Create a Next.js 16 application called "sihlhack" for sihlhack.ch, Switzerland's first participant-oriented hackathon focused on digitalizing historical industrial records from the Sihl Valley.

## Brand Context

This is a sub-brand of sihliconvalley.ch. Use the same design language:

**Fonts:**
- Playfair Display (display headings)
- IBM Plex Mono (technical, data, code)
- Permanent Marker (accent text, warnings)

**Inherited Colors:**
- deep-pink: #D9366B
- teal: #2A7C82
- sun-red: #E62F2D
- brand-black: #1A1A1A
- brand-white: #FFFFFF
- off-white: #F5F3E8

**Extended Colors for Historic Theme:**
- historic-sepia: #8B7355
- historic-cream: #F5F0E1
- industrial-rust: #8B4513
- insight-cyan: #4ECDC4
- fund-green: #22C55E
- refund-amber: #F59E0B

## Core Concept

Participants pay registration fees upfront. 70% goes to prize pool, 30% to operations. If minimum participants not reached by deadline, everyone gets automatic refunds. All finances are public.

## Technical Stack (Lean Vercel-Native)

- Next.js 16 with App Router
- TypeScript (strict mode)
- Tailwind CSS 3
- Vercel Postgres + Drizzle ORM (type-safe database)
- Vercel Blob (file storage for historical documents)
- Magic Link Auth via Resend (no passwords, email = identity)
- Stripe Connect with Manual Payouts
- Resend for transactional emails
- Vercel deployment with Cron
- SWR for data fetching

## Key Features to Implement

### 1. Landing Page
- Hero section with historic B&W photo that "develops" into color on scroll
- Concept explainer (inverted hackathon model)
- Live fund tracker widget
- Event timeline
- Registration CTA

### 2. Magic Link Authentication
- User enters email
- Server generates token, stores in participants table
- Email sent via Resend with magic link
- Token verified, HTTP-only session cookie created
- No passwords anywhere

### 3. Payment System
- Stripe Checkout integration
- Funds held until event (manual payouts)
- Webhook handlers for payment events
- Automatic refund processing via cron job
- Public fund tracker with SWR polling

### 4. Fund Transparency
- /funds page showing:
  - Total collected (with SWR revalidation)
  - Prize pool allocation (70%)
  - Operating costs (30%)
  - Participant count vs. minimum threshold
  - Days until deadline
  - Transaction ledger (anonymized)

### 5. Proposal System
- Participants submit project ideas
- Vote on proposals (one vote per participant per proposal)
- Filter and sort proposals
- Proposal detail pages

### 6. Data Catalog
- Browse historical data from companies
- Filter by type (photograph, ledger, blueprint, document)
- OCR status indicators
- Company profiles

### 7. Company Portal
- Company registration
- Digital NDA signing
- Secure file upload to Vercel Blob
- Submission status tracking

## Database Schema (Drizzle ORM)

Key tables:
1. participants (id, email, name, stripe_customer_id, registration_status, magic_link_token, magic_link_expires_at)
2. payments (id, participant_id, stripe_payment_intent_id, amount_chf, status)
3. fund_allocations (id, category, amount_chf, percentage)
4. project_proposals (id, proposer_id, title, description, vote_count, status)
5. proposal_votes (id, proposal_id, participant_id)
6. companies (id, name, contact_email, nda_signed, verified)
7. historical_data (id, company_id, title, data_type, blob_url, ocr_status)
8. event_config (single row: event_date, registration_deadline, refund_deadline, min_participants, registration_fee_chf)

## Visual Transformation Effect

The core visual metaphor is "photographic development":

```css
.historic-reveal img {
  filter: grayscale(100%) sepia(20%) contrast(1.1);
  transition: filter 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.historic-reveal:hover img {
  filter: grayscale(0%) sepia(0%) contrast(1);
}
```

Historic B&W images gradually reveal color on hover or scroll, representing old knowledge transforming into new insights.

## Automatic Refund Logic

Create a Vercel cron job that runs daily:
1. Check if refund_deadline has passed
2. If participant count < min_participants:
   - Mark event as cancelled
   - Process refunds for all completed payments via Stripe
   - Send cancellation emails via Resend
3. If threshold met:
   - Lock funds for event
   - Send confirmation emails

## Payment Rules

- Registration fee: configurable (e.g., 15000 centimes = 150 CHF)
- 70% → prize_pool allocation
- 30% → operations allocation
- All allocations publicly visible in /funds
- Stripe fees absorbed by organizers on refund

## File Structure

Follow App Router conventions:
- /app/(marketing)/ for public pages
- /app/(auth)/ for authentication and registration
- /app/(dashboard)/ for participant dashboard
- /app/(company)/ for company portal
- /app/(admin)/ for admin dashboard
- /app/api/ for all API routes including /api/auth/magic-link, /api/auth/verify
- /components/ organized by feature (auth/, landing/, payment/, proposals/, data/)
- /lib/db/ for Drizzle schema and client
- /lib/auth.ts for magic link helpers
- /lib/ for Stripe, email, refund utilities

## Start With

1. Project setup and Tailwind configuration
2. Drizzle schema and Vercel Postgres setup
3. Magic link authentication flow
4. Landing page with hero and fund tracker widget
5. Registration flow with Stripe Checkout
6. Build out remaining features

## Important Notes

- Use active voice in all German text (no passive)
- Avoid em dashes in copy
- All financial amounts stored in centimes (integer)
- Use SWR for client-side data fetching
- Mobile-first responsive design
- Accessibility: proper focus states, ARIA labels
```

---

## Quick Start Commands

```bash
# Create project
npx create-next-app@latest sihlhack --typescript --tailwind --app --src-dir=false

# Navigate to project
cd sihlhack

# Install dependencies
npm install @vercel/postgres @vercel/blob drizzle-orm stripe @stripe/stripe-js resend zod date-fns swr clsx tailwind-merge
npm install -D drizzle-kit @tailwindcss/aspect-ratio

# Link to Vercel
vercel link

# Create Postgres database
vercel postgres create sihlhack-db

# Create Blob storage
vercel blob create sihlhack-files

# Pull environment variables
vercel env pull .env.local

# Push database schema
npx drizzle-kit push

# Run development server
npm run dev
```

## Environment Variables Template

```bash
# .env.local

# Vercel (auto-populated after vercel env pull)
POSTGRES_URL=
POSTGRES_PRISMA_URL=
POSTGRES_URL_NON_POOLING=
BLOB_READ_WRITE_TOKEN=

# App
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Stripe
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...

# Resend
RESEND_API_KEY=re_...

# Cron
CRON_SECRET=generate_a_random_string

# Feature Flags
NEXT_PUBLIC_REGISTRATION_OPEN=true
NEXT_PUBLIC_PROPOSALS_OPEN=true
```

## Drizzle Setup

```typescript
// drizzle.config.ts
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './lib/db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
});
```

```bash
# Generate migrations
npx drizzle-kit generate

# Push to database (development)
npx drizzle-kit push

# Run migrations (production)
npx drizzle-kit migrate
```

## Vercel Cron Setup

```json
// vercel.json
{
  "crons": [
    {
      "path": "/api/cron/check-event-status",
      "schedule": "0 8 * * *"
    }
  ]
}
```

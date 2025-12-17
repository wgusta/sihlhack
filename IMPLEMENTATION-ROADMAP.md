# Implementation Roadmap

## Overview

The implementation is divided into 5 phases, each building on the previous. Estimated 50-60 files total.

## Phase 1: Foundation

**Goal**: Project setup, design system, landing page

### Tasks

1. **Initialize Next.js 16 Project**
   - `npx create-next-app@latest sihlhack --typescript --tailwind --app`
   - Configure TypeScript strict mode
   - Set up ESLint and Prettier

2. **Configure Tailwind with Brand Colors**
   - Extend sihliconvalley.ch color palette
   - Add historic and industrial colors
   - Configure font families

3. **Set Up Vercel Postgres + Drizzle**
   - Link Vercel project: `vercel link`
   - Create Postgres: `vercel postgres create sihlhack-db`
   - Pull env: `vercel env pull .env.local`
   - Install Drizzle: `npm install drizzle-orm @vercel/postgres`
   - Create schema in `lib/db/schema.ts`
   - Push schema: `npx drizzle-kit push`

4. **Create Base Layout Components**
   - `Header.tsx` with navigation
   - `Footer.tsx` with links
   - `Navigation.tsx` responsive menu
   - Root `layout.tsx`

5. **Build Design System Components**
   - `Button.tsx` (primary, secondary, ghost)
   - `Card.tsx` (base card component)
   - `Input.tsx` (form input)
   - `Badge.tsx` (status badges)
   - `Modal.tsx` (overlay modal)

6. **Create Landing Page**
   - `HeroSection.tsx` with historic reveal effect
   - `ConceptExplainer.tsx` three-column grid
   - `EventTimeline.tsx` visual roadmap
   - `CTASection.tsx` registration call-to-action

7. **Implement Historic Reveal Effect**
   - `HistoricReveal.tsx` component
   - CSS animations in globals.css
   - Intersection Observer for scroll trigger

### Files Created (Phase 1)

```
app/
├── layout.tsx
├── globals.css
├── page.tsx
├── (marketing)/
│   └── layout.tsx
components/
├── ui/
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Input.tsx
│   ├── Badge.tsx
│   └── Modal.tsx
├── layout/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Navigation.tsx
├── landing/
│   ├── HeroSection.tsx
│   ├── ConceptExplainer.tsx
│   ├── EventTimeline.tsx
│   └── CTASection.tsx
├── effects/
│   └── HistoricReveal.tsx
lib/
├── db/
│   ├── index.ts                    # Drizzle client
│   └── schema.ts                   # Drizzle schema
└── utils.ts
drizzle.config.ts
tailwind.config.js
```

**Total: ~20 files**

---

## Phase 2: Payment System

**Goal**: Stripe integration, checkout, fund tracking, refund automation

### Tasks

8. **Set Up Stripe Connect**
   - Create Stripe account
   - Configure manual payouts
   - Set up webhook endpoint
   - Store API keys in environment

9. **Build Checkout Flow**
   - `CheckoutForm.tsx` component
   - `/api/stripe/checkout/route.ts`
   - Success and cancel pages
   - Payment confirmation logic

10. **Implement Webhook Handler**
    - `/api/stripe/webhook/route.ts`
    - Handle `checkout.session.completed`
    - Handle `charge.refunded`
    - Update database via Drizzle

11. **Create Fund Tracker**
    - `FundTracker.tsx` main component
    - `FundTrackerWidget.tsx` for landing page
    - SWR for data fetching with polling
    - `/api/funds/route.ts` endpoint

12. **Build Transaction Ledger**
    - `TransactionLedger.tsx` component
    - Anonymized participant display
    - Sortable by date/amount

13. **Implement Refund Automation**
    - `lib/refunds.ts` logic
    - `/api/cron/check-event-status/route.ts`
    - `vercel.json` cron configuration
    - Email notifications on refund

14. **Create Funds Page**
    - `/funds/page.tsx`
    - Full fund tracker display
    - Transaction history
    - Countdown to deadline

### Files Created (Phase 2)

```
app/
├── api/
│   ├── auth/
│   │   ├── magic-link/route.ts
│   │   ├── verify/route.ts
│   │   └── logout/route.ts
│   ├── stripe/
│   │   ├── checkout/route.ts
│   │   └── webhook/route.ts
│   ├── funds/route.ts
│   └── cron/
│       └── check-event-status/route.ts
├── (auth)/
│   ├── auth/
│   │   ├── login/page.tsx
│   │   └── verify/page.tsx
│   └── register/
│       ├── page.tsx
│       └── success/page.tsx
├── (public)/
│   └── funds/page.tsx
components/
├── auth/
│   ├── MagicLinkForm.tsx
│   └── VerifyingSpinner.tsx
├── payment/
│   ├── FundTracker.tsx
│   ├── FundTrackerWidget.tsx
│   ├── TransactionLedger.tsx
│   ├── FeeBreakdown.tsx
│   └── RefundPolicy.tsx
├── registration/
│   ├── RegistrationForm.tsx
│   ├── StepIndicator.tsx
│   └── TermsCheckbox.tsx
lib/
├── auth.ts
├── stripe.ts
├── refunds.ts
├── funds.ts
└── email.ts
vercel.json
```

**Total: ~22 files**

---

## Phase 3: Participant Features

**Goal**: Registration, dashboard, proposals, voting

### Tasks

15. **Build Registration Flow**
    - Multi-step form component
    - Form validation with Zod
    - Terms acceptance
    - Stripe checkout redirect

16. **Create Participant Dashboard**
    - `/dashboard/page.tsx`
    - Status card showing registration
    - Quick action links
    - Event updates feed

17. **Implement Proposal Submission**
    - `ProposalForm.tsx` with markdown editor
    - `/api/proposals/route.ts` CRUD
    - `/proposals/new/page.tsx`
    - Data type selector

18. **Build Proposal Listing**
    - `/proposals/page.tsx`
    - `ProposalCard.tsx` component
    - `ProposalGrid.tsx` with filtering
    - `FilterBar.tsx` component

19. **Implement Voting System**
    - `/api/proposals/[id]/vote/route.ts`
    - `VoteButton.tsx` component
    - Vote count real-time updates
    - One vote per participant per proposal

20. **Create Proposal Detail Page**
    - `/proposals/[id]/page.tsx`
    - Full proposal display
    - Vote button
    - Related proposals

21. **Email Notifications**
    - Registration confirmation
    - Proposal submitted
    - Received votes
    - Event updates

### Files Created (Phase 3)

```
app/
├── api/
│   └── proposals/
│       ├── route.ts
│       └── [id]/
│           ├── route.ts
│           └── vote/route.ts
├── (dashboard)/
│   ├── layout.tsx
│   └── dashboard/
│       ├── page.tsx
│       ├── proposals/page.tsx
│       └── votes/page.tsx
├── (public)/
│   └── proposals/
│       ├── page.tsx
│       ├── new/page.tsx
│       └── [id]/page.tsx
components/
├── proposals/
│   ├── ProposalCard.tsx
│   ├── ProposalGrid.tsx
│   ├── ProposalForm.tsx
│   ├── VoteButton.tsx
│   └── FilterBar.tsx
hooks/
├── useSession.ts
└── useProposals.ts
types/
├── participant.ts
└── proposal.ts
```

**Total: ~18 files**

---

## Phase 4: Data Portal

**Goal**: Company registration, data upload, catalog browsing

### Tasks

22. **Build Company Registration**
    - `/company/register/page.tsx`
    - `/api/companies/route.ts`
    - Company profile form
    - Industry type selection

23. **Implement Digital NDA**
    - `/company/nda/page.tsx`
    - NDA text display
    - Signature capture (typed)
    - PDF generation for records

24. **Create File Upload System**
    - `DataUploader.tsx` component
    - `/api/upload/route.ts`
    - `/api/upload/presigned/route.ts`
    - File type validation
    - Progress indicators

25. **Build Data Catalog**
    - `/data-catalog/page.tsx`
    - `HistoricCard.tsx` component
    - `DataGrid.tsx` with filtering
    - `FilterSidebar.tsx`

26. **Implement Data Detail Page**
    - `/data-catalog/[id]/page.tsx`
    - Full metadata display
    - OCR text preview
    - Related items

27. **Create Company Dashboard**
    - `/company/dashboard/page.tsx`
    - Uploaded files list
    - Processing status
    - Contact support

28. **OCR Status Tracking**
    - `OCRStatusBadge.tsx`
    - Status updates via webhook (future)
    - Manual status update (admin)

### Files Created (Phase 4)

```
app/
├── api/
│   ├── companies/
│   │   ├── route.ts
│   │   └── [id]/route.ts
│   └── upload/
│       ├── route.ts
│       └── presigned/route.ts
├── (company)/
│   ├── layout.tsx
│   └── company/
│       ├── register/page.tsx
│       ├── upload/page.tsx
│       ├── dashboard/page.tsx
│       └── nda/page.tsx
├── (public)/
│   └── data-catalog/
│       ├── page.tsx
│       └── [id]/page.tsx
components/
├── data/
│   ├── HistoricCard.tsx
│   ├── DataGrid.tsx
│   ├── DataUploader.tsx
│   ├── FilterSidebar.tsx
│   └── OCRStatusBadge.tsx
lib/
└── supabase/
    └── admin.ts
types/
└── data.ts
```

**Total: ~16 files**

---

## Phase 5: Polish & Admin

**Goal**: Admin dashboard, security, SEO, final polish

### Tasks

29. **Build Admin Dashboard**
    - `/admin/page.tsx` overview
    - Protected routes with auth check
    - Stats and quick actions

30. **Participant Management**
    - `/admin/participants/page.tsx`
    - Participant list with search
    - Export to CSV
    - Status updates

31. **Payment Management**
    - `/admin/payments/page.tsx`
    - Payment list and details
    - Manual refund interface
    - Financial reporting

32. **Data Moderation**
    - `/admin/data/page.tsx`
    - Review uploaded data
    - Approve/reject submissions
    - Assign OCR processing

33. **Event Configuration**
    - `/admin/config/page.tsx`
    - Edit dates and fees
    - Toggle registration
    - Manual event cancellation

34. **About Page**
    - `/about/page.tsx`
    - Sihl Valley story
    - Team profiles
    - FAQ section

35. **SEO Optimization**
    - Metadata in all pages
    - OpenGraph images
    - Structured data (JSON-LD)
    - Sitemap generation

36. **Security Audit**
    - Input validation everywhere
    - CSRF protection
    - Rate limiting on APIs
    - Content Security Policy

37. **Performance Optimization**
    - Image optimization
    - Code splitting
    - Caching strategies
    - Core Web Vitals check

38. **Testing**
    - Payment flow end-to-end
    - Refund automation test
    - Mobile responsiveness
    - Accessibility (a11y) check

### Files Created (Phase 5)

```
app/
├── (admin)/
│   ├── layout.tsx
│   └── admin/
│       ├── page.tsx
│       ├── participants/page.tsx
│       ├── payments/page.tsx
│       ├── data/page.tsx
│       ├── config/page.tsx
│       └── refunds/page.tsx
├── (marketing)/
│   └── about/page.tsx
├── sitemap.ts
└── robots.ts
components/
├── admin/
│   ├── ParticipantTable.tsx
│   ├── PaymentTable.tsx
│   ├── DataModerationCard.tsx
│   └── ConfigForm.tsx
middleware.ts (auth protection)
```

**Total: ~15 files**

---

## Summary

| Phase | Focus | Files | Cumulative |
|-------|-------|-------|------------|
| 1 | Foundation | ~20 | 20 |
| 2 | Payment | ~18 | 38 |
| 3 | Participants | ~18 | 56 |
| 4 | Data Portal | ~16 | 72 |
| 5 | Admin & Polish | ~15 | 87 |

**Total Estimated Files: ~87**

---

## Dependencies Installation

```bash
# Core
npm install next@latest react@latest react-dom@latest

# Database (Vercel Postgres + Drizzle)
npm install @vercel/postgres drizzle-orm
npm install -D drizzle-kit

# File Storage (Vercel Blob)
npm install @vercel/blob

# Payments
npm install stripe @stripe/stripe-js

# Email
npm install resend

# Utilities
npm install zod date-fns swr
npm install clsx tailwind-merge

# Development
npm install -D typescript @types/node @types/react @types/react-dom
npm install -D tailwindcss postcss autoprefixer
npm install -D @tailwindcss/aspect-ratio
npm install -D eslint eslint-config-next
```

---

## Environment Setup Checklist

- [ ] Create Vercel project: `vercel link`
- [ ] Add Vercel Postgres: `vercel postgres create sihlhack-db`
- [ ] Add Vercel Blob: `vercel blob create sihlhack-files`
- [ ] Pull environment: `vercel env pull .env.local`
- [ ] Create Stripe account (test mode first)
- [ ] Create Resend account
- [ ] Configure domain DNS
- [ ] Set all environment variables in Vercel dashboard
- [ ] Push database schema: `npx drizzle-kit push`
- [ ] Test Stripe webhook locally with CLI
- [ ] Deploy to Vercel: `vercel deploy`
- [ ] Configure Vercel cron
- [ ] Test end-to-end payment flow
- [ ] Test magic link auth flow

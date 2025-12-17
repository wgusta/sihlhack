# SihlHack Codebase Review (Codex)

## Scope
- Reviewed planning docs and specs in the repo (`README.md`, `CONCEPT.md`, `TECHNICAL-REQUIREMENTS.md`, `PAYMENT-SYSTEM.md`, `DESIGN-SYSTEM.md`, `SITE-STRUCTURE.md`, `IMPLEMENTATION-ROADMAP.md`, `METRICS-AND-RISKS.md`, `BUILD-PROMPT.md`).
- Reviewed current Next.js code: `app/`, `components/`, `lib/`, config files, and `vercel.json`. `app/api/` is empty and there are no feature pages beyond the landing page.

## Strengths
- Clear design language with Tailwind v4 tokens and custom effects (`app/globals.css`).
- Landing page sections and shared UI primitives are scaffolded (`app/page.tsx`, `components/ui/*`, `components/landing/*`).
- Database schema drafted for key entities in Drizzle (`lib/db/schema.ts`).
- Deployment wiring started (Vercel cron config, Blob/Postgres and Stripe deps in `package.json`).

## Findings (ordered by severity)

### Critical
- Core flows are missing: `app/api/` is empty and navigation points to pages that do not exist (`components/layout/Header.tsx:8-13`), so registration, auth, payments, proposals, data upload, and admin features are non-functional. `vercel.json` points to `/api/cron/check-event-status`, which is absent.
- Mock fund transparency: the “Live Fonds-Tracker” displays hard-coded demo numbers (`components/landing/FundTrackerWidget.tsx:7-17`), so the public fund view is misleading and not wired to real data or SWR.
- Auth token handling is unsafe in schema: `participants.magicLinkToken` is stored in plaintext with no hashing or expiration constraints (`lib/db/schema.ts:4-14`). If used as-is, leaked DB access would allow login forgery.

### Major
- Voting abuse possible: `proposal_votes` lacks a composite unique constraint on `(proposal_id, participant_id)` (`lib/db/schema.ts:53-58`), so a single participant can cast unlimited votes.
- Event config single-row assumption is fragile: `event_config.id` defaults to a random UUID (`lib/db/schema.ts:92-107`) with no seed data, making it hard to address a deterministic row (docs assume a fixed ID of 1). Prize vs operations percentages are independent integers (70/30) with no validation they sum to 100.
- Fund allocation integrity: `fund_allocations.category` has no uniqueness (`lib/db/schema.ts:28-35`), so duplicate rows per category are possible, which breaks transparency math.
- Required participant data conflicts with magic-link flow: `participants.name` is `notNull` (`lib/db/schema.ts:4-14`), but the auth concept creates users with email only; inserts will fail unless `name` is supplied up front.
- Content/UX gaps: hero references a non-existent image (`components/landing/HeroSection.tsx:38`; `public/images` is empty) and the paper texture path (`app/globals.css:94`) points to a missing asset (`public/textures` empty), so the main visual effect renders blank.
- Navigation leads to 404s: links to `/about`, `/proposals`, `/data-catalog`, `/funds`, `/register`, `/company/register` have no pages behind them, making the marketed flows unusable.

### Minor
- Fonts are pulled from Google via CSS (`app/globals.css:1`) instead of `next/font`, causing layout shift and missed automatic self-hosting/preload benefits.
- `generateToken` depends on `crypto.getRandomValues` (`lib/utils.ts:60-68`) without a Node fallback; this is fine in modern runtimes but will throw if Web Crypto is unavailable in certain build tools or during static generation.
- Design tokens and copy mix German and English; some CTAs use arrows/colons despite writing guidelines about avoiding hyphens/emdashes (minor brand consistency issue).

## Recommendations / Next Steps
1) Implement the backend surface: add the documented API routes under `app/api/*`, wire Stripe, magic-link auth, uploads, and the cron route so Vercel jobs do not 404.  
2) Secure auth: hash magic-link tokens, enforce expirations, add rate limiting, and introduce a real session mechanism (HMAC-signed cookies or server-side session store). Make `participants.name` optional until profile completion.  
3) Protect integrity: add unique constraints (votes, fund categories), validation on event config percentages, and deterministic seeding for the single `event_config` row.  
4) Replace mocks with live data: connect the fund tracker to `/api/funds` (with SWR/polling) and surface real participant counts and amounts.  
5) Fix assets and navigation: add the referenced hero/texture assets or swap to available imagery; scaffold stub pages for main nav targets to avoid 404s while features are built.  
6) Move fonts to `next/font` and preload an OpenGraph image to tighten CLS/SEO.  
7) Add test coverage for auth, checkout/webhooks/refunds, and vote uniqueness once routes exist.

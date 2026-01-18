# Technical Requirements

## Technology Stack

### Lean Vercel-Native Stack

| Layer | Technology | Rationale |
|-------|------------|-----------|
| **Framework** | Next.js 16 (App Router) | Same as sihliconvalley.ch |
| **Language** | TypeScript | Type safety, consistency |
| **Styling** | Tailwind CSS 3 | Same config as parent brand |
| **Fonts** | Playfair Display, IBM Plex Mono, Permanent Marker | Brand consistency |
| **Database** | Vercel Postgres | Native integration, zero config |
| **ORM** | Drizzle ORM | Type-safe, lightweight, SQL-like |
| **File Storage** | Vercel Blob | Simple uploads, native integration |
| **Auth** | Magic Links via Resend | No passwords, email = identity |
| **Payments** | Stripe Connect (Manual Payouts) | Swiss CHF support, escrow-like |
| **Email** | Resend | Transactional emails + magic links |
| **Hosting** | Vercel | Single platform for everything |
| **Cron Jobs** | Vercel Cron | Automated refund checks |

### Challenge Evaluation Infrastructure

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Orchestrator** | Node-RED (Apache-2.0) | Handles submissions, evaluations, scoring, leaderboard |
| **Capability Gateway** | MCP-Server | RBAC, audit logging, rate limiting, hides Node-RED |
| **Messaging** | NATS (Apache-2.0) | High-performance pub/sub between components |
| **Container Runtime** | k3s (Apache-2.0) | Lightweight Kubernetes for edge deployment |
| **Time-Series DB** | VictoriaMetrics (Apache-2.0) | Stores sensor data, metrics |
| **Monitoring** | Prometheus (Apache-2.0) | Metrics collection and querying |

### Why This Stack

1. **Single billing relationship** (Vercel)
2. **Fewer API keys** to manage
3. **Native integrations** reduce config complexity
4. **No external database connection** issues
5. **Stripe customer email = user identity** (simple auth model)

### Dependencies

```json
{
  "dependencies": {
    "next": "^16.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "tailwindcss": "^3.4.0",
    "@vercel/postgres": "^0.10.0",
    "@vercel/blob": "^0.25.0",
    "drizzle-orm": "^0.35.0",
    "stripe": "^14.0.0",
    "@stripe/stripe-js": "^2.0.0",
    "resend": "^2.0.0",
    "zod": "^3.22.0",
    "date-fns": "^3.0.0"
  },
  "devDependencies": {
    "drizzle-kit": "^0.25.0",
    "typescript": "^5.0.0",
    "@types/node": "^20.0.0",
    "@types/react": "^19.0.0"
  }
}
```

## Database Schema (Drizzle ORM)

### Schema Definition

```typescript
// lib/db/schema.ts
import { pgTable, uuid, text, integer, boolean, timestamp, decimal, primaryKey } from 'drizzle-orm/pg-core';

// Participants
export const participants = pgTable('participants', {
  id: uuid('id').defaultRandom().primaryKey(),
  email: text('email').notNull().unique(),
  name: text('name').notNull(),
  companyAffiliation: text('company_affiliation'),
  stripeCustomerId: text('stripe_customer_id'),
  registrationStatus: text('registration_status').default('pending').notNull(),
  // Values: pending, paid, refunded
  magicLinkToken: text('magic_link_token'),
  magicLinkExpiresAt: timestamp('magic_link_expires_at'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Payments (Public Transparency)
export const payments = pgTable('payments', {
  id: uuid('id').defaultRandom().primaryKey(),
  participantId: uuid('participant_id').references(() => participants.id),
  stripePaymentIntentId: text('stripe_payment_intent_id').unique(),
  amountChf: integer('amount_chf').notNull(), // Stored in centimes
  status: text('status').notNull(), // pending, completed, refunded
  refundReason: text('refund_reason'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  refundedAt: timestamp('refunded_at'),
});

// Fund Allocations
export const fundAllocations = pgTable('fund_allocations', {
  id: uuid('id').defaultRandom().primaryKey(),
  category: text('category').notNull().unique(),
  // Values: prize_pool, venue, catering, infrastructure, computation
  amountChf: integer('amount_chf').notNull(),
  percentage: decimal('percentage', { precision: 5, scale: 2 }),
  description: text('description'),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Project Proposals
export const projectProposals = pgTable('project_proposals', {
  id: uuid('id').defaultRandom().primaryKey(),
  proposerId: uuid('proposer_id').references(() => participants.id),
  title: text('title').notNull(),
  description: text('description').notNull(),
  historicalContext: text('historical_context'),
  dataRequirements: text('data_requirements').array(),
  technicalApproach: text('technical_approach'),
  voteCount: integer('vote_count').default(0).notNull(),
  status: text('status').default('proposed').notNull(),
  // Values: proposed, accepted, in_progress, completed, archived
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Proposal Votes
export const proposalVotes = pgTable('proposal_votes', {
  id: uuid('id').defaultRandom().primaryKey(),
  proposalId: uuid('proposal_id').references(() => projectProposals.id, { onDelete: 'cascade' }).notNull(),
  participantId: uuid('participant_id').references(() => participants.id, { onDelete: 'cascade' }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
}, (table) => ({
  uniqueVote: primaryKey({ columns: [table.proposalId, table.participantId] }),
}));

// Companies
export const companies = pgTable('companies', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull(),
  contactEmail: text('contact_email').notNull(),
  contactName: text('contact_name'),
  historicalPeriod: text('historical_period'),
  industryType: text('industry_type'),
  ndaSigned: boolean('nda_signed').default(false).notNull(),
  ndaSignedAt: timestamp('nda_signed_at'),
  verified: boolean('verified').default(false).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Historical Data
export const historicalData = pgTable('historical_data', {
  id: uuid('id').defaultRandom().primaryKey(),
  companyId: uuid('company_id').references(() => companies.id, { onDelete: 'cascade' }).notNull(),
  title: text('title').notNull(),
  description: text('description'),
  dataType: text('data_type').notNull(),
  // Values: photograph, ledger, blueprint, document, other
  dateRange: text('date_range'),
  blobUrl: text('blob_url').notNull(), // Vercel Blob URL
  fileSizeBytes: integer('file_size_bytes'),
  thumbnailUrl: text('thumbnail_url'),
  ocrStatus: text('ocr_status').default('pending').notNull(),
  // Values: pending, processing, completed, failed
  ocrText: text('ocr_text'),
  accessLevel: text('access_level').default('hackathon_only').notNull(),
  // Values: hackathon_only, public_after, restricted
  uploadedAt: timestamp('uploaded_at').defaultNow().notNull(),
});

// Event Configuration (Single Row)
export const eventConfig = pgTable('event_config', {
  id: integer('id').primaryKey().default(1),
  eventName: text('event_name').default('SihlHack 2025'),
  eventDate: timestamp('event_date').notNull(),
  eventLocation: text('event_location'),
  registrationDeadline: timestamp('registration_deadline').notNull(),
  refundDeadline: timestamp('refund_deadline').notNull(),
  minParticipants: integer('min_participants').default(30).notNull(),
  maxParticipants: integer('max_participants').default(100),
  registrationFeeChf: integer('registration_fee_chf').notNull(), // Centimes
  prizePoolPercentage: integer('prize_pool_percentage').default(70).notNull(),
  eventCancelled: boolean('event_cancelled').default(false).notNull(),
  cancellationReason: text('cancellation_reason'),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
```

### Database Client

```typescript
// lib/db/index.ts
import { sql } from '@vercel/postgres';
import { drizzle } from 'drizzle-orm/vercel-postgres';
import * as schema from './schema';

export const db = drizzle(sql, { schema });

// Re-export schema for convenience
export * from './schema';
```

### Drizzle Config

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

### Migration Commands

```bash
# Generate migrations
npx drizzle-kit generate

# Push to database (development)
npx drizzle-kit push

# Run migrations (production)
npx drizzle-kit migrate
```

## Magic Link Authentication

### How It Works

1. User enters email on registration/login
2. Server generates token, stores in `participants.magicLinkToken`
3. Email sent via Resend with link containing token
4. User clicks link, token validated, session created
5. Session stored in HTTP-only cookie

### Implementation

```typescript
// lib/auth.ts
import { db, participants } from './db';
import { eq, and, gt } from 'drizzle-orm';
import { cookies } from 'next/headers';
import { randomBytes, createHash } from 'crypto';

const SESSION_COOKIE = 'sihlhack_session';
const TOKEN_EXPIRY_MINUTES = 15;

export async function generateMagicLink(email: string): Promise<string> {
  const token = randomBytes(32).toString('hex');
  const expiresAt = new Date(Date.now() + TOKEN_EXPIRY_MINUTES * 60 * 1000);

  // Update or create participant with magic link token
  await db
    .insert(participants)
    .values({
      email,
      name: '', // Will be filled on first login
      magicLinkToken: token,
      magicLinkExpiresAt: expiresAt,
    })
    .onConflictDoUpdate({
      target: participants.email,
      set: {
        magicLinkToken: token,
        magicLinkExpiresAt: expiresAt,
      },
    });

  return `${process.env.NEXT_PUBLIC_SITE_URL}/auth/verify?token=${token}`;
}

export async function verifyMagicLink(token: string): Promise<string | null> {
  const [participant] = await db
    .select()
    .from(participants)
    .where(
      and(
        eq(participants.magicLinkToken, token),
        gt(participants.magicLinkExpiresAt, new Date())
      )
    );

  if (!participant) return null;

  // Clear the magic link token
  await db
    .update(participants)
    .set({
      magicLinkToken: null,
      magicLinkExpiresAt: null,
    })
    .where(eq(participants.id, participant.id));

  // Create session
  const sessionToken = randomBytes(32).toString('hex');
  const sessionHash = createHash('sha256').update(sessionToken).digest('hex');

  // Store session (you could use a sessions table, or just the hash in participant)
  // For simplicity, we'll use a signed cookie with participant ID

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, `${participant.id}:${sessionToken}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: '/',
  });

  return participant.id;
}

export async function getSession(): Promise<{ participantId: string } | null> {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE);

  if (!session?.value) return null;

  const [participantId] = session.value.split(':');
  if (!participantId) return null;

  // Verify participant exists
  const [participant] = await db
    .select({ id: participants.id })
    .from(participants)
    .where(eq(participants.id, participantId));

  if (!participant) return null;

  return { participantId: participant.id };
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}
```

### Magic Link Email

```typescript
// lib/email.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendMagicLink(email: string, magicLink: string) {
  await resend.emails.send({
    from: 'SihlHack <noreply@sihlhack.ch>',
    to: email,
    subject: 'Sign in to SihlHack',
    html: `
      <h1>Sign in to SihlHack</h1>
      <p>Click the link below to sign in. This link expires in 15 minutes.</p>
      <p><a href="${magicLink}" style="display: inline-block; padding: 12px 24px; background: #D9366B; color: white; text-decoration: none; border-radius: 6px;">Sign in to SihlHack</a></p>
      <p>Or copy this link: ${magicLink}</p>
      <p style="color: #666; font-size: 14px;">If you didn't request this, you can ignore this email.</p>
    `,
  });
}
```

## File Storage (Vercel Blob)

### Upload Handler

```typescript
// app/api/upload/route.ts
import { put } from '@vercel/blob';
import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';
import { db, historicalData, companies } from '@/lib/db';
import { eq } from 'drizzle-orm';

const ALLOWED_TYPES = [
  'image/jpeg',
  'image/png',
  'image/tiff',
  'application/pdf',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
];

const MAX_SIZE = 100 * 1024 * 1024; // 100MB

export async function POST(request: NextRequest) {
  // For company uploads, verify company session
  const companyId = request.headers.get('x-company-id');

  if (!companyId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get('file') as File;
  const title = formData.get('title') as string;
  const dataType = formData.get('dataType') as string;
  const dateRange = formData.get('dateRange') as string;
  const description = formData.get('description') as string;

  if (!file) {
    return NextResponse.json({ error: 'No file provided' }, { status: 400 });
  }

  if (!ALLOWED_TYPES.includes(file.type)) {
    return NextResponse.json({ error: 'File type not allowed' }, { status: 400 });
  }

  if (file.size > MAX_SIZE) {
    return NextResponse.json({ error: 'File too large (max 100MB)' }, { status: 400 });
  }

  // Upload to Vercel Blob
  const blob = await put(`historical/${companyId}/${Date.now()}-${file.name}`, file, {
    access: 'public',
    addRandomSuffix: true,
  });

  // Save metadata to database
  const [record] = await db
    .insert(historicalData)
    .values({
      companyId,
      title,
      description,
      dataType,
      dateRange,
      blobUrl: blob.url,
      fileSizeBytes: file.size,
    })
    .returning();

  return NextResponse.json({ success: true, data: record });
}
```

### Client Upload Component

```typescript
// components/data/DataUploader.tsx
'use client';

import { useState } from 'react';

export function DataUploader({ companyId }: { companyId: string }) {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  async function handleUpload(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setUploading(true);

    const formData = new FormData(e.currentTarget);

    const response = await fetch('/api/upload', {
      method: 'POST',
      headers: {
        'x-company-id': companyId,
      },
      body: formData,
    });

    const result = await response.json();
    setUploading(false);

    if (result.success) {
      // Handle success
    }
  }

  return (
    <form onSubmit={handleUpload} className="space-y-4">
      <input type="file" name="file" required />
      <input type="text" name="title" placeholder="Title" required />
      <select name="dataType" required>
        <option value="photograph">Photograph</option>
        <option value="ledger">Ledger</option>
        <option value="blueprint">Blueprint</option>
        <option value="document">Document</option>
        <option value="other">Other</option>
      </select>
      <input type="text" name="dateRange" placeholder="Date range (e.g., 1890-1905)" />
      <textarea name="description" placeholder="Description" />
      <button type="submit" disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
    </form>
  );
}
```

## API Routes Structure

```
/app/api/
├── auth/
│   ├── magic-link/route.ts      # Send magic link
│   ├── verify/route.ts          # Verify token, create session
│   └── logout/route.ts          # Clear session
├── stripe/
│   ├── checkout/route.ts        # Create checkout session
│   ├── webhook/route.ts         # Handle Stripe events
│   └── refund/route.ts          # Process refunds
├── participants/
│   ├── route.ts                 # GET (list), POST (create)
│   └── [id]/route.ts            # GET, PATCH, DELETE
├── proposals/
│   ├── route.ts                 # GET (list), POST (create)
│   └── [id]/
│       ├── route.ts             # GET, PATCH, DELETE
│       └── vote/route.ts        # POST (vote), DELETE (unvote)
├── companies/
│   ├── route.ts                 # GET, POST
│   └── [id]/route.ts            # GET, PATCH
├── upload/route.ts              # POST (file upload to Vercel Blob)
├── funds/route.ts               # GET (public fund status)
├── submit-resource/route.ts     # POST (resource submission to hello@sihlhack.ch)
├── compute/
│   ├── route.ts                 # POST (submit job), GET (list jobs)
│   └── [jobId]/route.ts        # GET (job status), DELETE (cancel job)
├── storage/
│   └── route.ts                 # POST (upload), GET (get manifest), DELETE (delete)
├── heat/
│   ├── credits/route.ts        # GET (heat credits for hub)
│   ├── stats/route.ts          # GET (heat statistics)
│   └── settle/route.ts         # POST (settle heat credits)
└── cron/
    └── check-event-status/route.ts  # Vercel cron job
```

### New Service APIs

**Compute API** (`/api/compute`):
- Submit compute jobs (OCR, AI inference, time-series, etc.)
- List and query job status
- Cancel pending/queued jobs
- Grid-OS integration for energy-aware scheduling

**Storage API** (`/api/storage`):
- Upload content with content-addressed storage (CID)
- Get storage manifests
- Delete content (removes from all replicas)
- Supports hot/cold/glacier tiers

**Heat API** (`/api/heat`):
- Get heat credits for hubs
- Get heat generation statistics
- Settle heat credits (mark as paid)

See [docs/service-apis.md](docs/service-apis.md) for detailed API documentation.

## Environment Variables

```bash
# Vercel (auto-populated when you link Postgres and Blob)
POSTGRES_URL=
POSTGRES_PRISMA_URL=
POSTGRES_URL_NON_POOLING=
BLOB_READ_WRITE_TOKEN=

# App
NEXT_PUBLIC_SITE_URL=https://sihlhack.ch

# Stripe
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...

# Resend
RESEND_API_KEY=re_...

# Cron
CRON_SECRET=your_cron_secret

# Feature Flags
NEXT_PUBLIC_REGISTRATION_OPEN=true
NEXT_PUBLIC_PROPOSALS_OPEN=true
```

## Open-Source Resources

### Recommended Tools (Apache-2.0 / MIT Only)

**Demo-Kit:**
- Prometheus (Apache-2.0) - Metrics collection
- VictoriaMetrics (Apache-2.0) - Time-series DB
- Home Assistant (Apache-2.0) - IoT platform with inverter APIs
- Mosquitto (EPL-2.0) - MQTT broker

**Hardware Safety:**
- LibreSolar BMS (Apache-2.0) - Battery management
- LibreSolar Charge Controller (Apache-2.0) - MPPT solar controller
- Zephyr RTOS (Apache-2.0) - Real-time OS for safety-critical systems

**Grid-OS:**
- Node-RED (Apache-2.0) - Flow-based programming, orchestrator
- NATS (Apache-2.0) - High-performance messaging
- Ollama (MIT) - Local LLM inference
- llama.cpp (MIT) - LLM on CPU
- Chronos-T5 (Apache-2.0) - Time-series forecasting
- k3s (Apache-2.0) - Lightweight Kubernetes

**Dashboard:**
- OpenTelemetry Collector (Apache-2.0) - Telemetry pipeline
- Prometheus (Apache-2.0) - Metrics backend

### Excluded Tools (License Issues)

- **AGPL-3.0**: OpenEMS, Grafana, EmonLib (copyleft incompatible with commercial LEGs)
- **BSL-1.1**: emqx (not open source per OSI definition)
- **CC BY-NC-SA**: diyBMSv4 (non-commercial restriction)
- **Blockchain**: Cosmos SDK, Substrate (overkill for hackathon)

### Resource Submission

Participants can submit additional repos via form on challenges page. Submissions sent to `hello@sihlhack.ch` via Resend API.

## Vercel Setup Steps

1. **Create Vercel Project**
   ```bash
   vercel link
   ```

2. **Add Postgres**
   ```bash
   vercel postgres create sihlhack-db
   vercel env pull .env.local
   ```

3. **Add Blob Storage**
   ```bash
   vercel blob create sihlhack-files
   ```

4. **Push Schema**
   ```bash
   npx drizzle-kit push
   ```

5. **Deploy**
   ```bash
   vercel deploy
   ```

# Payment System

## Overview

SihlHack uses Stripe Connect with Manual Payouts to create an escrow-like experience without requiring actual escrow licensing. Funds are held in the platform's Stripe balance until the event proceeds or automatic refunds are triggered.

**Stack**: Stripe + Vercel Postgres (Drizzle ORM) + Resend

## Why Stripe Connect with Manual Payouts

Stripe does not offer true escrow services. However, [Manual Payouts](https://docs.stripe.com/connect/manual-payouts) allow platforms to:

- Collect payments into a held balance
- Delay transfers until conditions are met
- Process refunds at any point
- Maintain full control over fund release

**Important Limitation**: Stripe requires funds to be paid out within 90 days. Plan event timeline accordingly.

## Payment Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                    PAYMENT LIFECYCLE                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  1. REGISTRATION                                                 │
│     └─→ Participant fills registration form                      │
│     └─→ Frontend calls /api/stripe/checkout                      │
│     └─→ Stripe Checkout Session created                          │
│     └─→ Redirect to Stripe-hosted payment page                   │
│     └─→ Payment completed, webhook received                      │
│     └─→ Participant status updated to 'paid'                     │
│                                                                  │
│  2. HOLDING PERIOD                                               │
│     └─→ Funds sit in Stripe platform balance                     │
│     └─→ Public dashboard shows collected amount                  │
│     └─→ Daily cron job checks conditions                         │
│     └─→ Fund allocations calculated and displayed                │
│                                                                  │
│  3a. EVENT PROCEEDS (conditions met by deadline)                 │
│     └─→ Minimum participants reached                             │
│     └─→ Funds allocated: 70% prizes, 30% operations              │
│     └─→ Transfer to event operating account                      │
│     └─→ Transparent expense reporting post-event                 │
│                                                                  │
│  3b. EVENT CANCELLED (conditions NOT met by deadline)            │
│     └─→ Cron job detects failure to meet minimum                 │
│     └─→ event_cancelled flag set to true                         │
│     └─→ Automatic refund processing begins                       │
│     └─→ All participants receive 100% refund                     │
│     └─→ Email notifications sent                                 │
│     └─→ Stripe fees absorbed by organizers                       │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## Stripe Configuration

### Account Setup

```typescript
// Stripe Connect account with manual payouts
const account = await stripe.accounts.create({
  type: 'express',
  country: 'CH',
  capabilities: {
    card_payments: { requested: true },
    transfers: { requested: true },
  },
  settings: {
    payouts: {
      schedule: {
        interval: 'manual', // Funds held until explicitly released
      },
    },
  },
});
```

### Checkout Session Creation

```typescript
// /app/api/stripe/checkout/route.ts
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { db, participants, eventConfig } from '@/lib/db';
import { eq } from 'drizzle-orm';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: NextRequest) {
  const { participantId, email, name } = await request.json();

  // Get current registration fee
  const [config] = await db.select().from(eventConfig).where(eq(eventConfig.id, 1));

  if (config.eventCancelled) {
    return NextResponse.json(
      { error: 'Registration is closed' },
      { status: 400 }
    );
  }

  // Create or retrieve Stripe customer
  let customer: Stripe.Customer;
  const existingCustomers = await stripe.customers.list({ email, limit: 1 });

  if (existingCustomers.data.length > 0) {
    customer = existingCustomers.data[0];
  } else {
    customer = await stripe.customers.create({
      email,
      name,
      metadata: { participant_id: participantId },
    });
  }

  // Create checkout session
  const session = await stripe.checkout.sessions.create({
    customer: customer.id,
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'chf',
          product_data: {
            name: 'SihlHack 2025 Registration',
            description: `Hackathon participation fee (${config.prizePoolPercentage}% to prize pool)`,
          },
          unit_amount: config.registrationFeeChf,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/register/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/register?cancelled=true`,
    metadata: {
      participant_id: participantId,
      purpose: 'registration',
    },
  });

  return NextResponse.json({ sessionId: session.id, url: session.url });
}
```

### Webhook Handler

```typescript
// /app/api/stripe/webhook/route.ts
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { db, participants, payments } from '@/lib/db';
import { eq } from 'drizzle-orm';
import { recalculateFundAllocations } from '@/lib/funds';
import { sendRegistrationConfirmation } from '@/lib/email';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get('stripe-signature')!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    return NextResponse.json(
      { error: 'Invalid signature' },
      { status: 400 }
    );
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session;
      await handleSuccessfulPayment(session);
      break;
    }

    case 'payment_intent.payment_failed': {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      await handleFailedPayment(paymentIntent);
      break;
    }

    case 'charge.refunded': {
      const charge = event.data.object as Stripe.Charge;
      await handleRefund(charge);
      break;
    }
  }

  return NextResponse.json({ received: true });
}

async function handleSuccessfulPayment(session: Stripe.Checkout.Session) {
  const participantId = session.metadata?.participant_id;

  if (!participantId) return;

  // Update participant status
  await db
    .update(participants)
    .set({
      registrationStatus: 'paid',
      stripeCustomerId: session.customer as string,
      updatedAt: new Date(),
    })
    .where(eq(participants.id, participantId));

  // Record payment
  await db.insert(payments).values({
    participantId,
    stripePaymentIntentId: session.payment_intent as string,
    amountChf: session.amount_total!,
    status: 'completed',
  });

  // Update fund allocations
  await recalculateFundAllocations();

  // Send confirmation email
  await sendRegistrationConfirmation(participantId);
}
```

## Automatic Refund System

### Cron Job Configuration

```typescript
// vercel.json
{
  "crons": [
    {
      "path": "/api/cron/check-event-status",
      "schedule": "0 8 * * *"  // Daily at 8am UTC
    }
  ]
}
```

### Cron Job Implementation

```typescript
// /app/api/cron/check-event-status/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { db, eventConfig, participants, payments } from '@/lib/db';
import { eq, sql } from 'drizzle-orm';
import { processAllRefunds } from '@/lib/refunds';
import { sendCancellationEmails, sendEventConfirmationEmails } from '@/lib/email';

export async function GET(request: NextRequest) {
  // Verify Vercel Cron secret
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const [config] = await db.select().from(eventConfig).where(eq(eventConfig.id, 1));
  const now = new Date();
  const refundDeadline = new Date(config.refundDeadline);

  // Already cancelled, nothing to do
  if (config.eventCancelled) {
    return NextResponse.json({ status: 'already_cancelled' });
  }

  // Deadline not yet passed
  if (now < refundDeadline) {
    const daysRemaining = Math.ceil(
      (refundDeadline.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
    );

    const [{ count }] = await db
      .select({ count: sql<number>`count(*)` })
      .from(participants)
      .where(eq(participants.registrationStatus, 'paid'));

    return NextResponse.json({
      status: 'monitoring',
      days_until_deadline: daysRemaining,
      current_participants: Number(count),
      min_required: config.minParticipants,
    });
  }

  // Deadline passed, check conditions
  const [{ count }] = await db
    .select({ count: sql<number>`count(*)` })
    .from(participants)
    .where(eq(participants.registrationStatus, 'paid'));

  const participantCount = Number(count);

  if (participantCount < config.minParticipants) {
    // CANCEL EVENT AND REFUND ALL
    console.log(`Cancelling event: ${participantCount} < ${config.minParticipants}`);

    await db
      .update(eventConfig)
      .set({
        eventCancelled: true,
        cancellationReason: 'Minimum participant threshold not reached',
        updatedAt: new Date(),
      })
      .where(eq(eventConfig.id, 1));

    const refundResults = await processAllRefunds();
    await sendCancellationEmails();

    return NextResponse.json({
      status: 'event_cancelled',
      reason: 'minimum_not_reached',
      participants_refunded: refundResults.successful,
      refund_failures: refundResults.failed,
    });
  } else {
    // EVENT PROCEEDS
    console.log(`Event confirmed: ${participantCount} participants`);

    await sendEventConfirmationEmails();

    const [{ total }] = await db
      .select({ total: sql<number>`coalesce(sum(amount_chf), 0)` })
      .from(payments)
      .where(eq(payments.status, 'completed'));

    return NextResponse.json({
      status: 'event_confirmed',
      participants: participantCount,
      total_funds_chf: Number(total),
    });
  }
}
```

### Refund Processing

```typescript
// /lib/refunds.ts
import Stripe from 'stripe';
import { db, payments, participants } from './db';
import { eq } from 'drizzle-orm';
import { recalculateFundAllocations } from './funds';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function processAllRefunds(): Promise<{
  successful: number;
  failed: number;
  errors: string[];
}> {
  // Get all completed payments
  const allPayments = await db
    .select()
    .from(payments)
    .where(eq(payments.status, 'completed'));

  const results = {
    successful: 0,
    failed: 0,
    errors: [] as string[],
  };

  for (const payment of allPayments) {
    try {
      // Process refund via Stripe
      await stripe.refunds.create({
        payment_intent: payment.stripePaymentIntentId!,
        reason: 'requested_by_customer',
      });

      // Update payment record
      await db
        .update(payments)
        .set({
          status: 'refunded',
          refundReason: 'Event cancelled: minimum participants not reached',
          refundedAt: new Date(),
        })
        .where(eq(payments.id, payment.id));

      // Update participant status
      if (payment.participantId) {
        await db
          .update(participants)
          .set({
            registrationStatus: 'refunded',
            updatedAt: new Date(),
          })
          .where(eq(participants.id, payment.participantId));
      }

      results.successful++;
    } catch (error: any) {
      results.failed++;
      results.errors.push(
        `Failed to refund payment ${payment.id}: ${error.message}`
      );
    }
  }

  // Recalculate fund allocations (should now be zero)
  await recalculateFundAllocations();

  return results;
}
```

## Fund Allocation Logic

```typescript
// /lib/funds.ts
import { db, payments, fundAllocations, eventConfig } from './db';
import { eq, sql } from 'drizzle-orm';

export async function recalculateFundAllocations() {
  const [config] = await db.select().from(eventConfig).where(eq(eventConfig.id, 1));

  // Get total collected (non-refunded)
  const [{ total }] = await db
    .select({ total: sql<number>`coalesce(sum(amount_chf), 0)` })
    .from(payments)
    .where(eq(payments.status, 'completed'));

  const totalCollected = Number(total);

  // Calculate allocations
  const prizePool = Math.floor(totalCollected * (config.prizePoolPercentage / 100));
  const operations = totalCollected - prizePool;

  // Update allocations (upsert)
  await db
    .insert(fundAllocations)
    .values([
      {
        category: 'prize_pool',
        amountChf: prizePool,
        percentage: String(config.prizePoolPercentage),
        description: 'Prize money for winning projects',
      },
      {
        category: 'operations',
        amountChf: operations,
        percentage: String(100 - config.prizePoolPercentage),
        description: 'Venue, catering, infrastructure, computation',
      },
    ])
    .onConflictDoUpdate({
      target: fundAllocations.category,
      set: {
        amountChf: sql`excluded.amount_chf`,
        percentage: sql`excluded.percentage`,
        updatedAt: new Date(),
      },
    });
}
```

## Email Notifications

### Registration Confirmation

```typescript
// /lib/email.ts
import { Resend } from 'resend';
import { db, participants, eventConfig } from './db';
import { eq } from 'drizzle-orm';
import { format } from 'date-fns';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendRegistrationConfirmation(participantId: string) {
  const [participant] = await db
    .select()
    .from(participants)
    .where(eq(participants.id, participantId));

  const [config] = await db.select().from(eventConfig).where(eq(eventConfig.id, 1));

  await resend.emails.send({
    from: 'SihlHack <noreply@sihlhack.ch>',
    to: participant.email,
    subject: 'Registration Confirmed: SihlHack 2025',
    html: `
      <h1>Welcome to SihlHack!</h1>
      <p>Hi ${participant.name},</p>
      <p>Your registration is confirmed. Here's what you need to know:</p>
      <ul>
        <li><strong>Event Date:</strong> ${format(config.eventDate, 'dd.MM.yyyy')}</li>
        <li><strong>Your Contribution:</strong> CHF ${(config.registrationFeeChf / 100).toFixed(2)}</li>
        <li><strong>Prize Pool Share:</strong> ${config.prizePoolPercentage}% goes to prizes</li>
      </ul>
      <p><strong>Important:</strong> If we don't reach ${config.minParticipants} participants by ${format(config.refundDeadline, 'dd.MM.yyyy')}, you'll receive a full automatic refund.</p>
      <p>Track progress: <a href="https://sihlhack.ch/funds">sihlhack.ch/funds</a></p>
    `,
  });
}
```

### Cancellation Email

```typescript
export async function sendCancellationEmail(participantId: string) {
  const [participant] = await db
    .select()
    .from(participants)
    .where(eq(participants.id, participantId));

  await resend.emails.send({
    from: 'SihlHack <noreply@sihlhack.ch>',
    to: participant.email,
    subject: 'SihlHack 2025 Cancelled: Full Refund Processed',
    html: `
      <h1>Event Cancelled</h1>
      <p>Hi ${participant.name},</p>
      <p>Unfortunately, SihlHack 2025 has been cancelled because we did not reach the minimum number of participants.</p>
      <p><strong>Your full refund has been processed.</strong> You should see the funds back in your account within 5-10 business days.</p>
      <p>We hope to see you at a future event.</p>
      <p>Questions? Reply to this email.</p>
    `,
  });
}

export async function sendCancellationEmails() {
  const paidParticipants = await db
    .select()
    .from(participants)
    .where(eq(participants.registrationStatus, 'refunded'));

  for (const participant of paidParticipants) {
    await sendCancellationEmail(participant.id);
  }
}

export async function sendEventConfirmationEmails() {
  const paidParticipants = await db
    .select()
    .from(participants)
    .where(eq(participants.registrationStatus, 'paid'));

  for (const participant of paidParticipants) {
    await resend.emails.send({
      from: 'SihlHack <noreply@sihlhack.ch>',
      to: participant.email,
      subject: 'SihlHack 2025 is ON!',
      html: `
        <h1>The Event is Confirmed!</h1>
        <p>Hi ${participant.name},</p>
        <p>Great news! We've reached our minimum participant threshold and SihlHack 2025 is officially happening.</p>
        <p>We'll send more details about the event schedule and logistics soon.</p>
        <p>See you there!</p>
      `,
    });
  }
}
```

## Transparency Dashboard Data

```typescript
// /app/api/funds/route.ts
import { NextResponse } from 'next/server';
import { db, payments, participants, fundAllocations, eventConfig } from '@/lib/db';
import { eq, sql } from 'drizzle-orm';

export async function GET() {
  // Get event config
  const [config] = await db.select().from(eventConfig).where(eq(eventConfig.id, 1));

  // Get total collected
  const [{ totalCollected }] = await db
    .select({ totalCollected: sql<number>`coalesce(sum(amount_chf), 0)` })
    .from(payments)
    .where(eq(payments.status, 'completed'));

  // Get total refunded
  const [{ totalRefunded }] = await db
    .select({ totalRefunded: sql<number>`coalesce(sum(amount_chf), 0)` })
    .from(payments)
    .where(eq(payments.status, 'refunded'));

  // Get participant count
  const [{ participantCount }] = await db
    .select({ participantCount: sql<number>`count(*)` })
    .from(participants)
    .where(eq(participants.registrationStatus, 'paid'));

  // Get fund allocations
  const allocations = await db.select().from(fundAllocations);
  const prizePool = allocations.find(a => a.category === 'prize_pool')?.amountChf || 0;
  const operatingCosts = allocations.find(a => a.category === 'operations')?.amountChf || 0;

  // Calculate progress percentage
  const targetAmount = config.registrationFeeChf * config.minParticipants;
  const progressPercent = Math.min(
    100,
    Math.round((Number(totalCollected) / targetAmount) * 100)
  );

  // Calculate days remaining
  const now = new Date();
  const deadline = new Date(config.refundDeadline);
  const daysRemaining = Math.max(
    0,
    Math.ceil((deadline.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
  );

  return NextResponse.json({
    total_collected_chf: Number(totalCollected),
    total_refunded_chf: Number(totalRefunded),
    confirmed_participants: Number(participantCount),
    prize_pool_chf: prizePool,
    operating_costs_chf: operatingCosts,
    registration_fee_chf: config.registrationFeeChf,
    min_participants: config.minParticipants,
    max_participants: config.maxParticipants,
    event_date: config.eventDate,
    refund_deadline: config.refundDeadline,
    event_cancelled: config.eventCancelled,
    target_amount_chf: targetAmount,
    progress_percent: progressPercent,
    days_remaining: daysRemaining,
    formatted: {
      total_collected: formatCHF(Number(totalCollected)),
      prize_pool: formatCHF(prizePool),
      operating_costs: formatCHF(operatingCosts),
      registration_fee: formatCHF(config.registrationFeeChf),
    },
  });
}

function formatCHF(centimes: number): string {
  return `CHF ${(centimes / 100).toFixed(2)}`;
}
```

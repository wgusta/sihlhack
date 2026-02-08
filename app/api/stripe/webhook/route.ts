import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'
import Stripe from 'stripe'
import { constructWebhookEvent, getPaymentIntent } from '@/lib/stripe'
import { db, participants, payments, snackathonRegistrations } from '@/lib/db'
import { eq } from 'drizzle-orm'
import { sendRegistrationConfirmationEmail } from '@/lib/email'
import { ensureNameSplitColumns } from '@/lib/db/ensure'

export async function POST(request: NextRequest) {
  await ensureNameSplitColumns()
  const body = await request.text()
  const headersList = await headers()
  const signature = headersList.get('stripe-signature')

  if (!signature) {
    return NextResponse.json(
      { error: 'Missing stripe-signature header' },
      { status: 400 }
    )
  }

  let event: Stripe.Event

  try {
    event = constructWebhookEvent(body, signature)
  } catch (error) {
    console.error('Webhook signature verification failed:', error)
    return NextResponse.json(
      { error: 'Invalid signature' },
      { status: 400 }
    )
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed':
        await handleCheckoutCompleted(event.data.object as Stripe.Checkout.Session)
        break

      case 'charge.refunded':
        await handleChargeRefunded(event.data.object as Stripe.Charge)
        break

      case 'payment_intent.payment_failed':
        await handlePaymentFailed(event.data.object as Stripe.PaymentIntent)
        break

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook handler error:', error)
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    )
  }
}

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  const participantId = session.metadata?.participant_id

  if (!participantId) {
    console.error('No participant_id in checkout session metadata')
    return
  }

  const purpose = session.metadata?.purpose
  if (purpose === 'snackathon') {
    await handleSnackathonCheckoutCompleted(session, participantId)
    return
  }

  // Get participant
  const [participant] = await db
    .select()
    .from(participants)
    .where(eq(participants.id, participantId))
    .limit(1)

  if (!participant) {
    console.error(`Participant not found: ${participantId}`)
    return
  }

  // Update participant status
  await db
    .update(participants)
    .set({
      registrationStatus: 'paid',
      stripeCustomerId: session.customer as string,
      updatedAt: new Date(),
    })
    .where(eq(participants.id, participantId))

  // Retrieve payment method type from PaymentIntent
  let paymentMethod: string | null = null
  try {
    const pi = await getPaymentIntent(session.payment_intent as string, ['payment_method'])
    if (pi.payment_method && typeof pi.payment_method !== 'string') {
      paymentMethod = pi.payment_method.type
    } else if (pi.payment_method_types?.length) {
      paymentMethod = pi.payment_method_types[0]
    }
  } catch {
    console.error('Could not retrieve payment method type')
  }

  // Create payment record
  await db.insert(payments).values({
    participantId,
    stripePaymentIntentId: session.payment_intent as string,
    amountChf: session.amount_total!,
    status: 'completed',
    paymentMethod,
  })

  // Send confirmation email
  try {
    await sendRegistrationConfirmationEmail(
      participant.email,
      participant.firstName ?? participant.name,
      session.amount_total!
    )
  } catch (error) {
    console.error('Failed to send confirmation email:', error)
  }
}

async function handleSnackathonCheckoutCompleted(session: Stripe.Checkout.Session, participantId: string) {
  // Retrieve payment method type from PaymentIntent (best-effort)
  let paymentMethod: string | null = null
  try {
    const pi = await getPaymentIntent(session.payment_intent as string, ['payment_method'])
    if (pi.payment_method && typeof pi.payment_method !== 'string') {
      paymentMethod = pi.payment_method.type
    } else if (pi.payment_method_types?.length) {
      paymentMethod = pi.payment_method_types[0]
    }
  } catch {
    console.error('Could not retrieve payment method type')
  }

  // Create payment record (do not touch main registrationStatus)
  await db.insert(payments).values({
    participantId,
    stripePaymentIntentId: session.payment_intent as string,
    amountChf: session.amount_total!,
    status: 'completed',
    paymentMethod,
  })

  const idsRaw = session.metadata?.snackathon_ids || ''
  const ids = idsRaw.split(',').map((s) => s.trim()).filter(Boolean)
  if (ids.length === 0) return

  const now = new Date()
  for (const snackathonId of ids) {
    await db
      .insert(snackathonRegistrations)
      .values({
        participantId,
        snackathonId,
        status: 'paid',
        stripePaymentIntentId: session.payment_intent as string,
        createdAt: now,
        updatedAt: now,
      })
      .onConflictDoUpdate({
        target: [snackathonRegistrations.participantId, snackathonRegistrations.snackathonId],
        set: {
          status: 'paid',
          stripePaymentIntentId: session.payment_intent as string,
          updatedAt: now,
        },
      })
  }
}

async function handleChargeRefunded(charge: Stripe.Charge) {
  const paymentIntentId = charge.payment_intent as string

  if (!paymentIntentId) {
    return
  }

  // Update payment status
  await db
    .update(payments)
    .set({
      status: 'refunded',
      refundedAt: new Date(),
    })
    .where(eq(payments.stripePaymentIntentId, paymentIntentId))

  // If this refund was for snackathon checkout, reflect it
  await db
    .update(snackathonRegistrations)
    .set({
      status: 'refunded',
      updatedAt: new Date(),
    })
    .where(eq(snackathonRegistrations.stripePaymentIntentId, paymentIntentId))
}

async function handlePaymentFailed(paymentIntent: Stripe.PaymentIntent) {
  const participantId = paymentIntent.metadata?.participant_id

  if (!participantId) {
    return
  }

  // Update participant status back to pending
  await db
    .update(participants)
    .set({
      registrationStatus: 'pending',
      updatedAt: new Date(),
    })
    .where(eq(participants.id, participantId))
}

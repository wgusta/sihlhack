import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'
import Stripe from 'stripe'
import { constructWebhookEvent } from '@/lib/stripe'
import { db, participants, payments } from '@/lib/db'
import { eq } from 'drizzle-orm'
import { sendRegistrationConfirmationEmail } from '@/lib/email'

export async function POST(request: NextRequest) {
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

  // Create payment record
  await db.insert(payments).values({
    participantId,
    stripePaymentIntentId: session.payment_intent as string,
    amountChf: session.amount_total!,
    status: 'completed',
  })

  // Send confirmation email
  try {
    await sendRegistrationConfirmationEmail(
      participant.email,
      participant.name,
      session.amount_total!
    )
  } catch (error) {
    console.error('Failed to send confirmation email:', error)
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

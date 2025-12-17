import Stripe from 'stripe'

let stripeInstance: Stripe | null = null

export function getStripe(): Stripe {
  if (!stripeInstance) {
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error('STRIPE_SECRET_KEY is not set')
    }
    stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2025-12-15.clover',
      typescript: true,
    })
  }
  return stripeInstance
}

/**
 * Create a Stripe Checkout session for registration
 */
export async function createCheckoutSession({
  participantId,
  participantEmail,
  amountChf,
  successUrl,
  cancelUrl,
}: {
  participantId: string
  participantEmail: string
  amountChf: number // in centimes
  successUrl: string
  cancelUrl: string
}): Promise<Stripe.Checkout.Session> {
  const stripe = getStripe()
  return stripe.checkout.sessions.create({
    mode: 'payment',
    payment_method_types: ['card'],
    customer_email: participantEmail,
    line_items: [
      {
        price_data: {
          currency: 'chf',
          unit_amount: amountChf,
          product_data: {
            name: 'sihlhack Teilnahmegebühr',
            description: 'Registrierung für den ersten teilnehmerorientierten Hackathon der Schweiz',
          },
        },
        quantity: 1,
      },
    ],
    metadata: {
      participant_id: participantId,
    },
    success_url: successUrl,
    cancel_url: cancelUrl,
  })
}

/**
 * Process a refund for a payment
 */
export async function processRefund(paymentIntentId: string): Promise<Stripe.Refund> {
  const stripe = getStripe()
  return stripe.refunds.create({
    payment_intent: paymentIntentId,
    reason: 'requested_by_customer',
  })
}

/**
 * Retrieve a payment intent
 */
export async function getPaymentIntent(paymentIntentId: string): Promise<Stripe.PaymentIntent> {
  const stripe = getStripe()
  return stripe.paymentIntents.retrieve(paymentIntentId)
}

/**
 * Verify webhook signature
 */
export function constructWebhookEvent(
  payload: string | Buffer,
  signature: string
): Stripe.Event {
  if (!process.env.STRIPE_WEBHOOK_SECRET) {
    throw new Error('STRIPE_WEBHOOK_SECRET is not set')
  }
  const stripe = getStripe()
  return stripe.webhooks.constructEvent(
    payload,
    signature,
    process.env.STRIPE_WEBHOOK_SECRET
  )
}

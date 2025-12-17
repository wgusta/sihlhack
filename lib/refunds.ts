import { db, payments, participants, eventConfig } from './db'
import { eq, and } from 'drizzle-orm'
import { processRefund } from './stripe'
import { sendRefundEmail, sendEventConfirmedEmail, sendEventCancelledEmail } from './email'

const EVENT_CONFIG_ID = '00000000-0000-0000-0000-000000000001'

export interface RefundResult {
  success: boolean
  refundedCount: number
  failedCount: number
  errors: string[]
}

/**
 * Check event status and process refunds if needed
 * Called by daily cron job
 */
export async function checkEventStatusAndProcessRefunds(): Promise<{
  action: 'none' | 'confirmed' | 'cancelled'
  result?: RefundResult
}> {
  // Get event configuration
  const [config] = await db
    .select()
    .from(eventConfig)
    .where(eq(eventConfig.id, EVENT_CONFIG_ID))
    .limit(1)

  if (!config) {
    throw new Error('Event configuration not found')
  }

  // If already confirmed or cancelled, do nothing
  if (config.eventStatus !== 'monitoring') {
    return { action: 'none' }
  }

  const now = new Date()
  const refundDeadline = new Date(config.refundDeadline)

  // Check if refund deadline has passed
  if (now < refundDeadline) {
    return { action: 'none' }
  }

  // Count paid participants
  const paidParticipants = await db
    .select()
    .from(participants)
    .where(eq(participants.registrationStatus, 'paid'))

  const participantCount = paidParticipants.length

  if (participantCount >= config.minParticipants) {
    // Threshold met: confirm event
    await db
      .update(eventConfig)
      .set({
        eventStatus: 'confirmed',
        registrationOpen: false,
        updatedAt: new Date(),
      })
      .where(eq(eventConfig.id, EVENT_CONFIG_ID))

    // Send confirmation emails to all paid participants
    for (const participant of paidParticipants) {
      try {
        await sendEventConfirmedEmail(participant.email, participant.name)
      } catch (error) {
        console.error(`Failed to send confirmation email to ${participant.email}:`, error)
      }
    }

    return { action: 'confirmed' }
  } else {
    // Threshold not met: cancel and refund
    await db
      .update(eventConfig)
      .set({
        eventStatus: 'cancelled',
        registrationOpen: false,
        updatedAt: new Date(),
      })
      .where(eq(eventConfig.id, EVENT_CONFIG_ID))

    const result = await processAllRefunds()

    return { action: 'cancelled', result }
  }
}

/**
 * Process refunds for all completed payments
 */
export async function processAllRefunds(): Promise<RefundResult> {
  const completedPayments = await db
    .select({
      payment: payments,
      participant: participants,
    })
    .from(payments)
    .innerJoin(participants, eq(payments.participantId, participants.id))
    .where(
      and(
        eq(payments.status, 'completed'),
        eq(payments.refundedAt, null as unknown as Date)
      )
    )

  let refundedCount = 0
  let failedCount = 0
  const errors: string[] = []

  for (const { payment, participant } of completedPayments) {
    try {
      // Process refund via Stripe
      await processRefund(payment.stripePaymentIntentId)

      // Update payment record
      await db
        .update(payments)
        .set({
          status: 'refunded',
          refundedAt: new Date(),
        })
        .where(eq(payments.id, payment.id))

      // Update participant status
      await db
        .update(participants)
        .set({
          registrationStatus: 'refunded',
          updatedAt: new Date(),
        })
        .where(eq(participants.id, participant.id))

      // Send refund notification email
      try {
        await sendRefundEmail(participant.email, participant.name, payment.amountChf)
      } catch (emailError) {
        console.error(`Failed to send refund email to ${participant.email}:`, emailError)
      }

      refundedCount++
    } catch (error) {
      failedCount++
      errors.push(`Payment ${payment.id}: ${error instanceof Error ? error.message : 'Unknown error'}`)
      console.error(`Failed to refund payment ${payment.id}:`, error)
    }
  }

  return {
    success: failedCount === 0,
    refundedCount,
    failedCount,
    errors,
  }
}

/**
 * Process a single refund (for admin manual refunds)
 */
export async function processSingleRefund(paymentId: string): Promise<{ success: boolean; error?: string }> {
  try {
    const [paymentRecord] = await db
      .select({
        payment: payments,
        participant: participants,
      })
      .from(payments)
      .innerJoin(participants, eq(payments.participantId, participants.id))
      .where(eq(payments.id, paymentId))
      .limit(1)

    if (!paymentRecord) {
      return { success: false, error: 'Payment not found' }
    }

    if (paymentRecord.payment.status === 'refunded') {
      return { success: false, error: 'Payment already refunded' }
    }

    await processRefund(paymentRecord.payment.stripePaymentIntentId)

    await db
      .update(payments)
      .set({
        status: 'refunded',
        refundedAt: new Date(),
      })
      .where(eq(payments.id, paymentId))

    await db
      .update(participants)
      .set({
        registrationStatus: 'refunded',
        updatedAt: new Date(),
      })
      .where(eq(participants.id, paymentRecord.participant.id))

    await sendRefundEmail(
      paymentRecord.participant.email,
      paymentRecord.participant.name,
      paymentRecord.payment.amountChf
    )

    return { success: true }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

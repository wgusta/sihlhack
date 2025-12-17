import { db, payments, participants, eventConfig } from './db'
import { eq, sql, count } from 'drizzle-orm'

export interface FundStatus {
  totalCollectedChf: number
  prizePoolChf: number
  operationsChf: number
  participantCount: number
  minParticipants: number
  maxParticipants: number
  daysUntilDeadline: number
  daysUntilRefundDeadline: number
  eventStatus: 'monitoring' | 'confirmed' | 'cancelled'
  registrationOpen: boolean
  registrationFeeChf: number
}

const EVENT_CONFIG_ID = '00000000-0000-0000-0000-000000000001'

/**
 * Get current fund status for public display
 */
export async function getFundStatus(): Promise<FundStatus> {
  // Get event configuration
  const [config] = await db
    .select()
    .from(eventConfig)
    .where(eq(eventConfig.id, EVENT_CONFIG_ID))
    .limit(1)

  if (!config) {
    throw new Error('Event configuration not found')
  }

  // Get total collected from completed payments
  const [totals] = await db
    .select({
      total: sql<number>`COALESCE(SUM(${payments.amountChf}), 0)`,
    })
    .from(payments)
    .where(eq(payments.status, 'completed'))

  // Get participant count (paid registrations)
  const [countResult] = await db
    .select({
      count: count(),
    })
    .from(participants)
    .where(eq(participants.registrationStatus, 'paid'))

  const totalCollectedChf = Number(totals?.total || 0)
  const participantCount = Number(countResult?.count || 0)

  // Calculate allocations
  const prizePoolChf = Math.floor(totalCollectedChf * (config.prizePoolPercentage / 100))
  const operationsChf = totalCollectedChf - prizePoolChf

  // Calculate days until deadlines
  const now = new Date()
  const registrationDeadline = new Date(config.registrationDeadline)
  const refundDeadline = new Date(config.refundDeadline)

  const daysUntilDeadline = Math.ceil(
    (registrationDeadline.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
  )
  const daysUntilRefundDeadline = Math.ceil(
    (refundDeadline.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
  )

  return {
    totalCollectedChf,
    prizePoolChf,
    operationsChf,
    participantCount,
    minParticipants: config.minParticipants,
    maxParticipants: config.maxParticipants,
    daysUntilDeadline: Math.max(0, daysUntilDeadline),
    daysUntilRefundDeadline: Math.max(0, daysUntilRefundDeadline),
    eventStatus: config.eventStatus as FundStatus['eventStatus'],
    registrationOpen: config.registrationOpen,
    registrationFeeChf: config.registrationFeeChf,
  }
}

/**
 * Get anonymized transaction list for transparency
 */
export async function getTransactionList(limit: number = 50) {
  const transactions = await db
    .select({
      id: payments.id,
      amountChf: payments.amountChf,
      status: payments.status,
      createdAt: payments.createdAt,
      refundedAt: payments.refundedAt,
    })
    .from(payments)
    .orderBy(sql`${payments.createdAt} DESC`)
    .limit(limit)

  return transactions.map((tx, index) => ({
    index: index + 1,
    amountChf: tx.amountChf,
    status: tx.status,
    date: tx.createdAt,
    refundedAt: tx.refundedAt,
  }))
}

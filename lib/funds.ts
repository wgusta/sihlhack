import { db, payments, participants, eventConfig, budgetPositions } from './db'
import { eq, sql, count, sum } from 'drizzle-orm'

export interface BudgetItem {
  name: string
  category: string
  amountChf: number
  isFixed: boolean
  description: string | null
}

export interface FundStatus {
  // Revenue
  totalCollectedChf: number
  registrationFeeChf: number
  participantCount: number

  // Budget & Break-even
  totalBudgetChf: number
  breakEvenParticipants: number
  isBreakEvenReached: boolean
  surplusChf: number // Amount above break-even (goes to prize pool)

  // Prize Pool
  prizePoolChf: number
  prizeFirst: number // Percentage
  prizeSecond: number
  prizeThird: number
  prizeFirstChf: number
  prizeSecondChf: number
  prizeThirdChf: number

  // Budget breakdown
  budgetItems: BudgetItem[]

  // Event info
  minParticipants: number
  maxParticipants: number
  daysUntilDeadline: number
  daysUntilRefundDeadline: number
  eventStatus: 'monitoring' | 'confirmed' | 'cancelled'
  registrationOpen: boolean
}

const EVENT_CONFIG_ID = '00000000-0000-0000-0000-000000000001'

/**
 * Get current fund status with break-even calculation
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

  // Get budget positions
  const budgetItems = await db
    .select({
      name: budgetPositions.name,
      category: budgetPositions.category,
      amountChf: budgetPositions.amountChf,
      isFixed: budgetPositions.isFixed,
      description: budgetPositions.description,
    })
    .from(budgetPositions)
    .orderBy(budgetPositions.sortOrder)

  // Calculate total budget (sum of all budget positions)
  const totalBudgetChf = budgetItems.reduce((sum, item) => sum + item.amountChf, 0)

  // Get total collected from completed payments (not refunded)
  const [totals] = await db
    .select({
      total: sql<number>`COALESCE(SUM(CASE WHEN ${payments.refundedAt} IS NULL THEN ${payments.amountChf} ELSE 0 END), 0)`,
    })
    .from(payments)
    .where(eq(payments.status, 'completed'))

  // Get participant count (registered = paid)
  const [countResult] = await db
    .select({
      count: count(),
    })
    .from(participants)
    .where(eq(participants.registrationStatus, 'registered'))

  const totalCollectedChf = Number(totals?.total || 0)
  const participantCount = Number(countResult?.count || 0)

  // Calculate break-even point
  const breakEvenParticipants = config.registrationFeeChf > 0
    ? Math.ceil(totalBudgetChf / config.registrationFeeChf)
    : 0

  // Check if break-even is reached
  const isBreakEvenReached = totalCollectedChf >= totalBudgetChf

  // Calculate surplus (goes to prize pool)
  const surplusChf = Math.max(0, totalCollectedChf - totalBudgetChf)
  const prizePoolChf = surplusChf

  // Calculate individual prizes
  const prizeFirstChf = Math.floor(prizePoolChf * (config.prizeFirst / 100))
  const prizeSecondChf = Math.floor(prizePoolChf * (config.prizeSecond / 100))
  const prizeThirdChf = prizePoolChf - prizeFirstChf - prizeSecondChf // Remainder to third

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
    // Revenue
    totalCollectedChf,
    registrationFeeChf: config.registrationFeeChf,
    participantCount,

    // Budget & Break-even
    totalBudgetChf,
    breakEvenParticipants,
    isBreakEvenReached,
    surplusChf,

    // Prize Pool
    prizePoolChf,
    prizeFirst: config.prizeFirst,
    prizeSecond: config.prizeSecond,
    prizeThird: config.prizeThird,
    prizeFirstChf,
    prizeSecondChf,
    prizeThirdChf,

    // Budget breakdown
    budgetItems,

    // Event info
    minParticipants: config.minParticipants,
    maxParticipants: config.maxParticipants,
    daysUntilDeadline: Math.max(0, daysUntilDeadline),
    daysUntilRefundDeadline: Math.max(0, daysUntilRefundDeadline),
    eventStatus: config.eventStatus as FundStatus['eventStatus'],
    registrationOpen: config.registrationOpen,
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

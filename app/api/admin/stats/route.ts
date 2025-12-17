import { NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/admin'
import { db, participants, payments, projectProposals, companies, historicalData, eventConfig, fundAllocations } from '@/lib/db'
import { eq, count, sum, isNotNull, isNull } from 'drizzle-orm'

export async function GET() {
  const adminCheck = await requireAdmin()
  if (!adminCheck.isAdmin) {
    return NextResponse.json({ error: adminCheck.error }, { status: 403 })
  }

  // Get participant stats
  const [participantStats] = await db
    .select({ count: count() })
    .from(participants)
    .where(eq(participants.registrationStatus, 'registered'))

  const [pendingParticipants] = await db
    .select({ count: count() })
    .from(participants)
    .where(eq(participants.registrationStatus, 'pending'))

  // Get payment stats
  const [paymentStats] = await db
    .select({
      total: sum(payments.amountChf),
      count: count(),
    })
    .from(payments)
    .where(eq(payments.status, 'completed'))

  const [refundedPayments] = await db
    .select({ count: count() })
    .from(payments)
    .where(isNotNull(payments.refundedAt))

  // Get proposal stats
  const [proposalStats] = await db
    .select({ count: count() })
    .from(projectProposals)

  // Get company stats
  const [companyStats] = await db
    .select({ count: count() })
    .from(companies)
    .where(eq(companies.ndaSigned, true))

  // Get data stats
  const [dataStats] = await db
    .select({ count: count() })
    .from(historicalData)

  const [pendingData] = await db
    .select({ count: count() })
    .from(historicalData)
    .where(isNull(historicalData.approvedAt))

  // Get event config
  const [config] = await db.select().from(eventConfig).limit(1)

  // Get fund allocations
  const allocations = await db.select().from(fundAllocations)

  return NextResponse.json({
    participants: {
      registered: participantStats?.count ?? 0,
      pending: pendingParticipants?.count ?? 0,
    },
    payments: {
      total: Number(paymentStats?.total ?? 0),
      count: paymentStats?.count ?? 0,
      refunded: refundedPayments?.count ?? 0,
    },
    proposals: {
      count: proposalStats?.count ?? 0,
    },
    companies: {
      verified: companyStats?.count ?? 0,
    },
    data: {
      total: dataStats?.count ?? 0,
      pending: pendingData?.count ?? 0,
    },
    config,
    allocations,
  })
}

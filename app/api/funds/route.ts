import { NextResponse } from 'next/server'
import { getFundStatus, getTransactionList } from '@/lib/funds'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET() {
  try {
    const [status, transactions] = await Promise.all([
      getFundStatus(),
      getTransactionList(20),
    ])

    return NextResponse.json({
      ...status,
      recentTransactions: transactions,
    })
  } catch (error) {
    console.error('Failed to fetch fund status:', error)

    // Return mock data if database not connected
    if (error instanceof Error && error.message.includes('Event configuration not found')) {
      return NextResponse.json({
        totalCollectedChf: 0,
        prizePoolChf: 0,
        operationsChf: 0,
        participantCount: 0,
        minParticipants: 30,
        maxParticipants: 100,
        daysUntilDeadline: 45,
        daysUntilRefundDeadline: 60,
        eventStatus: 'monitoring',
        registrationOpen: true,
        registrationFeeChf: 15000,
        recentTransactions: [],
      })
    }

    return NextResponse.json(
      { error: 'Failed to fetch fund status' },
      { status: 500 }
    )
  }
}

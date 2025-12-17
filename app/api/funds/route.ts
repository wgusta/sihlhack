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
        // Revenue
        totalCollectedChf: 0,
        registrationFeeChf: 48000, // CHF 480
        participantCount: 0,

        // Budget & Break-even
        totalBudgetChf: 1500000, // Example: CHF 15'000 budget
        breakEvenParticipants: 32, // 15000 / 480 ≈ 32
        isBreakEvenReached: false,
        surplusChf: 0,

        // Prize Pool
        prizePoolChf: 0,
        prizeFirst: 50,
        prizeSecond: 30,
        prizeThird: 20,
        prizeFirstChf: 0,
        prizeSecondChf: 0,
        prizeThirdChf: 0,

        // Budget breakdown
        budgetItems: [
          { name: 'Location', category: 'venue', amountChf: 500000, isFixed: true, description: 'Veranstaltungsort' },
          { name: 'Catering', category: 'catering', amountChf: 400000, isFixed: true, description: 'Verpflegung' },
          { name: 'Technik', category: 'equipment', amountChf: 300000, isFixed: true, description: 'Equipment & Infrastruktur' },
          { name: 'Marketing', category: 'marketing', amountChf: 200000, isFixed: true, description: 'Werbung & Kommunikation' },
          { name: 'Diverses', category: 'other', amountChf: 100000, isFixed: true, description: 'Unvorhergesehenes' },
        ],

        // Event info
        minParticipants: 30,
        maxParticipants: 100,
        daysUntilDeadline: 45,
        daysUntilRefundDeadline: 60,
        eventStatus: 'monitoring',
        registrationOpen: true,
        recentTransactions: [],
      })
    }

    return NextResponse.json(
      { error: 'Failed to fetch fund status' },
      { status: 500 }
    )
  }
}

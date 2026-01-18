/**
 * Heat Settlement API
 * 
 * POST /api/heat/settle - Settle heat credits
 */

import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'
import { settleHeatCredits } from '@/lib/services/heat-accounting'
import { z } from 'zod'

const settleSchema = z.object({
  hubId: z.string().uuid(),
  periodStart: z.string().datetime(),
  periodEnd: z.string().datetime(),
})

/**
 * POST /api/heat/settle - Settle heat credits
 */
export async function POST(request: NextRequest) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // TODO: Check if user has permission to settle for this hub
    // For now, allow any authenticated user (should be restricted to hub operator)

    const body = await request.json()
    const validated = settleSchema.parse(body)

    const settledCreditChf = await settleHeatCredits(
      validated.hubId,
      new Date(validated.periodStart),
      new Date(validated.periodEnd)
    )

    return NextResponse.json({
      success: true,
      settledCreditChf,
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation error', details: error.issues },
        { status: 400 }
      )
    }

    console.error('Error settling heat credits:', error)
    return NextResponse.json(
      { error: 'Failed to settle heat credits' },
      { status: 500 }
    )
  }
}

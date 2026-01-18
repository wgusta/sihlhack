/**
 * Heat Credits API
 * 
 * GET /api/heat/credits - Get heat credits for a hub
 */

import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'
import { getHeatCredits } from '@/lib/services/heat-accounting'

/**
 * GET /api/heat/credits - Get heat credits
 * 
 * Query params:
 * - hubId: Hub ID (required)
 * - start: ISO 8601 datetime (optional)
 * - end: ISO 8601 datetime (optional)
 */
export async function GET(request: NextRequest) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const hubId = searchParams.get('hubId')
    const startStr = searchParams.get('start')
    const endStr = searchParams.get('end')

    if (!hubId) {
      return NextResponse.json(
        { error: 'hubId query parameter required' },
        { status: 400 }
      )
    }

    const periodStart = startStr ? new Date(startStr) : new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) // Default: last 30 days
    const periodEnd = endStr ? new Date(endStr) : new Date()

    const credit = await getHeatCredits(hubId, periodStart, periodEnd)

    return NextResponse.json({
      success: true,
      credit,
    })
  } catch (error) {
    console.error('Error getting heat credits:', error)
    return NextResponse.json(
      { error: 'Failed to get heat credits' },
      { status: 500 }
    )
  }
}

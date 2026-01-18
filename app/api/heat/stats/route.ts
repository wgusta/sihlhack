/**
 * Heat Statistics API
 * 
 * GET /api/heat/stats - Get heat generation statistics
 */

import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'
import { getHeatStats } from '@/lib/services/heat-accounting'

/**
 * GET /api/heat/stats - Get heat statistics
 * 
 * Query params:
 * - hubId: Hub ID (required)
 */
export async function GET(request: NextRequest) {
  try {
    const session = await getSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const hubId = searchParams.get('hubId')

    if (!hubId) {
      return NextResponse.json(
        { error: 'hubId query parameter required' },
        { status: 400 }
      )
    }

    const stats = await getHeatStats(hubId)

    return NextResponse.json({
      success: true,
      stats,
    })
  } catch (error) {
    console.error('Error getting heat stats:', error)
    return NextResponse.json(
      { error: 'Failed to get heat stats' },
      { status: 500 }
    )
  }
}

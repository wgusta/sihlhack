import { NextRequest, NextResponse } from 'next/server'
import { checkEventStatusAndProcessRefunds } from '@/lib/refunds'

/**
 * Cron job endpoint to check event status and process refunds
 * Runs daily at 8:00 AM (configured in vercel.json)
 */
export async function GET(request: NextRequest) {
  // Verify cron secret to prevent unauthorized access
  const authHeader = request.headers.get('authorization')
  // Defensive: trim whitespace from CRON_SECRET to handle Vercel env var issues
  const cronSecret = process.env.CRON_SECRET?.trim() || null

  // If CRON_SECRET is set but empty after trim, reject
  if (process.env.CRON_SECRET !== undefined && !cronSecret) {
    console.error('CRON_SECRET is set but empty or only whitespace')
    return NextResponse.json(
      { error: 'Server configuration error' },
      { status: 500 }
    )
  }

  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    )
  }

  try {
    const result = await checkEventStatusAndProcessRefunds()

    return NextResponse.json({
      success: true,
      action: result.action,
      ...(result.result && {
        refundedCount: result.result.refundedCount,
        failedCount: result.result.failedCount,
        errors: result.result.errors,
      }),
    })
  } catch (error) {
    console.error('Cron job error:', error)
    return NextResponse.json(
      { error: 'Cron job failed', message: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}

import { and, eq } from 'drizzle-orm'
import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'
import { db, simulationRuns } from '@/lib/db'
import { isSimDashboardEnabled } from '@/lib/sim/auth'
import { cancelRunnerRun } from '@/lib/sim/runner-client'

export async function POST(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isSimDashboardEnabled()) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  const session = await getSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params
  const [row] = await db
    .select({
      id: simulationRuns.id,
      status: simulationRuns.status,
      runnerRunId: simulationRuns.runnerRunId,
    })
    .from(simulationRuns)
    .where(
      and(
        eq(simulationRuns.id, id),
        eq(simulationRuns.participantId, session.id)
      )
    )
    .limit(1)

  if (!row) {
    return NextResponse.json({ error: 'Run not found' }, { status: 404 })
  }

  if (row.status === 'cancelled') {
    return NextResponse.json({ ok: true })
  }

  if (row.status === 'succeeded' || row.status === 'failed' || row.status === 'timeout') {
    return NextResponse.json({ error: 'Run already completed' }, { status: 409 })
  }

  if (row.runnerRunId) {
    try {
      await cancelRunnerRun(row.runnerRunId)
    } catch {
      // Keep cancellation best-effort to avoid blocking local state cleanup.
    }
  }

  await db
    .update(simulationRuns)
    .set({
      status: 'cancelled',
      finishedAt: new Date(),
      updatedAt: new Date(),
    })
    .where(eq(simulationRuns.id, row.id))

  return NextResponse.json({ ok: true })
}

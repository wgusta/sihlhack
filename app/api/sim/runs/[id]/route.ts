import { and, eq } from 'drizzle-orm'
import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/auth'
import { db, simulationRuns } from '@/lib/db'
import { ensureSimulationRunColumns } from '@/lib/db/ensure'
import { isSimDashboardEnabled } from '@/lib/sim/auth'
import { toRunDetail } from '@/lib/sim/serialization'

export async function GET(
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
  await ensureSimulationRunColumns()

  const { id } = await params
  const [row] = await db
    .select({
      id: simulationRuns.id,
      challengeId: simulationRuns.challengeId,
      scenarioId: simulationRuns.scenarioId,
      comment: simulationRuns.comment,
      status: simulationRuns.status,
      createdAt: simulationRuns.createdAt,
      finishedAt: simulationRuns.finishedAt,
      summaryJson: simulationRuns.summaryJson,
      configJson: simulationRuns.configJson,
      artifactsJson: simulationRuns.artifactsJson,
      logsUrl: simulationRuns.logsUrl,
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

  return NextResponse.json({ run: toRunDetail(row) })
}

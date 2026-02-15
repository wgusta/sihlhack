import { NextRequest, NextResponse } from 'next/server'
import { and, desc, eq, gt, inArray } from 'drizzle-orm'
import { getSession } from '@/lib/auth'
import { db, simulationRuns } from '@/lib/db'
import { canUseSimDevMode, isSimDashboardEnabled } from '@/lib/sim/auth'
import {
  SIM_CHALLENGES,
  SIM_DAILY_RUN_LIMIT,
  SIM_MAX_CONCURRENT_RUNS,
} from '@/lib/sim/constants'
import { assertAllowedOverridePath } from '@/lib/sim/path-guard'
import { submitRunnerRun } from '@/lib/sim/runner-client'
import { toRunSummary } from '@/lib/sim/serialization'
import { parseCreateRunBody } from '@/lib/sim/validation'

export async function POST(request: NextRequest) {
  if (!isSimDashboardEnabled()) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  const session = await getSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  let parsed
  try {
    parsed = parseCreateRunBody(body)
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Invalid request' }, { status: 400 })
  }

  if (parsed.devOverrides && !canUseSimDevMode(session.participant?.email)) {
    return NextResponse.json({ error: 'Dev mode is not allowed for this user' }, { status: 403 })
  }

  if (parsed.devOverrides) {
    try {
      for (const path of Object.keys(parsed.devOverrides)) {
        assertAllowedOverridePath(parsed.challengeId, path)
      }
    } catch (error) {
      return NextResponse.json({ error: error instanceof Error ? error.message : 'Invalid override path' }, { status: 400 })
    }
  }

  const activeRuns = await db
    .select({ id: simulationRuns.id })
    .from(simulationRuns)
    .where(
      and(
        eq(simulationRuns.participantId, session.id),
        inArray(simulationRuns.status, ['queued', 'running'])
      )
    )
    .limit(SIM_MAX_CONCURRENT_RUNS + 1)

  if (activeRuns.length >= SIM_MAX_CONCURRENT_RUNS) {
    return NextResponse.json({ error: 'Concurrent run limit reached' }, { status: 429 })
  }

  const since = new Date(Date.now() - 24 * 60 * 60 * 1000)
  const dailyRuns = await db
    .select({ id: simulationRuns.id })
    .from(simulationRuns)
    .where(
      and(
        eq(simulationRuns.participantId, session.id),
        gt(simulationRuns.createdAt, since)
      )
    )
    .limit(SIM_DAILY_RUN_LIMIT + 1)

  if (dailyRuns.length >= SIM_DAILY_RUN_LIMIT) {
    return NextResponse.json({ error: 'Daily run limit reached' }, { status: 429 })
  }

  const [created] = await db
    .insert(simulationRuns)
    .values({
      participantId: session.id,
      challengeId: parsed.challengeId,
      scenarioId: parsed.scenarioId,
      status: 'queued',
      configJson: JSON.stringify(parsed.config),
    })
    .returning({ id: simulationRuns.id })

  try {
    const runner = await submitRunnerRun({
      runId: created.id,
      participantId: session.id,
      request: parsed,
    })

    await db
      .update(simulationRuns)
      .set({
        status: 'running',
        runnerRunId: runner.runnerRunId,
        startedAt: new Date(),
        updatedAt: new Date(),
      })
      .where(eq(simulationRuns.id, created.id))

    return NextResponse.json({ runId: created.id, status: 'running' }, { status: 201 })
  } catch (error) {
    await db
      .update(simulationRuns)
      .set({
        status: 'failed',
        finishedAt: new Date(),
        summaryJson: JSON.stringify({
          headline: 'Runner submission failed',
          checks: [
            {
              key: 'runner.submit',
              pass: false,
              message: error instanceof Error ? error.message : 'Unknown runner error',
            },
          ],
        }),
        updatedAt: new Date(),
      })
      .where(eq(simulationRuns.id, created.id))

    return NextResponse.json({ error: 'Failed to submit run to runner' }, { status: 502 })
  }
}

export async function GET(request: NextRequest) {
  if (!isSimDashboardEnabled()) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  const session = await getSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const challengeId = request.nextUrl.searchParams.get('challengeId')
  const limitRaw = Number.parseInt(request.nextUrl.searchParams.get('limit') || '30', 10)
  const limit = Number.isNaN(limitRaw) ? 30 : Math.max(1, Math.min(100, limitRaw))

  const conditions = [eq(simulationRuns.participantId, session.id)]
  if (challengeId) {
    conditions.push(eq(simulationRuns.challengeId, challengeId))
  }

  const rows = await db
    .select({
      id: simulationRuns.id,
      challengeId: simulationRuns.challengeId,
      scenarioId: simulationRuns.scenarioId,
      status: simulationRuns.status,
      createdAt: simulationRuns.createdAt,
      finishedAt: simulationRuns.finishedAt,
      summaryJson: simulationRuns.summaryJson,
    })
    .from(simulationRuns)
    .where(and(...conditions))
    .orderBy(desc(simulationRuns.createdAt))
    .limit(limit)

  return NextResponse.json({
    runs: rows.map(toRunSummary),
    devModeAllowed: canUseSimDevMode(session.participant?.email),
    challengeDefaults: SIM_CHALLENGES,
  })
}

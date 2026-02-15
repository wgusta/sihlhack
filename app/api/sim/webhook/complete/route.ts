import { eq } from 'drizzle-orm'
import { NextRequest, NextResponse } from 'next/server'
import { db, simulationRuns } from '@/lib/db'
import { parseWebhookPayload } from '@/lib/sim/runner-client'
import { verifySimWebhookSignature } from '@/lib/sim/webhook'

const TERMINAL_STATUSES = ['succeeded', 'failed', 'timeout', 'cancelled'] as const

export async function POST(request: NextRequest) {
  const rawBody = await request.text()
  const signature = request.headers.get('x-sim-signature')

  if (!verifySimWebhookSignature(rawBody, signature)) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
  }

  let payload: ReturnType<typeof parseWebhookPayload>
  try {
    payload = parseWebhookPayload(JSON.parse(rawBody))
  } catch {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 })
  }

  const [run] = await db
    .select({
      id: simulationRuns.id,
      status: simulationRuns.status,
      finishedAt: simulationRuns.finishedAt,
    })
    .from(simulationRuns)
    .where(eq(simulationRuns.id, payload.runId))
    .limit(1)

  if (!run) {
    return NextResponse.json({ error: 'Run not found' }, { status: 404 })
  }

  if (run.finishedAt && TERMINAL_STATUSES.includes(run.status as typeof TERMINAL_STATUSES[number])) {
    return NextResponse.json({ ok: true, idempotent: true })
  }

  await db
    .update(simulationRuns)
    .set({
      status: payload.status,
      summaryJson: payload.summary ? JSON.stringify(payload.summary) : null,
      artifactsJson: payload.artifacts ? JSON.stringify(payload.artifacts) : null,
      logsUrl: payload.logsUrl || null,
      runnerImageDigest: payload.runnerImageDigest || null,
      finishedAt: new Date(),
      updatedAt: new Date(),
    })
    .where(eq(simulationRuns.id, payload.runId))

  return NextResponse.json({ ok: true })
}

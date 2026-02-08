import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { and, desc, eq, gt, isNull } from 'drizzle-orm'
import { db, participantNotifications, participants } from '@/lib/db'
import { getSession } from '@/lib/auth'

const schema = z.object({
  targetParticipantId: z.string().uuid(),
  reason: z.enum(['form_team', 'join_team', 'need_role']),
  note: z.string().max(200).optional(),
})

export async function POST(req: NextRequest) {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const parsed = schema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid request', details: parsed.error.issues }, { status: 400 })
  }

  const { targetParticipantId, reason, note } = parsed.data
  if (targetParticipantId === session.id) {
    return NextResponse.json({ error: 'Invalid target' }, { status: 400 })
  }

  // ensure target exists and is opted-in
  const [target] = await db
    .select({
      id: participants.id,
      name: participants.name,
      lookingForTeam: participants.lookingForTeam,
      teamName: participants.teamName,
      notifyOnTeamMatch: participants.notifyOnTeamMatch,
    })
    .from(participants)
    .where(eq(participants.id, targetParticipantId))
    .limit(1)

  if (!target || (!target.lookingForTeam && !target.teamName)) {
    return NextResponse.json({ error: 'Target not available for team matching' }, { status: 400 })
  }

  // rate limit: max 10 requests / 24h per sender
  const recent = await db
    .select({ id: participantNotifications.id })
    .from(participantNotifications)
    .where(
      and(
        eq(participantNotifications.actorParticipantId, session.id),
        eq(participantNotifications.kind, 'team_request'),
        gt(participantNotifications.createdAt, new Date(Date.now() - 24 * 60 * 60 * 1000))
      )
    )
    .orderBy(desc(participantNotifications.createdAt))
    .limit(50)

  const recentCount = recent.length
  if (recentCount >= 10) {
    return NextResponse.json({ error: 'Rate limited' }, { status: 429 })
  }

  // prevent duplicate pending requests to same target
  const [dup] = await db
    .select({ id: participantNotifications.id })
    .from(participantNotifications)
    .where(
      and(
        eq(participantNotifications.participantId, targetParticipantId),
        eq(participantNotifications.actorParticipantId, session.id),
        eq(participantNotifications.kind, 'team_request'),
        isNull(participantNotifications.readAt)
      )
    )
    .limit(1)

  if (dup) {
    return NextResponse.json({ error: 'Already requested' }, { status: 400 })
  }

  const [me] = await db
    .select({ name: participants.name })
    .from(participants)
    .where(eq(participants.id, session.id))
    .limit(1)

  const title = 'Team Matching Anfrage'
  const bodyText =
    `${me?.name ? me.name : 'Ein:e Teilnehmer:in'} möchte Kontakt aufnehmen (${reason}).` +
    (note?.trim() ? `\n\nNotiz: ${note.trim()}` : '')

  const data = JSON.stringify({
    reason,
    note: note?.trim() || null,
  })

  const [created] = await db
    .insert(participantNotifications)
    .values({
      participantId: targetParticipantId,
      actorParticipantId: session.id,
      kind: 'team_request',
      title,
      body: bodyText,
      data,
    })
    .returning({ id: participantNotifications.id })

  return NextResponse.json({ success: true, id: created.id })
}

import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { and, eq } from 'drizzle-orm'
import { db, participantNotifications, participants } from '@/lib/db'
import { getSession } from '@/lib/auth'

const schema = z.object({
  notificationId: z.string().uuid(),
  action: z.enum(['accept', 'decline']),
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

  const { notificationId, action } = parsed.data

  const [notif] = await db
    .select({
      id: participantNotifications.id,
      participantId: participantNotifications.participantId,
      actorParticipantId: participantNotifications.actorParticipantId,
      kind: participantNotifications.kind,
      data: participantNotifications.data,
      readAt: participantNotifications.readAt,
    })
    .from(participantNotifications)
    .where(eq(participantNotifications.id, notificationId))
    .limit(1)

  if (!notif || notif.participantId !== session.id || notif.kind !== 'team_request' || !notif.actorParticipantId) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  const now = new Date()

  // mark request as read
  await db
    .update(participantNotifications)
    .set({ readAt: now })
    .where(and(eq(participantNotifications.id, notificationId), eq(participantNotifications.participantId, session.id)))

  const [me] = await db
    .select({ name: participants.name, email: participants.email })
    .from(participants)
    .where(eq(participants.id, session.id))
    .limit(1)

  const [actor] = await db
    .select({ name: participants.name, email: participants.email })
    .from(participants)
    .where(eq(participants.id, notif.actorParticipantId))
    .limit(1)

  const commonData = (() => {
    try {
      return notif.data ? JSON.parse(notif.data) : {}
    } catch {
      return {}
    }
  })()

  if (action === 'decline') {
    await db.insert(participantNotifications).values({
      participantId: notif.actorParticipantId,
      actorParticipantId: session.id,
      kind: 'team_response',
      title: 'Team Matching: Anfrage abgelehnt',
      body: `${me?.name ?? 'Ein:e Teilnehmer:in'} hat deine Anfrage abgelehnt.`,
      data: JSON.stringify({ ...commonData, response: 'decline' }),
    })
    return NextResponse.json({ success: true })
  }

  // accept: share contact details (email) in a one-shot response (no chat)
  await db.insert(participantNotifications).values({
    participantId: notif.actorParticipantId,
    actorParticipantId: session.id,
    kind: 'team_response',
    title: 'Team Matching: Anfrage akzeptiert',
    body: `${me?.name ?? 'Ein:e Teilnehmer:in'} hat akzeptiert. Kontakt: ${me?.email ?? ''}`.trim(),
    data: JSON.stringify({ ...commonData, response: 'accept', contactEmail: me?.email ?? null }),
  })

  await db.insert(participantNotifications).values({
    participantId: session.id,
    actorParticipantId: notif.actorParticipantId,
    kind: 'team_response',
    title: 'Team Matching: Kontakt freigegeben',
    body: `Du hast akzeptiert. Kontakt: ${actor?.email ?? ''}`.trim(),
    data: JSON.stringify({ ...commonData, response: 'accept', contactEmail: actor?.email ?? null }),
  })

  return NextResponse.json({ success: true })
}


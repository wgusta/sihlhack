import { NextRequest, NextResponse } from 'next/server'
import { and, desc, eq, inArray, isNull } from 'drizzle-orm'
import { db, participantNotifications } from '@/lib/db'
import { getSession } from '@/lib/auth'

export async function GET(req: NextRequest) {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

  const url = new URL(req.url)
  const unreadOnly = url.searchParams.get('unreadOnly') === '1'

  const rows = await db
    .select({
      id: participantNotifications.id,
      kind: participantNotifications.kind,
      title: participantNotifications.title,
      body: participantNotifications.body,
      data: participantNotifications.data,
      readAt: participantNotifications.readAt,
      createdAt: participantNotifications.createdAt,
    })
    .from(participantNotifications)
    .where(
      unreadOnly
        ? and(eq(participantNotifications.participantId, session.id), isNull(participantNotifications.readAt))
        : eq(participantNotifications.participantId, session.id)
    )
    .orderBy(desc(participantNotifications.createdAt))
    .limit(50)

  // cheap unread count
  const unread = await db
    .select({ id: participantNotifications.id })
    .from(participantNotifications)
    .where(and(eq(participantNotifications.participantId, session.id), isNull(participantNotifications.readAt)))
    .limit(1000)

  return NextResponse.json({ notifications: rows, unreadCount: unread.length })
}

export async function PATCH(req: NextRequest) {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

  let body: any
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const ids: string[] | undefined = Array.isArray(body?.ids) ? body.ids : undefined
  const now = new Date()

  if (!ids || ids.length === 0) {
    await db
      .update(participantNotifications)
      .set({ readAt: now })
      .where(and(eq(participantNotifications.participantId, session.id), isNull(participantNotifications.readAt)))
    return NextResponse.json({ success: true })
  }

  await db
    .update(participantNotifications)
    .set({ readAt: now })
    .where(
      and(
        eq(participantNotifications.participantId, session.id),
        inArray(participantNotifications.id, ids),
        isNull(participantNotifications.readAt)
      )
    )

  return NextResponse.json({ success: true })
}


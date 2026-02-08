import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { db, announcements, participants } from '@/lib/db'
import { getSession } from '@/lib/auth'
import { eq } from 'drizzle-orm'

const ADMIN_EMAILS = ['admin@sihlhack.ch', 'gusta@sihlhack.ch']

const createSchema = z.object({
  title: z.string().min(3).max(120),
  body: z.string().min(3).max(4000),
  audience: z.enum(['participants', 'public']).optional(),
})

export async function POST(req: NextRequest) {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

  const [me] = await db
    .select({ email: participants.email })
    .from(participants)
    .where(eq(participants.id, session.id))
    .limit(1)

  if (!me || !ADMIN_EMAILS.includes(me.email)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const parsed = createSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid request', details: parsed.error.issues }, { status: 400 })
  }

  const { title, body: textBody, audience } = parsed.data
  const [row] = await db
    .insert(announcements)
    .values({
      title: title.trim(),
      body: textBody.trim(),
      audience: audience ?? 'participants',
      publishedAt: new Date(),
    })
    .returning({
      id: announcements.id,
      title: announcements.title,
      body: announcements.body,
      audience: announcements.audience,
      publishedAt: announcements.publishedAt,
      createdAt: announcements.createdAt,
    })

  return NextResponse.json({ announcement: row }, { status: 201 })
}


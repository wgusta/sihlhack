import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { emailSubscribers } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'

export async function POST(req: NextRequest) {
  let body: any
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const email = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : ''
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Ungültige E-Mail-Adresse' }, { status: 400 })
  }

  const existing = await db.query.emailSubscribers.findFirst({
    where: eq(emailSubscribers.email, email),
  })

  if (!existing) {
    return NextResponse.json({ success: true })
  }

  await db
    .update(emailSubscribers)
    .set({ unsubscribedAt: new Date() })
    .where(eq(emailSubscribers.id, existing.id))

  return NextResponse.json({ success: true })
}


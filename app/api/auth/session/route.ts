import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { validateSessionToken } from '@/lib/auth'
import { db, participants } from '@/lib/db'
import { eq } from 'drizzle-orm'

export async function GET() {
  const cookieStore = await cookies()
  const sessionToken = cookieStore.get('session')?.value

  if (!sessionToken) {
    return NextResponse.json(null, { status: 401 })
  }

  const session = validateSessionToken(sessionToken)
  if (!session) {
    return NextResponse.json(null, { status: 401 })
  }

  const [participant] = await db
    .select({
      id: participants.id,
      email: participants.email,
      name: participants.name,
      registrationStatus: participants.registrationStatus,
    })
    .from(participants)
    .where(eq(participants.id, session.id))
    .limit(1)

  if (!participant) {
    return NextResponse.json(null, { status: 401 })
  }

  return NextResponse.json(participant)
}

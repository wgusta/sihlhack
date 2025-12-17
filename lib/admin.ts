import { cookies } from 'next/headers'
import { validateSessionToken } from './auth'
import { db, participants } from './db'
import { eq } from 'drizzle-orm'

// Admin email addresses (in production, store in env or database)
const ADMIN_EMAILS = [
  'admin@sihlhack.ch',
  'gusta@sihlhack.ch',
  // Add more admin emails as needed
]

export async function isAdmin(): Promise<boolean> {
  const cookieStore = await cookies()
  const sessionToken = cookieStore.get('session')?.value

  if (!sessionToken) {
    return false
  }

  const session = validateSessionToken(sessionToken)
  if (!session) {
    return false
  }

  const [participant] = await db
    .select({ email: participants.email })
    .from(participants)
    .where(eq(participants.id, session.id))
    .limit(1)

  if (!participant) {
    return false
  }

  return ADMIN_EMAILS.includes(participant.email)
}

export async function requireAdmin(): Promise<{ isAdmin: true } | { isAdmin: false; error: string }> {
  const admin = await isAdmin()
  if (!admin) {
    return { isAdmin: false, error: 'Keine Admin-Berechtigung' }
  }
  return { isAdmin: true }
}

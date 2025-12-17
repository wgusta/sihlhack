import { createHash, randomBytes } from 'crypto'
import { db, participants } from './db'
import { eq } from 'drizzle-orm'

const TOKEN_EXPIRY_MINUTES = 15
const TOKEN_LENGTH = 32

/**
 * Hash a token using SHA-256
 * Tokens are hashed before storage so leaked DB access cannot forge logins
 */
export function hashToken(token: string): string {
  return createHash('sha256').update(token).digest('hex')
}

/**
 * Generate a cryptographically secure random token
 */
export function generateSecureToken(): string {
  return randomBytes(TOKEN_LENGTH).toString('hex')
}

/**
 * Generate a magic link for a user
 * Returns the unhashed token to be sent via email
 * The hashed token is stored in the database
 */
export async function generateMagicLink(email: string): Promise<string> {
  const token = generateSecureToken()
  const tokenHash = hashToken(token)
  const expiresAt = new Date(Date.now() + TOKEN_EXPIRY_MINUTES * 60 * 1000)

  // Upsert: create participant if not exists, or update token
  await db
    .insert(participants)
    .values({
      email,
      magicLinkTokenHash: tokenHash,
      magicLinkExpiresAt: expiresAt,
    })
    .onConflictDoUpdate({
      target: participants.email,
      set: {
        magicLinkTokenHash: tokenHash,
        magicLinkExpiresAt: expiresAt,
        updatedAt: new Date(),
      },
    })

  // Return the raw token (not the hash) to be sent via email
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  return `${baseUrl}/auth/verify?token=${token}`
}

/**
 * Verify a magic link token
 * Returns the participant if valid, null otherwise
 */
export async function verifyMagicLink(token: string): Promise<typeof participants.$inferSelect | null> {
  const tokenHash = hashToken(token)

  const [participant] = await db
    .select()
    .from(participants)
    .where(eq(participants.magicLinkTokenHash, tokenHash))
    .limit(1)

  if (!participant) {
    return null
  }

  // Check expiration
  if (!participant.magicLinkExpiresAt || participant.magicLinkExpiresAt < new Date()) {
    return null
  }

  // Clear the token after successful verification (single use)
  await db
    .update(participants)
    .set({
      magicLinkTokenHash: null,
      magicLinkExpiresAt: null,
      updatedAt: new Date(),
    })
    .where(eq(participants.id, participant.id))

  return participant
}

/**
 * Create a session cookie value
 * In production, use a proper session library or JWT
 */
export function createSessionToken(participantId: string): string {
  const payload = {
    id: participantId,
    exp: Date.now() + 7 * 24 * 60 * 60 * 1000, // 7 days
  }
  // Simple encoding; in production use signed JWT or server-side sessions
  return Buffer.from(JSON.stringify(payload)).toString('base64url')
}

/**
 * Validate and decode a session token
 */
export function validateSessionToken(token: string): { id: string } | null {
  try {
    const payload = JSON.parse(Buffer.from(token, 'base64url').toString())
    if (payload.exp < Date.now()) {
      return null
    }
    return { id: payload.id }
  } catch {
    return null
  }
}

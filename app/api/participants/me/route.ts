import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { desc, eq } from 'drizzle-orm'
import { db, participants, payments, snackathonRegistrations } from '@/lib/db'
import { getSession } from '@/lib/auth'

const profilePatchSchema = z.object({
  name: z.string().min(1).max(120).optional(),
  company: z.string().max(120).optional(),
  primaryRole: z.string().max(64).optional(),
  secondaryRole: z.string().max(64).optional(),
  skills: z.array(z.string().min(1).max(40)).max(10).optional(),
  lookingForTeam: z.boolean().optional(),
  teamName: z.string().max(120).optional(),
  bio: z.string().max(800).optional(),
  linkedinUrl: z.string().max(240).optional(),
  githubUrl: z.string().max(240).optional(),
})

function emptyToNull(v: string | undefined): string | null | undefined {
  if (v === undefined) return undefined
  const t = v.trim()
  return t.length ? t : null
}

export async function GET() {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

  const [participant] = await db
    .select({
      id: participants.id,
      email: participants.email,
      name: participants.name,
      company: participants.company,
      primaryRole: participants.primaryRole,
      secondaryRole: participants.secondaryRole,
      skills: participants.skills,
      lookingForTeam: participants.lookingForTeam,
      teamName: participants.teamName,
      bio: participants.bio,
      linkedinUrl: participants.linkedinUrl,
      githubUrl: participants.githubUrl,
      registrationStatus: participants.registrationStatus,
      createdAt: participants.createdAt,
      updatedAt: participants.updatedAt,
    })
    .from(participants)
    .where(eq(participants.id, session.id))
    .limit(1)

  if (!participant) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

  const [latestPayment] = await db
    .select({
      status: payments.status,
      amountChf: payments.amountChf,
      paymentMethod: payments.paymentMethod,
      createdAt: payments.createdAt,
      refundedAt: payments.refundedAt,
    })
    .from(payments)
    .where(eq(payments.participantId, session.id))
    .orderBy(desc(payments.createdAt))
    .limit(1)

  const snackathons = await db
    .select({
      id: snackathonRegistrations.id,
      snackathonId: snackathonRegistrations.snackathonId,
      status: snackathonRegistrations.status,
      createdAt: snackathonRegistrations.createdAt,
      updatedAt: snackathonRegistrations.updatedAt,
    })
    .from(snackathonRegistrations)
    .where(eq(snackathonRegistrations.participantId, session.id))
    .orderBy(desc(snackathonRegistrations.createdAt))

  return NextResponse.json({
    participant,
    latestPayment: latestPayment ?? null,
    snackathons,
  })
}

export async function PATCH(request: NextRequest) {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const parsed = profilePatchSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid request', details: parsed.error.issues }, { status: 400 })
  }

  const p = parsed.data

  const nextSkills =
    p.skills === undefined ? undefined : p.skills.length ? Array.from(new Set(p.skills.map((s) => s.trim()).filter(Boolean))) : null

  const [updated] = await db
    .update(participants)
    .set({
      name: p.name === undefined ? undefined : p.name.trim(),
      company: emptyToNull(p.company),
      primaryRole: emptyToNull(p.primaryRole),
      secondaryRole: emptyToNull(p.secondaryRole),
      skills: nextSkills as any,
      lookingForTeam: p.lookingForTeam,
      teamName: emptyToNull(p.teamName),
      bio: emptyToNull(p.bio),
      linkedinUrl: emptyToNull(p.linkedinUrl),
      githubUrl: emptyToNull(p.githubUrl),
      updatedAt: new Date(),
    })
    .where(eq(participants.id, session.id))
    .returning({
      id: participants.id,
      email: participants.email,
      name: participants.name,
      company: participants.company,
      primaryRole: participants.primaryRole,
      secondaryRole: participants.secondaryRole,
      skills: participants.skills,
      lookingForTeam: participants.lookingForTeam,
      teamName: participants.teamName,
      bio: participants.bio,
      linkedinUrl: participants.linkedinUrl,
      githubUrl: participants.githubUrl,
      registrationStatus: participants.registrationStatus,
      createdAt: participants.createdAt,
      updatedAt: participants.updatedAt,
    })

  return NextResponse.json({ participant: updated })
}

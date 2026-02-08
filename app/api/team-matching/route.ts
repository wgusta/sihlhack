import { NextRequest, NextResponse } from 'next/server'
import { and, desc, eq, isNotNull, or } from 'drizzle-orm'
import { db, participants } from '@/lib/db'
import { getSession } from '@/lib/auth'
import { ensureNameSplitColumns } from '@/lib/db/ensure'

export async function GET(req: NextRequest) {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })

  await ensureNameSplitColumns()

  const url = new URL(req.url)
  const q = (url.searchParams.get('q') || '').trim().toLowerCase()

  // Team matching is platform-only: list only participants who opted in
  const rows = await db
    .select({
      id: participants.id,
      firstName: participants.firstName,
      lastName: participants.lastName,
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
      updatedAt: participants.updatedAt,
    })
    .from(participants)
    .where(
      and(
        or(eq(participants.lookingForTeam, true), isNotNull(participants.teamName))
      )
    )
    .orderBy(desc(participants.updatedAt))
    .limit(200)

  const filtered = rows
    .filter((p) => p.id !== session.id)
    .filter((p) => {
      if (!q) return true
      const hay = [
        [p.firstName, p.lastName].filter(Boolean).join(' '),
        p.company,
        p.primaryRole,
        p.secondaryRole,
        p.teamName,
        ...(p.skills ?? []),
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()
      return hay.includes(q)
    })

  return NextResponse.json({ participants: filtered })
}

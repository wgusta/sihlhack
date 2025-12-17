import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { validateSessionToken } from '@/lib/auth'
import { db, projectProposals, proposalVotes, participants } from '@/lib/db'
import { eq, and, sql } from 'drizzle-orm'

// POST /api/proposals/[id]/vote - Vote for a proposal
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params

  // Require authentication
  const cookieStore = await cookies()
  const sessionToken = cookieStore.get('session')?.value

  if (!sessionToken) {
    return NextResponse.json({ error: 'Nicht authentifiziert' }, { status: 401 })
  }

  const session = validateSessionToken(sessionToken)
  if (!session) {
    return NextResponse.json({ error: 'Ungültige Sitzung' }, { status: 401 })
  }

  // Check if user is registered (paid)
  const [participant] = await db
    .select()
    .from(participants)
    .where(eq(participants.id, session.id))
    .limit(1)

  if (!participant || participant.registrationStatus !== 'registered') {
    return NextResponse.json(
      { error: 'Nur registrierte Teilnehmende können abstimmen' },
      { status: 403 }
    )
  }

  // Check if proposal exists
  const [proposal] = await db
    .select()
    .from(projectProposals)
    .where(eq(projectProposals.id, id))
    .limit(1)

  if (!proposal) {
    return NextResponse.json({ error: 'Projekt nicht gefunden' }, { status: 404 })
  }

  // Check if already voted
  const [existingVote] = await db
    .select()
    .from(proposalVotes)
    .where(
      and(
        eq(proposalVotes.proposalId, id),
        eq(proposalVotes.participantId, session.id)
      )
    )
    .limit(1)

  if (existingVote) {
    return NextResponse.json({ error: 'Du hast bereits für dieses Projekt gestimmt' }, { status: 400 })
  }

  // Create vote and increment counter
  await db.insert(proposalVotes).values({
    proposalId: id,
    participantId: session.id,
  })

  await db
    .update(projectProposals)
    .set({
      voteCount: sql`${projectProposals.voteCount} + 1`,
      updatedAt: new Date(),
    })
    .where(eq(projectProposals.id, id))

  // Get updated vote count
  const [updated] = await db
    .select({ voteCount: projectProposals.voteCount })
    .from(projectProposals)
    .where(eq(projectProposals.id, id))
    .limit(1)

  return NextResponse.json({
    success: true,
    voteCount: updated?.voteCount ?? proposal.voteCount + 1,
  })
}

// DELETE /api/proposals/[id]/vote - Remove vote
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params

  // Require authentication
  const cookieStore = await cookies()
  const sessionToken = cookieStore.get('session')?.value

  if (!sessionToken) {
    return NextResponse.json({ error: 'Nicht authentifiziert' }, { status: 401 })
  }

  const session = validateSessionToken(sessionToken)
  if (!session) {
    return NextResponse.json({ error: 'Ungültige Sitzung' }, { status: 401 })
  }

  // Check if vote exists
  const [existingVote] = await db
    .select()
    .from(proposalVotes)
    .where(
      and(
        eq(proposalVotes.proposalId, id),
        eq(proposalVotes.participantId, session.id)
      )
    )
    .limit(1)

  if (!existingVote) {
    return NextResponse.json({ error: 'Keine Stimme gefunden' }, { status: 404 })
  }

  // Delete vote and decrement counter
  await db
    .delete(proposalVotes)
    .where(
      and(
        eq(proposalVotes.proposalId, id),
        eq(proposalVotes.participantId, session.id)
      )
    )

  await db
    .update(projectProposals)
    .set({
      voteCount: sql`GREATEST(0, ${projectProposals.voteCount} - 1)`,
      updatedAt: new Date(),
    })
    .where(eq(projectProposals.id, id))

  // Get updated vote count
  const [updated] = await db
    .select({ voteCount: projectProposals.voteCount })
    .from(projectProposals)
    .where(eq(projectProposals.id, id))
    .limit(1)

  return NextResponse.json({
    success: true,
    voteCount: updated?.voteCount ?? 0,
  })
}

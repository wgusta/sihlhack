import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { validateSessionToken } from '@/lib/auth'
import { db, projectProposals, proposalVotes, participants } from '@/lib/db'
import { eq } from 'drizzle-orm'

// GET /api/proposals/[id] - Get single proposal
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params

  const [proposal] = await db
    .select({
      id: projectProposals.id,
      proposerId: projectProposals.proposerId,
      title: projectProposals.title,
      description: projectProposals.description,
      historicalContext: projectProposals.historicalContext,
      technicalApproach: projectProposals.technicalApproach,
      dataTypes: projectProposals.dataTypes,
      voteCount: projectProposals.voteCount,
      status: projectProposals.status,
      createdAt: projectProposals.createdAt,
      updatedAt: projectProposals.updatedAt,
      proposerName: participants.name,
    })
    .from(projectProposals)
    .leftJoin(participants, eq(projectProposals.proposerId, participants.id))
    .where(eq(projectProposals.id, id))
    .limit(1)

  if (!proposal) {
    return NextResponse.json({ error: 'Projekt nicht gefunden' }, { status: 404 })
  }

  // Check if current user has voted
  let hasVoted = false
  const cookieStore = await cookies()
  const sessionToken = cookieStore.get('session')?.value

  if (sessionToken) {
    const session = validateSessionToken(sessionToken)
    if (session) {
      const [vote] = await db
        .select()
        .from(proposalVotes)
        .where(eq(proposalVotes.proposalId, id))
        .limit(1)

      hasVoted = !!vote
    }
  }

  return NextResponse.json({
    proposal: {
      ...proposal,
      hasVoted,
    },
  })
}

// DELETE /api/proposals/[id] - Delete proposal (owner only)
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

  // Check ownership
  const [proposal] = await db
    .select()
    .from(projectProposals)
    .where(eq(projectProposals.id, id))
    .limit(1)

  if (!proposal) {
    return NextResponse.json({ error: 'Projekt nicht gefunden' }, { status: 404 })
  }

  if (proposal.proposerId !== session.id) {
    return NextResponse.json({ error: 'Keine Berechtigung' }, { status: 403 })
  }

  // Delete votes first (foreign key constraint)
  await db.delete(proposalVotes).where(eq(proposalVotes.proposalId, id))

  // Delete proposal
  await db.delete(projectProposals).where(eq(projectProposals.id, id))

  return NextResponse.json({ success: true })
}

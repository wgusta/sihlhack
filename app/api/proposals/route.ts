import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { validateSessionToken } from '@/lib/auth'
import { db, projectProposals, proposalVotes, participants } from '@/lib/db'
import { eq, desc, sql, and, inArray } from 'drizzle-orm'

const createProposalSchema = z.object({
  title: z.string().min(5, 'Titel muss mindestens 5 Zeichen haben').max(100),
  description: z.string().min(20, 'Beschreibung muss mindestens 20 Zeichen haben').max(2000),
  historicalContext: z.string().max(1000).optional(),
  technicalApproach: z.string().max(1000).optional(),
  dataTypes: z.array(z.string()).optional(),
})

// GET /api/proposals - List proposals
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const mine = searchParams.get('mine') === 'true'
  const voted = searchParams.get('voted') === 'true'
  const status = searchParams.get('status')
  const dataType = searchParams.get('dataType')

  // Get current user if authenticated
  const cookieStore = await cookies()
  const sessionToken = cookieStore.get('session')?.value
  let currentUserId: string | null = null

  if (sessionToken) {
    const session = validateSessionToken(sessionToken)
    if (session) {
      currentUserId = session.id
    }
  }

  // Build query
  let query = db
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
    .orderBy(desc(projectProposals.voteCount), desc(projectProposals.createdAt))

  // Filter by current user's proposals
  if (mine && currentUserId) {
    query = query.where(eq(projectProposals.proposerId, currentUserId)) as typeof query
  }

  // Filter by voted proposals
  if (voted && currentUserId) {
    const votedIds = await db
      .select({ proposalId: proposalVotes.proposalId })
      .from(proposalVotes)
      .where(eq(proposalVotes.participantId, currentUserId))

    const ids = votedIds.map(v => v.proposalId)
    if (ids.length > 0) {
      query = query.where(inArray(projectProposals.id, ids)) as typeof query
    } else {
      return NextResponse.json({ proposals: [] })
    }
  }

  // Filter by status
  if (status) {
    query = query.where(eq(projectProposals.status, status)) as typeof query
  }

  const proposals = await query

  // Add hasVoted field if user is authenticated
  let proposalsWithVoteStatus = proposals.map(p => ({ ...p, hasVoted: false }))

  if (currentUserId) {
    const userVotes = await db
      .select({ proposalId: proposalVotes.proposalId })
      .from(proposalVotes)
      .where(eq(proposalVotes.participantId, currentUserId))

    const votedIds = new Set(userVotes.map(v => v.proposalId))
    proposalsWithVoteStatus = proposals.map(p => ({
      ...p,
      hasVoted: votedIds.has(p.id),
    }))
  }

  return NextResponse.json({ proposals: proposalsWithVoteStatus })
}

// POST /api/proposals - Create proposal
export async function POST(request: NextRequest) {
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

  // Parse and validate body
  let body
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Ungültiges JSON' }, { status: 400 })
  }

  const result = createProposalSchema.safeParse(body)
  if (!result.success) {
    return NextResponse.json(
      { error: 'Validierungsfehler', issues: result.error.issues },
      { status: 400 }
    )
  }

  const { title, description, historicalContext, technicalApproach, dataTypes } = result.data

  // Create proposal
  const [proposal] = await db
    .insert(projectProposals)
    .values({
      proposerId: session.id,
      title,
      description,
      historicalContext: historicalContext || null,
      technicalApproach: technicalApproach || null,
      dataTypes: dataTypes || null,
      status: 'submitted',
    })
    .returning()

  return NextResponse.json({ proposal }, { status: 201 })
}

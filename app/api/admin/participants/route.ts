import { NextRequest, NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/admin'
import { db, participants, payments } from '@/lib/db'
import { eq, desc, like, or } from 'drizzle-orm'

export async function GET(request: NextRequest) {
  const adminCheck = await requireAdmin()
  if (!adminCheck.isAdmin) {
    return NextResponse.json({ error: adminCheck.error }, { status: 403 })
  }

  const searchParams = request.nextUrl.searchParams
  const search = searchParams.get('search')
  const status = searchParams.get('status')

  let query = db
    .select({
      id: participants.id,
      email: participants.email,
      name: participants.name,
      company: participants.company,
      registrationStatus: participants.registrationStatus,
      createdAt: participants.createdAt,
    })
    .from(participants)
    .orderBy(desc(participants.createdAt))

  if (search) {
    query = query.where(
      or(
        like(participants.email, `%${search}%`),
        like(participants.name, `%${search}%`),
        like(participants.company, `%${search}%`)
      )
    ) as typeof query
  }

  if (status) {
    query = query.where(eq(participants.registrationStatus, status)) as typeof query
  }

  const data = await query

  return NextResponse.json({ participants: data })
}

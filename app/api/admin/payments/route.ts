import { NextRequest, NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/admin'
import { db, payments, participants } from '@/lib/db'
import { eq, desc, isNotNull, isNull } from 'drizzle-orm'

export async function GET(request: NextRequest) {
  const adminCheck = await requireAdmin()
  if (!adminCheck.isAdmin) {
    return NextResponse.json({ error: adminCheck.error }, { status: 403 })
  }

  const searchParams = request.nextUrl.searchParams
  const status = searchParams.get('status')

  let query = db
    .select({
      id: payments.id,
      participantId: payments.participantId,
      stripePaymentIntentId: payments.stripePaymentIntentId,
      amountChf: payments.amountChf,
      status: payments.status,
      refundedAt: payments.refundedAt,
      createdAt: payments.createdAt,
      participantEmail: participants.email,
      participantName: participants.name,
    })
    .from(payments)
    .leftJoin(participants, eq(payments.participantId, participants.id))
    .orderBy(desc(payments.createdAt))

  if (status === 'refunded') {
    query = query.where(isNotNull(payments.refundedAt)) as typeof query
  } else if (status === 'completed') {
    query = query.where(isNull(payments.refundedAt)) as typeof query
  }

  const data = await query

  return NextResponse.json({ payments: data })
}

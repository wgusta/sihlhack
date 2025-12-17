import { NextRequest, NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/admin'
import { db, historicalData, companies } from '@/lib/db'
import { eq, desc, isNull, isNotNull } from 'drizzle-orm'

export async function GET(request: NextRequest) {
  const adminCheck = await requireAdmin()
  if (!adminCheck.isAdmin) {
    return NextResponse.json({ error: adminCheck.error }, { status: 403 })
  }

  const searchParams = request.nextUrl.searchParams
  const status = searchParams.get('status')

  let query = db
    .select({
      id: historicalData.id,
      title: historicalData.title,
      description: historicalData.description,
      dataType: historicalData.dataType,
      blobUrl: historicalData.blobUrl,
      ocrStatus: historicalData.ocrStatus,
      approvedAt: historicalData.approvedAt,
      createdAt: historicalData.createdAt,
      companyName: companies.name,
    })
    .from(historicalData)
    .leftJoin(companies, eq(historicalData.companyId, companies.id))
    .orderBy(desc(historicalData.createdAt))

  if (status === 'pending') {
    query = query.where(isNull(historicalData.approvedAt)) as typeof query
  } else if (status === 'approved') {
    query = query.where(isNotNull(historicalData.approvedAt)) as typeof query
  }

  const data = await query

  return NextResponse.json({ data })
}

// POST /api/admin/data - Approve/reject data
export async function POST(request: NextRequest) {
  const adminCheck = await requireAdmin()
  if (!adminCheck.isAdmin) {
    return NextResponse.json({ error: adminCheck.error }, { status: 403 })
  }

  const body = await request.json()
  const { id, action } = body

  if (!id || !action) {
    return NextResponse.json({ error: 'ID und Aktion erforderlich' }, { status: 400 })
  }

  if (action === 'approve') {
    await db
      .update(historicalData)
      .set({ approvedAt: new Date() })
      .where(eq(historicalData.id, id))

    return NextResponse.json({ success: true })
  }

  if (action === 'reject') {
    // For now, just delete the entry
    // In production, you might want to soft-delete or notify the company
    await db.delete(historicalData).where(eq(historicalData.id, id))

    return NextResponse.json({ success: true })
  }

  return NextResponse.json({ error: 'Ungültige Aktion' }, { status: 400 })
}

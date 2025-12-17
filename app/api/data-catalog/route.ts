import { NextRequest, NextResponse } from 'next/server'
import { db, historicalData, companies } from '@/lib/db'
import { eq, isNotNull, desc, and } from 'drizzle-orm'

// GET /api/data-catalog - List approved historical data
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const dataType = searchParams.get('dataType')

  // Build conditions
  const conditions = [isNotNull(historicalData.approvedAt)]
  if (dataType) {
    conditions.push(eq(historicalData.dataType, dataType))
  }

  const data = await db
    .select({
      id: historicalData.id,
      title: historicalData.title,
      description: historicalData.description,
      dataType: historicalData.dataType,
      blobUrl: historicalData.blobUrl,
      thumbnailUrl: historicalData.thumbnailUrl,
      ocrStatus: historicalData.ocrStatus,
      ocrText: historicalData.ocrText,
      createdAt: historicalData.createdAt,
      companyName: companies.name,
      historicalPeriod: companies.historicalPeriod,
    })
    .from(historicalData)
    .leftJoin(companies, eq(historicalData.companyId, companies.id))
    .where(and(...conditions))
    .orderBy(desc(historicalData.createdAt))

  return NextResponse.json({ data })
}

import { NextResponse } from 'next/server'
import { desc } from 'drizzle-orm'
import { db, announcements } from '@/lib/db'

export async function GET() {
  const rows = await db
    .select({
      id: announcements.id,
      title: announcements.title,
      body: announcements.body,
      audience: announcements.audience,
      publishedAt: announcements.publishedAt,
      createdAt: announcements.createdAt,
    })
    .from(announcements)
    .orderBy(desc(announcements.publishedAt))
    .limit(20)

  return NextResponse.json({ announcements: rows })
}


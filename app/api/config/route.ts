import { NextResponse } from 'next/server'
import { eq } from 'drizzle-orm'
import { db, eventConfig } from '@/lib/db'

const EVENT_CONFIG_ID = '00000000-0000-0000-0000-000000000001'

// Public, non-sensitive event config for sticky dashboard widgets.
export async function GET() {
  const [config] = await db
    .select({
      eventName: eventConfig.eventName,
      eventDate: eventConfig.eventDate,
      registrationDeadline: eventConfig.registrationDeadline,
      refundDeadline: eventConfig.refundDeadline,
      registrationOpen: eventConfig.registrationOpen,
      eventStatus: eventConfig.eventStatus,
    })
    .from(eventConfig)
    .where(eq(eventConfig.id, EVENT_CONFIG_ID))
    .limit(1)

  if (!config) return NextResponse.json({ error: 'Config not found' }, { status: 404 })
  return NextResponse.json({ config })
}


import { NextRequest, NextResponse } from 'next/server'
import { eq } from 'drizzle-orm'
import { db, eventConfig } from '@/lib/db'

const EVENT_CONFIG_ID = '00000000-0000-0000-0000-000000000001'

function fmtUtc(d: Date) {
  // YYYYMMDDTHHMMSSZ
  const pad = (n: number) => String(n).padStart(2, '0')
  return (
    d.getUTCFullYear() +
    pad(d.getUTCMonth() + 1) +
    pad(d.getUTCDate()) +
    'T' +
    pad(d.getUTCHours()) +
    pad(d.getUTCMinutes()) +
    pad(d.getUTCSeconds()) +
    'Z'
  )
}

function escapeIcs(s: string) {
  return s
    .replace(/\\/g, '\\\\')
    .replace(/\n/g, '\\n')
    .replace(/,/g, '\\,')
    .replace(/;/g, '\\;')
}

export async function GET(req: NextRequest) {
  const url = new URL(req.url)
  const titleOverride = url.searchParams.get('title')

  const [config] = await db
    .select({
      eventName: eventConfig.eventName,
      eventDate: eventConfig.eventDate,
    })
    .from(eventConfig)
    .where(eq(eventConfig.id, EVENT_CONFIG_ID))
    .limit(1)

  if (!config) return NextResponse.json({ error: 'Config not found' }, { status: 404 })

  // Default: full-day-ish placeholder (09:00-18:00 local unknown -> store UTC same timestamps).
  const start = new Date(config.eventDate)
  const end = new Date(start.getTime() + 9 * 60 * 60 * 1000)
  const now = new Date()

  const summary = titleOverride || config.eventName || 'sihlhack'
  const description = 'sihlhack Termin (aus Dashboard hinzugefuegt).'

  const ics =
    'BEGIN:VCALENDAR\n' +
    'VERSION:2.0\n' +
    'PRODID:-//sihlhack//calendar//EN\n' +
    'CALSCALE:GREGORIAN\n' +
    'METHOD:PUBLISH\n' +
    'BEGIN:VEVENT\n' +
    `UID:${escapeIcs('sihlhack-' + EVENT_CONFIG_ID)}\n` +
    `DTSTAMP:${fmtUtc(now)}\n` +
    `DTSTART:${fmtUtc(start)}\n` +
    `DTEND:${fmtUtc(end)}\n` +
    `SUMMARY:${escapeIcs(summary)}\n` +
    `DESCRIPTION:${escapeIcs(description)}\n` +
    'END:VEVENT\n' +
    'END:VCALENDAR\n'

  return new NextResponse(ics, {
    headers: {
      'content-type': 'text/calendar; charset=utf-8',
      'content-disposition': 'attachment; filename="sihlhack.ics"',
      'cache-control': 'no-store',
    },
  })
}


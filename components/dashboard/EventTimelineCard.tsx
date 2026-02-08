'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

type PublicConfig = {
  eventName: string
  eventDate: string
  registrationDeadline: string
  refundDeadline: string
  registrationOpen: boolean
  eventStatus: string
}

function daysLeft(target: Date) {
  const ms = target.getTime() - Date.now()
  return Math.ceil(ms / (1000 * 60 * 60 * 24))
}

function fmt(d: Date) {
  return d.toLocaleDateString('de-CH', { year: 'numeric', month: 'short', day: '2-digit' })
}

export function EventTimelineCard() {
  const [cfg, setCfg] = useState<PublicConfig | null>(null)
  const [err, setErr] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    const run = async () => {
      try {
        const res = await fetch('/api/config', { credentials: 'include' })
        const json = await res.json().catch(() => ({}))
        if (!res.ok) throw new Error('bad')
        if (!cancelled) setCfg(json.config)
      } catch {
        if (!cancelled) setErr('Konnte Event-Daten nicht laden.')
      }
    }
    run()
    return () => {
      cancelled = true
    }
  }, [])

  const derived = useMemo(() => {
    if (!cfg) return null
    const eventDate = new Date(cfg.eventDate)
    const regDeadline = new Date(cfg.registrationDeadline)
    const refundDeadline = new Date(cfg.refundDeadline)
    return {
      eventDate,
      regDeadline,
      refundDeadline,
      dlEvent: daysLeft(eventDate),
      dlReg: daysLeft(regDeadline),
      dlRefund: daysLeft(refundDeadline),
    }
  }, [cfg])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        {err && <div className="text-sm font-mono text-sihl-red">{err}</div>}
        {!err && !cfg && <div className="text-sm font-mono text-historic-sepia">Laden...</div>}
        {cfg && derived && (
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-4">
              <div className="text-sm font-mono text-brand-black">Registrierung bis</div>
              <div className="text-xs font-mono text-historic-sepia">
                {fmt(derived.regDeadline)} ({Math.max(0, derived.dlReg)}d)
              </div>
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="text-sm font-mono text-brand-black">Refund bis</div>
              <div className="text-xs font-mono text-historic-sepia">
                {fmt(derived.refundDeadline)} ({Math.max(0, derived.dlRefund)}d)
              </div>
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="text-sm font-mono text-brand-black">Event</div>
              <div className="text-xs font-mono text-historic-sepia">
                {fmt(derived.eventDate)} ({Math.max(0, derived.dlEvent)}d)
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4 flex-wrap">
              <a className="text-sm font-mono text-sihl-red hover:underline" href="/api/calendar/event">
                Kalender (.ics)
              </a>
              <Link href="/about" className="text-sm font-mono text-sihl-red hover:underline">
                About
              </Link>
              <div className="text-xs font-mono text-historic-sepia">
                Status: {cfg.eventStatus}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}


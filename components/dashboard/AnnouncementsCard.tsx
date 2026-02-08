'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

type Announcement = {
  id: string
  title: string
  body: string
  audience: string
  publishedAt: string
  createdAt: string
}

export function AnnouncementsCard() {
  const [rows, setRows] = useState<Announcement[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    const run = async () => {
      try {
        setIsLoading(true)
        setError(null)
        const res = await fetch('/api/announcements', { credentials: 'include' })
        if (!res.ok) throw new Error('bad')
        const json = await res.json()
        if (!cancelled) setRows(json.announcements ?? [])
      } catch {
        if (!cancelled) setError('Konnte News nicht laden.')
      } finally {
        if (!cancelled) setIsLoading(false)
      }
    }
    run()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>News von den Organisatoren</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading && <div className="text-sm font-mono text-historic-sepia">Laden...</div>}
        {error && <div className="text-sm font-mono text-sihl-red">{error}</div>}
        {!isLoading && !error && rows.length === 0 && (
          <div className="text-sm font-mono text-historic-sepia">Noch keine News.</div>
        )}
        <div className="space-y-4">
          {rows.slice(0, 5).map((a) => (
            <div key={a.id} className="border border-historic-sepia/15 rounded-lg p-4 bg-off-white">
              <div className="text-xs font-mono text-historic-sepia">
                {new Date(a.publishedAt || a.createdAt).toLocaleString('de-CH')}
              </div>
              <div className="mt-1 font-display font-semibold text-brand-black">{a.title}</div>
              <div className="mt-1 text-sm font-mono text-historic-sepia whitespace-pre-wrap">{a.body}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}


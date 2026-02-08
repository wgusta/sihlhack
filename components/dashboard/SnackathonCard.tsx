'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { useParticipantProfile } from '@/hooks/useParticipantProfile'

const SNACKATHONS = [
  { id: 'april-2026', label: 'April 2026 (Pilot #1)' },
  { id: 'mai-2026', label: 'Mai 2026 (Pilot #2)' },
] as const

export function SnackathonCard() {
  const { data, mutate } = useParticipantProfile()
  const regs = data?.snackathons ?? []
  const [selected, setSelected] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [msg, setMsg] = useState<string | null>(null)

  const registeredIds = useMemo(() => new Set(regs.filter((r) => r.status === 'paid').map((r) => r.snackathonId)), [regs])

  const toggle = (id: string) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id].slice(0, 2)))
  }

  const checkout = async () => {
    setMsg(null)
    setIsLoading(true)
    try {
      const res = await fetch('/api/snackathons/checkout', {
        method: 'POST',
        credentials: 'include',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ selectedSnackathons: selected }),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok) {
        setMsg(json?.error || 'Fehler')
        return
      }
      if (json?.url) window.location.href = json.url
    } catch {
      setMsg('Fehler')
    } finally {
      setIsLoading(false)
      mutate()
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Snackathons (CHF 80)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-sm font-mono text-historic-sepia">
          2 Pilot-Events. Bezahlung via Stripe. Teilnahme erscheint hier nach erfolgreicher Zahlung.
        </div>

        <div className="mt-4 space-y-2">
          {SNACKATHONS.map((s) => {
            const already = registeredIds.has(s.id)
            const disabled = already
            const checked = selected.includes(s.id)
            return (
              <label
                key={s.id}
                className={`flex items-center gap-3 p-3 rounded-lg border ${
                  already ? 'border-historic-sepia/10 bg-off-white opacity-70' : 'border-historic-sepia/20 bg-white hover:border-historic-sepia/40'
                }`}
              >
                <input
                  type="checkbox"
                  checked={checked || already}
                  disabled={disabled}
                  onChange={() => toggle(s.id)}
                />
                <span className="font-mono text-sm text-brand-black">{s.label}</span>
                {already && <span className="ml-auto text-xs font-mono text-historic-sepia">bezahlt</span>}
              </label>
            )
          })}
        </div>

        {regs.length > 0 && (
          <div className="mt-4 text-xs font-mono text-historic-sepia">
            Deine Snackathon Teilnahme(n):
            <div className="mt-2 space-y-1">
              {regs.map((r) => (
                <div key={r.id} className="flex items-center justify-between">
                  <span>{r.snackathonId}</span>
                  <span>{r.status}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-4 flex items-center gap-3">
          <Button onClick={checkout} isLoading={isLoading} disabled={selected.length === 0}>
            Weiter zur Zahlung
          </Button>
          <Link href="/snackathons" className="text-sm font-mono text-sihl-red hover:underline">
            Details
          </Link>
          {msg && <span className="ml-auto text-xs font-mono text-sihl-red">{msg}</span>}
        </div>
      </CardContent>
    </Card>
  )
}


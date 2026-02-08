'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { useSession } from '@/hooks/useSession'

const SNACKATHONS = [
  {
    id: 'april-2026',
    name: 'April 2026',
    subtitle: 'Sihl-Sim API (Pilot #1)',
    date: 'April 2026',
    duration: '18h',
    location: 'Zürich (Ort folgt)',
    seats: '10-20 Plätze',
  },
  {
    id: 'mai-2026',
    name: 'Mai 2026',
    subtitle: 'Sihl-Sim API (Pilot #2)',
    date: 'Mai 2026',
    duration: '18h',
    location: 'Zürich (Ort folgt)',
    seats: '10-20 Plätze',
  },
  {
    id: 'historik-hack',
    name: 'Historik Hack',
    subtitle: 'Historisches Archiv (Online)',
    date: '2-4 Wochen vor Event',
    duration: 'Asynchron',
    location: 'Online',
    seats: 'Offen',
  },
] as const

export default function SnackathonsPage() {
  const { isAuthenticated, user } = useSession()
  const [selected, setSelected] = useState<string[]>([])
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [msg, setMsg] = useState<string | null>(null)

  const toggle = (id: string) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id].slice(0, 3)))
  }

  const canSubmit = useMemo(() => {
    if (selected.length === 0) return false
    if (isAuthenticated) return true
    return firstName.trim().length > 0 && lastName.trim().length > 0 && email.trim().length > 0
  }, [selected.length, isAuthenticated, firstName, lastName, email])

  const submit = async () => {
    setMsg(null)
    setIsLoading(true)
    try {
      const payload: any = { selectedSnackathons: selected }
      if (!isAuthenticated) {
        payload.firstName = firstName.trim()
        payload.lastName = lastName.trim()
        payload.email = email.trim()
      }
      const res = await fetch('/api/snackathons/checkout', {
        method: 'POST',
        credentials: 'include',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload),
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
    }
  }

  return (
    <div className="min-h-screen bg-off-white flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="bg-brand-black text-white py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="inline-block px-4 py-2 bg-thermal-orange/20 border border-thermal-orange/40 rounded-full mb-6">
              <span className="font-mono text-sm text-thermal-orange uppercase tracking-wide">
                CHF 80 Teilnahmegebühr
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold">Snackathons</h1>
            <p className="mt-4 text-lg font-mono text-gray-300">
              3 Events: 2 Pilot-Events (Sihl-Sim API) + 1 Online Historik Hack (Archiv).
            </p>
            <div className="mt-6 flex items-center gap-4 flex-wrap">
              <Link href="/dashboard" className="text-sm font-mono text-grid-green hover:underline">
                {isAuthenticated ? 'Zum Dashboard' : 'Login / Dashboard'}
              </Link>
              {user?.email && (
                <span className="text-xs font-mono text-gray-400">
                  Eingeloggt als {user.email}
                </span>
              )}
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Snackathon wählen</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {SNACKATHONS.map((s) => (
                    <label key={s.id} className="border border-historic-sepia/20 rounded-lg p-4 bg-white hover:border-historic-sepia/40 transition-colors flex gap-3">
                      <input type="checkbox" checked={selected.includes(s.id)} onChange={() => toggle(s.id)} />
                      <div>
                        <div className="font-display font-semibold text-brand-black">
                          {s.name}: {s.subtitle}
                        </div>
                        <div className="mt-1 text-sm font-mono text-historic-sepia">
                          {s.date} · {s.duration} · {s.location} · {s.seats}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>

                {!isAuthenticated && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input label="Vorname" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    <Input label="Nachname" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
                  </div>
                )}

                <div className="flex items-center gap-3 flex-wrap">
                  <Button onClick={submit} isLoading={isLoading} disabled={!canSubmit}>
                    Weiter zu Stripe (CHF 80)
                  </Button>
                  <div className="text-sm font-mono text-historic-sepia">
                    CHF 80 pro Snackathon (3 Snackathons = CHF 240).
                  </div>
                  {msg && <div className="ml-auto text-sm font-mono text-sihl-red">{msg}</div>}
                </div>
              </CardContent>
            </Card>

            <Card variant="historic">
              <CardContent>
                <div className="font-display font-semibold text-brand-black">Was passiert danach?</div>
                <div className="mt-2 text-sm font-mono text-historic-sepia">
                  Nach erfolgreicher Zahlung siehst du die Teilnahme im Dashboard. Team Matching und Organizer-News laufen dort.
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

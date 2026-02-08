'use client'

import { useState } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export default function UnsubscribePage() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [error, setError] = useState<string | null>(null)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setStatus('loading')
    try {
      const res = await fetch('/api/unsubscribe', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok) {
        setStatus('error')
        setError(json?.error || 'Fehler')
        return
      }
      setStatus('success')
    } catch {
      setStatus('error')
      setError('Fehler')
    }
  }

  return (
    <div className="min-h-screen bg-off-white flex flex-col">
      <Header />
      <main className="flex-1 py-16 px-4">
        <div className="mx-auto max-w-lg">
          <Card>
            <CardHeader>
              <CardTitle>Abmelden</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="font-mono text-sm text-historic-sepia">
                Trage deine E-Mail ein, um keine Website-Updates mehr zu erhalten.
              </p>

              {status === 'success' ? (
                <div className="rounded-lg border border-fund-green/30 bg-fund-green/10 p-4">
                  <p className="font-mono text-sm text-fund-green">
                    Abmeldung gespeichert.
                  </p>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="deine@email.ch"
                    className="w-full px-4 py-3 border rounded-lg font-mono text-sm focus:outline-none focus:ring-2 focus:ring-sihl-red/50 border-gray-200"
                  />
                  {status === 'error' && error && (
                    <p className="font-mono text-sm text-sihl-red">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full px-6 py-3 bg-sihl-red text-white font-mono font-medium rounded-lg hover:bg-sihl-red/90 transition-colors disabled:opacity-50"
                  >
                    {status === 'loading' ? '...' : 'Abmelden'}
                  </button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}


'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

export function EmailCapture() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error')
      setErrorMessage('Ungültige E-Mail-Adresse')
      return
    }

    setStatus('loading')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'landing_page' }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Anmeldung fehlgeschlagen')
      }

      setStatus('success')
      setEmail('')
    } catch (err) {
      setStatus('error')
      setErrorMessage(err instanceof Error ? err.message : 'Ein Fehler ist aufgetreten')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-fund-green/10 border border-fund-green/30 rounded-xl p-6 text-center">
        <div className="text-3xl mb-3">✓</div>
        <h3 className="font-display font-semibold text-fund-green">
          Du bist dabei!
        </h3>
        <p className="font-mono text-sm text-historic-sepia mt-2">
          Wir informieren dich über Updates und den Start der Anmeldung.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-historic">
      <h3 className="font-display font-semibold text-brand-black text-center">
        Noch nicht bereit?
      </h3>
      <p className="font-mono text-sm text-historic-sepia text-center mt-2">
        Lass dich benachrichtigen, wenn es losgeht.
      </p>

      <form onSubmit={handleSubmit} className="mt-4">
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              if (status === 'error') setStatus('idle')
            }}
            placeholder="deine@email.ch"
            className={cn(
              "flex-1 px-4 py-3 border rounded-lg font-mono text-sm focus:outline-none focus:ring-2 focus:ring-sihl-red/50",
              status === 'error' ? "border-sihl-red" : "border-gray-200"
            )}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-6 py-3 bg-sihl-red text-white font-mono font-medium rounded-lg hover:bg-sihl-red/90 transition-colors disabled:opacity-50"
          >
            {status === 'loading' ? '...' : 'Notify me'}
          </button>
        </div>
        {status === 'error' && (
          <p className="text-sm text-sihl-red font-mono mt-2">{errorMessage}</p>
        )}
      </form>

      <p className="font-mono text-xs text-gray-400 text-center mt-4">
        Kein Spam. Nur wichtige Updates.
      </p>
    </div>
  )
}

'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

interface MagicLinkFormProps {
  redirectTo?: string
  onSuccess?: () => void
}

export function MagicLinkForm({ redirectTo, onSuccess }: MagicLinkFormProps) {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/auth/magic-link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, redirectTo }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Fehler beim Senden des Links')
      }

      setIsSent(true)
      onSuccess?.()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ein Fehler ist aufgetreten')
    } finally {
      setIsLoading(false)
    }
  }

  if (isSent) {
    return (
      <div className="text-center space-y-4">
        <div className="w-16 h-16 mx-auto bg-fund-green/10 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-fund-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="font-display text-xl font-semibold text-brand-black">
          Prüfe dein Postfach
        </h3>
        <p className="text-historic-sepia font-mono text-sm">
          Wir haben dir einen Login-Link an <strong>{email}</strong> gesendet.
          Der Link ist 15 Minuten gültig.
        </p>
        <button
          type="button"
          onClick={() => setIsSent(false)}
          className="text-sihl-red hover:underline font-mono text-sm"
        >
          Andere E-Mail verwenden
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-mono font-medium text-brand-black mb-1">
          E-Mail-Adresse
        </label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="deine@email.ch"
          required
          autoComplete="email"
          disabled={isLoading}
        />
      </div>

      {error && (
        <p className="text-sm text-sihl-red font-mono">{error}</p>
      )}

      <Button type="submit" variant="primary" className="w-full" disabled={isLoading}>
        {isLoading ? 'Wird gesendet...' : 'Login-Link senden'}
      </Button>

      <p className="text-xs text-historic-sepia font-mono text-center">
        Kein Passwort nötig. Wir senden dir einen sicheren Link per E-Mail.
      </p>
    </form>
  )
}

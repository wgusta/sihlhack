'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { EnvelopeIcon } from '@heroicons/react/24/solid'

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
          <EnvelopeIcon className="w-8 h-8 text-fund-green" aria-hidden="true" />
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

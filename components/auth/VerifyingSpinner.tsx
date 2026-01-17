'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { XMarkIcon, ArrowPathIcon } from '@heroicons/react/24/solid'

export function VerifyingSpinner() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const token = searchParams.get('token')
    const redirectTo = searchParams.get('redirectTo') || '/dashboard'

    if (!token) {
      setError('Ungültiger Link. Bitte fordere einen neuen Login-Link an.')
      return
    }

    const verify = async () => {
      try {
        const res = await fetch('/api/auth/verify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token }),
        })

        if (!res.ok) {
          const data = await res.json()
          throw new Error(data.error || 'Verifizierung fehlgeschlagen')
        }

        router.push(redirectTo)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Ein Fehler ist aufgetreten')
      }
    }

    verify()
  }, [searchParams, router])

  if (error) {
    return (
      <div className="text-center space-y-4">
        <div className="w-16 h-16 mx-auto bg-sihl-red/10 rounded-full flex items-center justify-center">
          <XMarkIcon className="w-8 h-8 text-sihl-red" aria-hidden="true" />
        </div>
        <h3 className="font-display text-xl font-semibold text-brand-black">
          Verifizierung fehlgeschlagen
        </h3>
        <p className="text-historic-sepia font-mono text-sm">{error}</p>
        <a
          href="/auth/login"
          className="inline-block text-sihl-red hover:underline font-mono text-sm"
        >
          Neuen Login-Link anfordern
        </a>
      </div>
    )
  }

  return (
    <div className="text-center space-y-4">
      <div className="w-16 h-16 mx-auto">
        <ArrowPathIcon className="w-16 h-16 text-sihl-red animate-spin" aria-hidden="true" />
      </div>
      <h3 className="font-display text-xl font-semibold text-brand-black">
        Anmeldung wird verifiziert...
      </h3>
      <p className="text-historic-sepia font-mono text-sm">
        Einen Moment bitte.
      </p>
    </div>
  )
}

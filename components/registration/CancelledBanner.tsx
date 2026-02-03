'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { XMarkIcon } from '@heroicons/react/24/solid'

export function CancelledBanner() {
  const searchParams = useSearchParams()
  const [dismissed, setDismissed] = useState(false)

  if (dismissed || searchParams.get('cancelled') !== 'true') {
    return null
  }

  return (
    <div className="mb-6 flex items-center justify-between gap-3 rounded-lg border border-yellow-300 bg-yellow-50 px-4 py-3">
      <p className="text-sm font-mono text-yellow-800">
        Die Zahlung wurde abgebrochen. Du kannst es erneut versuchen.
      </p>
      <button
        onClick={() => setDismissed(true)}
        className="shrink-0 rounded p-1 text-yellow-600 hover:bg-yellow-100"
        aria-label="Schliessen"
      >
        <XMarkIcon className="h-4 w-4" />
      </button>
    </div>
  )
}

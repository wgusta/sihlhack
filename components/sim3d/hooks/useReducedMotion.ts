'use client'

import { useEffect, useState } from 'react'

export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return
    }

    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handle = () => setReduced(media.matches)
    handle()

    media.addEventListener('change', handle)
    return () => media.removeEventListener('change', handle)
  }, [])

  return reduced
}

'use client'

import useSWR from 'swr'
import type { ParticipantProfile, PaymentSummary, SnackathonRegistrationSummary } from '@/types/participant'

type ProfileResponse = {
  participant: ParticipantProfile
  latestPayment: PaymentSummary | null
  snackathons?: SnackathonRegistrationSummary[]
}

const fetcher = async (url: string): Promise<ProfileResponse | null> => {
  const res = await fetch(url, { credentials: 'include' })
  if (!res.ok) {
    if (res.status === 401) return null
    throw new Error('Failed to fetch profile')
  }
  return res.json()
}

export function useParticipantProfile() {
  const { data, error, isLoading, mutate } = useSWR<ProfileResponse | null>(
    '/api/participants/me',
    fetcher,
    { shouldRetryOnError: false }
  )

  return {
    data,
    isLoading: isLoading && !error,
    error,
    mutate,
  }
}

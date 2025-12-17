'use client'

import useSWR from 'swr'
import type { SessionData, SessionUser } from '@/types/participant'

const fetcher = async (url: string): Promise<SessionUser | null> => {
  const res = await fetch(url, { credentials: 'include' })
  if (!res.ok) {
    if (res.status === 401) return null
    throw new Error('Failed to fetch session')
  }
  return res.json()
}

export function useSession(): SessionData {
  const { data, error, isLoading } = useSWR<SessionUser | null>(
    '/api/auth/session',
    fetcher,
    {
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
      shouldRetryOnError: false,
    }
  )

  return {
    user: data ?? null,
    isLoading: isLoading && !error,
    isAuthenticated: !!data,
  }
}

export function useRequireAuth(): SessionData & { redirect: boolean } {
  const session = useSession()

  return {
    ...session,
    redirect: !session.isLoading && !session.isAuthenticated,
  }
}

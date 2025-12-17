'use client'

import useSWR from 'swr'
import type { Company } from '@/lib/db/schema'

interface CompanySessionData {
  company: Company | null
  isLoading: boolean
  isAuthenticated: boolean
}

const fetcher = async (url: string): Promise<Company | null> => {
  const res = await fetch(url, { credentials: 'include' })
  if (!res.ok) {
    if (res.status === 401) return null
    throw new Error('Failed to fetch company session')
  }
  const data = await res.json()
  return data.company
}

export function useCompanySession(): CompanySessionData {
  const { data, error, isLoading } = useSWR<Company | null>(
    '/api/companies',
    fetcher,
    {
      revalidateOnFocus: true,
      shouldRetryOnError: false,
    }
  )

  return {
    company: data ?? null,
    isLoading: isLoading && !error,
    isAuthenticated: !!data,
  }
}

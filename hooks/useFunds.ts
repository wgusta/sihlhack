'use client'

import useSWR from 'swr'

export interface FundData {
  totalCollectedChf: number
  prizePoolChf: number
  operationsChf: number
  participantCount: number
  minParticipants: number
  maxParticipants: number
  daysUntilDeadline: number
  daysUntilRefundDeadline: number
  eventStatus: 'monitoring' | 'confirmed' | 'cancelled'
  registrationOpen: boolean
  registrationFeeChf: number
  recentTransactions: {
    index: number
    amountChf: number
    status: string
    date: string
    refundedAt: string | null
  }[]
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

/**
 * SWR hook for fetching fund status
 * Automatically revalidates every 30 seconds
 */
export function useFunds() {
  const { data, error, isLoading, mutate } = useSWR<FundData>(
    '/api/funds',
    fetcher,
    {
      refreshInterval: 30000, // Refresh every 30 seconds
      revalidateOnFocus: true,
      dedupingInterval: 5000,
    }
  )

  return {
    funds: data,
    isLoading,
    isError: error,
    refresh: mutate,
  }
}

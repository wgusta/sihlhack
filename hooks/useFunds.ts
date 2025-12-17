'use client'

import useSWR from 'swr'

export interface BudgetItem {
  name: string
  category: string
  amountChf: number
  isFixed: boolean
  description: string | null
}

export interface FundData {
  // Revenue
  totalCollectedChf: number
  registrationFeeChf: number
  participantCount: number

  // Budget & Break-even
  totalBudgetChf: number
  breakEvenParticipants: number
  isBreakEvenReached: boolean
  surplusChf: number

  // Prize Pool
  prizePoolChf: number
  prizeFirst: number
  prizeSecond: number
  prizeThird: number
  prizeFirstChf: number
  prizeSecondChf: number
  prizeThirdChf: number

  // Budget breakdown
  budgetItems: BudgetItem[]

  // Event info
  minParticipants: number
  maxParticipants: number
  daysUntilDeadline: number
  daysUntilRefundDeadline: number
  eventStatus: 'monitoring' | 'confirmed' | 'cancelled'
  registrationOpen: boolean

  // Transactions
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

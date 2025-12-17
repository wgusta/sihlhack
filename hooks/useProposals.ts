'use client'

import useSWR from 'swr'
import type { ProposalWithVoteStatus } from '@/types/proposal'

const fetcher = async (url: string) => {
  const res = await fetch(url)
  if (!res.ok) throw new Error('Failed to fetch proposals')
  return res.json()
}

interface UseProposalsOptions {
  status?: string
  dataType?: string
}

export function useProposals(options: UseProposalsOptions = {}) {
  const params = new URLSearchParams()
  if (options.status) params.set('status', options.status)
  if (options.dataType) params.set('dataType', options.dataType)

  const queryString = params.toString()
  const url = `/api/proposals${queryString ? `?${queryString}` : ''}`

  const { data, error, isLoading, mutate } = useSWR<{ proposals: ProposalWithVoteStatus[] }>(
    url,
    fetcher,
    {
      revalidateOnFocus: false,
      dedupingInterval: 5000,
    }
  )

  return {
    proposals: data?.proposals ?? [],
    isLoading,
    isError: !!error,
    mutate,
  }
}

export function useProposal(id: string) {
  const { data, error, isLoading, mutate } = useSWR<{ proposal: ProposalWithVoteStatus }>(
    id ? `/api/proposals/${id}` : null,
    fetcher,
    {
      revalidateOnFocus: false,
    }
  )

  return {
    proposal: data?.proposal ?? null,
    isLoading,
    isError: !!error,
    mutate,
  }
}

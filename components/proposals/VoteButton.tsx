'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

interface VoteButtonProps {
  proposalId: string
  voteCount: number
  hasVoted: boolean
  canVote: boolean
  onVoteChange?: (newCount: number, voted: boolean) => void
}

export function VoteButton({
  proposalId,
  voteCount,
  hasVoted,
  canVote,
  onVoteChange,
}: VoteButtonProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [localVoteCount, setLocalVoteCount] = useState(voteCount)
  const [localHasVoted, setLocalHasVoted] = useState(hasVoted)

  const handleVote = async () => {
    if (!canVote || isLoading) return

    setIsLoading(true)
    const method = localHasVoted ? 'DELETE' : 'POST'

    try {
      const res = await fetch(`/api/proposals/${proposalId}/vote`, { method })

      if (res.ok) {
        const data = await res.json()
        setLocalVoteCount(data.voteCount)
        setLocalHasVoted(!localHasVoted)
        onVoteChange?.(data.voteCount, !localHasVoted)
      } else {
        const data = await res.json()
        console.error('Vote failed:', data.error)
      }
    } catch (error) {
      console.error('Vote failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <button
      onClick={handleVote}
      disabled={!canVote || isLoading}
      className={cn(
        'flex flex-col items-center justify-center p-3 rounded-lg transition-all',
        localHasVoted
          ? 'bg-fund-green text-white'
          : canVote
          ? 'bg-historic-cream hover:bg-sihl-red hover:text-white text-brand-black'
          : 'bg-historic-cream text-historic-sepia cursor-not-allowed',
        isLoading && 'opacity-50'
      )}
      title={
        localHasVoted
          ? 'Stimme zurückziehen'
          : canVote
          ? 'Für dieses Projekt stimmen'
          : 'Registriere dich, um abzustimmen'
      }
    >
      <span className="text-2xl font-display font-bold">
        {localVoteCount}
      </span>
      <span className="text-xs font-mono mt-1">
        {localHasVoted ? 'Gestimmt' : 'Stimmen'}
      </span>
    </button>
  )
}

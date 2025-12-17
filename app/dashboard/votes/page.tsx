'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useSession } from '@/hooks/useSession'
import { Card, CardContent } from '@/components/ui/Card'
import { ButtonLink } from '@/components/ui/ButtonLink'
import type { ProjectProposal } from '@/types/proposal'

interface VotedProposal extends ProjectProposal {
  proposerName: string | null
}

export default function MyVotesPage() {
  const { user } = useSession()
  const [votedProposals, setVotedProposals] = useState<VotedProposal[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchVotes = async () => {
      try {
        const res = await fetch('/api/proposals?voted=true')
        if (res.ok) {
          const data = await res.json()
          setVotedProposals(data.proposals)
        }
      } catch (error) {
        console.error('Failed to fetch votes:', error)
      } finally {
        setIsLoading(false)
      }
    }

    if (user) {
      fetchVotes()
    }
  }, [user])

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-24 bg-historic-cream rounded-lg animate-pulse" />
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-brand-black">
          Meine Stimmen
        </h1>
        <p className="mt-1 text-historic-sepia font-mono text-sm">
          Projekte, für die du gestimmt hast
        </p>
      </div>

      {votedProposals.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <div className="w-16 h-16 mx-auto bg-historic-cream rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-historic-sepia" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-display text-lg font-semibold text-brand-black">
              Noch keine Stimmen
            </h3>
            <p className="mt-2 text-sm font-mono text-historic-sepia max-w-sm mx-auto">
              Du hast noch für kein Projekt gestimmt. Entdecke spannende Projektideen und stimme für deine Favoriten!
            </p>
            <ButtonLink href="/proposals" variant="primary" className="mt-6">
              Projekte entdecken
            </ButtonLink>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {votedProposals.map((proposal) => (
            <Card key={proposal.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="py-4">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-fund-green/10 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-fund-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/proposals/${proposal.id}`}
                      className="font-display font-semibold text-brand-black hover:text-sihl-red transition-colors"
                    >
                      {proposal.title}
                    </Link>
                    <p className="text-sm font-mono text-historic-sepia">
                      von {proposal.proposerName || 'Anonym'}
                    </p>
                  </div>
                  <div className="flex-shrink-0 text-right">
                    <div className="text-xl font-display font-bold text-sihl-red">
                      {proposal.voteCount}
                    </div>
                    <div className="text-xs font-mono text-historic-sepia">
                      Stimmen
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

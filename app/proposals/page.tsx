'use client'

import { useState } from 'react'
import { useSession } from '@/hooks/useSession'
import { useProposals } from '@/hooks/useProposals'
import { ProposalCard } from '@/components/proposals/ProposalCard'
import { FilterBar } from '@/components/proposals/FilterBar'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { Header } from '@/components/layout/Header'
import { DocumentTextIcon } from '@heroicons/react/24/solid'
import { Footer } from '@/components/layout/Footer'

export default function ProposalsPage() {
  const { isAuthenticated, user } = useSession()
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null)
  const [selectedDataType, setSelectedDataType] = useState<string | null>(null)

  const { proposals, isLoading } = useProposals({
    status: selectedStatus ?? undefined,
    dataType: selectedDataType ?? undefined,
  })

  const canVote = isAuthenticated && user?.registrationStatus === 'registered'

  return (
    <div className="min-h-screen bg-off-white flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h1 className="font-display text-3xl font-bold text-brand-black">
                Projektvorschläge
              </h1>
              <p className="mt-2 text-historic-sepia font-mono">
                Entdecke Projektideen und stimme für deine Favoriten.
              </p>
            </div>
            {isAuthenticated ? (
              <ButtonLink href="/proposals/new" variant="primary">
                Projekt vorschlagen
              </ButtonLink>
            ) : (
              <ButtonLink href="/register" variant="primary">
                Registrieren zum Abstimmen
              </ButtonLink>
            )}
          </div>

          {/* Filters */}
          <div className="mb-8">
            <FilterBar
              selectedStatus={selectedStatus}
              onStatusChange={setSelectedStatus}
              selectedDataType={selectedDataType}
              onDataTypeChange={setSelectedDataType}
            />
          </div>

          {/* Proposals list */}
          {isLoading ? (
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-40 bg-white rounded-lg animate-pulse" />
              ))}
            </div>
          ) : proposals.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto bg-historic-cream rounded-full flex items-center justify-center mb-4">
                <DocumentTextIcon className="w-8 h-8 text-historic-sepia" aria-hidden="true" />
              </div>
              <h3 className="font-display text-lg font-semibold text-brand-black">
                Keine Projekte gefunden
              </h3>
              <p className="mt-2 text-sm font-mono text-historic-sepia">
                {selectedStatus || selectedDataType
                  ? 'Versuche andere Filter.'
                  : 'Sei der Erste, der ein Projekt vorschlägt!'}
              </p>
              {isAuthenticated && !selectedStatus && !selectedDataType && (
                <ButtonLink href="/proposals/new" variant="primary" className="mt-6">
                  Erstes Projekt vorschlagen
                </ButtonLink>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              {proposals.map((proposal) => (
                <ProposalCard
                  key={proposal.id}
                  id={proposal.id}
                  title={proposal.title}
                  description={proposal.description}
                  proposerName={proposal.proposerName}
                  voteCount={proposal.voteCount}
                  dataTypes={proposal.dataTypes}
                  status={proposal.status}
                  hasVoted={proposal.hasVoted}
                  canVote={canVote}
                />
              ))}
            </div>
          )}

          {/* Info box */}
          {!isAuthenticated && proposals.length > 0 && (
            <div className="mt-12 bg-industrial-gold/10 rounded-lg p-6 text-center">
              <h3 className="font-display text-lg font-semibold text-brand-black">
                Möchtest du abstimmen?
              </h3>
              <p className="mt-2 text-sm font-mono text-historic-sepia">
                Registriere dich als Teilnehmer, um für Projekte zu stimmen und eigene Vorschläge einzureichen.
              </p>
              <ButtonLink href="/register" variant="primary" className="mt-4">
                Jetzt registrieren
              </ButtonLink>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

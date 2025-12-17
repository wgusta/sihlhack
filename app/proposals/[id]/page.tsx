'use client'

import { use } from 'react'
import Link from 'next/link'
import { useSession } from '@/hooks/useSession'
import { useProposal } from '@/hooks/useProposals'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { VoteButton } from '@/components/proposals/VoteButton'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { DATA_TYPE_LABELS, type DataType } from '@/types/proposal'
import { formatDate } from '@/lib/utils'

export default function ProposalDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const { isAuthenticated, user } = useSession()
  const { proposal, isLoading, isError } = useProposal(id)

  const canVote = isAuthenticated && user?.registrationStatus === 'registered'

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'submitted':
        return <Badge variant="info">Eingereicht</Badge>
      case 'accepted':
        return <Badge variant="success">Akzeptiert</Badge>
      case 'in_progress':
        return <Badge variant="warning">In Bearbeitung</Badge>
      case 'completed':
        return <Badge variant="success">Abgeschlossen</Badge>
      default:
        return <Badge>Entwurf</Badge>
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-off-white flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-historic-cream border-t-sihl-red rounded-full animate-spin" />
      </div>
    )
  }

  if (isError || !proposal) {
    return (
      <div className="min-h-screen bg-off-white flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-2xl font-bold text-brand-black">
              Projekt nicht gefunden
            </h1>
            <p className="mt-2 text-historic-sepia font-mono">
              Das Projekt existiert nicht oder wurde entfernt.
            </p>
            <ButtonLink href="/proposals" variant="primary" className="mt-6">
              Alle Projekte ansehen
            </ButtonLink>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-off-white flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <Link
              href="/proposals"
              className="text-sm font-mono text-historic-sepia hover:text-sihl-red transition-colors"
            >
              ← Alle Projekte
            </Link>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardContent className="pt-6">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h1 className="font-display text-2xl font-bold text-brand-black">
                          {proposal.title}
                        </h1>
                        {getStatusBadge(proposal.status)}
                      </div>
                      <p className="text-sm font-mono text-historic-sepia">
                        von {proposal.proposerName || 'Anonym'} •{' '}
                        {formatDate(proposal.createdAt)}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="prose prose-sm max-w-none">
                    <h3 className="font-display text-lg font-semibold text-brand-black">
                      Beschreibung
                    </h3>
                    <p className="text-brand-black/80 whitespace-pre-wrap">
                      {proposal.description}
                    </p>
                  </div>

                  {/* Historical context */}
                  {proposal.historicalContext && (
                    <div className="mt-6">
                      <h3 className="font-display text-lg font-semibold text-brand-black mb-2">
                        Historischer Kontext
                      </h3>
                      <p className="text-brand-black/80 whitespace-pre-wrap">
                        {proposal.historicalContext}
                      </p>
                    </div>
                  )}

                  {/* Technical approach */}
                  {proposal.technicalApproach && (
                    <div className="mt-6">
                      <h3 className="font-display text-lg font-semibold text-brand-black mb-2">
                        Technischer Ansatz
                      </h3>
                      <p className="text-brand-black/80 whitespace-pre-wrap">
                        {proposal.technicalApproach}
                      </p>
                    </div>
                  )}

                  {/* Data types */}
                  {proposal.dataTypes && proposal.dataTypes.length > 0 && (
                    <div className="mt-6">
                      <h3 className="font-display text-lg font-semibold text-brand-black mb-2">
                        Benötigte Datentypen
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {proposal.dataTypes.map((type, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 bg-historic-cream text-historic-sepia text-sm font-mono rounded-lg"
                          >
                            {DATA_TYPE_LABELS[type as DataType] || type}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Vote card */}
              <Card>
                <CardContent className="pt-6 text-center">
                  <p className="text-sm font-mono text-historic-sepia mb-4">
                    Stimmen für dieses Projekt
                  </p>
                  <div className="flex justify-center mb-4">
                    <VoteButton
                      proposalId={proposal.id}
                      voteCount={proposal.voteCount}
                      hasVoted={proposal.hasVoted}
                      canVote={canVote}
                    />
                  </div>
                  {!isAuthenticated && (
                    <p className="text-xs font-mono text-historic-sepia">
                      <Link href="/register" className="text-sihl-red hover:underline">
                        Registriere dich
                      </Link>
                      , um abzustimmen.
                    </p>
                  )}
                  {isAuthenticated && !canVote && (
                    <p className="text-xs font-mono text-historic-sepia">
                      Bezahle deine Anmeldung, um abzustimmen.
                    </p>
                  )}
                </CardContent>
              </Card>

              {/* Actions */}
              <Card>
                <CardContent className="pt-6 space-y-3">
                  <ButtonLink
                    href="/proposals"
                    variant="ghost"
                    size="sm"
                    className="w-full justify-center"
                  >
                    Alle Projekte
                  </ButtonLink>
                  {isAuthenticated && (
                    <ButtonLink
                      href="/proposals/new"
                      variant="secondary"
                      size="sm"
                      className="w-full justify-center"
                    >
                      Eigenes Projekt vorschlagen
                    </ButtonLink>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

'use client'

import useSWR from 'swr'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { formatCHF, daysUntil } from '@/lib/utils'

interface FundData {
  totalCollected: number
  prizePool: number
  operationsCosts: number
  participantCount: number
  minParticipants: number
  maxParticipants: number
  registrationFee: number
  eventStatus: string
  registrationDeadline: string
  eventDate: string
}

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function FundsPage() {
  const { data, isLoading, error } = useSWR<FundData>('/api/funds', fetcher, {
    refreshInterval: 30000,
  })

  const getStatusBadge = (status: string, participantCount: number, minParticipants: number) => {
    if (status === 'cancelled') {
      return <Badge variant="danger">Abgesagt</Badge>
    }
    if (status === 'confirmed' || participantCount >= minParticipants) {
      return <Badge variant="success">Bestätigt</Badge>
    }
    return <Badge variant="warning">Ausstehend</Badge>
  }

  return (
    <div className="min-h-screen bg-off-white flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl font-bold text-brand-black">
              Transparente Finanzen
            </h1>
            <p className="mt-4 text-historic-sepia font-mono max-w-2xl mx-auto">
              Alle Einnahmen und deren Verwendung sind öffentlich einsehbar.
              70% fliessen ins Preisgeld, 30% decken Betriebskosten.
            </p>
          </div>

          {isLoading ? (
            <div className="space-y-6">
              <div className="h-64 bg-white rounded-lg animate-pulse" />
              <div className="grid grid-cols-2 gap-6">
                <div className="h-32 bg-white rounded-lg animate-pulse" />
                <div className="h-32 bg-white rounded-lg animate-pulse" />
              </div>
            </div>
          ) : error || !data ? (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-historic-sepia font-mono">
                  Daten konnten nicht geladen werden.
                </p>
              </CardContent>
            </Card>
          ) : (
            <>
              {/* Main fund tracker */}
              <Card className="bg-brand-black text-white mb-8">
                <CardContent className="py-8">
                  {/* Status header */}
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="font-display text-xl">Fonds-Übersicht</h2>
                    {getStatusBadge(data.eventStatus, data.participantCount, data.minParticipants)}
                  </div>

                  {/* Main amount */}
                  <div className="text-center mb-8">
                    <div className="text-5xl font-display font-bold text-fund-green">
                      {formatCHF(data.totalCollected)}
                    </div>
                    <p className="text-sm font-mono text-gray-400 mt-2">
                      von {data.participantCount} Teilnehmenden gesammelt
                    </p>
                  </div>

                  {/* Progress bar */}
                  <div className="mb-8">
                    <div className="flex justify-between text-sm font-mono text-gray-400 mb-2">
                      <span>Fortschritt</span>
                      <span>
                        {data.participantCount} / {data.minParticipants} Minimum
                      </span>
                    </div>
                    <div className="h-4 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-1000 ${
                          data.participantCount >= data.minParticipants
                            ? 'bg-fund-green'
                            : 'bg-gradient-to-r from-industrial-rust to-refund-amber'
                        }`}
                        style={{
                          width: `${Math.min(100, (data.participantCount / data.minParticipants) * 100)}%`,
                        }}
                      />
                    </div>
                  </div>

                  {/* Allocation breakdown */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <div className="text-2xl font-display font-bold text-fund-green">
                        {formatCHF(data.prizePool)}
                      </div>
                      <div className="text-sm font-mono text-gray-400">
                        Preisgeld (70%)
                      </div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <div className="text-2xl font-display font-bold text-insight-cyan">
                        {formatCHF(data.operationsCosts)}
                      </div>
                      <div className="text-sm font-mono text-gray-400">
                        Betrieb (30%)
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Info cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-display font-bold text-brand-black">
                      {formatCHF(data.registrationFee)}
                    </div>
                    <div className="text-sm font-mono text-historic-sepia mt-1">
                      Teilnahmegebühr
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-display font-bold text-brand-black">
                      {daysUntil(data.registrationDeadline)}
                    </div>
                    <div className="text-sm font-mono text-historic-sepia mt-1">
                      Tage bis Deadline
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-display font-bold text-brand-black">
                      {data.maxParticipants - data.participantCount}
                    </div>
                    <div className="text-sm font-mono text-historic-sepia mt-1">
                      Plätze verfügbar
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Info boxes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card variant="historic">
                  <CardHeader>
                    <CardTitle className="text-lg">Rückerstattungsgarantie</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-mono text-historic-sepia">
                      Falls die Mindestteilnehmerzahl von {data.minParticipants} nicht erreicht wird,
                      erfolgt eine automatische, vollständige Rückerstattung aller Gebühren.
                      Kein Risiko für dich.
                    </p>
                  </CardContent>
                </Card>

                <Card variant="historic">
                  <CardHeader>
                    <CardTitle className="text-lg">Transparenz</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-mono text-historic-sepia">
                      Alle Finanzdaten werden in Echtzeit aktualisiert und sind jederzeit
                      öffentlich einsehbar. Keine versteckten Kosten, keine Überraschungen.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

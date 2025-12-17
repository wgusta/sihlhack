'use client'

import Link from 'next/link'
import { formatCHF } from '@/lib/utils'
import { Badge } from '@/components/ui/Badge'
import { useFunds } from '@/hooks/useFunds'

export function FundTrackerWidget() {
  const { funds, isLoading, isError } = useFunds()

  // Loading state
  if (isLoading) {
    return (
      <section className="py-16 bg-historic-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-historic p-8 md:p-12">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-1/3 mb-4" />
              <div className="grid grid-cols-3 gap-8 mb-8">
                <div className="h-24 bg-gray-200 rounded" />
                <div className="h-24 bg-gray-200 rounded" />
                <div className="h-24 bg-gray-200 rounded" />
              </div>
              <div className="h-4 bg-gray-200 rounded w-full" />
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Error state or no data: show placeholder
  if (isError || !funds) {
    return (
      <section className="py-16 bg-historic-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-historic p-8 md:p-12 text-center">
            <p className="text-historic-sepia font-mono">
              Fonds-Daten werden geladen...
            </p>
          </div>
        </div>
      </section>
    )
  }

  const progress = (funds.participantCount / funds.minParticipants) * 100
  const isThresholdMet = funds.participantCount >= funds.minParticipants

  return (
    <section className="py-16 bg-historic-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-historic p-8 md:p-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <h2 className="font-display text-3xl font-bold text-brand-black">
                Live Fonds-Tracker
              </h2>
              <p className="text-historic-sepia font-mono text-sm mt-1">
                Alle Finanzen öffentlich und in Echtzeit
              </p>
            </div>
            <Badge variant={
              funds.eventStatus === 'confirmed' ? 'success' :
              funds.eventStatus === 'cancelled' ? 'danger' :
              isThresholdMet ? 'success' : 'warning'
            }>
              {funds.eventStatus === 'confirmed' ? 'Event bestätigt' :
               funds.eventStatus === 'cancelled' ? 'Event abgesagt' :
               isThresholdMet ? 'Mindestzahl erreicht' : 'Sammeln läuft'}
            </Badge>
          </div>

          {/* Main stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center p-6 bg-off-white rounded-xl">
              <span className="block text-4xl font-display font-bold text-brand-black mono-data">
                {formatCHF(funds.totalCollectedChf)}
              </span>
              <span className="text-sm font-mono text-historic-sepia">Gesammelt</span>
            </div>
            <div className="text-center p-6 bg-off-white rounded-xl">
              <span className="block text-4xl font-display font-bold text-brand-black">
                {funds.participantCount}
                <span className="text-lg text-historic-sepia">/{funds.minParticipants}</span>
              </span>
              <span className="text-sm font-mono text-historic-sepia">Teilnehmende</span>
            </div>
            <div className="text-center p-6 bg-off-white rounded-xl">
              <span className="block text-4xl font-display font-bold text-brand-black">
                {funds.daysUntilDeadline}
              </span>
              <span className="text-sm font-mono text-historic-sepia">Tage bis Deadline</span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm font-mono text-historic-sepia mb-2">
              <span>Fortschritt zum Mindestziel</span>
              <span>{Math.min(progress, 100).toFixed(0)}%</span>
            </div>
            <div className="fund-progress">
              <div
                className="fund-progress-bar"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>
          </div>

          {/* Allocation breakdown */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="p-4 bg-fund-green/10 rounded-lg border border-fund-green/30">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-3 h-3 rounded-full bg-fund-green" />
                <span className="text-sm font-mono text-fund-green">70% Preisgeld</span>
              </div>
              <span className="text-xl font-display font-bold text-brand-black mono-data">
                {formatCHF(funds.prizePoolChf)}
              </span>
            </div>
            <div className="p-4 bg-industrial-gold/10 rounded-lg border border-industrial-gold/30">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-3 h-3 rounded-full bg-industrial-gold" />
                <span className="text-sm font-mono text-industrial-gold">30% Betrieb</span>
              </div>
              <span className="text-xl font-display font-bold text-brand-black mono-data">
                {formatCHF(funds.operationsChf)}
              </span>
            </div>
          </div>

          {/* Link to full tracker */}
          <div className="text-center">
            <Link
              href="/funds"
              className="inline-flex items-center gap-2 text-sihl-red font-mono text-sm hover:underline"
            >
              Vollständige Transaktionsübersicht ansehen
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

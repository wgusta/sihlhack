'use client'

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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-8">
                <div className="h-20 md:h-24 bg-gray-200 rounded" />
                <div className="h-20 md:h-24 bg-gray-200 rounded" />
                <div className="h-20 md:h-24 bg-gray-200 rounded" />
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

  // Progress to break-even
  const breakEvenProgress = funds.breakEvenParticipants > 0
    ? (funds.participantCount / funds.breakEvenParticipants) * 100
    : 0

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
              funds.isBreakEvenReached ? 'success' : 'warning'
            }>
              {funds.eventStatus === 'confirmed' ? 'Event bestätigt' :
               funds.eventStatus === 'cancelled' ? 'Event abgesagt' :
               funds.isBreakEvenReached ? 'Break-even erreicht' : 'Sammeln läuft'}
            </Badge>
          </div>

          {/* Main stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-8">
            <div className="text-center p-4 md:p-6 bg-off-white rounded-xl">
              <span className="block text-2xl md:text-4xl font-mono font-bold text-brand-black tabular-nums">
                {funds.participantCount}
              </span>
              <span className="text-sm font-mono text-historic-sepia">Teilnehmende</span>
            </div>
            <div className="text-center p-4 md:p-6 bg-off-white rounded-xl">
              <span className="block text-2xl md:text-4xl font-mono font-bold text-brand-black tabular-nums">
                {formatCHF(funds.totalCollectedChf)}
              </span>
              <span className="text-sm font-mono text-historic-sepia">Gesammelt</span>
            </div>
            <div className="text-center p-4 md:p-6 bg-off-white rounded-xl">
              <span className="block text-2xl md:text-4xl font-mono font-bold text-fund-green tabular-nums">
                {formatCHF(funds.prizePoolChf)}
              </span>
              <span className="text-sm font-mono text-historic-sepia">Preisgeld-Pot</span>
            </div>
          </div>

          {/* Break-even progress */}
          <div className="mb-8">
            <div className="flex justify-between text-sm font-mono text-historic-sepia mb-2">
              <span>
                Fortschritt zum Break-even ({funds.breakEvenParticipants} Teilnehmende)
              </span>
              <span>{Math.min(breakEvenProgress, 100).toFixed(0)}%</span>
            </div>
            <div className="fund-progress">
              <div
                className={`fund-progress-bar ${funds.isBreakEvenReached ? 'bg-fund-green' : ''}`}
                style={{ width: `${Math.min(breakEvenProgress, 100)}%` }}
              />
            </div>
            {funds.isBreakEvenReached && (
              <p className="text-fund-green font-mono text-sm mt-2">
                Break-even erreicht. Jede weitere Anmeldung erhöht das Preisgeld.
              </p>
            )}
          </div>

          {/* Prize distribution */}
          {funds.prizePoolChf > 0 && (
            <div className="grid grid-cols-3 gap-2 md:gap-4 mb-8">
              <div className="p-2 md:p-4 bg-fund-green/10 rounded-lg border border-fund-green/30 text-center">
                <span className="block text-xs font-mono text-fund-green mb-1">1. Platz (50%)</span>
                <span className="text-sm md:text-xl font-mono font-bold text-brand-black tabular-nums">
                  {formatCHF(funds.prizeFirstChf)}
                </span>
              </div>
              <div className="p-2 md:p-4 bg-industrial-gold/10 rounded-lg border border-industrial-gold/30 text-center">
                <span className="block text-xs font-mono text-industrial-gold mb-1">2. Platz (30%)</span>
                <span className="text-sm md:text-xl font-mono font-bold text-brand-black tabular-nums">
                  {formatCHF(funds.prizeSecondChf)}
                </span>
              </div>
              <div className="p-2 md:p-4 bg-insight-cyan/10 rounded-lg border border-insight-cyan/30 text-center">
                <span className="block text-xs font-mono text-insight-cyan mb-1">3. Platz (20%)</span>
                <span className="text-sm md:text-xl font-mono font-bold text-brand-black tabular-nums">
                  {formatCHF(funds.prizeThirdChf)}
                </span>
              </div>
            </div>
          )}

          {/* Budget breakdown teaser */}
          <div className="p-4 bg-off-white rounded-lg mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-0">
              <div>
                <span className="text-sm font-mono text-historic-sepia">Geplantes Budget:</span>
                <span className="ml-2 font-mono font-bold text-brand-black tabular-nums">
                  {formatCHF(funds.totalBudgetChf)}
                </span>
              </div>
              <div className="md:text-right">
                <span className="text-sm font-mono text-historic-sepia">Überschuss:</span>
                <span className="ml-2 font-mono font-bold text-fund-green tabular-nums">
                  {formatCHF(funds.surplusChf)}
                </span>
              </div>
            </div>
          </div>

          {/* Transparency note */}
          <div className="text-center">
            <p className="text-sm font-mono text-historic-sepia">
              Alle Finanzen sind öffentlich und transparent.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

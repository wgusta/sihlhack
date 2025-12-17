'use client'

import { useState } from 'react'
import { cn, formatCHF } from '@/lib/utils'
import { ButtonLink } from '@/components/ui/ButtonLink'

// Budget model from budget-model-2026.md
const TICKET_GROSS = 48000 // CHF 480 in centimes
const TICKET_NET = 46530 // CHF 465.30 after Stripe fees (3% + 0.30)
const FIXED_COSTS = 6500000 // CHF 65'000 in centimes
const VARIABLE_PER_PARTICIPANT = 24500 // CHF 245 in centimes
const CONTINGENCY_PERCENT = 10

// Calculate costs and prize pool based on participants
function calculateBudget(participants: number) {
  const netRevenue = participants * TICKET_NET
  const operationalCosts = FIXED_COSTS + (participants * VARIABLE_PER_PARTICIPANT)
  const contingency = Math.round(operationalCosts * CONTINGENCY_PERCENT / 100)
  const totalCosts = operationalCosts + contingency
  const prizePool = Math.max(0, netRevenue - totalCosts)
  const breakEvenProgress = totalCosts > 0 ? (netRevenue / totalCosts) * 100 : 0
  const remainingToBreakEven = Math.max(0, totalCosts - netRevenue)

  return {
    netRevenue,
    operationalCosts,
    contingency,
    totalCosts,
    prizePool,
    breakEvenProgress,
    remainingToBreakEven,
    prize1st: Math.round(prizePool * 0.5),
    prize2nd: Math.round(prizePool * 0.3),
    prize3rd: Math.round(prizePool * 0.2),
  }
}

export function DynamicFundingSection() {
  const [participants, setParticipants] = useState(140)
  const budget = calculateBudget(participants)
  const isBreakEven = budget.prizePool > 0

  return (
    <section className="py-24 bg-off-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-sihl-red uppercase tracking-widest">
            Transparenz
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-black mt-4">
            Community, nicht Corporate
          </h2>
          <p className="mt-4 text-lg text-historic-sepia font-mono max-w-3xl mx-auto">
            Kein Sponsor bestimmt die Regeln. Keine versteckten Agenden.
            Der gesamte Überschuss nach Betriebskosten wird als Preisgeld ausgeschüttet.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {/* Traditional */}
          <div className="bg-white rounded-2xl p-6 border-2 border-gray-200">
            <div className="text-center mb-6">
              <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 rounded-full font-mono text-xs uppercase">
                Traditionelle Hackathons
              </span>
            </div>
            <ul className="space-y-4">
              {[
                { icon: '🏢', text: 'Sponsor zahlt, Sponsor entscheidet' },
                { icon: '📋', text: 'Vorgegebene Challenges' },
                { icon: '🤷', text: 'Unklare Budgetverteilung' },
                { icon: '💼', text: 'Recruiter-Pitch statt Coding' },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-historic-sepia font-mono text-sm">
                  <span className="text-xl opacity-50">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* sihlhack */}
          <div className="bg-brand-black rounded-2xl p-6 border-2 border-fund-green">
            <div className="text-center mb-6">
              <span className="inline-block px-3 py-1 bg-fund-green/20 text-fund-green rounded-full font-mono text-xs uppercase">
                sihlhack Modell
              </span>
            </div>
            <ul className="space-y-4">
              {[
                { icon: '👥', text: 'Teilnehmer zahlen, Teilnehmer entscheiden' },
                { icon: '💡', text: 'Community wählt die Projekte' },
                { icon: '📊', text: '100% transparente Finanzen' },
                { icon: '💰', text: '100% Überschuss → Preisgeld' },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300 font-mono text-sm">
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Calculator Widget */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-historic overflow-hidden">
            {/* Calculator Header */}
            <div className="bg-brand-black p-6 text-center">
              <h3 className="font-display text-2xl font-bold text-white">
                Preisgeld-Rechner
              </h3>
              <p className="font-mono text-sm text-gray-400 mt-2">
                Verschiebe den Regler, um zu sehen wie der Pool wächst
              </p>
            </div>

            {/* Slider */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-sm text-historic-sepia">Teilnehmende</span>
                <span className="font-mono text-2xl font-bold text-brand-black">{participants}</span>
              </div>
              <input
                type="range"
                min="80"
                max="200"
                value={participants}
                onChange={(e) => setParticipants(parseInt(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer accent-sihl-red"
              />
              <div className="flex justify-between font-mono text-xs text-gray-400 mt-2">
                <span>80</span>
                <span>120</span>
                <span>160</span>
                <span>200</span>
              </div>
            </div>

            {/* Visual Breakdown */}
            <div className="p-6">
              {/* Revenue vs Costs Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-sm text-historic-sepia">Break-even Fortschritt</span>
                  <span className={cn(
                    "font-mono text-sm font-bold",
                    isBreakEven ? "text-fund-green" : "text-refund-amber"
                  )}>
                    {budget.breakEvenProgress.toFixed(1)}%
                  </span>
                </div>
                <div className="h-6 bg-gray-200 rounded-full overflow-hidden relative">
                  <div
                    className={cn(
                      "h-full rounded-full transition-all duration-500",
                      isBreakEven
                        ? "bg-gradient-to-r from-fund-green to-insight-cyan"
                        : "bg-gradient-to-r from-refund-amber to-industrial-gold"
                    )}
                    style={{ width: `${Math.min(100, budget.breakEvenProgress)}%` }}
                  />
                  {/* Break-even marker */}
                  <div className="absolute top-0 bottom-0 left-[100%] w-0.5 bg-brand-black transform -translate-x-1/2" style={{ left: '100%' }}>
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-xs text-gray-500">
                      Break-even
                    </div>
                  </div>
                </div>
                <div className="flex justify-between mt-2 font-mono text-xs">
                  <span className="text-historic-sepia">
                    Einnahmen: {formatCHF(budget.netRevenue)}
                  </span>
                  <span className="text-gray-500">
                    Kosten: {formatCHF(budget.totalCosts)}
                  </span>
                </div>
              </div>

              {/* Status Message */}
              <div className={cn(
                "p-4 rounded-lg mb-6 text-center",
                isBreakEven ? "bg-fund-green/10" : "bg-refund-amber/10"
              )}>
                {isBreakEven ? (
                  <p className="font-mono text-sm text-fund-green">
                    ✓ Break-even erreicht! Preisgeld-Pool: <strong>{formatCHF(budget.prizePool)}</strong>
                  </p>
                ) : (
                  <p className="font-mono text-sm text-refund-amber">
                    🔒 Noch {formatCHF(budget.remainingToBreakEven)} bis Break-even
                  </p>
                )}
              </div>

              {/* Prize Distribution (only show if break-even reached) */}
              {isBreakEven && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-fund-green/10 border border-fund-green/30 rounded-xl p-4 text-center">
                    <div className="text-3xl mb-2">🥇</div>
                    <div className="font-mono text-2xl font-bold text-fund-green">
                      {formatCHF(budget.prize1st)}
                    </div>
                    <div className="font-mono text-xs text-historic-sepia mt-1">
                      1. Platz (50%)
                    </div>
                  </div>
                  <div className="bg-industrial-gold/10 border border-industrial-gold/30 rounded-xl p-4 text-center">
                    <div className="text-3xl mb-2">🥈</div>
                    <div className="font-mono text-2xl font-bold text-industrial-gold">
                      {formatCHF(budget.prize2nd)}
                    </div>
                    <div className="font-mono text-xs text-historic-sepia mt-1">
                      2. Platz (30%)
                    </div>
                  </div>
                  <div className="bg-insight-cyan/10 border border-insight-cyan/30 rounded-xl p-4 text-center">
                    <div className="text-3xl mb-2">🥉</div>
                    <div className="font-mono text-2xl font-bold text-insight-cyan">
                      {formatCHF(budget.prize3rd)}
                    </div>
                    <div className="font-mono text-xs text-historic-sepia mt-1">
                      3. Platz (20%)
                    </div>
                  </div>
                </div>
              )}

              {/* Cost Breakdown */}
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="font-mono text-sm text-historic-sepia mb-3">Kostenaufstellung</div>
                <div className="space-y-2 text-sm font-mono">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Fixkosten (Venue, Admin, Infra, etc.)</span>
                    <span className="text-gray-800">{formatCHF(FIXED_COSTS)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Variable Kosten ({participants} × CHF 245)</span>
                    <span className="text-gray-800">{formatCHF(participants * VARIABLE_PER_PARTICIPANT)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Risikopuffer (10%)</span>
                    <span className="text-gray-800">{formatCHF(budget.contingency)}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-200 font-bold">
                    <span className="text-gray-800">Total Kosten</span>
                    <span className="text-gray-800">{formatCHF(budget.totalCosts)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="p-6 bg-gray-50 border-t border-gray-100">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="font-mono text-sm text-historic-sepia text-center sm:text-left">
                  <span className="text-fund-green font-bold">✓</span> 100% des Überschusses geht an die Gewinner.
                </p>
                <ButtonLink href="/register" variant="primary" size="md">
                  Jetzt Platz sichern
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Statement */}
        <div className="mt-16 text-center">
          <p className="font-mono text-sm text-historic-sepia max-w-2xl mx-auto">
            Alle Finanzdaten werden in Echtzeit auf dieser Website angezeigt.
            Nach dem Event veröffentlichen wir eine vollständige Abrechnung.
            <br />
            <span className="text-sihl-red">100% Transparenz, 0% Corporate Bullshit.</span>
          </p>
        </div>
      </div>
    </section>
  )
}

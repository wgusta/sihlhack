'use client'

import { useState } from 'react'
import { cn, formatCHF } from '@/lib/utils'
import { ButtonLink } from '@/components/ui/ButtonLink'

const FEE = 48000 // CHF 480 in centimes
const OPERATIONS_PERCENT = 30
const PRIZE_PERCENT = 70

export function DynamicFundingSection() {
  const [participants, setParticipants] = useState(25)

  const totalCollected = participants * FEE
  const operationsCosts = (totalCollected * OPERATIONS_PERCENT) / 100
  const prizePool = (totalCollected * PRIZE_PERCENT) / 100
  const prize1st = (prizePool * 50) / 100
  const prize2nd = (prizePool * 30) / 100
  const prize3rd = (prizePool * 20) / 100

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
            Deine Gebühr finanziert direkt das Preisgeld, das du gewinnen kannst.
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
                { icon: '💰', text: '70% deiner Gebühr → Preisgeld' },
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
                min="10"
                max="60"
                value={participants}
                onChange={(e) => setParticipants(parseInt(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer accent-sihl-red"
              />
              <div className="flex justify-between font-mono text-xs text-gray-400 mt-2">
                <span>10</span>
                <span>20 (Minimum)</span>
                <span>40</span>
                <span>60</span>
              </div>
            </div>

            {/* Visual Breakdown */}
            <div className="p-6">
              {/* Total Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-sm text-historic-sepia">Gesamteinnahmen</span>
                  <span className="font-mono text-lg font-bold text-brand-black">
                    {formatCHF(totalCollected)}
                  </span>
                </div>
                <div className="h-12 rounded-lg overflow-hidden flex">
                  <div
                    className="bg-fund-green flex items-center justify-center transition-all duration-300"
                    style={{ width: `${PRIZE_PERCENT}%` }}
                  >
                    <span className="font-mono text-xs text-white font-bold">70% Preisgeld</span>
                  </div>
                  <div
                    className="bg-gray-300 flex items-center justify-center transition-all duration-300"
                    style={{ width: `${OPERATIONS_PERCENT}%` }}
                  >
                    <span className="font-mono text-xs text-gray-700 font-bold">30% Betrieb</span>
                  </div>
                </div>
              </div>

              {/* Prize Distribution */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-fund-green/10 border border-fund-green/30 rounded-xl p-4 text-center">
                  <div className="text-3xl mb-2">🥇</div>
                  <div className="font-mono text-2xl font-bold text-fund-green">
                    {formatCHF(prize1st)}
                  </div>
                  <div className="font-mono text-xs text-historic-sepia mt-1">
                    1. Platz (50%)
                  </div>
                </div>
                <div className="bg-industrial-gold/10 border border-industrial-gold/30 rounded-xl p-4 text-center">
                  <div className="text-3xl mb-2">🥈</div>
                  <div className="font-mono text-2xl font-bold text-industrial-gold">
                    {formatCHF(prize2nd)}
                  </div>
                  <div className="font-mono text-xs text-historic-sepia mt-1">
                    2. Platz (30%)
                  </div>
                </div>
                <div className="bg-insight-cyan/10 border border-insight-cyan/30 rounded-xl p-4 text-center">
                  <div className="text-3xl mb-2">🥉</div>
                  <div className="font-mono text-2xl font-bold text-insight-cyan">
                    {formatCHF(prize3rd)}
                  </div>
                  <div className="font-mono text-xs text-historic-sepia mt-1">
                    3. Platz (20%)
                  </div>
                </div>
              </div>

              {/* Operations Breakdown */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-sm text-historic-sepia">Betriebskosten (30%)</span>
                  <span className="font-mono text-sm font-bold text-gray-600">
                    {formatCHF(operationsCosts)}
                  </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs font-mono text-gray-500">
                  <span>📍 Location</span>
                  <span>🍕 Verpflegung</span>
                  <span>🖥️ Infrastruktur</span>
                  <span>📋 Organisation</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="p-6 bg-gray-50 border-t border-gray-100">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="font-mono text-sm text-historic-sepia text-center sm:text-left">
                  <span className="text-fund-green font-bold">✓</span> Deine Anmeldung erhöht den Pool für alle.
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

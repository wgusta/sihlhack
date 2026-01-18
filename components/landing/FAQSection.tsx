'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

const faqs = [
  {
    q: 'Was ist ein Sihlicon Hub?',
    a: 'Server + Batterie + Wärme in einem System. Compute erzeugt Wärme, Batterie puffert Solar, Wärme heizt Gebäude. Der thermische Pfad? Noch offen; das ist eure Challenge.',
  },
  {
    q: 'Was kostet das?',
    a: 'CHF 150 / Person für 3 Tage. 70% gehen ins Preisgeld, 30% decken Betriebskosten. Vollständige Rückerstattung bei Event-Absage. Kein Risiko.',
  },
  {
    q: 'Wem gehört der Code?',
    a: 'Dir. Dual-Lizenz-Modell: Hardware (CERN-OHL-P/MIT) vollständig frei, Grid-OS (SVG-L) schützt das Netz. Alle Rechte bleiben bei dir. Du kannst morgen eine Firma gründen und konkurrieren. Mach das.',
  },
  {
    q: 'Was sind die Pakete?',
    a: 'Drei Pakete: Demo-Kit (Energie-Flow beweisen), Hardware Safety (niemand kriegt Stromschlag), Grid-OS (wann rechnen, wann heizen). Drei thermische Pfade: Öl-Immersion, Wasser-Loop, Wärmepumpe. Euer Team entscheidet.',
  },
  {
    q: 'Wie bilden sich Teams?',
    a: 'Selbstorganisiert oder über Matching bei Anmeldung. Skills mischen: Hardware + Sensor + Backend + Energie. Chemie müsst ihr selbst finden.',
  },
  {
    q: 'Brauche ich Hardware-Erfahrung?',
    a: 'Nicht unbedingt. Rollen: Hardware, Elektro, Software, Design, sogar Recht. Wähle deine Stärke bei der Anmeldung. Nicht-Techniker sind willkommen.',
  },
  {
    q: 'Was ist eine LEG?',
    a: 'Lokale Elektrizitätsgemeinschaft nach Schweizer Recht (StromVG Art. 18). Nachbarn produzieren und teilen Strom gemeinsam. Technische Infrastruktur? Baut ihr.',
  },
  {
    q: 'Was passiert am Sonntag?',
    a: 'Demo-Day. Prototyp geht ans echte Solarmodul. Kommt Wärme raus? Jury bewertet. Preisgeld verteilt. Hardware-Teil ist vor Ort, Software kann hybrid sein. Aber: nichts schlägt das Gefühl, wenn der Prototyp warm wird.',
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="font-mono text-sm text-thermal-orange uppercase tracking-widest">
            Die harten Fragen
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-black mt-4">
            Was du wissen willst
          </h2>
          <p className="mt-4 text-historic-sepia font-mono text-sm max-w-xl mx-auto">
            Keine Marketing-Antworten. Nur das, was stimmt.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-display font-semibold text-brand-black pr-4">
                  {faq.q}
                </span>
                <span
                  className={cn(
                    "flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-transform",
                    openIndex === index && "rotate-180"
                  )}
                >
                  <ChevronDownIcon className="w-4 h-4 text-gray-600" aria-hidden="true" />
                </span>
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  openIndex === index ? "max-h-96" : "max-h-0"
                )}
              >
                <div className="px-5 pb-5">
                  <p className="font-mono text-sm text-historic-sepia leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Questions CTA */}
        <div className="mt-8 text-center">
          <p className="font-mono text-sm text-historic-sepia">
            Noch mehr Fragen? Schreib uns an{' '}
            <a href="mailto:hello@sihlhack.ch" className="text-thermal-orange hover:underline">
              hello@sihlhack.ch
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

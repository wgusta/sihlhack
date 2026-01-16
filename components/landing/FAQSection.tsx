'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    q: 'Brauche ich Hardware-Erfahrung?',
    a: 'Nein. Wir brauchen alle Skills: Software-Entwickler für Grid-OS und APIs, Designer für die Benutzeroberfläche, Ingenieure für thermische Berechnungen, und Projektmanager für die Dokumentation. Wähle bei der Anmeldung deine Rolle.',
  },
  {
    q: 'Was ist eine LEG (Lokale Elektrizitätsgemeinschaft)?',
    a: 'Eine LEG ist ein Zusammenschluss von Nachbarn, die gemeinsam Solarstrom produzieren und nutzen. Seit 2023 in der Schweiz gesetzlich möglich. Unsere Hardware wird in einer echten LEG installiert.',
  },
  {
    q: 'Was passiert mit dem Code nach dem Hackathon?',
    a: 'Alles wird unter einer Open Source Lizenz (Apache 2.0 oder MIT) veröffentlicht. Du behältst alle Rechte an deinen Beiträgen. Das Ziel ist, dass andere LEGs die Lösung nachbauen können.',
  },
  {
    q: 'Wie funktioniert "Immersion Cooling"?',
    a: 'Server werden in spezielles Öl getaucht. Das Öl nimmt die Wärme auf und wird durch einen Wärmetauscher gepumpt. Das Ergebnis: Lautlose Server, keine Staubprobleme, und 60°C warmes Wasser für die Heizung.',
  },
  {
    q: 'Wer finanziert das?',
    a: 'Der Hackathon selbst ist kostenlos. Wir suchen aktuell noch Sponsoren für die Hardware des Prototyps. Langfristig finanzieren sich die Systeme durch Compute-Einnahmen und eingesparte Heizkosten.',
  },
  {
    q: 'Kann ich remote teilnehmen?',
    a: 'Der Hardware-Teil findet vor Ort statt (man muss Server anfassen können). Software-Teams können hybrid arbeiten. Wir empfehlen aber, zumindest für das finale Testing vor Ort zu sein.',
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
            Fragen?
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-black mt-4">
            Häufige Fragen
          </h2>
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
                  <svg
                    className="w-4 h-4 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
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
            Weitere Fragen? Schreib uns an{' '}
            <a href="mailto:hello@sihlhack.ch" className="text-thermal-orange hover:underline">
              hello@sihlhack.ch
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

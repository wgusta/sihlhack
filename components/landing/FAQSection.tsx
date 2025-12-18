'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    q: 'Brauche ich Programmierkenntnisse?',
    a: 'Nein. sihlhack ist rollenbasiert. Wir brauchen Historiker, Designer, Projektmanager genauso wie Entwickler. Wähle bei der Anmeldung deine Rolle und finde ein Team, das deine Stärken braucht.',
  },
  {
    q: 'Was ist, wenn ich kein Team habe?',
    a: 'Kein Problem. Bei der Anmeldung gibst du an, dass du ein Team suchst. Wir zeigen dir andere Teilnehmende mit komplementären Rollen und Skills. Vor dem Event helfen wir aktiv beim Team-Matching.',
  },
  {
    q: 'Was passiert bei zu wenigen Anmeldungen?',
    a: 'Falls die Mindestteilnehmerzahl bis zur Deadline nicht erreicht wird, erhältst du automatisch eine vollständige Rückerstattung deiner Gebühr. Kein Risiko für dich.',
  },
  {
    q: 'Woher kommen die historischen Daten?',
    a: 'Unternehmen aus dem Sihltal stellen historische Dokumente, Fotografien, Geschäftsbücher und Baupläne zur Verfügung. Sie werden nicht bezahlt und haben keinen Einfluss auf Projekte.',
  },
  {
    q: 'Wie wird das Preisgeld verteilt?',
    a: 'Der gesamte Überschuss nach Betriebskosten fliesst ins Preisgeld: 50% für den 1. Platz, 30% für den 2. Platz, 20% für den 3. Platz. Eine Jury bewertet nach vorab kommunizierten Kriterien.',
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="font-mono text-sm text-sihl-red uppercase tracking-widest">
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
            <a href="mailto:hello@sihlhack.ch" className="text-sihl-red hover:underline">
              hello@sihlhack.ch
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

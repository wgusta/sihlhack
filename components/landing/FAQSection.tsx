'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    q: 'Was ist ein Sihlicon Hub?',
    a: 'Ein Sihlicon Hub ist ein dezentrales Compute-System: Server, die in dielektrischem Öl gekühlt werden (Immersion Cooling). Die Abwärme wird für Warmwasser und Raumheizung genutzt – 99% Wärmerückgewinnung. Betrieben wird das System mit lokalem Solarstrom.',
  },
  {
    q: 'Was bedeutet "teilnehmerorientiert"?',
    a: 'Bei sihlhack gehört der Hackathon den Teilnehmern, nicht den Sponsoren. Es gibt keine vorgegebene Corporate-Agenda. Alle Ergebnisse werden unter Apache 2.0 Open Source veröffentlicht. Du behältst deine Rechte und kannst deine Arbeit auch kommerziell nutzen.',
  },
  {
    q: 'Was ist eine LEG?',
    a: 'Eine Lokale Elektrizitätsgemeinschaft (LEG) nach StromVG Art. 18 ist ein Zusammenschluss von Produzenten und Konsumenten, die gemeinsam Energie produzieren und teilen. Ähnlich wie ein ZEV, aber mit der Möglichkeit, das öffentliche Netz zu nutzen.',
  },
  {
    q: 'Brauche ich Hardware-Erfahrung?',
    a: 'Nein. Wir haben 5 verschiedene Challenges: Sihlicon Core (Hardware), Grid-OS (Software), LEG Toolkit (Legal), Energy Dashboard (Frontend) und System Integration. Wähle bei der Anmeldung deine Rolle – von Entwickler bis Designer bis Projektmanager.',
  },
  {
    q: 'Was passiert am Sonntag?',
    a: 'Am Sonntag schliessen wir den Prototyp an ein echtes Solarmodul an und testen das System unter realen Bedingungen. Das ist der Höhepunkt des Hackathons – vom Konzept zum funktionierenden System.',
  },
  {
    q: 'Wie funktioniert Immersion Cooling?',
    a: 'Server werden komplett in dielektrisches Öl getaucht. Das Öl nimmt die Wärme auf und wird durch einen Wärmetauscher gepumpt. Ergebnis: Lautlose Server, keine Staubprobleme, und 60°C warmes Wasser für Heizung und Warmwasser.',
  },
  {
    q: 'Was passiert mit meinem Code?',
    a: 'Alles wird unter Apache 2.0 veröffentlicht. Du behältst alle Urheberrechte an deinen Beiträgen und kannst deinen Code auch für andere Projekte nutzen (Dual Licensing). Das Ziel ist, dass andere LEGs die Lösung nachbauen können.',
  },
  {
    q: 'Wer finanziert den Hackathon?',
    a: 'Wir suchen aktuell Hardware-Sponsoren für Server, GPUs und Immersion-Cooling-Equipment. Langfristig finanzieren sich die Systeme durch Compute-Einnahmen (Rechenleistung verkaufen) und eingesparte Heizkosten.',
  },
  {
    q: 'Kann ich remote teilnehmen?',
    a: 'Der Hardware-Teil findet vor Ort statt – man muss den Prototyp anfassen können. Software-Teams können hybrid arbeiten. Für den Solar-Test am Sonntag empfehlen wir, vor Ort zu sein.',
  },
  {
    q: 'Was ist das Energie-Trilemma?',
    a: 'LEGs stehen vor drei Zielen, die sich klassisch widersprechen: Maximale Solarproduktion, Netzstabilität und Gemeinschaftsautonomie. Der Sihlicon Hub löst dieses Trilemma, indem er Solarüberschuss direkt in Rechenleistung umwandelt und die Abwärme nutzt.',
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

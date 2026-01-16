'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    q: 'Was kostet die Teilnahme?',
    a: 'CHF 150 pro Person für 3 Tage (Freitag bis Sonntag). Das Budget: 50% Preisgeld-Pool, 25% Hardware/Material, 20% Venue/Catering, 5% Reserve. Vollständige Rückerstattung bei Absage des Events.',
  },
  {
    q: 'Was ist ein Sihlicon Hub?',
    a: 'Ein Sihlicon Hub ist ein dezentrales Compute-System: Server, die in dielektrischem Öl gekühlt werden (Immersion Cooling). Die Abwärme wird für Warmwasser und Raumheizung genutzt – 99% Wärmerückgewinnung. Betrieben wird das System mit lokalem Solarstrom.',
  },
  {
    q: 'Was sind die Pflicht-Pakete?',
    a: 'Es gibt 3 Pflicht-Pakete: (1) End-to-End Demo-Kit – messbarer Energie-Flow mit One-Button-Demo, (2) Hardware Safety & Thermal Baseline – BOM, Safety Case, thermische Charakterisierung, (3) Grid-OS Controller – Scheduler mit Solar-Budget und API. Jedes Team wählt ein Paket als Hauptfokus.',
  },
  {
    q: 'Wie funktioniert die Competition?',
    a: '30-36 Teams à 5 Personen arbeiten parallel an den gleichen Paketen. Mehrere Teams können am gleichen Paket arbeiten – die beste Lösung pro Paket gewinnt. Preisgeld: 35% für Demo-Kit, 35% für Safety, 20% für Grid-OS, 10% für Best Integration.',
  },
  {
    q: 'Was ist die Pre-Challenge?',
    a: 'Die Historic Archive Pre-Challenge läuft 2-4 Wochen vor dem Event online. Ziel: Standort-Scouting und historische Energie-Baupläne aus dem Sihltal sammeln. Die besten Einreichungen bekommen Bonuspunkte für das Hauptevent.',
  },
  {
    q: 'Wie werden Teams gebildet?',
    a: 'Teams organisieren sich selbst oder werden bei der Anmeldung gebildet. Jedes Paket hat empfohlene Rollen: z.B. Demo-Kit braucht Hardware-Ing., Sensor/Data Engineer, Backend-Dev. Wir helfen beim Matching.',
  },
  {
    q: 'Was ist eine LEG?',
    a: 'Eine Lokale Elektrizitätsgemeinschaft (LEG) nach StromVG Art. 18 ist ein Zusammenschluss von Produzenten und Konsumenten, die gemeinsam Energie produzieren und teilen. Ähnlich wie ein ZEV, aber mit der Möglichkeit, das öffentliche Netz zu nutzen.',
  },
  {
    q: 'Brauche ich Hardware-Erfahrung?',
    a: 'Nein. Wir haben 11 verschiedene Rollen: Hardware-Ingenieur, Elektro-Ingenieur, Sensor/Data Engineer, Energie-Experte, Grid-OS Dev, Backend-Dev, Frontend-Dev, Designer, LEG-Rechtsexperte, Projektleiter und Generalist. Wähle bei der Anmeldung deine Rolle.',
  },
  {
    q: 'Was passiert am Sonntag?',
    a: 'Demo-Day: Alle Teams präsentieren ihre Ergebnisse. Wir schliessen den Prototyp an ein echtes Solarmodul an und testen das System unter realen Bedingungen. Jury bewertet nach den Paket-Kriterien. Preisgeld wird verteilt.',
  },
  {
    q: 'Wie funktioniert Immersion Cooling?',
    a: 'Server werden komplett in dielektrisches Öl getaucht. Das Öl nimmt die Wärme auf und wird durch einen Wärmetauscher gepumpt. Ergebnis: Lautlose Server, keine Staubprobleme, und 40-50°C warmes Wasser für Heizung und Warmwasser.',
  },
  {
    q: 'Was passiert mit meinem Code?',
    a: 'Alles wird unter Apache 2.0 veröffentlicht. Du behältst alle Urheberrechte an deinen Beiträgen und kannst deinen Code auch für andere Projekte nutzen (Dual Licensing). Das Ziel ist, dass andere LEGs die Lösung nachbauen können.',
  },
  {
    q: 'Kann ich remote teilnehmen?',
    a: 'Der Hardware-Teil findet vor Ort statt – man muss den Prototyp anfassen können. Software-Teams können hybrid arbeiten. Für den Demo-Day am Sonntag empfehlen wir, vor Ort zu sein.',
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

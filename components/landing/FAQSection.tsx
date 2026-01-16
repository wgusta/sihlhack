'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    q: 'Was ist ein Sihlicon Hub?',
    a: 'Server + Batterie + Wärme in einem System. Ihr kombiniert Dinge, die normalerweise getrennt leben. Der thermische Pfad? Noch offen — das ist eure Challenge.',
  },
  {
    q: 'Ist Öl-Immersion die einzige Option?',
    a: 'Nein. Drei Pfade stehen offen: Öl-Immersion (elegant, komplex), Wasser-Loop (erprobt, solide), Wärmepumpe (ambitioniert). Euer Team entscheidet. Ihr bekommt Constraints, ihr findet den Weg.',
  },
  {
    q: 'Wie löst man den Solar/Wärme-Mismatch?',
    a: 'Ihr löst ihn. Optionen: Batterien puffern Tag→Nacht. Deferred Compute verschiebt Jobs. Beides zusammen? Noch besser. Die perfekte Balance? Baut ihr vielleicht.',
  },
  {
    q: 'Warum Batterien?',
    a: 'Server ohne Batterie = nur Server. Mit Batterie = Community-Backup. Netz down? Compute pausiert, Quartier wird versorgt. Kreislauf: Server bezahlt Batterie, Batterie liefert Resilienz.',
  },
  {
    q: 'Was kostet das?',
    a: 'CHF 150 / Person für 3 Tage. Budget ist öffentlich: 50% Preisgeld, 25% Hardware, 20% Venue, 5% Reserve. Vollständige Rückerstattung bei Event-Absage.',
  },
  {
    q: 'Wem gehört der Code?',
    a: 'Dir. Apache 2.0 = alle Rechte bei dir. Du kannst morgen eine Firma gründen und konkurrieren. Mach das. Je mehr Forks, desto besser.',
  },
  {
    q: 'Was ist anders an diesem Hackathon?',
    a: 'Keine vorgegebene Lösung. Ihr bekommt Constraints, ihr findet den Pfad. Echte Ingenieurs-Entscheidungen. Am Ende funktioniert was Physisches — oder nicht. Das ist der Test.',
  },
  {
    q: 'Was sind die Pakete?',
    a: 'Drei Pakete: Demo-Kit (Energie-Flow beweisen), Hardware Safety (niemand kriegt Stromschlag), Grid-OS (wann rechnen, wann heizen). Jedes Team wählt Fokus. Mehrere Teams pro Paket. Beste Lösung gewinnt.',
  },
  {
    q: 'Wie bilden sich Teams?',
    a: 'Selbstorganisiert oder über Matching bei Anmeldung. Skills mischen: Hardware + Sensor + Backend + Energie. Chemie müsst ihr selbst finden.',
  },
  {
    q: 'Was ist eine LEG?',
    a: 'Lokale Elektrizitätsgemeinschaft nach Schweizer Recht. Nachbarn produzieren und teilen Strom gemeinsam. Rechtliche Grundlage existiert. Technische Infrastruktur? Baut ihr.',
  },
  {
    q: 'Brauche ich Hardware-Erfahrung?',
    a: 'Nicht unbedingt. Rollen: Hardware, Elektro, Software, Design, sogar Recht. Wähle deine Stärke bei der Anmeldung.',
  },
  {
    q: 'Was passiert nach dem Hackathon?',
    a: 'Verein übernimmt Governance. Du kannst Mitglied werden, Roadmap mitgestalten, PRs einreichen. Ziel: Das wird größer als alle Einzelnen. Bessere Version gebaut? Perfekt. Open Source.',
  },
  {
    q: 'Was passiert am Sonntag?',
    a: 'Demo-Day. Alle Teams präsentieren. Prototyp geht ans echte Solarmodul. Kommt Wärme raus? Jury bewertet. Preisgeld verteilt. Bier danach.',
  },
  {
    q: 'Kann ich remote mitmachen?',
    a: 'Hardware-Teil = vor Ort (muss man anfassen). Software = hybrid möglich. Demo-Day Sonntag = vor Ort empfohlen. Nichts schlägt das Gefühl, wenn der Prototyp warm wird.',
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

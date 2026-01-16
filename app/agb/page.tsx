import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const metadata = {
  title: 'AGB | sihlhack',
  description: 'Allgemeine Geschäftsbedingungen für die Teilnahme an sihlhack - Der erste teilnehmerorientierte Hackathon der Schweiz.',
}

export default function AGBPage() {
  return (
    <div className="min-h-screen bg-off-white flex flex-col">
      <Header />

      <main className="flex-1 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-bold text-brand-black mb-8">
            Allgemeine Geschäftsbedingungen
          </h1>

          <div className="prose prose-historic font-mono text-sm space-y-8">
            <section>
              <h2 className="font-display text-xl font-semibold text-brand-black mb-4">
                1. Geltungsbereich
              </h2>
              <p className="text-historic-sepia">
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für die Teilnahme am sihlhack, dem ersten teilnehmerorientierten Hackathon der Schweiz. Ziel des Hackathons ist die Digitalisierung historischer Industriedaten aus dem Sihltal und die Entwicklung von Open-Source-Lösungen für die dezentrale Energiezukunft. Mit der Anmeldung akzeptieren Teilnehmende diese Bedingungen.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-brand-black mb-4">
                2. Teilnahmegebühr und Zahlungsbedingungen
              </h2>
              <p className="text-historic-sepia">
                Die Teilnahmegebühr beträgt CHF 120.00 pro Person. Die Zahlung erfolgt über Stripe und ist bei der Anmeldung fällig. Der gesamte Überschuss nach Deckung der Betriebskosten fliesst in den Preisgeldpool.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-brand-black mb-4">
                3. Rückerstattung
              </h2>
              <p className="text-historic-sepia">
                Falls die Mindestteilnehmerzahl bis zur Anmeldefrist nicht erreicht wird, erfolgt eine vollständige Rückerstattung aller Teilnahmegebühren. Bei Absage durch den Veranstalter aus anderen Gründen gilt ebenfalls eine vollständige Rückerstattung.
              </p>
              <p className="text-historic-sepia mt-4">
                Bei Stornierung durch Teilnehmende gelten folgende Regelungen:
              </p>
              <ul className="list-disc pl-6 text-historic-sepia mt-2 space-y-1">
                <li>Bis 30 Tage vor Event: 100% Rückerstattung</li>
                <li>15 bis 29 Tage vor Event: 50% Rückerstattung</li>
                <li>Weniger als 15 Tage vor Event: Keine Rückerstattung</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-brand-black mb-4">
                4. Projektvorschläge und Abstimmung
              </h2>
              <p className="text-historic-sepia">
                Registrierte Teilnehmende können Projektvorschläge einreichen und über alle eingereichten Projekte abstimmen. Die Projekte mit den meisten Stimmen werden am Event bearbeitet. Der Veranstalter behält sich das Recht vor, Projektvorschläge abzulehnen, die gegen geltendes Recht oder ethische Grundsätze verstossen.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-brand-black mb-4">
                5. Preisgeld
              </h2>
              <p className="text-historic-sepia">
                Das Preisgeld wird unter den Gewinnerteams aufgeteilt: 50% für den 1. Platz, 30% für den 2. Platz, 20% für den 3. Platz. Die Bewertung erfolgt durch eine Jury nach vorab kommunizierten Kriterien.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-brand-black mb-4">
                6. Geistiges Eigentum
              </h2>
              <p className="text-historic-sepia">
                Alle während des Hackathons erstellten Projekte (Software, Hardware-Designs, Dokumentation) werden unter der Apache 2.0 Open-Source-Lizenz veröffentlicht. Teilnehmende behalten alle Urheberrechte an ihren Beiträgen und stimmen der Veröffentlichung unter dieser Lizenz zu. Die Projekte verbleiben im geistigen Eigentum der jeweiligen Teams, werden aber der Öffentlichkeit zur freien Nutzung, Anpassung und Weiterentwicklung zur Verfügung gestellt.
              </p>
              <p className="text-historic-sepia mt-4">
                Teilnehmende gewähren dem Veranstalter das Recht, Projektergebnisse zu Dokumentations- und Werbezwecken zu verwenden.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-brand-black mb-4">
                7. Verhaltenskodex
              </h2>
              <p className="text-historic-sepia">
                Alle Teilnehmenden verpflichten sich zu respektvollem Umgang miteinander. Diskriminierung, Belästigung oder störendes Verhalten führt zum sofortigen Ausschluss ohne Rückerstattung.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-brand-black mb-4">
                8. Haftung
              </h2>
              <p className="text-historic-sepia">
                Der Veranstalter haftet nicht für Schäden, die während des Events entstehen, ausser bei grober Fahrlässigkeit oder Vorsatz. Teilnehmende sind für ihre persönlichen Gegenstände selbst verantwortlich.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-brand-black mb-4">
                9. Datenschutz
              </h2>
              <p className="text-historic-sepia">
                Die Verarbeitung personenbezogener Daten erfolgt gemäss unserer <a href="/datenschutz" className="text-sihl-red hover:underline">Datenschutzerklärung</a> und dem Schweizer Datenschutzgesetz (DSG).
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-brand-black mb-4">
                10. Anwendbares Recht und Gerichtsstand
              </h2>
              <p className="text-historic-sepia">
                Es gilt Schweizer Recht. Gerichtsstand ist Baden, Kanton Aargau, Schweiz.
              </p>
            </section>

            <section>
              <p className="text-historic-sepia text-xs mt-8">
                Stand: Dezember 2024
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

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
                Die Teilnahmegebühr beträgt CHF 150.00 pro Person. Die Zahlung erfolgt über Stripe und ist bei der Anmeldung fällig. Der gesamte Überschuss nach Deckung der Betriebskosten fliesst in den Preisgeldpool.
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
                5. Preisgeld und Competition-Modell
              </h2>
              <p className="text-historic-sepia">
                sihlhack funktioniert als Competition: 30-36 Teams arbeiten parallel an 3 Pflicht-Paketen. 
                Das Preisgeld wird pro Paket verteilt: 40% für den 1. Platz, 30% für den 2. Platz, 20% für den 3. Platz. 
                Zusätzlich gibt es 10% für die beste paketübergreifende Integration. 
                Die Bewertung erfolgt durch eine Jury nach vorab kommunizierten Paket-Kriterien.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-brand-black mb-4">
                6. Geistiges Eigentum und Lizenzierung
              </h2>
              
              <p className="text-historic-sepia mb-4">
                sihlhack verwendet ein Dual-Lizenz-Modell, um das Schweizer Stromnetz vor dem "Cobra-Effekt" 
                zu schützen, während gleichzeitig maximale Freiheit für Hardware-Innovation gewährleistet wird. 
                Teilnehmende behalten alle Urheberrechte an ihren Beiträgen (Art. 2 URG).
              </p>

              <h3 className="font-display text-lg font-semibold text-brand-black mb-3 mt-6">
                6.1 Hardware (Der Körper)
              </h3>
              <p className="text-historic-sepia mb-2">
                Alle Hardware-Designs, thermische Architekturen, CAD-Dateien, Schematics und Stücklisten (BOM) 
                werden unter der <strong>CERN-OHL-P (Permissive)</strong> oder <strong>MIT</strong> Lizenz veröffentlicht.
              </p>
              <p className="text-historic-sepia mb-4">
                <strong>Philosophie:</strong> "Jeder kann die Maschine bauen." Kommerzielle Nutzung, Modifikation 
                und Weiterverkauf sind ohne Einschränkungen erlaubt.
              </p>

              <h3 className="font-display text-lg font-semibold text-brand-black mb-3 mt-6">
                6.2 Software/Grid-OS (Das Gewissen)
              </h3>
              <p className="text-historic-sepia mb-2">
                Grid-OS Software (Scheduler, Orchestrator, Verhandlungslogik, Grid-Interface Code) wird unter 
                der <strong>Sihl Valley Common-Good License (SVG-L)</strong> veröffentlicht.
              </p>
              <p className="text-historic-sepia mb-3">
                <strong>Philosophie:</strong> "Du kannst das Gewissen der Maschine nicht entfernen." Diese Lizenz 
                enthält drei Kernklauseln:
              </p>
              <ul className="list-disc pl-6 text-historic-sepia space-y-2 mb-4">
                <li>
                  <strong>Thermodynamische Wahrheit:</strong> Die Software darf nicht so modifiziert werden, 
                  dass "Dummy Loops" (NO-OP Zyklen) nur zur Wärmeerzeugung ohne wirtschaftlichen oder 
                  wissenschaftlichen Wert laufen. Dies ist eine Lizenzverletzung.
                </li>
                <li>
                  <strong>Netzgehorsam:</strong> Jede Installation dieser Software, die signifikante Last 
                  kontrolliert, muss eine aktive, ungehinderte Schnittstelle für Grid Frequency Containment 
                  aufrechterhalten. Code zu entfernen, der Grid-Curtailment-Signale ignoriert, beendet die 
                  Lizenz sofort.
                </li>
                <li>
                  <strong>Anti-Vampir:</strong> Diese Software darf nicht auf Hardware mit einer Computational 
                  Efficiency Rating unter 500 MFLOPS/Watt verwendet werden, es sei denn, die Hardware ist als 
                  "Historisches Erbe" deklariert und auf Bildungszwecke beschränkt.
                </li>
              </ul>
              <p className="text-historic-sepia mb-4">
                Kommerzielle Nutzung ist erlaubt, jedoch unter Einhaltung der obigen Klauseln. 
                Eine detaillierte Beschreibung des Lizenzmodells findet sich unter{' '}
                <a href="/licensing" className="text-sihl-red hover:underline">/licensing</a>.
              </p>

              <h3 className="font-display text-lg font-semibold text-brand-black mb-3 mt-6">
                6.3 Teilnehmerrechte
              </h3>
              <p className="text-historic-sepia mb-2">
                Teilnehmende behalten alle Urheberrechte an ihren Beiträgen (Art. 2 URG). Die Veröffentlichung 
                unter den genannten Lizenzen erteilt eine nicht-exklusive, weltweite, gebührenfreie Lizenz: 
                Nutzungsrechte werden weitergegeben, ohne dass die eigenen Rechte verloren gehen.
              </p>
              <p className="text-historic-sepia mb-4">
                Teilnehmende können ihren Code später auch für andere Projekte nutzen, verkaufen oder anders 
                lizenzieren (Dual Licensing ist zulässig).
              </p>

              <h3 className="font-display text-lg font-semibold text-brand-black mb-3 mt-6">
                6.4 Lizenz-Compliance
              </h3>
              <p className="text-historic-sepia mb-2">
                Teilnehmende verpflichten sich, die Lizenzbedingungen einzuhalten. Bei Verstössen gegen die 
                SVG-L Klauseln (insbesondere Thermodynamische Wahrheit, Netzgehorsam oder Anti-Vampir) 
                erlischt die Lizenz sofort.
              </p>
              <p className="text-historic-sepia mb-4">
                Teilnehmende gewähren dem Veranstalter das Recht, Projektergebnisse zu Dokumentations- und 
                Werbezwecken zu verwenden.
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

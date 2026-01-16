import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const metadata = {
  title: 'Datenschutz | sihlhack',
  description: 'Datenschutzerklärung von sihlhack - Der erste teilnehmerorientierte Hackathon der Schweiz.',
}

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-off-white flex flex-col">
      <Header />

      <main className="flex-1 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-bold text-brand-black mb-8">
            Datenschutzerklärung
          </h1>

          <div className="prose prose-historic font-mono text-sm space-y-8">
            <section>
              <h2 className="font-display text-xl font-semibold text-brand-black mb-4">
                1. Verantwortliche Stelle
              </h2>
              <p className="text-historic-sepia">
                Güney Usta<br />
                Rathausgasse 20<br />
                5400 Baden<br />
                Schweiz<br />
                E-Mail: <a href="mailto:gueney.usta@icloud.com" className="text-sihl-red hover:underline">gueney.usta@icloud.com</a>
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-brand-black mb-4">
                2. Erhobene Daten
              </h2>
              <p className="text-historic-sepia">
                Bei der Nutzung unserer Website und der Registrierung für sihlhack erheben wir folgende Daten:
              </p>
              <ul className="list-disc pl-6 text-historic-sepia mt-2 space-y-1">
                <li>Name und E-Mail-Adresse (bei Registrierung)</li>
                <li>Zahlungsinformationen (über Stripe verarbeitet)</li>
                <li>Projektvorschläge und Abstimmungen</li>
                <li>Technische Daten (IP-Adresse, Browser, Geräteinformationen)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-brand-black mb-4">
                3. Webanalyse mit Matomo
              </h2>
              <p className="text-historic-sepia">
                Diese Website verwendet Matomo, eine Open-Source-Webanalyseplattform. Matomo verwendet Cookies, um die Nutzung der Website zu analysieren. Die durch das Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden auf unserem Server in der Schweiz gespeichert.
              </p>
              <p className="text-historic-sepia mt-4">
                <strong className="text-brand-black">Datenschutzfreundliche Einstellungen:</strong>
              </p>
              <ul className="list-disc pl-6 text-historic-sepia mt-2 space-y-1">
                <li>IP-Adressen werden anonymisiert (letzte 2 Bytes)</li>
                <li>Keine Weitergabe an Dritte</li>
                <li>Daten verbleiben in der Schweiz</li>
                <li>Do-Not-Track wird respektiert</li>
              </ul>
              <p className="text-historic-sepia mt-4">
                Sie können die Erfassung durch Matomo verhindern, indem Sie in Ihrem Browser &quot;Do Not Track&quot; aktivieren oder Cookies deaktivieren.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-brand-black mb-4">
                4. Zahlungsabwicklung
              </h2>
              <p className="text-historic-sepia">
                Die Zahlungsabwicklung erfolgt über Stripe, Inc. Bei der Zahlung werden Ihre Zahlungsdaten direkt an Stripe übermittelt und dort verarbeitet. Wir speichern keine vollständigen Kreditkartendaten. Stripes Datenschutzerklärung finden Sie unter: <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-sihl-red hover:underline">stripe.com/privacy</a>
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-brand-black mb-4">
                5. E-Mail-Kommunikation
              </h2>
              <p className="text-historic-sepia">
                Für den Versand von E-Mails (Magic-Link-Authentifizierung, Benachrichtigungen) nutzen wir Resend. Ihre E-Mail-Adresse wird ausschliesslich für die Kommunikation im Rahmen von sihlhack verwendet.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-brand-black mb-4">
                6. Datenspeicherung
              </h2>
              <p className="text-historic-sepia">
                Ihre Daten werden auf Servern von Vercel (Hosting) und Neon (Datenbank) gespeichert. Beide Anbieter erfüllen hohe Datenschutzstandards und bieten Serverstandorte in der EU an.
              </p>
              <p className="text-historic-sepia mt-4">
                Personenbezogene Daten werden gelöscht, sobald der Zweck der Speicherung entfällt, spätestens jedoch 2 Jahre nach dem Event, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-brand-black mb-4">
                7. Ihre Rechte
              </h2>
              <p className="text-historic-sepia">
                Nach dem Schweizer Datenschutzgesetz (DSG) haben Sie folgende Rechte:
              </p>
              <ul className="list-disc pl-6 text-historic-sepia mt-2 space-y-1">
                <li><strong className="text-brand-black">Auskunftsrecht:</strong> Sie können Auskunft über Ihre gespeicherten Daten verlangen.</li>
                <li><strong className="text-brand-black">Berichtigungsrecht:</strong> Sie können die Berichtigung unrichtiger Daten verlangen.</li>
                <li><strong className="text-brand-black">Löschungsrecht:</strong> Sie können die Löschung Ihrer Daten verlangen.</li>
                <li><strong className="text-brand-black">Datenportabilität:</strong> Sie können Ihre Daten in einem gängigen Format erhalten.</li>
              </ul>
              <p className="text-historic-sepia mt-4">
                Zur Ausübung Ihrer Rechte kontaktieren Sie uns unter: <a href="mailto:gueney.usta@icloud.com" className="text-sihl-red hover:underline">gueney.usta@icloud.com</a>
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-brand-black mb-4">
                8. Cookies
              </h2>
              <p className="text-historic-sepia">
                Diese Website verwendet folgende Cookies:
              </p>
              <ul className="list-disc pl-6 text-historic-sepia mt-2 space-y-1">
                <li><strong className="text-brand-black">Notwendige Cookies:</strong> Session-Token für die Authentifizierung</li>
                <li><strong className="text-brand-black">Analyse-Cookies:</strong> Matomo-Cookies zur Websiteanalyse (können deaktiviert werden)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-brand-black mb-4">
                9. Änderungen
              </h2>
              <p className="text-historic-sepia">
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an geänderte Rechtslagen oder Änderungen unserer Dienstleistungen anzupassen.
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

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const metadata = {
  title: 'Impressum | sihlhack',
  description: 'Impressum und Kontaktinformationen von sihlhack - Der erste teilnehmerorientierte Hackathon der Schweiz.',
}

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-off-white flex flex-col">
      <Header />

      <main className="flex-1 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-bold text-brand-black mb-8">
            Impressum
          </h1>

          <div className="prose prose-historic font-mono text-sm space-y-8">
            <section>
              <h2 className="font-display text-xl font-semibold text-brand-black mb-4">
                Kontakt
              </h2>
              <p className="text-historic-sepia">
                Güney Usta<br />
                Rathausgasse 20<br />
                5400 Baden<br />
                Schweiz
              </p>
              <p className="text-historic-sepia mt-4">
                E-Mail: <a href="mailto:gueney.usta@icloud.com" className="text-sihl-red hover:underline">gueney.usta@icloud.com</a><br />
                Telefon: <a href="tel:+41789350693" className="text-sihl-red hover:underline">+41 78 935 06 93</a>
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-brand-black mb-4">
                Verantwortlich für den Inhalt
              </h2>
              <p className="text-historic-sepia">
                Güney Usta<br />
                Rathausgasse 20<br />
                5400 Baden
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-brand-black mb-4">
                Haftungsausschluss
              </h2>
              <p className="text-historic-sepia">
                Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.
              </p>
              <p className="text-historic-sepia mt-4">
                Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-brand-black mb-4">
                Urheberrechte
              </h2>
              <p className="text-historic-sepia">
                Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf der Website gehören ausschliesslich Güney Usta oder den speziell genannten Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

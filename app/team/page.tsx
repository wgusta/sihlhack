import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent } from '@/components/ui/Card'

export const metadata = {
  title: 'Team | sihlhack',
  description: 'Das Team hinter sihlhack, dem ersten teilnehmerorientierten Hackathon der Schweiz.',
}

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-off-white flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-brand-black text-white py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display text-4xl sm:text-5xl font-bold">
              Team
            </h1>
            <p className="mt-6 text-lg font-mono text-gray-300 max-w-2xl mx-auto">
              Die Menschen hinter sihlhack.
            </p>
          </div>
        </section>

        {/* Team member */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="flex-1 p-6 md:p-8">
                    <span className="text-xs font-mono text-sihl-red uppercase tracking-wide">
                      Organisator
                    </span>
                    <h2 className="font-display text-2xl font-bold text-brand-black mt-2">
                      Güney Usta
                    </h2>
                    <p className="text-sm font-mono text-historic-sepia mt-1">
                      Process Engineer · Technical Project Leader
                    </p>

                    <p className="mt-4 text-historic-sepia font-mono text-sm">
                      Ich optimiere Geschäftsprozesse durch CRM Application Ownership und technische Beratung.
                      Als Process Engineer überbrücke ich Business Anforderungen und technische Umsetzung.
                    </p>

                    <p className="mt-3 text-historic-sepia font-mono text-sm">
                      Aktuell vertiefe ich mein Wissen im <strong className="text-brand-black">MSc Applied Information & Data Science</strong> an der HSLU,
                      mit Fokus auf KI Integration und ML basierte Datenanalyse.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-off-white rounded-full text-xs font-mono text-historic-sepia">
                        9+ Jahre Projekterfahrung
                      </span>
                      <span className="px-3 py-1 bg-off-white rounded-full text-xs font-mono text-historic-sepia">
                        DE · EN · FR
                      </span>
                      <span className="px-3 py-1 bg-off-white rounded-full text-xs font-mono text-historic-sepia">
                        IREB zertifiziert
                      </span>
                    </div>

                    <div className="mt-6 flex gap-4">
                      <a
                        href="https://linkedin.com/in/gueneyusta"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-mono text-sihl-red hover:underline"
                      >
                        LinkedIn
                      </a>
                      <a
                        href="https://www.sihliconvalley.ch"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-mono text-sihl-red hover:underline"
                      >
                        sihliconvalley.ch
                      </a>
                      <a
                        href="https://github.com/wgusta"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-mono text-sihl-red hover:underline"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

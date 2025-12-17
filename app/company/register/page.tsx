import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { CompanyRegistrationForm } from '@/components/company/CompanyRegistrationForm'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Logo } from '@/components/ui/Logo'

export const metadata = {
  title: 'Unternehmen registrieren | sihlhack',
  description: 'Registrieren Sie Ihr Unternehmen als Datenpartner für sihlhack',
}

export default function CompanyRegisterPage() {
  return (
    <div className="min-h-screen bg-off-white flex flex-col">
      <Header />

      <main className="flex-1 py-12 px-4">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <Logo size="lg" hackColor="black" />
            <h1 className="mt-4 font-display text-3xl font-bold text-brand-black">
              Datenpartner werden
            </h1>
            <p className="mt-2 text-historic-sepia font-mono">
              Teilen Sie historische Dokumente aus dem Sihltal und unterstützen Sie die Digitalisierung.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Unternehmensregistrierung</CardTitle>
              <CardDescription>
                Registrieren Sie sich, um historische Daten hochzuladen und am Hackathon teilzunehmen.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CompanyRegistrationForm />
            </CardContent>
          </Card>

          <div className="mt-8 bg-industrial-gold/10 rounded-lg p-6">
            <h3 className="font-display font-semibold text-brand-black mb-2">
              Was bedeutet Datenpartnerschaft?
            </h3>
            <ul className="space-y-2 text-sm font-mono text-historic-sepia">
              <li className="flex items-start gap-2">
                <span className="text-industrial-gold">•</span>
                <span>Kein finanzieller Beitrag erforderlich</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-industrial-gold">•</span>
                <span>Kein Einfluss auf Projektauswahl</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-industrial-gold">•</span>
                <span>Historische Dokumente werden digital erschlossen</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-industrial-gold">•</span>
                <span>Ergebnisse werden mit Ihnen geteilt</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

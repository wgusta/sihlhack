import { Card, CardContent } from '@/components/ui/Card'
import { TeamRedApplicationForm } from '@/components/registration/TeamRedApplicationForm'
import { Logo } from '@/components/ui/Logo'

export const metadata = {
  title: 'Team Red Bewerbung | sihlhack',
  description: 'Bewerbungsformular für Team Red, die exklusive Security Challenge bei sihlhack',
}

export default function TeamRedRegisterPage() {
  return (
    <div className="min-h-screen bg-brand-black py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Warning Header */}
        <div className="text-center mb-8">
          <div className="inline-block bg-red-500 text-white text-xs font-mono px-4 py-1 rounded-full mb-4">
            🎯 TEAM RED BEWERBUNG
          </div>
          <h1 className="mt-4 font-display text-3xl font-bold text-red-500">
            💀 Team Red
          </h1>
          <p className="mt-2 text-gray-400 font-mono">
            Ethisches Hacking: Teste Hardware, Software und APIs auf Schwachstellen.
          </p>
        </div>

        {/* Info Box */}
        <div className="mb-8 p-4 border-l-4 border-red-500 bg-red-500/10 rounded">
          <p className="text-sm font-mono text-gray-300">
            <strong className="text-red-400">Achtung:</strong> Team Red ist eine separate Bewerbung.
            Dies ist <strong>keine reguläre Anmeldung</strong>. Du bewerbst dich als Teil eines exklusiven 10-15 Personen Teams
            mit Bewerbungsschluss 2 Wochen vor dem Event.
          </p>
        </div>

        <Card className="border-red-500/30 bg-brand-black border-2">
          <CardContent className="pt-8">
            <TeamRedApplicationForm />
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-sm font-mono text-gray-500">
            Fragen zur Bewerbung?{' '}
            <a href="/contact" className="text-red-500 hover:underline">
              Kontaktiere uns
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

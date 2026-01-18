import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { RegistrationForm } from '@/components/registration/RegistrationForm'
import { Logo } from '@/components/ui/Logo'

export const metadata = {
  title: 'Anmeldung | sihlhack',
  description: 'Melde dich für sihlhack an und sichere dir deinen Platz',
}

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-off-white py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <Logo size="xl" hackColor="black" />
          <h1 className="mt-4 font-display text-3xl font-bold text-brand-black">
            Anmeldung
          </h1>
          <p className="mt-2 text-historic-sepia font-mono">
            Sichere dir deinen Platz beim ersten teilnehmerorientierten Hackathon der Schweiz.
          </p>
          <div className="mt-4 p-3 bg-grid-green/10 border border-grid-green/30 rounded-lg inline-block">
            <p className="text-xs font-mono text-brand-black">
              🛡️ <strong>Sicherheit zuerst:</strong> Obligatorisches Sicherheitstraining vor Teilnahme.{' '}
              <a href="/safety" className="text-sihl-red hover:underline">Mehr erfahren</a>
            </p>
          </div>
        </div>

        <Card>
          <CardContent className="pt-8">
            <RegistrationForm />
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-sm font-mono text-historic-sepia">
            Bereits registriert?{' '}
            <a href="/auth/login" className="text-sihl-red hover:underline">
              Hier anmelden
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

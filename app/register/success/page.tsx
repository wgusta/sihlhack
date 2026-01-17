import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/Card'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { Logo } from '@/components/ui/Logo'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

export const metadata = {
  title: 'Anmeldung erfolgreich | sihlhack',
  description: 'Deine Anmeldung für sihlhack wurde bestätigt',
}

export default function RegisterSuccessPage() {
  return (
    <div className="min-h-screen bg-off-white flex items-center justify-center px-4 py-12">
      <Card className="w-full max-w-lg text-center">
        <CardContent className="pt-8 pb-8 space-y-6">
          <div>
            <Logo size="lg" hackColor="black" />
          </div>

          <div className="w-20 h-20 mx-auto bg-fund-green/10 rounded-full flex items-center justify-center">
            <CheckCircleIcon className="w-10 h-10 text-fund-green" aria-hidden="true" />
          </div>

          <div>
            <h1 className="font-display text-2xl font-bold text-brand-black">
              Anmeldung erfolgreich!
            </h1>
            <p className="mt-2 text-historic-sepia font-mono">
              Vielen Dank für deine Anmeldung. Du erhältst in Kürze eine Bestätigung per E-Mail.
            </p>
          </div>

          <div className="bg-historic-cream rounded-lg p-4 text-left">
            <h3 className="font-display font-semibold text-brand-black mb-2">
              Nächste Schritte
            </h3>
            <ul className="space-y-2 text-sm font-mono text-historic-sepia">
              <li className="flex items-start gap-2">
                <span className="text-sihl-red">1.</span>
                <span>Prüfe dein Postfach für die Bestätigungs-E-Mail</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sihl-red">2.</span>
                <span>Schau dir die Projektvorschläge an und stimme für deine Favoriten</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sihl-red">3.</span>
                <span>Reiche eigene Projektideen ein</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ButtonLink href="/proposals" variant="primary">
              Projekte ansehen
            </ButtonLink>
            <ButtonLink href="/funds" variant="ghost">
              Fonds verfolgen
            </ButtonLink>
          </div>

          <p className="text-xs font-mono text-historic-sepia">
            Fragen?{' '}
            <a href="mailto:info@sihlhack.ch" className="text-sihl-red hover:underline">
              info@sihlhack.ch
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

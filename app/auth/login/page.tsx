import { Suspense } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { MagicLinkForm } from '@/components/auth/MagicLinkForm'
import { Logo } from '@/components/ui/Logo'

export const metadata = {
  title: 'Anmelden | sihlhack',
  description: 'Melde dich bei sihlhack an',
}

type Props = {
  searchParams: Promise<{ error?: string; redirectTo?: string }>
}

const ERROR_MESSAGES: Record<string, string> = {
  'invalid-link': 'Ungültiger Link. Bitte fordere einen neuen Login-Link an.',
  'invalid-token': 'Ungültiger oder abgelaufener Token. Bitte fordere einen neuen Login-Link an.',
  'verification-failed': 'Verifizierung fehlgeschlagen. Bitte versuche es erneut.',
}

export default async function LoginPage({ searchParams }: Props) {
  const params = await searchParams
  const errorMessage = params.error ? ERROR_MESSAGES[params.error] : undefined

  return (
    <div className="min-h-screen bg-off-white flex items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mb-4">
            <Logo size="lg" hackColor="black" />
          </div>
          <CardTitle>Anmelden</CardTitle>
          <CardDescription>
            Gib deine E-Mail-Adresse ein, um einen Login-Link zu erhalten.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {errorMessage && (
            <div className="mb-4 p-3 bg-sihl-red/10 border border-sihl-red/20 rounded-lg">
              <p className="text-sm text-sihl-red font-mono">{errorMessage}</p>
            </div>
          )}
          <Suspense fallback={<div className="h-32 animate-pulse bg-historic-cream rounded" />}>
            <MagicLinkForm />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  )
}

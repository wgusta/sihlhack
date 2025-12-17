import { Suspense } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { MagicLinkForm } from '@/components/auth/MagicLinkForm'
import { Logo } from '@/components/ui/Logo'

export const metadata = {
  title: 'Anmelden | sihlhack',
  description: 'Melde dich bei sihlhack an',
}

export default function LoginPage() {
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
          <Suspense fallback={<div className="h-32 animate-pulse bg-historic-cream rounded" />}>
            <MagicLinkForm />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  )
}

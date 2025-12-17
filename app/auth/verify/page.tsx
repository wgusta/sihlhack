import { Suspense } from 'react'
import { Card, CardContent } from '@/components/ui/Card'
import { VerifyingSpinner } from '@/components/auth/VerifyingSpinner'
import { Logo } from '@/components/ui/Logo'

export const metadata = {
  title: 'Verifizierung | sihlhack',
  description: 'Dein Login wird verifiziert',
}

export default function VerifyPage() {
  return (
    <div className="min-h-screen bg-off-white flex items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md">
        <CardContent className="pt-8 pb-8">
          <div className="mb-6 text-center">
            <Logo size="lg" hackColor="black" />
          </div>
          <Suspense fallback={
            <div className="text-center">
              <div className="w-16 h-16 mx-auto border-4 border-historic-cream border-t-sihl-red rounded-full animate-spin" />
            </div>
          }>
            <VerifyingSpinner />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  )
}

'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from '@/hooks/useSession'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { ProposalForm } from '@/components/proposals/ProposalForm'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function NewProposalPage() {
  const router = useRouter()
  const { isAuthenticated, isLoading } = useSession()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/auth/login?redirectTo=/proposals/new')
    }
  }, [isLoading, isAuthenticated, router])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-off-white flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-historic-cream border-t-sihl-red rounded-full animate-spin" />
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-off-white flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-12">
          <Card>
            <CardHeader>
              <CardTitle>Neues Projekt vorschlagen</CardTitle>
              <CardDescription>
                Teile deine Projektidee mit der Community. Andere Teilnehmende können für deinen Vorschlag stimmen.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ProposalForm />
            </CardContent>
          </Card>

          {/* Tips */}
          <div className="mt-8 bg-historic-cream rounded-lg p-6">
            <h3 className="font-display font-semibold text-brand-black mb-3">
              Tipps für einen guten Vorschlag
            </h3>
            <ul className="space-y-2 text-sm font-mono text-historic-sepia">
              <li className="flex items-start gap-2">
                <span className="text-sihl-red">•</span>
                <span>Beschreibe klar, welches Problem du lösen möchtest</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sihl-red">•</span>
                <span>Erkläre, welche historischen Daten du benötigst</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sihl-red">•</span>
                <span>Teile deinen technischen Ansatz (KI, OCR, Datenanalyse, etc.)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sihl-red">•</span>
                <span>Beschreibe die erwarteten Erkenntnisse oder Ergebnisse</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

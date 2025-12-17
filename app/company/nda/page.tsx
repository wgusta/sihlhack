'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useCompanySession } from '@/hooks/useCompanySession'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { NdaForm } from '@/components/company/NdaForm'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function NdaPage() {
  const router = useRouter()
  const { company, isAuthenticated, isLoading } = useCompanySession()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/company/register')
    }
    if (!isLoading && company?.ndaSigned) {
      router.push('/company/dashboard')
    }
  }, [isLoading, isAuthenticated, company, router])

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

      <main className="flex-1 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="font-display text-3xl font-bold text-brand-black">
              Datenverarbeitungsvereinbarung
            </h1>
            <p className="mt-2 text-historic-sepia font-mono">
              Bitte lesen und unterzeichnen Sie die Vereinbarung, um Daten hochzuladen.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>NDA für {company?.name}</CardTitle>
              <CardDescription>
                Diese Vereinbarung regelt die Verwendung Ihrer historischen Daten.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <NdaForm />
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}

'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { StepIndicator } from './StepIndicator'
import { TermsCheckbox } from './TermsCheckbox'
import { formatCHF } from '@/lib/utils'

const REGISTRATION_FEE = 15000 // CHF 150 in centimes

const steps = [
  { id: 1, name: 'Kontakt' },
  { id: 2, name: 'Bestätigen' },
  { id: 3, name: 'Bezahlen' },
]

interface FormData {
  email: string
  name: string
  company: string
  acceptedTerms: boolean
}

export function RegistrationForm() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [formData, setFormData] = useState<FormData>({
    email: '',
    name: '',
    company: '',
    acceptedTerms: false,
  })

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})

  const validateStep1 = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {}

    if (!formData.email) {
      newErrors.email = 'E-Mail ist erforderlich'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ungültige E-Mail-Adresse'
    }

    if (!formData.name) {
      newErrors.name = 'Name ist erforderlich'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep2 = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {}

    if (!formData.acceptedTerms) {
      newErrors.acceptedTerms = 'Du musst die Bedingungen akzeptieren'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2)
    } else if (currentStep === 2 && validateStep2()) {
      handleCheckout()
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleCheckout = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          name: formData.name,
          company: formData.company || undefined,
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Checkout fehlgeschlagen')
      }

      const { url } = await res.json()
      if (url) {
        window.location.href = url
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ein Fehler ist aufgetreten')
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-lg mx-auto">
      <StepIndicator steps={steps} currentStep={currentStep} />

      {error && (
        <div className="mb-6 p-4 bg-sihl-red/10 border border-sihl-red rounded-lg">
          <p className="text-sm text-sihl-red font-mono">{error}</p>
        </div>
      )}

      {currentStep === 1 && (
        <div className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-mono font-medium text-brand-black mb-1">
              E-Mail-Adresse *
            </label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="deine@email.ch"
              error={errors.email}
            />
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-mono font-medium text-brand-black mb-1">
              Vollständiger Name *
            </label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Max Mustermann"
              error={errors.name}
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-mono font-medium text-brand-black mb-1">
              Unternehmen <span className="text-historic-sepia">(optional)</span>
            </label>
            <Input
              id="company"
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="Firma AG"
            />
          </div>

          <Button type="button" variant="primary" className="w-full" onClick={handleNext}>
            Weiter
          </Button>
        </div>
      )}

      {currentStep === 2 && (
        <div className="space-y-6">
          <div className="bg-historic-cream rounded-lg p-6 space-y-4">
            <h3 className="font-display text-lg font-semibold text-brand-black">
              Zusammenfassung
            </h3>

            <div className="space-y-2 font-mono text-sm">
              <div className="flex justify-between">
                <span className="text-historic-sepia">E-Mail</span>
                <span className="text-brand-black">{formData.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-historic-sepia">Name</span>
                <span className="text-brand-black">{formData.name}</span>
              </div>
              {formData.company && (
                <div className="flex justify-between">
                  <span className="text-historic-sepia">Unternehmen</span>
                  <span className="text-brand-black">{formData.company}</span>
                </div>
              )}
            </div>

            <div className="border-t border-historic-sepia/20 pt-4">
              <div className="flex justify-between items-center">
                <span className="font-mono text-historic-sepia">Teilnahmegebühr</span>
                <span className="font-display text-2xl font-bold text-brand-black">
                  {formatCHF(REGISTRATION_FEE)}
                </span>
              </div>
              <p className="text-xs font-mono text-historic-sepia mt-2">
                70% fliessen ins Preisgeld, 30% decken Betriebskosten.
                Vollständige Rückerstattung bei Absage.
              </p>
            </div>
          </div>

          <TermsCheckbox
            checked={formData.acceptedTerms}
            onChange={(checked) => setFormData({ ...formData, acceptedTerms: checked })}
            error={errors.acceptedTerms}
          />

          <div className="flex gap-4">
            <Button type="button" variant="ghost" className="flex-1" onClick={handleBack}>
              Zurück
            </Button>
            <Button
              type="button"
              variant="primary"
              className="flex-1"
              onClick={handleNext}
              disabled={isLoading}
            >
              {isLoading ? 'Wird geladen...' : 'Zur Zahlung'}
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

const industryOptions = [
  'Textilindustrie',
  'Papierindustrie',
  'Maschinenbau',
  'Lebensmittelproduktion',
  'Energiewirtschaft',
  'Transport & Logistik',
  'Andere',
]

export function CompanyRegistrationForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    name: '',
    contactPerson: '',
    contactEmail: '',
    industry: '',
    historicalPeriod: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!formData.name) {
      newErrors.name = 'Firmenname erforderlich'
    }
    if (!formData.contactPerson) {
      newErrors.contactPerson = 'Kontaktperson erforderlich'
    }
    if (!formData.contactEmail) {
      newErrors.contactEmail = 'E-Mail erforderlich'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contactEmail)) {
      newErrors.contactEmail = 'Ungültige E-Mail-Adresse'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validate()) return

    setIsLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/companies', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Registrierung fehlgeschlagen')
      }

      router.push('/company/nda')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ein Fehler ist aufgetreten')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-4 bg-sihl-red/10 border border-sihl-red rounded-lg">
          <p className="text-sm text-sihl-red font-mono">{error}</p>
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-mono font-medium text-brand-black mb-1">
          Firmenname *
        </label>
        <Input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Muster AG"
          error={errors.name}
        />
      </div>

      <div>
        <label htmlFor="contactPerson" className="block text-sm font-mono font-medium text-brand-black mb-1">
          Kontaktperson *
        </label>
        <Input
          id="contactPerson"
          type="text"
          value={formData.contactPerson}
          onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
          placeholder="Max Mustermann"
          error={errors.contactPerson}
        />
      </div>

      <div>
        <label htmlFor="contactEmail" className="block text-sm font-mono font-medium text-brand-black mb-1">
          E-Mail-Adresse *
        </label>
        <Input
          id="contactEmail"
          type="email"
          value={formData.contactEmail}
          onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
          placeholder="kontakt@firma.ch"
          error={errors.contactEmail}
        />
      </div>

      <div>
        <label htmlFor="industry" className="block text-sm font-mono font-medium text-brand-black mb-1">
          Branche <span className="text-historic-sepia">(optional)</span>
        </label>
        <select
          id="industry"
          value={formData.industry}
          onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
          className="w-full px-4 py-3 bg-off-white border border-historic-sepia/30 rounded-lg font-mono text-brand-black focus:outline-none focus:ring-2 focus:ring-sihl-red focus:border-transparent"
        >
          <option value="">Bitte wählen...</option>
          {industryOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="historicalPeriod" className="block text-sm font-mono font-medium text-brand-black mb-1">
          Historische Periode <span className="text-historic-sepia">(optional)</span>
        </label>
        <Input
          id="historicalPeriod"
          type="text"
          value={formData.historicalPeriod}
          onChange={(e) => setFormData({ ...formData, historicalPeriod: e.target.value })}
          placeholder="z.B. 1850-1950"
        />
        <p className="text-xs font-mono text-historic-sepia mt-1">
          Aus welcher Zeit stammen Ihre historischen Unterlagen?
        </p>
      </div>

      <Button type="submit" variant="primary" className="w-full" disabled={isLoading}>
        {isLoading ? 'Wird registriert...' : 'Registrieren & NDA unterschreiben'}
      </Button>
    </form>
  )
}

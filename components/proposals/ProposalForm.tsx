'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { DATA_TYPE_LABELS, type DataType } from '@/types/proposal'

export function ProposalForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    historicalContext: '',
    technicalApproach: '',
    dataTypes: [] as string[],
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleDataTypeToggle = (type: string) => {
    setFormData((prev) => ({
      ...prev,
      dataTypes: prev.dataTypes.includes(type)
        ? prev.dataTypes.filter((t) => t !== type)
        : [...prev.dataTypes, type],
    }))
  }

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (formData.title.length < 5) {
      newErrors.title = 'Titel muss mindestens 5 Zeichen haben'
    }
    if (formData.description.length < 20) {
      newErrors.description = 'Beschreibung muss mindestens 20 Zeichen haben'
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
      const res = await fetch('/api/proposals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Fehler beim Erstellen des Projekts')
      }

      const { proposal } = await res.json()
      router.push(`/proposals/${proposal.id}`)
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

      {/* Title */}
      <div>
        <label htmlFor="title" className="block text-sm font-mono font-medium text-brand-black mb-1">
          Projekttitel *
        </label>
        <Input
          id="title"
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          placeholder="z.B. Digitalisierung der Spinnerei-Lohnbücher"
          error={errors.title}
          maxLength={100}
        />
        <p className="text-xs font-mono text-historic-sepia mt-1">
          {formData.title.length}/100 Zeichen
        </p>
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block text-sm font-mono font-medium text-brand-black mb-1">
          Beschreibung *
        </label>
        <textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Beschreibe dein Projekt: Was willst du erreichen? Welche Erkenntnisse erwartest du?"
          rows={4}
          maxLength={2000}
          className="w-full px-4 py-3 bg-off-white border border-historic-sepia/30 rounded-lg font-mono text-brand-black placeholder:text-historic-sepia/50 focus:outline-none focus:ring-2 focus:ring-sihl-red focus:border-transparent transition-colors"
        />
        {errors.description && (
          <p className="text-sm text-sihl-red font-mono mt-1">{errors.description}</p>
        )}
        <p className="text-xs font-mono text-historic-sepia mt-1">
          {formData.description.length}/2000 Zeichen
        </p>
      </div>

      {/* Data types */}
      <div>
        <label className="block text-sm font-mono font-medium text-brand-black mb-2">
          Benötigte Datentypen
        </label>
        <div className="flex flex-wrap gap-2">
          {Object.entries(DATA_TYPE_LABELS).map(([value, label]) => (
            <button
              key={value}
              type="button"
              onClick={() => handleDataTypeToggle(value)}
              className={`px-3 py-2 text-sm font-mono rounded-lg transition-colors ${
                formData.dataTypes.includes(value)
                  ? 'bg-sihl-red text-white'
                  : 'bg-historic-cream text-historic-sepia hover:bg-historic-sepia/20'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Historical context */}
      <div>
        <label htmlFor="historicalContext" className="block text-sm font-mono font-medium text-brand-black mb-1">
          Historischer Kontext <span className="text-historic-sepia">(optional)</span>
        </label>
        <textarea
          id="historicalContext"
          value={formData.historicalContext}
          onChange={(e) => setFormData({ ...formData, historicalContext: e.target.value })}
          placeholder="Welche historische Bedeutung hat das Projekt? Welche Zeitperiode ist relevant?"
          rows={3}
          maxLength={1000}
          className="w-full px-4 py-3 bg-off-white border border-historic-sepia/30 rounded-lg font-mono text-brand-black placeholder:text-historic-sepia/50 focus:outline-none focus:ring-2 focus:ring-sihl-red focus:border-transparent transition-colors"
        />
      </div>

      {/* Technical approach */}
      <div>
        <label htmlFor="technicalApproach" className="block text-sm font-mono font-medium text-brand-black mb-1">
          Technischer Ansatz <span className="text-historic-sepia">(optional)</span>
        </label>
        <textarea
          id="technicalApproach"
          value={formData.technicalApproach}
          onChange={(e) => setFormData({ ...formData, technicalApproach: e.target.value })}
          placeholder="Welche Technologien, Methoden oder KI-Modelle planst du einzusetzen?"
          rows={3}
          maxLength={1000}
          className="w-full px-4 py-3 bg-off-white border border-historic-sepia/30 rounded-lg font-mono text-brand-black placeholder:text-historic-sepia/50 focus:outline-none focus:ring-2 focus:ring-sihl-red focus:border-transparent transition-colors"
        />
      </div>

      {/* Submit */}
      <div className="flex gap-4 pt-4">
        <Button
          type="button"
          variant="ghost"
          onClick={() => router.back()}
          disabled={isLoading}
        >
          Abbrechen
        </Button>
        <Button type="submit" variant="primary" disabled={isLoading} className="flex-1">
          {isLoading ? 'Wird eingereicht...' : 'Projekt einreichen'}
        </Button>
      </div>
    </form>
  )
}

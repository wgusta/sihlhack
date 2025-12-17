'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

export function NdaForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [agreed, setAgreed] = useState(false)
  const [signatureName, setSignatureName] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!agreed) {
      setError('Bitte stimmen Sie den Bedingungen zu')
      return
    }

    if (!signatureName.trim()) {
      setError('Bitte geben Sie Ihren Namen als digitale Unterschrift ein')
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/companies/nda', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ signatureName, agreed }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'NDA-Unterzeichnung fehlgeschlagen')
      }

      router.push('/company/dashboard')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ein Fehler ist aufgetreten')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-8">
      {/* NDA Text */}
      <div className="bg-white rounded-lg p-6 border border-historic-sepia/20 max-h-96 overflow-y-auto">
        <h3 className="font-display text-lg font-semibold text-brand-black mb-4">
          Datenverarbeitungsvereinbarung
        </h3>
        <div className="prose prose-sm max-w-none text-historic-sepia font-mono">
          <p>
            Diese Vereinbarung regelt die Bereitstellung historischer Dokumente und Daten
            für den sihlhack Hackathon.
          </p>

          <h4 className="text-brand-black">1. Gegenstand</h4>
          <p>
            Das Unternehmen stellt historische Dokumente, Fotografien, Geschäftsbücher
            oder andere Materialien für die Digitalisierung und Analyse im Rahmen
            des sihlhack Hackathons zur Verfügung.
          </p>

          <h4 className="text-brand-black">2. Nutzungsrechte</h4>
          <p>
            Das Unternehmen räumt sihlhack und den Hackathon-Teilnehmenden ein
            nicht-exklusives Nutzungsrecht für folgende Zwecke ein:
          </p>
          <ul>
            <li>Digitalisierung mittels OCR und Bildverarbeitung</li>
            <li>Analyse und Auswertung im Rahmen von Hackathon-Projekten</li>
            <li>Präsentation der Ergebnisse</li>
          </ul>

          <h4 className="text-brand-black">3. Datenschutz</h4>
          <p>
            Personenbezogene Daten in den bereitgestellten Materialien werden
            gemäss dem Schweizer Datenschutzgesetz (DSG) behandelt.
            Sensible Informationen werden vor der Veröffentlichung anonymisiert.
          </p>

          <h4 className="text-brand-black">4. Keine Vergütung</h4>
          <p>
            Die Bereitstellung der Materialien erfolgt unentgeltlich.
            Das Unternehmen hat keinen Einfluss auf die Auswahl oder Umsetzung
            von Hackathon-Projekten.
          </p>

          <h4 className="text-brand-black">5. Haftung</h4>
          <p>
            sihlhack haftet nicht für Schäden an den Originalmaterialien,
            sofern diese physisch übergeben werden. Die Digitalisierung erfolgt
            mit der gebotenen Sorgfalt.
          </p>
        </div>
      </div>

      {/* Agreement Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="p-4 bg-sihl-red/10 border border-sihl-red rounded-lg">
            <p className="text-sm text-sihl-red font-mono">{error}</p>
          </div>
        )}

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-1 w-5 h-5 text-sihl-red border-historic-sepia rounded focus:ring-sihl-red"
          />
          <span className="text-sm font-mono text-brand-black">
            Ich habe die Datenverarbeitungsvereinbarung gelesen und stimme den
            Bedingungen im Namen meines Unternehmens zu.
          </span>
        </label>

        <div>
          <label htmlFor="signature" className="block text-sm font-mono font-medium text-brand-black mb-1">
            Digitale Unterschrift (vollständiger Name)
          </label>
          <Input
            id="signature"
            type="text"
            value={signatureName}
            onChange={(e) => setSignatureName(e.target.value)}
            placeholder="Ihr vollständiger Name"
            className="font-cursive text-lg"
          />
          <p className="text-xs font-mono text-historic-sepia mt-1">
            Durch Eingabe Ihres Namens bestätigen Sie die rechtsverbindliche Unterzeichnung.
          </p>
        </div>

        <Button type="submit" variant="primary" className="w-full" disabled={isLoading || !agreed}>
          {isLoading ? 'Wird unterzeichnet...' : 'NDA unterzeichnen'}
        </Button>
      </form>
    </div>
  )
}

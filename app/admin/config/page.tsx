'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { formatCHF } from '@/lib/utils'

interface EventConfig {
  id: string
  eventDate: string
  registrationDeadline: string
  refundDeadline: string
  minParticipants: number
  maxParticipants: number
  registrationFeeChf: number
  registrationOpen: boolean
  proposalsOpen: boolean
}

export default function AdminConfigPage() {
  const [config, setConfig] = useState<EventConfig | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  // Form state
  const [eventDate, setEventDate] = useState('')
  const [registrationDeadline, setRegistrationDeadline] = useState('')
  const [refundDeadline, setRefundDeadline] = useState('')
  const [minParticipants, setMinParticipants] = useState(50)
  const [maxParticipants, setMaxParticipants] = useState(200)
  const [registrationFeeChf, setRegistrationFeeChf] = useState(150)
  const [registrationOpen, setRegistrationOpen] = useState(false)
  const [proposalsOpen, setProposalsOpen] = useState(false)

  async function fetchConfig() {
    try {
      setLoading(true)
      const res = await fetch('/api/admin/config')
      if (!res.ok) throw new Error('Konfiguration konnte nicht geladen werden')
      const data = await res.json()

      if (data.config) {
        setConfig(data.config)
        setEventDate(data.config.eventDate?.split('T')[0] || '')
        setRegistrationDeadline(data.config.registrationDeadline?.split('T')[0] || '')
        setRefundDeadline(data.config.refundDeadline?.split('T')[0] || '')
        setMinParticipants(data.config.minParticipants || 50)
        setMaxParticipants(data.config.maxParticipants || 200)
        setRegistrationFeeChf(data.config.registrationFeeChf || 150)
        setRegistrationOpen(data.config.registrationOpen || false)
        setProposalsOpen(data.config.proposalsOpen || false)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ein Fehler ist aufgetreten')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchConfig()
  }, [])

  async function handleSave(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setSuccess(false)

    try {
      setSaving(true)
      const res = await fetch('/api/admin/config', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          eventDate,
          registrationDeadline,
          refundDeadline,
          minParticipants,
          maxParticipants,
          registrationFeeChf,
          registrationOpen,
          proposalsOpen,
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Speichern fehlgeschlagen')
      }

      const data = await res.json()
      setConfig(data.config)
      setSuccess(true)

      setTimeout(() => setSuccess(false), 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ein Fehler ist aufgetreten')
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sihl-red" />
      </div>
    )
  }

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-3xl font-bold text-brand-black">Event Konfiguration</h1>
        <p className="text-gray-600 mt-1">
          Verwalte die grundlegenden Einstellungen für sihlhack.ch
        </p>
      </div>

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
          {error}
        </div>
      )}

      {success && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-600">
          Einstellungen erfolgreich gespeichert.
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6">
        {/* Dates */}
        <Card>
          <CardHeader>
            <CardTitle>Termine</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Event Datum
              </label>
              <input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sihl-red focus:border-sihl-red"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Anmeldeschluss
              </label>
              <input
                type="date"
                value={registrationDeadline}
                onChange={(e) => setRegistrationDeadline(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sihl-red focus:border-sihl-red"
              />
              <p className="text-sm text-gray-500 mt-1">
                Nach diesem Datum werden keine neuen Registrierungen akzeptiert.
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Rückerstattungs-Deadline
              </label>
              <input
                type="date"
                value={refundDeadline}
                onChange={(e) => setRefundDeadline(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sihl-red focus:border-sihl-red"
              />
              <p className="text-sm text-gray-500 mt-1">
                Stornierungen nach diesem Datum werden nicht erstattet.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Participant Limits */}
        <Card>
          <CardHeader>
            <CardTitle>Teilnehmerlimits</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Minimum Teilnehmer
                </label>
                <input
                  type="number"
                  min="1"
                  value={minParticipants}
                  onChange={(e) => setMinParticipants(parseInt(e.target.value) || 1)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sihl-red focus:border-sihl-red"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Event findet nur statt, wenn erreicht.
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Maximum Teilnehmer
                </label>
                <input
                  type="number"
                  min="1"
                  value={maxParticipants}
                  onChange={(e) => setMaxParticipants(parseInt(e.target.value) || 1)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sihl-red focus:border-sihl-red"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Registrierung schliesst bei Erreichen.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Registration Fee */}
        <Card>
          <CardHeader>
            <CardTitle>Registrierungsgebühr</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Gebühr in CHF
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                  CHF
                </span>
                <input
                  type="number"
                  min="0"
                  step="10"
                  value={registrationFeeChf}
                  onChange={(e) => setRegistrationFeeChf(parseInt(e.target.value) || 0)}
                  className="w-full pl-14 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sihl-red focus:border-sihl-red"
                />
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Aktuelle Gebühr: {formatCHF(registrationFeeChf)}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Toggle Features */}
        <Card>
          <CardHeader>
            <CardTitle>Features</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <p className="font-medium text-brand-black">Registrierung offen</p>
                <p className="text-sm text-gray-500">
                  Erlaubt neue Teilnehmerregistrierungen.
                </p>
              </div>
              <div
                className={`relative w-14 h-8 rounded-full transition-colors ${
                  registrationOpen ? 'bg-sihl-red' : 'bg-gray-300'
                }`}
                onClick={() => setRegistrationOpen(!registrationOpen)}
              >
                <div
                  className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow transition-transform ${
                    registrationOpen ? 'translate-x-7' : 'translate-x-1'
                  }`}
                />
              </div>
            </label>

            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <p className="font-medium text-brand-black">Projektvorschläge offen</p>
                <p className="text-sm text-gray-500">
                  Erlaubt das Einreichen neuer Projektvorschläge.
                </p>
              </div>
              <div
                className={`relative w-14 h-8 rounded-full transition-colors ${
                  proposalsOpen ? 'bg-sihl-red' : 'bg-gray-300'
                }`}
                onClick={() => setProposalsOpen(!proposalsOpen)}
              >
                <div
                  className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow transition-transform ${
                    proposalsOpen ? 'translate-x-7' : 'translate-x-1'
                  }`}
                />
              </div>
            </label>
          </CardContent>
        </Card>

        {/* Save Button */}
        <div className="flex justify-end gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={fetchConfig}
            disabled={saving}
          >
            Zurücksetzen
          </Button>
          <Button type="submit" variant="primary" disabled={saving}>
            {saving ? 'Wird gespeichert...' : 'Einstellungen speichern'}
          </Button>
        </div>
      </form>
    </div>
  )
}

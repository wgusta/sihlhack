'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { formatCHF } from '@/lib/utils'
import Link from 'next/link'

interface Stats {
  participants: {
    registered: number
    pending: number
  }
  payments: {
    total: number
    count: number
    refunded: number
  }
  proposals: {
    count: number
  }
  companies: {
    verified: number
  }
  data: {
    total: number
    pending: number
  }
  config: {
    eventDate: string
    registrationDeadline: string
    minParticipants: number
    maxParticipants: number
    registrationFeeChf: number
    registrationOpen: boolean
    proposalsOpen: boolean
  } | null
  allocations: Array<{
    category: string
    percentage: number
    description: string
  }>
}

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<Stats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch('/api/admin/stats')
        if (!res.ok) throw new Error('Statistiken konnten nicht geladen werden')
        const data = await res.json()
        setStats(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Ein Fehler ist aufgetreten')
      } finally {
        setLoading(false)
      }
    }
    fetchStats()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sihl-red" />
      </div>
    )
  }

  if (error || !stats) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">{error || 'Keine Daten verfügbar'}</p>
        <Button onClick={() => window.location.reload()} className="mt-4">
          Erneut versuchen
        </Button>
      </div>
    )
  }

  const prizePool = Math.floor(stats.payments.total * 0.7)
  const operations = Math.floor(stats.payments.total * 0.3)
  const progress = stats.config
    ? Math.min(100, Math.round((stats.participants.registered / stats.config.minParticipants) * 100))
    : 0

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-brand-black">Admin Dashboard</h1>
        <p className="text-gray-600 mt-1">Übersicht über alle Aktivitäten auf sihlhack.ch</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600">
              Registrierte Teilnehmer
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-brand-black">
              {stats.participants.registered}
            </div>
            {stats.participants.pending > 0 && (
              <p className="text-sm text-gray-500 mt-1">
                +{stats.participants.pending} ausstehend
              </p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600">
              Einnahmen (Gesamt)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-brand-black">
              {formatCHF(stats.payments.total)}
            </div>
            <p className="text-sm text-gray-500 mt-1">
              {stats.payments.count} Zahlungen
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600">
              Prize Pool (Überschuss)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-sihl-red">
              {formatCHF(prizePool)}
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Verfügbar für Gewinner
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600">
              Betrieb (30%)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-brand-black">
              {formatCHF(operations)}
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Für Organisation
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Progress to Minimum */}
      {stats.config && (
        <Card>
          <CardHeader>
            <CardTitle>Fortschritt zum Minimum</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>{stats.participants.registered} von {stats.config.minParticipants} Teilnehmern</span>
                <span className="font-medium">{progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className={`h-4 rounded-full transition-all ${
                    progress >= 100 ? 'bg-green-500' : 'bg-sihl-red'
                  }`}
                  style={{ width: `${progress}%` }}
                />
              </div>
              {progress < 100 && (
                <p className="text-sm text-gray-500">
                  Noch {stats.config.minParticipants - stats.participants.registered} Teilnehmer
                  benötigt, um das Minimum zu erreichen.
                </p>
              )}
              {progress >= 100 && (
                <p className="text-sm text-green-600 font-medium">
                  Minimum erreicht. Das Event findet statt.
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Secondary Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-gray-600">
                Projektvorschläge
              </CardTitle>
              <Link href="/admin/proposals" className="text-sm text-sihl-red hover:underline">
                Alle anzeigen
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-brand-black">
              {stats.proposals.count}
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Von Teilnehmern eingereicht
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-gray-600">
                Verifizierte Firmen
              </CardTitle>
              <Link href="/admin/companies" className="text-sm text-sihl-red hover:underline">
                Alle anzeigen
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-brand-black">
              {stats.companies.verified}
            </div>
            <p className="text-sm text-gray-500 mt-1">
              NDA unterzeichnet
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-gray-600">
                Historische Daten
              </CardTitle>
              <Link href="/admin/data" className="text-sm text-sihl-red hover:underline">
                Alle anzeigen
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-brand-black">
              {stats.data.total}
            </div>
            {stats.data.pending > 0 && (
              <p className="text-sm text-amber-600 mt-1">
                {stats.data.pending} zur Freigabe ausstehend
              </p>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Schnellaktionen</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <Link href="/admin/participants">
              <Button variant="outline">
                👥 Teilnehmer verwalten
              </Button>
            </Link>
            <Link href="/admin/payments">
              <Button variant="outline">
                💳 Zahlungen anzeigen
              </Button>
            </Link>
            {stats.data.pending > 0 && (
              <Link href="/admin/data?status=pending">
                <Button variant="primary">
                  📁 {stats.data.pending} Daten freigeben
                </Button>
              </Link>
            )}
            <Link href="/admin/config">
              <Button variant="outline">
                ⚙️ Event konfigurieren
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Event Status */}
      {stats.config && (
        <Card>
          <CardHeader>
            <CardTitle>Event Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-sm text-gray-600">Event Datum</p>
                <p className="font-medium">
                  {new Date(stats.config.eventDate).toLocaleDateString('de-CH')}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Anmeldeschluss</p>
                <p className="font-medium">
                  {new Date(stats.config.registrationDeadline).toLocaleDateString('de-CH')}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Registrierung</p>
                <p className={`font-medium ${stats.config.registrationOpen ? 'text-green-600' : 'text-red-600'}`}>
                  {stats.config.registrationOpen ? 'Offen' : 'Geschlossen'}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Vorschläge</p>
                <p className={`font-medium ${stats.config.proposalsOpen ? 'text-green-600' : 'text-red-600'}`}>
                  {stats.config.proposalsOpen ? 'Offen' : 'Geschlossen'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

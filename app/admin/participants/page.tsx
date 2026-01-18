'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

interface Participant {
  id: string
  email: string
  name: string | null
  company: string | null
  registrationStatus: string
  createdAt: string
}

export default function AdminParticipantsPage() {
  const [participants, setParticipants] = useState<Participant[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('')

  async function fetchParticipants() {
    try {
      setLoading(true)
      const params = new URLSearchParams()
      if (search) params.set('search', search)
      if (statusFilter) params.set('status', statusFilter)

      const res = await fetch(`/api/admin/participants?${params}`)
      if (!res.ok) throw new Error('Teilnehmende konnten nicht geladen werden')
      const data = await res.json()
      setParticipants(data.participants)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ein Fehler ist aufgetreten')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchParticipants()
  }, [statusFilter])

  function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    fetchParticipants()
  }

  function exportCsv() {
    const csv = [
      ['ID', 'E-Mail', 'Name', 'Firma', 'Status', 'Registriert am'].join(','),
      ...participants.map((p) =>
        [
          p.id,
          p.email,
          p.name || '',
          p.company || '',
          p.registrationStatus,
          new Date(p.createdAt).toLocaleDateString('de-CH'),
        ].join(',')
      ),
    ].join('\n')

    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `teilnehmer-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  const statusLabel = (status: string) => {
    switch (status) {
      case 'registered':
        return { text: 'Registriert', color: 'bg-green-100 text-green-800' }
      case 'pending':
        return { text: 'Ausstehend', color: 'bg-yellow-100 text-yellow-800' }
      case 'cancelled':
        return { text: 'Storniert', color: 'bg-red-100 text-red-800' }
      default:
        return { text: status, color: 'bg-gray-100 text-gray-800' }
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-brand-black">Teilnehmende</h1>
          <p className="text-gray-600 mt-1">
            {participants.length} Teilnehmende gefunden
          </p>
        </div>
        <Button onClick={exportCsv} variant="outline">
          📥 CSV exportieren
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <form onSubmit={handleSearch} className="flex-1 flex gap-2">
              <input
                type="text"
                placeholder="Suche nach Name, E-Mail oder Firma..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sihl-red focus:border-sihl-red"
              />
              <Button type="submit" variant="primary">
                Suchen
              </Button>
            </form>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sihl-red focus:border-sihl-red"
            >
              <option value="">Alle Status</option>
              <option value="registered">Registriert</option>
              <option value="pending">Ausstehend</option>
              <option value="cancelled">Storniert</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Table */}
      {loading ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sihl-red" />
        </div>
      ) : error ? (
        <div className="text-center py-12">
          <p className="text-red-600">{error}</p>
          <Button onClick={fetchParticipants} className="mt-4">
            Erneut versuchen
          </Button>
        </div>
      ) : participants.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-gray-500">Keine Teilnehmende gefunden</p>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Teilnehmende
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Firma
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Registriert am
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {participants.map((participant) => {
                    const status = statusLabel(participant.registrationStatus)
                    return (
                      <tr key={participant.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div>
                            <div className="font-medium text-brand-black">
                              {participant.name || 'Kein Name'}
                            </div>
                            <div className="text-sm text-gray-500">
                              {participant.email}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {participant.company || '–'}
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${status.color}`}
                          >
                            {status.text}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {new Date(participant.createdAt).toLocaleDateString('de-CH', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

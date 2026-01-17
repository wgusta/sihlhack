'use client'

import { useEffect, useState } from 'react'
import { Icon } from '@/components/ui/Icon'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { useSearchParams } from 'next/navigation'

interface DataItem {
  id: string
  title: string
  description: string | null
  dataType: string
  blobUrl: string | null
  ocrStatus: string | null
  approvedAt: string | null
  createdAt: string
  companyName: string | null
}

export default function AdminDataPage() {
  const searchParams = useSearchParams()
  const initialStatus = searchParams.get('status') || ''

  const [data, setData] = useState<DataItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [statusFilter, setStatusFilter] = useState(initialStatus)
  const [actionLoading, setActionLoading] = useState<string | null>(null)

  async function fetchData() {
    try {
      setLoading(true)
      const params = new URLSearchParams()
      if (statusFilter) params.set('status', statusFilter)

      const res = await fetch(`/api/admin/data?${params}`)
      if (!res.ok) throw new Error('Daten konnten nicht geladen werden')
      const result = await res.json()
      setData(result.data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ein Fehler ist aufgetreten')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [statusFilter])

  async function handleAction(id: string, action: 'approve' | 'reject') {
    try {
      setActionLoading(id)
      const res = await fetch('/api/admin/data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, action }),
      })

      if (!res.ok) throw new Error('Aktion fehlgeschlagen')

      // Refresh the data
      await fetchData()
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Ein Fehler ist aufgetreten')
    } finally {
      setActionLoading(null)
    }
  }

  const dataTypeLabel = (type: string) => {
    switch (type) {
      case 'document':
        return { text: 'Dokument', icon: '📄' }
      case 'ledger':
        return { text: 'Hauptbuch', icon: '📒' }
      case 'invoice':
        return { text: 'Rechnung', icon: '🧾' }
      case 'correspondence':
        return { text: 'Korrespondenz', icon: '✉️' }
      case 'photo':
        return { text: 'Foto', icon: '📷' }
      case 'blueprint':
        return { text: 'Bauplan', icon: '📐' }
      default:
        return { text: type, icon: '📁' }
    }
  }

  const pendingCount = data.filter((d) => !d.approvedAt).length
  const approvedCount = data.filter((d) => d.approvedAt).length

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-brand-black">Historische Daten</h1>
        <p className="text-gray-600 mt-1">
          {data.length} Datensätze, {pendingCount} zur Freigabe ausstehend
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card
          className={`cursor-pointer transition-all ${
            statusFilter === 'pending' ? 'ring-2 ring-sihl-red' : ''
          }`}
          onClick={() => setStatusFilter('pending')}
        >
          <CardContent className="py-4">
            <p className="text-sm text-gray-600">Ausstehend</p>
            <p className="text-2xl font-bold text-amber-600">{pendingCount}</p>
          </CardContent>
        </Card>
        <Card
          className={`cursor-pointer transition-all ${
            statusFilter === 'approved' ? 'ring-2 ring-sihl-red' : ''
          }`}
          onClick={() => setStatusFilter('approved')}
        >
          <CardContent className="py-4">
            <p className="text-sm text-gray-600">Freigegeben</p>
            <p className="text-2xl font-bold text-green-600">{approvedCount}</p>
          </CardContent>
        </Card>
        <Card
          className={`cursor-pointer transition-all ${
            statusFilter === '' ? 'ring-2 ring-sihl-red' : ''
          }`}
          onClick={() => setStatusFilter('')}
        >
          <CardContent className="py-4">
            <p className="text-sm text-gray-600">Gesamt</p>
            <p className="text-2xl font-bold text-brand-black">{data.length}</p>
          </CardContent>
        </Card>
      </div>

      {/* Data Grid */}
      {loading ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sihl-red" />
        </div>
      ) : error ? (
        <div className="text-center py-12">
          <p className="text-red-600">{error}</p>
          <Button onClick={fetchData} className="mt-4">
            Erneut versuchen
          </Button>
        </div>
      ) : data.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-gray-500">Keine Daten gefunden</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item) => {
            const type = dataTypeLabel(item.dataType)
            const isPending = !item.approvedAt
            const isActionLoading = actionLoading === item.id

            return (
              <Card
                key={item.id}
                className={`overflow-hidden ${isPending ? 'ring-2 ring-amber-400' : ''}`}
              >
                {/* Preview Area */}
                <div className="h-40 bg-gray-100 flex items-center justify-center relative">
                  {item.blobUrl ? (
                    <img
                      src={item.blobUrl}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Icon emoji={type.icon} size="2xl" color="text-historic-sepia" />
                  )}
                  {isPending && (
                    <div className="absolute top-2 right-2 bg-amber-500 text-white text-xs px-2 py-1 rounded-full">
                      Ausstehend
                    </div>
                  )}
                </div>

                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-brand-black">{item.title}</h3>
                      {item.description && (
                        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                          {item.description}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Icon emoji={type.icon} size="sm" color="text-historic-sepia" />
                      <span>{type.text}</span>
                      <span>•</span>
                      <span>{item.companyName || 'Unbekannt'}</span>
                    </div>

                    <div className="text-xs text-gray-400">
                      Hochgeladen am{' '}
                      {new Date(item.createdAt).toLocaleDateString('de-CH')}
                    </div>

                    {isPending && (
                      <div className="flex gap-2 pt-2">
                        <Button
                          variant="primary"
                          size="sm"
                          className="flex-1"
                          onClick={() => handleAction(item.id, 'approve')}
                          disabled={isActionLoading}
                        >
                          {isActionLoading ? 'Wird bearbeitet...' : '✓ Freigeben'}
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 text-red-600 hover:bg-red-50"
                          onClick={() => handleAction(item.id, 'reject')}
                          disabled={isActionLoading}
                        >
                          ✕ Ablehnen
                        </Button>
                      </div>
                    )}

                    {item.blobUrl && (
                      <a
                        href={item.blobUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center text-sm text-sihl-red hover:underline"
                      >
                        Original anzeigen →
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      )}
    </div>
  )
}

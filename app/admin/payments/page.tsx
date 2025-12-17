'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { formatCHF } from '@/lib/utils'

interface Payment {
  id: string
  participantId: string
  stripePaymentIntentId: string | null
  amountChf: number
  status: string
  refundedAt: string | null
  createdAt: string
  participantEmail: string | null
  participantName: string | null
}

export default function AdminPaymentsPage() {
  const [payments, setPayments] = useState<Payment[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [statusFilter, setStatusFilter] = useState('')

  async function fetchPayments() {
    try {
      setLoading(true)
      const params = new URLSearchParams()
      if (statusFilter) params.set('status', statusFilter)

      const res = await fetch(`/api/admin/payments?${params}`)
      if (!res.ok) throw new Error('Zahlungen konnten nicht geladen werden')
      const data = await res.json()
      setPayments(data.payments)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ein Fehler ist aufgetreten')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPayments()
  }, [statusFilter])

  const totalAmount = payments.reduce((sum, p) => sum + (p.refundedAt ? 0 : p.amountChf), 0)
  const refundedAmount = payments
    .filter((p) => p.refundedAt)
    .reduce((sum, p) => sum + p.amountChf, 0)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-brand-black">Zahlungen</h1>
        <p className="text-gray-600 mt-1">
          {payments.length} Zahlungen, {formatCHF(totalAmount)} netto
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="py-4">
            <p className="text-sm text-gray-600">Gesamteinnahmen</p>
            <p className="text-2xl font-bold text-brand-black">
              {formatCHF(totalAmount + refundedAmount)}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="py-4">
            <p className="text-sm text-gray-600">Erstattet</p>
            <p className="text-2xl font-bold text-red-600">
              {formatCHF(refundedAmount)}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="py-4">
            <p className="text-sm text-gray-600">Netto verfügbar</p>
            <p className="text-2xl font-bold text-green-600">
              {formatCHF(totalAmount)}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Filter */}
      <Card>
        <CardContent className="py-4">
          <div className="flex items-center gap-4">
            <label className="text-sm font-medium text-gray-700">Filter:</label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sihl-red focus:border-sihl-red"
            >
              <option value="">Alle Zahlungen</option>
              <option value="completed">Abgeschlossen</option>
              <option value="refunded">Erstattet</option>
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
          <Button onClick={fetchPayments} className="mt-4">
            Erneut versuchen
          </Button>
        </div>
      ) : payments.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-gray-500">Keine Zahlungen gefunden</p>
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
                      Teilnehmer
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Betrag
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Stripe ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Datum
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {payments.map((payment) => (
                    <tr key={payment.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div>
                          <div className="font-medium text-brand-black">
                            {payment.participantName || 'Unbekannt'}
                          </div>
                          <div className="text-sm text-gray-500">
                            {payment.participantEmail || '–'}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-medium text-brand-black">
                          {formatCHF(payment.amountChf)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        {payment.refundedAt ? (
                          <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
                            Erstattet
                          </span>
                        ) : payment.status === 'completed' ? (
                          <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                            Abgeschlossen
                          </span>
                        ) : (
                          <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
                            {payment.status}
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 font-mono">
                        {payment.stripePaymentIntentId ? (
                          <a
                            href={`https://dashboard.stripe.com/payments/${payment.stripePaymentIntentId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-sihl-red"
                          >
                            {payment.stripePaymentIntentId.slice(0, 20)}...
                          </a>
                        ) : (
                          '–'
                        )}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {new Date(payment.createdAt).toLocaleDateString('de-CH', {
                          day: '2-digit',
                          month: '2-digit',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

'use client'

import Link from 'next/link'
import { useSession } from '@/hooks/useSession'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { Badge } from '@/components/ui/Badge'

export default function DashboardPage() {
  const { user } = useSession()

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'registered':
        return <Badge variant="success">Registriert</Badge>
      case 'confirmed':
        return <Badge variant="success">Bestätigt</Badge>
      case 'pending':
        return <Badge variant="warning">Ausstehend</Badge>
      case 'refunded':
        return <Badge variant="info">Zurückerstattet</Badge>
      default:
        return <Badge>{status}</Badge>
    }
  }

  return (
    <div className="space-y-8">
      {/* Welcome section */}
      <div>
        <h1 className="font-display text-3xl font-bold text-brand-black">
          Willkommen{user?.name ? `, ${user.name}` : ''}!
        </h1>
        <p className="mt-2 text-historic-sepia font-mono">
          Verwalte deine sihlhack Teilnahme und Projektvorschläge.
        </p>
      </div>

      {/* Status card */}
      <Card>
        <CardHeader>
          <CardTitle>Dein Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-sm font-mono text-historic-sepia">Registrierungsstatus</p>
              {user && getStatusBadge(user.registrationStatus)}
            </div>
            <ButtonLink href="/funds" variant="ghost" size="sm">
              Fonds ansehen
            </ButtonLink>
          </div>
        </CardContent>
      </Card>

      {/* Quick actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 mx-auto bg-sihl-red/10 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-sihl-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div>
                <h3 className="font-display font-semibold text-brand-black">Projekt vorschlagen</h3>
                <p className="text-sm text-historic-sepia font-mono mt-1">
                  Reiche deine Projektidee ein
                </p>
              </div>
              <ButtonLink href="/proposals/new" variant="primary" size="sm" className="w-full">
                Neues Projekt
              </ButtonLink>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 mx-auto bg-industrial-gold/10 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-industrial-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div>
                <h3 className="font-display font-semibold text-brand-black">Projekte entdecken</h3>
                <p className="text-sm text-historic-sepia font-mono mt-1">
                  Stimme für deine Favoriten
                </p>
              </div>
              <ButtonLink href="/proposals" variant="secondary" size="sm" className="w-full">
                Alle Projekte
              </ButtonLink>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 mx-auto bg-insight-cyan/10 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-insight-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div>
                <h3 className="font-display font-semibold text-brand-black">Daten entdecken</h3>
                <p className="text-sm text-historic-sepia font-mono mt-1">
                  Historische Dokumente erkunden
                </p>
              </div>
              <ButtonLink href="/data-catalog" variant="ghost" size="sm" className="w-full">
                Datenkatalog
              </ButtonLink>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Info box */}
      <Card variant="historic">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 text-industrial-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-display font-semibold text-brand-black">So funktioniert sihlhack</h3>
              <p className="mt-1 text-sm font-mono text-historic-sepia">
                Teilnehmende schlagen Projekte vor und stimmen darüber ab, welche umgesetzt werden.
                Der gesamte Überschuss nach Betriebskosten fliesst ins Preisgeld.
                Falls die Mindestteilnehmerzahl nicht erreicht wird, erfolgt eine vollständige Rückerstattung.
              </p>
              <Link href="/about" className="inline-block mt-2 text-sm font-mono text-sihl-red hover:underline">
                Mehr erfahren
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

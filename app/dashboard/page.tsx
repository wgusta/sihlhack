'use client'

import Link from 'next/link'
import { useSession } from '@/hooks/useSession'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { ProfileEditorCard } from '@/components/dashboard/ProfileEditorCard'
import { AnnouncementsCard } from '@/components/dashboard/AnnouncementsCard'
import { SnackathonCard } from '@/components/dashboard/SnackathonCard'
import {
  PlusIcon,
  ClipboardDocumentListIcon,
  CircleStackIcon,
  InformationCircleIcon,
  UserGroupIcon,
} from '@heroicons/react/24/solid'

export default function DashboardPage() {
  const { user } = useSession()

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
              <p className="text-sm font-mono text-brand-black">{user?.registrationStatus ?? '-'}</p>
            </div>
            <ButtonLink href="/funds" variant="ghost" size="sm">
              Fonds ansehen
            </ButtonLink>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProfileEditorCard />
        <div className="space-y-6">
          <AnnouncementsCard />
          <SnackathonCard />
        </div>
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 mx-auto bg-grid-green/10 rounded-full flex items-center justify-center">
                <UserGroupIcon className="w-6 h-6 text-grid-green" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-brand-black">Team finden</h3>
                <p className="text-sm text-historic-sepia font-mono mt-1">
                  Plattform-only, strukturiert
                </p>
              </div>
              <ButtonLink href="/dashboard/team-matching" variant="secondary" size="sm" className="w-full">
                Team Matching
              </ButtonLink>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 mx-auto bg-sihl-red/10 rounded-full flex items-center justify-center">
                <PlusIcon className="w-6 h-6 text-sihl-red" aria-hidden="true" />
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
                <ClipboardDocumentListIcon className="w-6 h-6 text-industrial-gold" aria-hidden="true" />
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
                <CircleStackIcon className="w-6 h-6 text-insight-cyan" aria-hidden="true" />
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
              <InformationCircleIcon className="w-6 h-6 text-industrial-gold" aria-hidden="true" />
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

'use client'

import { useSession } from '@/hooks/useSession'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { ProfileEditorCard } from '@/components/dashboard/ProfileEditorCard'
import { AnnouncementsCard } from '@/components/dashboard/AnnouncementsCard'
import { SnackathonCard } from '@/components/dashboard/SnackathonCard'
import { NextStepsCard } from '@/components/dashboard/NextStepsCard'
import {
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
          Verwalte deine sihlhack Teilnahme.
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
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <NextStepsCard />
          <ProfileEditorCard />
        </div>
        <div className="space-y-6">
          <AnnouncementsCard />
          <SnackathonCard />
        </div>
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
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
      </div>
    </div>
  )
}

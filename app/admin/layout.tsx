'use client'

import { useSession } from '@/hooks/useSession'
import { useRouter, usePathname } from 'next/navigation'
import { useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Logo } from '@/components/ui/Logo'

const ADMIN_EMAILS = ['admin@sihlhack.ch', 'gusta@sihlhack.ch']

const navItems = [
  { href: '/admin', label: 'Übersicht', icon: '📊' },
  { href: '/admin/participants', label: 'Teilnehmer', icon: '👥' },
  { href: '/admin/payments', label: 'Zahlungen', icon: '💳' },
  { href: '/admin/data', label: 'Daten', icon: '📁' },
  { href: '/admin/config', label: 'Einstellungen', icon: '⚙️' },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user, isLoading, isAuthenticated } = useSession()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated || !user) {
        router.push('/auth/login?redirect=/admin')
      } else if (!ADMIN_EMAILS.includes(user.email)) {
        router.push('/dashboard')
      }
    }
  }, [user, isLoading, isAuthenticated, router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-sand">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sihl-red" />
      </div>
    )
  }

  if (!isAuthenticated || !user || !ADMIN_EMAILS.includes(user.email)) {
    return null
  }

  return (
    <div className="min-h-screen bg-brand-sand">
      {/* Admin Header */}
      <header className="bg-brand-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/admin">
                <Logo size="sm" hackColor="white" />
              </Link>
              <span className="text-sm bg-sihl-red px-2 py-1 rounded">Admin</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">{user.email}</span>
              <Link
                href="/dashboard"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Zurück zur Plattform
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 min-h-[calc(100vh-4rem)]">
          <nav className="p-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                  pathname === item.href
                    ? 'bg-sihl-red text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                )}
              >
                <span>{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  )
}

'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useSession } from '@/hooks/useSession'
import { Logo } from '@/components/ui/Logo'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Übersicht', href: '/dashboard' },
  { name: 'Meine Projekte', href: '/dashboard/proposals' },
  { name: 'Meine Stimmen', href: '/dashboard/votes' },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const { user, isLoading, isAuthenticated } = useSession()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/auth/login?redirectTo=/dashboard')
    }
  }, [isLoading, isAuthenticated, router])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-off-white flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-historic-cream border-t-sihl-red rounded-full animate-spin" />
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/')
  }

  return (
    <div className="min-h-screen bg-off-white">
      {/* Header */}
      <header className="bg-brand-black text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/">
              <Logo size="md" hackColor="white" />
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-sm font-mono text-gray-300">
                {user?.email}
              </span>
              <button
                onClick={handleLogout}
                className="text-sm font-mono text-gray-400 hover:text-white transition-colors"
              >
                Abmelden
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-historic-sepia/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'py-4 px-1 border-b-2 text-sm font-mono transition-colors',
                  'border-transparent text-historic-sepia hover:text-brand-black hover:border-historic-sepia'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  )
}

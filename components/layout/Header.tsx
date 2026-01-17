'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { cn } from '@/lib/utils'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { Logo } from '@/components/ui/Logo'

const navigation = [
  { name: 'Konzept', href: '/about' },
  { name: 'Challenges', href: '/challenges' },
  { name: 'Team', href: '/team' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-off-white/95 backdrop-blur-sm border-b border-historic-sepia/20">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Hauptnavigation">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 group">
              <Logo size="md" hackColor="black" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-mono text-historic-sepia hover:text-brand-black transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <ButtonLink href="/register" variant="primary" size="sm">
              Platz sichern
            </ButtonLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="p-2 text-historic-sepia hover:text-brand-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Menü öffnen</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6 text-sihl-red" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-historic-sepia hover:text-sihl-red transition-colors" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={cn(
            'md:hidden overflow-hidden transition-all duration-300',
            mobileMenuOpen ? 'max-h-64 pb-4' : 'max-h-0'
          )}
        >
          <div className="space-y-2 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-mono text-historic-sepia hover:text-brand-black hover:bg-historic-cream rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2 px-3">
              <ButtonLink href="/register" variant="primary" size="md" className="w-full justify-center">
                Platz sichern
              </ButtonLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

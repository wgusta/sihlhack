import Link from 'next/link'

const footerLinks = {
  main: [
    { name: 'Konzept', href: '/about' },
    { name: 'Projekte', href: '/proposals' },
    { name: 'Daten', href: '/data-catalog' },
    { name: 'Fonds', href: '/funds' },
  ],
  legal: [
    { name: 'Impressum', href: '/impressum' },
    { name: 'Datenschutz', href: '/datenschutz' },
    { name: 'AGB', href: '/agb' },
  ],
  participate: [
    { name: 'Anmelden', href: '/register' },
    { name: 'Unternehmen', href: '/company/register' },
    { name: 'FAQ', href: '/about#faq' },
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-display text-2xl font-bold">
                sihl<span className="text-deep-pink">hack</span>
              </span>
            </Link>
            <p className="mt-4 text-sm font-mono text-gray-400">
              Der erste teilnehmerorientierte Hackathon der Schweiz. Historische Industriedaten aus dem Sihltal digitalisieren.
            </p>
            <p className="mt-4 text-xs font-mono text-gray-500">
              Ein Projekt von{' '}
              <a
                href="https://sihliconvalley.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal hover:underline"
              >
                sihliconvalley.ch
              </a>
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-mono text-sm font-semibold text-gray-300 uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.main.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm font-mono text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Participate */}
          <div>
            <h3 className="font-mono text-sm font-semibold text-gray-300 uppercase tracking-wider">
              Teilnehmen
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.participate.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm font-mono text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-mono text-sm font-semibold text-gray-300 uppercase tracking-wider">
              Rechtliches
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm font-mono text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs font-mono text-gray-500">
              © {currentYear} sihlhack. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono text-gray-500">
                Finanzen öffentlich einsehbar unter{' '}
                <Link href="/funds" className="text-teal hover:underline">
                  /funds
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

import { ButtonLink } from '@/components/ui/ButtonLink'
import { EmailCapture } from './EmailCapture'

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with thermal gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-thermal-orange via-sihl-red to-compute-blue" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-black/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Accent */}
          <span className="accent-text text-white/90 text-lg">
            Bereit, etwas zu bauen?
          </span>

          {/* Title */}
          <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Die Schweizer Energiezukunft braucht dich
          </h2>

          {/* Description */}
          <p className="mt-6 text-lg text-white/90 font-mono">
            48 Stunden. Open Source. Ein echter Prototyp.
            Kein Preisgeld, kein Bullshit: Wir bauen Hardware, die in einer echten LEG läuft.
          </p>

          {/* What you'll build */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl mb-2">🔧</div>
              <div className="font-mono text-sm text-white">Sihlicon Core Modul</div>
              <div className="font-mono text-xs text-white/70">Immersion-gekühlte Server</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl mb-2">💻</div>
              <div className="font-mono text-sm text-white">Grid-OS Software</div>
              <div className="font-mono text-xs text-white/70">Solar-Watcher + Scheduler</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl mb-2">📊</div>
              <div className="font-mono text-sm text-white">Monitoring Dashboard</div>
              <div className="font-mono text-xs text-white/70">Echtzeit Energie + Compute</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <ButtonLink
              href="/register"
              variant="secondary"
              size="lg"
              className="bg-white text-brand-black hover:bg-white/90 border-0 w-full sm:w-auto"
            >
              Jetzt anmelden
            </ButtonLink>
            <ButtonLink
              href="https://github.com/sihlicon"
              variant="ghost"
              size="lg"
              className="text-white border-white/30 hover:bg-white/20 w-full sm:w-auto"
            >
              GitHub Repository
            </ButtonLink>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-white/80 font-mono text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>100% Open Source</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Kostenlose Teilnahme</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Echter Production Deploy</span>
            </div>
          </div>
        </div>

        {/* Email Capture for people not ready to register */}
        <div className="mt-16 max-w-md mx-auto">
          <EmailCapture />
        </div>
      </div>
    </section>
  )
}

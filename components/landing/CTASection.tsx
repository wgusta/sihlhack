import { ButtonLink } from '@/components/ui/ButtonLink'

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with paper texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-sihl-red to-industrial-gold paper-texture" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-black/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Accent */}
          <span className="accent-text text-white/90 text-lg">
            Bereit für das Abenteuer?
          </span>

          {/* Title */}
          <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Geschichte trifft Innovation
          </h2>

          {/* Description */}
          <p className="mt-6 text-lg text-white/80 font-mono">
            Werde Teil des ersten teilnehmerorientierten Hackathons der Schweiz.
            150 CHF Teilnahmegebühr, volle Rückerstattung falls Event nicht stattfindet.
          </p>

          {/* Pricing highlight */}
          <div className="mt-8 inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
            <div className="text-left">
              <span className="block text-2xl font-display font-bold text-white">150 CHF</span>
              <span className="text-xs text-white/70 font-mono">Teilnahmegebühr</span>
            </div>
            <div className="w-px h-12 bg-white/30" />
            <div className="text-left">
              <span className="block text-2xl font-display font-bold text-white">105 CHF</span>
              <span className="text-xs text-white/70 font-mono">→ Preisgeld (70%)</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <ButtonLink
              href="/register"
              variant="secondary"
              size="lg"
              className="bg-white text-sihl-red hover:bg-white/90 border-0"
            >
              Jetzt anmelden
            </ButtonLink>
            <ButtonLink
              href="/funds"
              variant="ghost"
              size="lg"
              className="text-white border-white/30 hover:bg-white/10"
            >
              Fonds ansehen
            </ButtonLink>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-white/60 font-mono text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Sichere Zahlung via Stripe</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Transparente Finanzen</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
              </svg>
              <span>Garantierte Rückerstattung</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

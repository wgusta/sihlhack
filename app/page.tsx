import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/landing/HeroSection'
import { DataRevealSection } from '@/components/landing/DataRevealSection'
import { WhyItMattersSection } from '@/components/landing/WhyItMattersSection'
import { PrivacySection } from '@/components/landing/PrivacySection'
import { EnergyTrilemmaSection } from '@/components/landing/EnergyTrilemmaSection'
import { PrototypeVisualization } from '@/components/ui/PrototypeVisualization'
import { DynamicFundingSection } from '@/components/landing/DynamicFundingSection'
import { DataProvidersSection } from '@/components/landing/DataProvidersSection'
import { FAQSection } from '@/components/landing/FAQSection'
import { EventTimeline } from '@/components/landing/EventTimeline'
import { CTASection } from '@/components/landing/CTASection'

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* 1. Hero: Live Pot Tracker + Countdown + Historical Data meets AI */}
        <HeroSection />

        {/* 2. The Challenge: Before/After slider showing data transformation */}
        <div className="py-12 sm:py-16">
          <DataRevealSection />
        </div>

        {/* 3. Why This Matters: Value proposition */}
        <WhyItMattersSection />

        {/* 4. Privacy: Local-first AI approach */}
        <div className="py-12 sm:py-16">
          <PrivacySection />
        </div>

        {/* 5. Energy Trilemma & LEGs */}
        <div className="py-12 sm:py-16">
          <EnergyTrilemmaSection />
        </div>

        {/* 6. Technical Prototype: Visualisation */}
        <section className="py-24 bg-off-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="font-mono text-sm text-compute-blue uppercase tracking-widest">
                Vom Konzept zum Prototyp
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-black mt-4">
                Der Sihlicon Hub v1.0
              </h2>
              <p className="mt-4 text-lg text-historic-sepia font-mono max-w-2xl mx-auto">
                Hardware, die heizt. Software, die steuert. Ein komplettes System für die Energiewende.
              </p>
            </div>
            
            <PrototypeVisualization />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="font-display font-bold text-solar-yellow text-xl mb-2">Solar Power</h3>
                <p className="font-mono text-sm text-historic-sepia">Direkte Nutzung von Solar-Überschuss ohne Netzbelastung.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="font-display font-bold text-compute-blue text-xl mb-2">Immersion Tank</h3>
                <p className="font-mono text-sm text-historic-sepia">Geräuschlose Kühlung in dielektrischem Öl mit 99% Wärmerückgewinnung.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="font-display font-bold text-thermal-orange text-xl mb-2">Heat Export</h3>
                <p className="font-mono text-sm text-historic-sepia">Bereitstellung von 45°C Warmwasser für Heizung und Brauchwasser (Demo-Scale).</p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Data Providers: Who contributes historical data */}
        <div className="py-12 sm:py-16">
          <DataProvidersSection />
        </div>

        {/* 7. Transparency: Calculator widget + Community vs Corporate */}
        <div className="py-12 sm:py-16">
          <DynamicFundingSection />
        </div>

        {/* 8. FAQ: Common questions accordion */}
        <div className="py-12 sm:py-16">
          <FAQSection />
        </div>

        {/* 9. Timeline: When things happen */}
        <div className="py-12 sm:py-16">
          <EventTimeline />
        </div>

        {/* 10. Final CTA */}
        <div className="py-12 sm:py-16">
          <CTASection />
        </div>
      </main>
      <Footer />
    </div>
  )
}

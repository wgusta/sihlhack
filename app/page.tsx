import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/landing/HeroSection'
import { ChallengesPreview } from '@/components/landing/ChallengesPreview'
import { WhoShouldJoinSection } from '@/components/landing/WhoShouldJoinSection'
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
import { ComputeScenariosSection } from '@/components/landing/ComputeScenariosSection'

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* 1. Hero: Executive Summary */}
        <HeroSection />

        {/* 2. Challenges Preview: Three open questions */}
        <ChallengesPreview />

        {/* 3. Who Should Join: Audience targeting */}
        <WhoShouldJoinSection />

        {/* 4. The Challenge: Before/After slider showing data transformation */}
        <div className="py-12 sm:py-16">
          <DataRevealSection />
        </div>

        {/* 5. Why This Matters: Value proposition */}
        <WhyItMattersSection />

        {/* 6. Privacy: Local-first AI approach */}
        <div className="py-12 sm:py-16">
          <PrivacySection />
        </div>

        {/* 7. Energy Trilemma & LEGs */}
        <div className="py-12 sm:py-16">
          <EnergyTrilemmaSection />
        </div>

        {/* 8. Technical Prototype: Visualisation */}
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
          </div>
        </section>

        {/* 8.5. Compute Scenarios: What runs on the Hub */}
        <ComputeScenariosSection />

        {/* 9. Data Providers: Who contributes historical data */}
        <div className="py-12 sm:py-16">
          <DataProvidersSection />
        </div>

        {/* 10. Transparency: Calculator widget + Community vs Corporate */}
        <div className="py-12 sm:py-16">
          <DynamicFundingSection />
        </div>

        {/* 11. FAQ: Common questions accordion */}
        <div className="py-12 sm:py-16">
          <FAQSection />
        </div>

        {/* 11.5. Team Red: Security Challenge */}
        <section className="py-16 bg-brand-black text-white relative overflow-hidden">
          {/* Warning stripes */}
          <div className="absolute top-0 left-0 right-0 h-2" style={{
            background: 'repeating-linear-gradient(45deg, #ff0000, #ff0000 10px, #1a1a1a 10px, #1a1a1a 20px)',
          }} />
          
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-8">
              <div className="inline-block bg-red-500 text-white text-xs font-mono px-4 py-1 rounded-full mb-4">
                🎯 SPEZIALEINHEIT · MIT SELEKTION
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-red-500 mt-4">
                💀 Team Red: Hacke unser System
              </h2>
              <p className="mt-4 text-gray-300 font-mono max-w-2xl mx-auto">
                Ethisches Hacking: Teste Hardware, Software und APIs auf Schwachstellen. 
                Die einzige Challenge mit Selektionsverfahren. Ein Team, 10-15 Personen.
              </p>
            </div>
            
            <div className="bg-red-500/10 border-2 border-red-500/30 rounded-xl p-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-mono text-sm text-red-400 uppercase mb-3">💻 Digitale Angriffe</h3>
                  <ul className="space-y-2 text-sm font-mono text-gray-400">
                    <li>• API-Schwachstellen</li>
                    <li>• Grid-OS Exploits</li>
                    <li>• Dashboard XSS/CSRF</li>
                    <li>• Netzwerk-Sniffing</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-mono text-sm text-orange-400 uppercase mb-3">🔧 Physische Angriffe</h3>
                  <ul className="space-y-2 text-sm font-mono text-gray-400">
                    <li>• Gehäuse-Manipulation</li>
                    <li>• USB/Serial Port Angriffe</li>
                    <li>• Sensor-Spoofing</li>
                    <li>• Stromversorgung-Manipulation</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <a
                href="/challenges#team-red"
                className="inline-block bg-red-500 hover:bg-red-600 text-white font-mono px-6 py-3 rounded-lg transition-colors border-2 border-red-500"
              >
                💀 Für Team Red bewerben →
              </a>
              <p className="mt-4 text-gray-500 font-mono text-xs">
                Separate Bewerbung erforderlich · Bewerbungsschluss: 2 Wochen vor Event
              </p>
            </div>
          </div>
          
          {/* Warning stripes bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-2" style={{
            background: 'repeating-linear-gradient(-45deg, #ff0000, #ff0000 10px, #1a1a1a 10px, #1a1a1a 20px)',
          }} />
        </section>

        {/* 12. Timeline: When things happen */}
        <div className="py-12 sm:py-16">
          <EventTimeline />
        </div>

        {/* 13. Final CTA */}
        <div className="py-12 sm:py-16">
          <CTASection />
        </div>
      </main>
      <Footer />
    </div>
  )
}

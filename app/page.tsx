import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/landing/HeroSection'
import { DataRevealSection } from '@/components/landing/DataRevealSection'
import { WhyItMattersSection } from '@/components/landing/WhyItMattersSection'
import { PrivacySection } from '@/components/landing/PrivacySection'
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

        {/* 5. Data Providers: Who contributes historical data */}
        <div className="py-12 sm:py-16">
          <DataProvidersSection />
        </div>

        {/* 6. Transparency: Calculator widget + Community vs Corporate */}
        <div className="py-12 sm:py-16">
          <DynamicFundingSection />
        </div>

        {/* 7. FAQ: Common questions accordion */}
        <div className="py-12 sm:py-16">
          <FAQSection />
        </div>

        {/* 8. Timeline: When things happen */}
        <div className="py-12 sm:py-16">
          <EventTimeline />
        </div>

        {/* 9. Final CTA */}
        <div className="py-12 sm:py-16">
          <CTASection />
        </div>
      </main>
      <Footer />
    </div>
  )
}

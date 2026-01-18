import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/landing/HeroSection'
import { ChallengesPreview } from '@/components/landing/ChallengesPreview'
import { QuickCTA } from '@/components/landing/QuickCTA'
import { WhoShouldJoinSection } from '@/components/landing/WhoShouldJoinSection'
import { DataRevealSection } from '@/components/landing/DataRevealSection'
import { WhyItMattersSection } from '@/components/landing/WhyItMattersSection'
import { PrivacySection } from '@/components/landing/PrivacySection'
import { DynamicFundingSection } from '@/components/landing/DynamicFundingSection'
import { FAQSection } from '@/components/landing/FAQSection'
import { EventTimeline } from '@/components/landing/EventTimeline'
import { CTASection } from '@/components/landing/CTASection'

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* 1. Hero: Executive Summary */}
        <HeroSection />

        {/* 2. Challenges Preview: Three open questions */}
        <ChallengesPreview />

        {/* 2.5. Quick CTA: Immediate conversion point for decided visitors */}
        <QuickCTA />

        {/* 3. Who Should Join: Audience targeting */}
        <div id="mehr">
          <WhoShouldJoinSection />
        </div>

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

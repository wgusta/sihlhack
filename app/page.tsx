import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/landing/HeroSection'
import { DataRevealSection } from '@/components/landing/DataRevealSection'
import { DynamicFundingSection } from '@/components/landing/DynamicFundingSection'
import { EventTimeline } from '@/components/landing/EventTimeline'
import { CTASection } from '@/components/landing/CTASection'

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* 1. Hero: Live Pot Tracker + Historical Data meets AI headline */}
        <HeroSection />

        {/* 2. The Challenge: Before/After slider showing data transformation */}
        <DataRevealSection />

        {/* 3. Transparency: Calculator widget + Community vs Corporate */}
        <DynamicFundingSection />

        {/* 4. Timeline: When things happen */}
        <EventTimeline />

        {/* 5. Final CTA */}
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

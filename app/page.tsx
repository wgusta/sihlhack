import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/landing/HeroSection'
import { ConceptExplainer } from '@/components/landing/ConceptExplainer'
import { FundTrackerWidget } from '@/components/landing/FundTrackerWidget'
import { EventTimeline } from '@/components/landing/EventTimeline'
import { CTASection } from '@/components/landing/CTASection'

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ConceptExplainer />
        <FundTrackerWidget />
        <EventTimeline />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

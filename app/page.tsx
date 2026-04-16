import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/home/hero-section'
import { FeaturedCakes } from '@/components/home/featured-cakes'
import { CraftSection } from '@/components/home/craft-section'
import { HowItWorks } from '@/components/home/how-it-works'
import { MomentsGallery } from '@/components/home/moments-gallery'
import { Testimonials } from '@/components/home/testimonials'
import { UrgencyBanner } from '@/components/home/urgency-banner'
import { StickyOrderButton } from '@/components/sticky-order-button'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturedCakes />
      <CraftSection />
      <HowItWorks />
      <MomentsGallery />
      <Testimonials />
      <UrgencyBanner />
      <Footer />
      <StickyOrderButton />
    </main>
  )
}

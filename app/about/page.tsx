import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Heart, Leaf, Award, Clock } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { StickyOrderButton } from '@/components/sticky-order-button'
import { cn } from '@/lib/utils'

export const metadata = {
  title: 'Our Story | Zia Cakes',
  description: 'Discover the story behind Zia Cakes. From home baker to premium artisan bakery, learn about our passion for creating exceptional cakes.',
}

const values = [
  {
    icon: Heart,
    title: 'Crafted with Love',
    description: 'Every cake begins with passion. We pour our heart into each creation, ensuring it reflects the love and care of handmade artistry.',
  },
  {
    icon: Leaf,
    title: 'Fresh Ingredients',
    description: 'We source only the finest, freshest ingredients. No preservatives, no shortcuts—just pure, wholesome goodness in every bite.',
  },
  {
    icon: Award,
    title: 'Artisan Quality',
    description: 'Our cakes are not just desserts; they are edible works of art. Each design is meticulously crafted to exceed expectations.',
  },
  {
    icon: Clock,
    title: 'Made to Order',
    description: 'We believe in freshness. Every cake is baked to order, ensuring you receive a creation at its absolute peak of perfection.',
  },
]

const milestones = [
  { year: '2018', title: 'The Beginning', description: 'Started baking from home with a dream and a passion.' },
  { year: '2020', title: 'Growing Love', description: 'Word spread, and our customer family grew to 100+ happy celebrations.' },
  { year: '2022', title: 'Premium Launch', description: 'Introduced our premium collection with custom designs.' },
  { year: '2024', title: '500+ Cakes', description: 'Celebrated 500+ cakes and countless precious moments.' },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-champagne/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl -z-10" />
        
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <p 
                  className="text-sm tracking-[0.3em] uppercase text-gold mb-4"
                  style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                >
                  Our Story
                </p>
                <h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-light text-charcoal mb-6"
                  style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
                >
                  From Home Kitchen to{' '}
                  <span className="font-semibold">Artisan Excellence</span>
                </h1>
              </div>
              
              <div 
                className="space-y-4 text-charcoal/70 leading-relaxed"
                style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
              >
                <p>
                  Zia Cakes began in 2018 with a simple belief: that every celebration 
                  deserves a cake crafted with intention, creativity, and love. What 
                  started as a passion project in a home kitchen has blossomed into 
                  Virudhachalam&apos;s most cherished artisan bakery.
                </p>
                <p>
                  Today, we continue that same tradition—baking each cake by hand, 
                  using time-honoured techniques and the finest ingredients. We don&apos;t 
                  just make cakes; we create centerpieces for your most treasured moments.
                </p>
              </div>

              <Link
                href="/cakes"
                className={cn(
                  'inline-flex items-center gap-3 text-sm tracking-[0.15em] uppercase',
                  'text-charcoal hover:text-gold transition-colors underline-hover'
                )}
                style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
              >
                Explore Our Creations
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative aspect-[4/5] max-w-md mx-auto lg:ml-auto">
                {/* Decorative frame */}
                <div className="absolute -inset-4 border border-gold/20 rounded-sm" />
                
                <div className="relative w-full h-full bg-champagne/50 overflow-hidden rounded-sm">
                  <Image
                    src="/images/about-baker.jpg"
                    alt="Zia Cakes artisan baker"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Badge */}
                <div className="absolute -bottom-6 -right-6 px-6 py-4 bg-charcoal text-ivory">
                  <p 
                    className="text-3xl font-semibold"
                    style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
                  >
                    6+
                  </p>
                  <p 
                    className="text-xs tracking-[0.2em] uppercase text-gold"
                    style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                  >
                    Years of Love
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p 
              className="text-sm tracking-[0.3em] uppercase text-gold mb-4"
              style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
            >
              Our Philosophy
            </p>
            <h2 
              className="text-4xl md:text-5xl font-light text-charcoal"
              style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
            >
              What We <span className="font-semibold">Stand For</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div 
                key={value.title}
                className="text-center p-8 bg-champagne/20 hover:bg-champagne/40 transition-colors"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-gold/30 flex items-center justify-center">
                  <value.icon className="h-7 w-7 text-gold" />
                </div>
                <h3 
                  className="text-xl font-semibold text-charcoal mb-3"
                  style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
                >
                  {value.title}
                </h3>
                <p 
                  className="text-sm text-charcoal/60"
                  style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-champagne/20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p 
              className="text-sm tracking-[0.3em] uppercase text-gold mb-4"
              style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
            >
              Our Journey
            </p>
            <h2 
              className="text-4xl md:text-5xl font-light text-charcoal"
              style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
            >
              Milestones & <span className="font-semibold">Memories</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div 
                key={milestone.year}
                className="flex gap-8 pb-12 last:pb-0"
              >
                {/* Year */}
                <div className="flex-shrink-0 w-20">
                  <p 
                    className="text-2xl font-semibold text-gold"
                    style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
                  >
                    {milestone.year}
                  </p>
                </div>

                {/* Line */}
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-gold" />
                  {index < milestones.length - 1 && (
                    <div className="w-[1px] flex-1 bg-gold/30 mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <h3 
                    className="text-xl font-semibold text-charcoal mb-2"
                    style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
                  >
                    {milestone.title}
                  </h3>
                  <p 
                    className="text-charcoal/60"
                    style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                  >
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="container mx-auto px-6 text-center">
          <h2 
            className="text-3xl md:text-4xl font-light mb-6"
            style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
          >
            Ready to Create <span className="font-semibold text-gold">Your Moment</span>?
          </h2>
          <p 
            className="text-ivory/70 max-w-md mx-auto mb-8"
            style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
          >
            Let us craft the perfect centerpiece for your celebration. 
            Every cake is made with love, just for you.
          </p>
          <Link
            href="/booking"
            className={cn(
              'inline-flex items-center gap-3',
              'px-8 py-4 text-sm tracking-[0.15em] uppercase',
              'bg-gold text-charcoal hover:bg-ivory',
              'transition-all duration-300'
            )}
            style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
          >
            Book Your Cake
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
      <StickyOrderButton />
    </main>
  )
}

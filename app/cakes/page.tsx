import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CakeCatalog } from '@/components/cakes/cake-catalog'
import { StickyOrderButton } from '@/components/sticky-order-button'

export const metadata = {
  title: 'Our Collection | Zia Cakes',
  description: 'Explore our premium collection of handcrafted cakes. Birthday, wedding, anniversary, and custom cakes crafted with love.',
}

export default function CakesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-champagne/20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <p 
              className="text-sm tracking-[0.3em] uppercase text-gold mb-4"
              style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
            >
              The Collection
            </p>
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-light text-charcoal mb-6"
              style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
            >
              Our Signature <span className="font-semibold">Creations</span>
            </h1>
            <p 
              className="text-charcoal/60"
              style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
            >
              Each cake is a work of art, handcrafted with premium ingredients 
              and decorated with meticulous attention to detail.
            </p>
          </div>
        </div>
      </section>

      <CakeCatalog />
      <Footer />
      <StickyOrderButton />
    </main>
  )
}

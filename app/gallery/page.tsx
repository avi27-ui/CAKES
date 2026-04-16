import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { GalleryGrid } from '@/components/gallery/gallery-grid'
import { StickyOrderButton } from '@/components/sticky-order-button'

export const metadata = {
  title: 'Gallery | Zia Cakes',
  description: 'Explore our gallery of handcrafted cakes. Birthday cakes, wedding cakes, and custom creations from Zia Cakes.',
}

export default function GalleryPage() {
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
              Our Work
            </p>
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-light text-charcoal mb-6"
              style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
            >
              The <span className="font-semibold">Gallery</span>
            </h1>
            <p 
              className="text-charcoal/60"
              style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
            >
              A visual journey through our finest creations. Each cake tells 
              a story of celebration and craftsmanship.
            </p>
          </div>
        </div>
      </section>

      <GalleryGrid />
      <Footer />
      <StickyOrderButton />
    </main>
  )
}

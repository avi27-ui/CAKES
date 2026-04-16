import { Suspense } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { BookingForm } from '@/components/booking/booking-form'
import { StickyOrderButton } from '@/components/sticky-order-button'

export const metadata = {
  title: 'Book Your Cake | Zia Cakes',
  description: 'Reserve your custom cake from Zia Cakes. Fill out the form and we\'ll confirm your order via WhatsApp.',
}

export default function BookingPage() {
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
              Reservation
            </p>
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-light text-charcoal mb-6"
              style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
            >
              Book Your <span className="font-semibold">Cake</span>
            </h1>
            <p 
              className="text-charcoal/60"
              style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
            >
              Complete the form below and we&apos;ll send your order details to 
              WhatsApp for confirmation. Booking takes less than 2 minutes.
            </p>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
        <BookingForm />
      </Suspense>
      
      <Footer />
      <StickyOrderButton />
    </main>
  )
}

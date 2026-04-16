import { Suspense } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { BookingForm } from '@/components/booking/booking-form'
import { StickyOrderButton } from '@/components/sticky-order-button'
import { PageHeader } from '@/components/page-header'

export const metadata = {
  title: 'Reservation | Zia Cakes',
  description: 'Reserve one of the eight cakes we compose each day. Confirmed personally by the atelier.',
}

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-noir">
      <Header />
      <PageHeader
        eyebrow="Reservation"
        title="Reserve"
        accent="your cake"
        description="A brief form, then a personal reply over WhatsApp. We confirm availability ourselves — never an automated queue."
      />
      <Suspense
        fallback={
          <div className="py-32 text-center text-xs tracking-[0.3em] uppercase text-cream/40" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>
            Preparing the form
          </div>
        }
      >
        <BookingForm />
      </Suspense>
      <Footer />
      <StickyOrderButton />
    </main>
  )
}

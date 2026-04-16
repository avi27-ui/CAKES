import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { brandInfo } from '@/lib/data'

export function UrgencyBanner() {
  return (
    <section className="py-24 lg:py-28 bg-charcoal relative overflow-hidden">
      {/* Decorative borders */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] opacity-30 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, oklch(0.65 0.14 55 / 0.15) 0%, transparent 70%)',
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center lg:items-end gap-12 lg:gap-16">
            {/* Content */}
            <div className="flex-1 text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-4 justify-center lg:justify-start">
                <span
                  className="text-[10px] tracking-[0.4em] uppercase text-gold"
                  style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 300 }}
                >
                  Limited Availability
                </span>
                <div className="w-12 h-[1px] bg-gold/60" />
              </div>

              <h3
                className="text-3xl md:text-4xl lg:text-5xl font-light text-cream leading-[1.1]"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                Only{' '}
                <span className="font-semibold italic text-gradient-bronze">
                  {brandInfo.maxOrdersPerDay} creations
                </span>{' '}
                leave the atelier each day.
              </h3>

              <p
                className="text-cream/50 leading-relaxed max-w-md mx-auto lg:mx-0"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 300 }}
              >
                A deliberate limit — because every cake is given the time, attention,
                and craft it deserves. Reserve early for weekend and holiday dates.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col items-center lg:items-end gap-4 shrink-0">
              <Link
                href="/booking"
                className="btn-luxury group inline-flex items-center gap-4 px-10 py-5 text-[11px] tracking-[0.25em] uppercase text-charcoal"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 500 }}
              >
                <span>Reserve Your Date</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <p
                className="text-[10px] tracking-[0.3em] uppercase text-cream/30"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 300 }}
              >
                72h minimum notice
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

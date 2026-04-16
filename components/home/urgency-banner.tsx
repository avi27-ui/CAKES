import Link from 'next/link'
import { Clock, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { brandInfo } from '@/lib/data'

export function UrgencyBanner() {
  return (
    <section className="py-16 bg-charcoal relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/95 to-charcoal" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      
      {/* Subtle gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          {/* Content */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="p-4 border border-gold/30 rounded-full">
              <Clock className="h-8 w-8 text-gold" />
            </div>
            
            <div className="space-y-2">
              <h3 
                className="text-2xl md:text-3xl font-semibold text-ivory"
                style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
              >
                Limited Orders Daily
              </h3>
              <p 
                className="text-ivory/70 max-w-md"
                style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
              >
                We accept only {brandInfo.maxOrdersPerDay} orders per day to ensure every cake 
                receives our undivided attention and craftsmanship.
              </p>
            </div>
          </div>

          {/* CTA */}
          <Link
            href="/booking"
            className={cn(
              'group inline-flex items-center gap-3',
              'px-8 py-4 text-sm tracking-[0.15em] uppercase',
              'bg-gold text-charcoal hover:bg-ivory',
              'transition-all duration-500'
            )}
            style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
          >
            Reserve Your Slot
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}

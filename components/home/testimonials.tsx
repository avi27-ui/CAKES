'use client'

import { useState } from 'react'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { cn } from '@/lib/utils'
import { testimonials } from '@/lib/data'

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentIndex]

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-champagne/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p 
            className="text-sm tracking-[0.3em] uppercase text-gold mb-4"
            style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
          >
            Testimonials
          </p>
          <h2 
            className="text-4xl md:text-5xl font-light text-charcoal"
            style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
          >
            What Our <span className="font-semibold">Clients Say</span>
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-ivory p-8 md:p-12 shadow-lg">
            {/* Quote icon */}
            <Quote className="absolute top-6 left-6 h-12 w-12 text-gold/20" />

            <div className="relative space-y-8">
              {/* Rating */}
              <div className="flex items-center justify-center gap-1">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>

              {/* Content */}
              <blockquote 
                className="text-xl md:text-2xl text-charcoal text-center leading-relaxed"
                style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
              >
                &ldquo;{current.content}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="text-center">
                <p 
                  className="text-lg font-semibold text-charcoal"
                  style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
                >
                  {current.name}
                </p>
                <p 
                  className="text-sm text-gold tracking-wide"
                  style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                >
                  {current.occasion}
                </p>
              </div>
            </div>

            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-gold/30" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-gold/30" />
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className={cn(
                'p-3 border border-charcoal/20 hover:border-gold hover:text-gold',
                'transition-all duration-300'
              )}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    'w-2 h-2 rounded-full transition-all duration-300',
                    index === currentIndex
                      ? 'bg-gold w-6'
                      : 'bg-charcoal/20 hover:bg-charcoal/40'
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className={cn(
                'p-3 border border-charcoal/20 hover:border-gold hover:text-gold',
                'transition-all duration-300'
              )}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

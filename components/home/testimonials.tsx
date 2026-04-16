'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { testimonials } from '@/lib/data'

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  const current = testimonials[currentIndex]

  return (
    <section className="py-32 bg-noir relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-20 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, oklch(0.65 0.14 55 / 0.12) 0%, transparent 65%)',
        }}
      />

      {/* Decorative vertical lines */}
      <div className="absolute inset-y-0 left-1/4 w-[1px] bg-gradient-to-b from-transparent via-gold/10 to-transparent opacity-40" />
      <div className="absolute inset-y-0 right-1/4 w-[1px] bg-gradient-to-b from-transparent via-gold/10 to-transparent opacity-40" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-gold" />
            <span
              className="text-[10px] tracking-[0.4em] uppercase text-gold"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 300 }}
            >
              In Their Words
            </span>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gold" />
          </div>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-light text-cream leading-[1.1]"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Stories from{' '}
            <span className="font-semibold italic text-gradient-bronze">our table</span>
          </h2>
        </div>

        {/* Testimonial — editorial spread */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Giant quotation mark */}
            <span
              aria-hidden="true"
              className="absolute -top-8 left-0 text-[200px] md:text-[280px] leading-none text-gold/10 select-none pointer-events-none"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              &ldquo;
            </span>

            <div className="relative pt-16 md:pt-20 px-4 md:px-16">
              {/* Quote — large editorial */}
              <blockquote
                key={current.id}
                className="text-2xl md:text-3xl lg:text-4xl font-light text-cream leading-[1.4] text-pretty animate-fade-in"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                {current.content}
              </blockquote>

              {/* Attribution */}
              <div className="flex items-center gap-6 mt-14 animate-fade-in">
                <div className="w-16 h-[1px] bg-gold" />
                <div>
                  <p
                    className="text-lg text-cream"
                    style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                  >
                    {current.name}
                  </p>
                  <p
                    className="text-[10px] tracking-[0.3em] uppercase text-gold/70 mt-1"
                    style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 300 }}
                  >
                    {current.occasion}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation row */}
          <div className="flex items-center justify-between mt-20 pt-10 border-t border-gold/10">
            {/* Counter */}
            <div className="flex items-baseline gap-3">
              <span
                className="text-3xl font-light text-gradient-bronze"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                {String(currentIndex + 1).padStart(2, '0')}
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-cream/30">
                / {String(testimonials.length).padStart(2, '0')}
              </span>
            </div>

            {/* Dots (desktop) */}
            <div className="hidden md:flex items-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    'h-[1px] transition-all duration-500',
                    index === currentIndex ? 'w-12 bg-gold' : 'w-6 bg-cream/20 hover:bg-cream/40'
                  )}
                  aria-label={`Testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                className={cn(
                  'w-12 h-12 flex items-center justify-center',
                  'border border-gold/20 hover:border-gold hover:bg-gold/5',
                  'text-cream/60 hover:text-gold transition-all duration-500'
                )}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={next}
                className={cn(
                  'w-12 h-12 flex items-center justify-center',
                  'border border-gold/20 hover:border-gold hover:bg-gold/5',
                  'text-cream/60 hover:text-gold transition-all duration-500'
                )}
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

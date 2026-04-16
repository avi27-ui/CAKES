'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { cn } from '@/lib/utils'
import { cakes } from '@/lib/data'

export function FeaturedCakes() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 420
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  const featuredCakes = cakes.filter(
    (cake) => cake.tags.includes('bestseller') || cake.tags.includes('premium')
  ).slice(0, 6)

  return (
    <section className="py-32 bg-noir relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 left-1/3 w-[1px] h-full bg-gradient-to-b from-transparent via-gold to-transparent" />
        <div className="absolute top-0 right-1/3 w-[1px] h-full bg-gradient-to-b from-transparent via-gold to-transparent" />
      </div>
      
      {/* Radial glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20"
        style={{ background: 'radial-gradient(ellipse at center, oklch(0.65 0.14 55 / 0.1) 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <div className="space-y-6 max-w-xl">
            {/* Section label */}
            <div className="flex items-center gap-4">
              <div className="w-8 h-[1px] bg-gold" />
              <p 
                className="text-[10px] tracking-[0.4em] uppercase text-gold"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 300 }}
              >
                The Collection
              </p>
            </div>
            
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-light text-cream leading-tight"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Signature{' '}
              <span className="font-semibold italic text-gradient-bronze">Creations</span>
            </h2>
            
            <p 
              className="text-cream/50 leading-relaxed"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 300 }}
            >
              Each masterpiece is meticulously handcrafted with the finest ingredients, 
              embodying the pinnacle of confectionery artistry.
            </p>
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => scroll('left')}
              className={cn(
                'w-14 h-14 flex items-center justify-center',
                'border border-gold/20 hover:border-gold hover:bg-gold/5',
                'text-cream/60 hover:text-gold transition-all duration-500'
              )}
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className={cn(
                'w-14 h-14 flex items-center justify-center',
                'border border-gold/20 hover:border-gold hover:bg-gold/5',
                'text-cream/60 hover:text-gold transition-all duration-500'
              )}
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Cakes Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {featuredCakes.map((cake, index) => (
            <Link
              key={cake.id}
              href={`/cakes/${cake.id}`}
              className="group flex-shrink-0 w-[360px] snap-start"
            >
              <div className="card-glass h-full">
                {/* Image container */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={cake.images[0]}
                    alt={cake.name}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  
                  {/* Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/20 to-transparent opacity-60" />
                  <div className="absolute inset-0 bg-noir/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Premium number badge */}
                  <div className="absolute top-6 right-6">
                    <span 
                      className="text-5xl font-light text-gold/20"
                      style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                    >
                      0{index + 1}
                    </span>
                  </div>
                  
                  {/* Tags */}
                  <div className="absolute top-6 left-6 flex flex-col gap-2">
                    {cake.tags.map((tag) => (
                      <span
                        key={tag}
                        className={cn(
                          'px-4 py-1.5 text-[9px] tracking-[0.2em] uppercase backdrop-blur-sm',
                          tag === 'bestseller' && 'bg-gold/90 text-noir',
                          tag === 'premium' && 'bg-rose/90 text-noir',
                          tag === 'new' && 'bg-cream/90 text-noir'
                        )}
                        style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 500 }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Quick view overlay */}
                  <div className="absolute inset-x-6 bottom-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <span
                      className={cn(
                        'flex items-center justify-center gap-3 w-full py-4',
                        'bg-gold text-noir text-[10px] tracking-[0.2em] uppercase',
                        'transition-all duration-300 hover:bg-gold-light'
                      )}
                      style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 500 }}
                    >
                      View Details
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-4">
                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3 w-3 fill-gold text-gold"
                      />
                    ))}
                    <span 
                      className="text-[10px] text-cream/40 ml-2"
                      style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                    >
                      5.0
                    </span>
                  </div>
                  
                  <h3 
                    className="text-2xl font-light text-cream group-hover:text-gold transition-colors duration-500"
                    style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                  >
                    {cake.name}
                  </h3>
                  
                  <p 
                    className="text-sm text-cream/50 line-clamp-2 leading-relaxed"
                    style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 300 }}
                  >
                    {cake.shortDescription}
                  </p>
                  
                  <div className="pt-4 border-t border-gold/10 flex items-center justify-between">
                    <p 
                      className="text-[10px] tracking-[0.15em] uppercase text-cream/40"
                      style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                    >
                      Starting from
                    </p>
                    <p 
                      className="text-xl text-gold"
                      style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                    >
                      ₹{cake.weights[0].price.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-16">
          <Link
            href="/cakes"
            className={cn(
              'inline-flex items-center gap-4 text-[11px] tracking-[0.25em] uppercase',
              'text-cream/60 hover:text-gold transition-all duration-500 group'
            )}
            style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 400 }}
          >
            <span className="w-8 h-[1px] bg-gold/30 group-hover:w-12 group-hover:bg-gold transition-all duration-500" />
            View Complete Collection
            <span className="w-8 h-[1px] bg-gold/30 group-hover:w-12 group-hover:bg-gold transition-all duration-500" />
          </Link>
        </div>
      </div>
    </section>
  )
}

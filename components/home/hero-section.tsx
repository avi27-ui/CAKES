'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden vignette">
      {/* Deep noir background */}
      <div className="absolute inset-0 bg-noir" />
      
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-radial-gradient opacity-30" 
        style={{ background: 'radial-gradient(ellipse at center, oklch(0.65 0.14 55 / 0.08) 0%, transparent 60%)' }} 
      />
      
      {/* Decorative grid lines */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-gold to-transparent" />
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-gold to-transparent" />
        <div className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent" />
        <div className="absolute bottom-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-gold/10 rotate-45 animate-subtle-float" />
      <div className="absolute bottom-32 left-16 w-20 h-20 border border-gold/10 rotate-12 animate-subtle-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 lg:px-12 pt-32 pb-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <div 
            className={cn(
              'space-y-10 text-center lg:text-left transition-all duration-1000',
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            )}
          >
            {/* Accent badge */}
            <div className="inline-flex items-center gap-4">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-gold" />
              <span 
                className="text-[10px] tracking-[0.4em] uppercase text-gold"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 300 }}
              >
                Artisan Patisserie
              </span>
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gold" />
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 
                className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-cream tracking-tight leading-[0.9]"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                <span className="block">Edible</span>
                <span className="block font-semibold italic text-gradient-bronze">Masterpieces</span>
              </h1>
              
              <div className="w-24 h-[1px] bg-gradient-to-r from-gold via-gold/50 to-transparent mx-auto lg:mx-0 mt-8" />
            </div>

            {/* Subtext */}
            <p 
              className="text-base md:text-lg text-cream/60 max-w-md mx-auto lg:mx-0 leading-relaxed"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 300 }}
            >
              Where culinary artistry meets timeless elegance. Each creation is a symphony of premium ingredients, 
              handcrafted for life&apos;s most cherished celebrations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-4">
              <Link
                href="/cakes"
                className="btn-luxury group inline-flex items-center justify-center gap-4 px-10 py-5 text-[11px] tracking-[0.25em] uppercase text-charcoal"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 500 }}
              >
                <span>Explore Collection</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/booking"
                className={cn(
                  'inline-flex items-center justify-center',
                  'px-10 py-5 text-[11px] tracking-[0.25em] uppercase',
                  'border border-gold/30 text-cream hover:border-gold hover:text-gold',
                  'transition-all duration-500 bg-transparent'
                )}
                style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 400 }}
              >
                Private Consultation
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-12 pt-12 border-t border-gold/10">
              {[
                { number: '500+', label: 'Creations' },
                { number: '100%', label: 'Handcrafted' },
                { number: '5.0', label: 'Excellence' },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p 
                    className="text-3xl md:text-4xl font-light text-gradient-bronze"
                    style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                  >
                    {stat.number}
                  </p>
                  <p 
                    className="text-[10px] tracking-[0.2em] uppercase text-cream/40 mt-1"
                    style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 300 }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div 
            className={cn(
              'relative transition-all duration-1000 delay-500',
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            )}
          >
            {/* Main image container with premium frame */}
            <div className="relative aspect-[3/4] max-w-lg mx-auto">
              {/* Outer decorative frame */}
              <div className="absolute -inset-6 border border-gold/10" />
              <div className="absolute -inset-12 border border-gold/5" />
              
              {/* Corner accents */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-gold/40" />
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t border-r border-gold/40" />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b border-l border-gold/40" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-gold/40" />
              
              {/* Aura glow behind image */}
              <div 
                className="absolute inset-0 animate-aura-pulse"
                style={{ 
                  background: 'radial-gradient(ellipse at center, oklch(0.65 0.14 55 / 0.15) 0%, transparent 70%)',
                  filter: 'blur(40px)',
                  transform: 'scale(1.2)'
                }} 
              />
              
              {/* Image */}
              <div className="relative w-full h-full overflow-hidden bg-secondary">
                <Image
                  src="/images/hero-cake.jpg"
                  alt="Premium artisan cake"
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Premium overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-noir/60 via-noir/10 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-noir/30 via-transparent to-noir/30" />
              </div>

              {/* Floating badge */}
              <div 
                className={cn(
                  'absolute -bottom-8 -left-8 px-8 py-6 bg-noir/90 backdrop-blur-sm',
                  'border border-gold/20 corner-accent'
                )}
              >
                <p 
                  className="text-[9px] tracking-[0.4em] uppercase text-gold"
                  style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 300 }}
                >
                  Est. 2018
                </p>
                <p 
                  className="text-xl font-light text-cream mt-1"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  Virudhachalam
                </p>
              </div>
              
              {/* Right side accent */}
              <div className="absolute -right-16 top-1/2 -translate-y-1/2 hidden xl:block">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
                  <span 
                    className="text-[9px] tracking-[0.3em] uppercase text-gold/60 rotate-90 whitespace-nowrap"
                    style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 300 }}
                  >
                    Luxury Cakes
                  </span>
                  <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span 
          className="text-[9px] tracking-[0.4em] uppercase text-cream/40"
          style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 300 }}
        >
          Discover
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold/50 to-transparent animate-pulse" />
      </div>
    </section>
  )
}

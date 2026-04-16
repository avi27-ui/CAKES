'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Star, Check, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Cake, brandInfo } from '@/lib/data'

interface CakeDetailProps {
  cake: Cake
}

export function CakeDetail({ cake }: CakeDetailProps) {
  const [selectedFlavour, setSelectedFlavour] = useState(cake.flavours[0])
  const [selectedWeight, setSelectedWeight] = useState(cake.weights[0])
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const generateWhatsAppMessage = () => {
    const message = `Hello! I would like to order:

*${cake.name}*
- Flavour: ${selectedFlavour}
- Weight: ${selectedWeight.kg}kg
- Price: ₹${selectedWeight.price}

Please let me know the available dates.`

    return `https://wa.me/${brandInfo.whatsapp}?text=${encodeURIComponent(message)}`
  }

  return (
    <section className="pt-32 pb-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Back button */}
        <Link
          href="/cakes"
          className={cn(
            'inline-flex items-center gap-2 text-sm text-charcoal/60 hover:text-gold',
            'transition-colors mb-8'
          )}
          style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Collection
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-champagne/30 overflow-hidden">
              <Image
                src={cake.images[selectedImageIndex]}
                alt={cake.name}
                fill
                className="object-cover"
                priority
              />
              
              {/* Tags */}
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                {cake.tags.map((tag) => (
                  <span
                    key={tag}
                    className={cn(
                      'px-4 py-1.5 text-xs tracking-[0.2em] uppercase',
                      tag === 'bestseller' && 'bg-gold text-charcoal',
                      tag === 'premium' && 'bg-burgundy text-ivory',
                      tag === 'new' && 'bg-charcoal text-ivory'
                    )}
                    style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Thumbnails */}
            {cake.images.length > 1 && (
              <div className="flex gap-4">
                {cake.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={cn(
                      'relative w-20 h-20 overflow-hidden transition-all',
                      selectedImageIndex === index
                        ? 'ring-2 ring-gold'
                        : 'opacity-60 hover:opacity-100'
                    )}
                  >
                    <Image
                      src={image}
                      alt={`${cake.name} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="space-y-8">
            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <span 
                className="text-sm text-charcoal/60"
                style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
              >
                (4.9 rating)
              </span>
            </div>

            {/* Title & Description */}
            <div className="space-y-4">
              <h1 
                className="text-4xl md:text-5xl font-semibold text-charcoal"
                style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
              >
                {cake.name}
              </h1>
              <p 
                className="text-charcoal/70 leading-relaxed"
                style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
              >
                {cake.description}
              </p>
            </div>

            {/* Price */}
            <div className="pt-4 border-t border-border">
              <p 
                className="text-sm text-charcoal/60 mb-2"
                style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
              >
                Price
              </p>
              <p 
                className="text-4xl font-semibold text-charcoal"
                style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
              >
                ₹{selectedWeight.price}
                <span className="text-lg text-charcoal/60 ml-2">
                  / {selectedWeight.kg}kg
                </span>
              </p>
            </div>

            {/* Flavour Selection */}
            <div className="pt-4 border-t border-border">
              <p 
                className="text-sm tracking-[0.2em] uppercase text-gold mb-4"
                style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
              >
                Select Flavour
              </p>
              <div className="flex flex-wrap gap-3">
                {cake.flavours.map((flavour) => (
                  <button
                    key={flavour}
                    onClick={() => setSelectedFlavour(flavour)}
                    className={cn(
                      'flex items-center gap-2 px-5 py-3 text-sm transition-all',
                      selectedFlavour === flavour
                        ? 'bg-charcoal text-ivory'
                        : 'bg-champagne/50 text-charcoal hover:bg-champagne'
                    )}
                    style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                  >
                    {selectedFlavour === flavour && <Check className="h-4 w-4" />}
                    {flavour}
                  </button>
                ))}
              </div>
            </div>

            {/* Weight Selection */}
            <div className="pt-4 border-t border-border">
              <p 
                className="text-sm tracking-[0.2em] uppercase text-gold mb-4"
                style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
              >
                Select Weight
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {cake.weights.map((weight) => (
                  <button
                    key={weight.kg}
                    onClick={() => setSelectedWeight(weight)}
                    className={cn(
                      'py-4 text-center transition-all',
                      selectedWeight.kg === weight.kg
                        ? 'bg-charcoal text-ivory'
                        : 'bg-champagne/50 text-charcoal hover:bg-champagne'
                    )}
                  >
                    <span 
                      className="block text-lg font-semibold"
                      style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
                    >
                      {weight.kg}kg
                    </span>
                    <span 
                      className="text-xs text-current/70"
                      style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                    >
                      ₹{weight.price}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href={generateWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'flex-1 flex items-center justify-center gap-3',
                  'px-8 py-4 text-sm tracking-[0.15em] uppercase',
                  'bg-charcoal text-ivory hover:bg-gold hover:text-charcoal',
                  'transition-all duration-300'
                )}
                style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
              >
                <MessageCircle className="h-5 w-5" />
                Order on WhatsApp
              </a>
              <Link
                href={`/booking?cake=${cake.id}&flavour=${selectedFlavour}&weight=${selectedWeight.kg}`}
                className={cn(
                  'flex-1 flex items-center justify-center',
                  'px-8 py-4 text-sm tracking-[0.15em] uppercase',
                  'border border-charcoal/30 text-charcoal',
                  'hover:border-gold hover:text-gold',
                  'transition-all duration-300'
                )}
                style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
              >
                Book This Cake
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              {[
                { label: 'Fresh Ingredients', value: '100%' },
                { label: 'Made to Order', value: 'Always' },
                { label: 'Satisfaction', value: 'Guaranteed' },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <p 
                    className="text-lg font-semibold text-gold"
                    style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
                  >
                    {item.value}
                  </p>
                  <p 
                    className="text-xs text-charcoal/60"
                    style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

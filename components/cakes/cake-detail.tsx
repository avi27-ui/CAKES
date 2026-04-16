'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Check, MessageCircle, ShieldCheck, Sparkles, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Cake, brandInfo } from '@/lib/data'

interface CakeDetailProps {
  cake: Cake
}

const sansFont = { fontFamily: 'var(--font-montserrat), sans-serif' }
const serifFont = { fontFamily: 'var(--font-playfair), Georgia, serif' }

export function CakeDetail({ cake }: CakeDetailProps) {
  const [selectedFlavour, setSelectedFlavour] = useState(cake.flavours[0])
  const [selectedWeight, setSelectedWeight] = useState(cake.weights[0])
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const generateWhatsAppMessage = () => {
    const message = `Hello Zia Cakes,

I would like to reserve:

*${cake.name}*
Flavour: ${selectedFlavour}
Weight: ${selectedWeight.kg}kg
Investment: \u20B9${selectedWeight.price.toLocaleString('en-IN')}

Please share the available dates and next steps.`
    return `https://wa.me/${brandInfo.whatsapp}?text=${encodeURIComponent(message)}`
  }

  const trustMarkers = [
    { icon: Sparkles, label: 'Single-origin ingredients' },
    { icon: Clock, label: 'Baked to order' },
    { icon: ShieldCheck, label: 'Finished by hand' },
  ]

  return (
    <section className="pt-32 pb-24 bg-noir">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Back */}
        <Link
          href="/cakes"
          className="inline-flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-cream/50 hover:text-gold transition-colors mb-12"
          style={sansFont}
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Collection
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-28">
          {/* Images */}
          <div className="space-y-6">
            <div className="relative aspect-[4/5] bg-card overflow-hidden corner-accent">
              <Image
                src={cake.images[selectedImageIndex]}
                alt={cake.name}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir/40 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-6 left-6 flex flex-col gap-2">
                {cake.tags.map((tag) => (
                  <span
                    key={tag}
                    className={cn(
                      'px-3 py-1 text-[10px] tracking-[0.3em] uppercase backdrop-blur-sm',
                      tag === 'bestseller' && 'bg-gold/95 text-noir',
                      tag === 'premium' && 'bg-noir/80 text-gold border border-gold/40',
                      tag === 'new' && 'bg-cream/95 text-noir',
                    )}
                    style={sansFont}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {cake.images.length > 1 && (
              <div className="flex gap-4">
                {cake.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={cn(
                      'relative w-20 h-20 overflow-hidden transition-all',
                      selectedImageIndex === index ? 'ring-1 ring-gold' : 'opacity-50 hover:opacity-100',
                    )}
                  >
                    <Image src={image} alt={`${cake.name} ${index + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="lg:pt-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[1px] bg-gold" />
              <p className="text-[10px] tracking-[0.35em] uppercase text-gold" style={sansFont}>
                {cake.category === 'kids' ? 'Kids Special' : cake.category}
              </p>
            </div>

            <h1
              className="text-4xl md:text-5xl xl:text-6xl font-light text-cream leading-[1.05] text-balance"
              style={serifFont}
            >
              {cake.name}
            </h1>

            <div className="w-16 h-[1px] bg-gradient-to-r from-gold via-gold/40 to-transparent my-8" />

            <p className="text-base text-cream/60 leading-[1.8] text-pretty max-w-xl" style={sansFont}>
              {cake.description}
            </p>

            {/* Price */}
            <div className="mt-10 pt-8 border-t border-cream/10">
              <p className="text-[10px] tracking-[0.3em] uppercase text-cream/40 mb-2" style={sansFont}>
                Investment
              </p>
              <div className="flex items-baseline gap-3">
                <p className="text-5xl font-light text-cream" style={serifFont}>
                  &#8377;{selectedWeight.price.toLocaleString('en-IN')}
                </p>
                <p className="text-sm text-cream/50" style={sansFont}>
                  / {selectedWeight.kg}kg
                </p>
              </div>
            </div>

            {/* Flavour */}
            <div className="mt-10 pt-8 border-t border-cream/10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-[1px] bg-gold" />
                <p className="text-[10px] tracking-[0.3em] uppercase text-gold" style={sansFont}>
                  Select Flavour
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {cake.flavours.map((flavour) => (
                  <button
                    key={flavour}
                    onClick={() => setSelectedFlavour(flavour)}
                    className={cn(
                      'flex items-center gap-2 px-5 py-3 text-xs tracking-[0.15em] uppercase transition-all border',
                      selectedFlavour === flavour
                        ? 'bg-gold text-noir border-gold'
                        : 'bg-transparent text-cream/70 border-cream/15 hover:border-gold/50 hover:text-cream',
                    )}
                    style={sansFont}
                  >
                    {selectedFlavour === flavour && <Check className="h-3 w-3" />}
                    {flavour}
                  </button>
                ))}
              </div>
            </div>

            {/* Weight */}
            <div className="mt-10 pt-8 border-t border-cream/10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-[1px] bg-gold" />
                <p className="text-[10px] tracking-[0.3em] uppercase text-gold" style={sansFont}>
                  Select Size
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {cake.weights.map((weight) => (
                  <button
                    key={weight.kg}
                    onClick={() => setSelectedWeight(weight)}
                    className={cn(
                      'py-5 text-center transition-all border',
                      selectedWeight.kg === weight.kg
                        ? 'bg-gold text-noir border-gold'
                        : 'bg-transparent text-cream/70 border-cream/15 hover:border-gold/50 hover:text-cream',
                    )}
                  >
                    <span className="block text-xl font-light" style={serifFont}>
                      {weight.kg}kg
                    </span>
                    <span className="text-[10px] tracking-[0.2em] opacity-70" style={sansFont}>
                      &#8377;{weight.price.toLocaleString('en-IN')}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mt-12">
              <a
                href={generateWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-3 px-8 py-5 text-[11px] tracking-[0.3em] uppercase bg-gold text-noir hover:bg-gold-light transition-colors"
                style={sansFont}
              >
                <MessageCircle className="h-4 w-4" />
                Enquire on WhatsApp
              </a>
              <Link
                href={`/booking?cake=${cake.id}&flavour=${selectedFlavour}&weight=${selectedWeight.kg}`}
                className="flex-1 flex items-center justify-center px-8 py-5 text-[11px] tracking-[0.3em] uppercase border border-cream/20 text-cream hover:border-gold hover:text-gold transition-colors"
                style={sansFont}
              >
                Reserve This Cake
              </Link>
            </div>

            {/* Trust markers */}
            <div className="mt-12 pt-8 border-t border-cream/10 grid grid-cols-3 gap-4">
              {trustMarkers.map((m) => (
                <div key={m.label} className="text-center">
                  <m.icon className="h-4 w-4 text-gold mx-auto mb-3" />
                  <p className="text-[10px] tracking-[0.2em] uppercase text-cream/50 leading-relaxed" style={sansFont}>
                    {m.label}
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

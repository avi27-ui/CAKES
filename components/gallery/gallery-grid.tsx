'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, Plus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { galleryImages } from '@/lib/data'

const categories = ['All', 'Wedding', 'Birthday', 'Premium', 'Kids', 'Anniversary', 'Custom']
const sansFont = { fontFamily: 'var(--font-montserrat), sans-serif' }
const serifFont = { fontFamily: 'var(--font-playfair), Georgia, serif' }

export function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [lightboxImage, setLightboxImage] = useState<number | null>(null)

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory)

  const openLightbox = (index: number) => setLightboxImage(index)
  const closeLightbox = () => setLightboxImage(null)

  const nextImage = () => {
    if (lightboxImage !== null) setLightboxImage((lightboxImage + 1) % filteredImages.length)
  }
  const prevImage = () => {
    if (lightboxImage !== null) setLightboxImage((lightboxImage - 1 + filteredImages.length) % filteredImages.length)
  }

  return (
    <section className="py-20 lg:py-28 bg-noir">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                'px-5 py-2 text-[10px] tracking-[0.3em] uppercase transition-all border',
                selectedCategory === category
                  ? 'bg-gold text-noir border-gold'
                  : 'bg-transparent text-cream/60 border-cream/15 hover:border-gold/50 hover:text-cream',
              )}
              style={sansFont}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => openLightbox(index)}
              className="group relative w-full overflow-hidden break-inside-avoid mb-6"
            >
              <div className="relative aspect-[4/5] bg-card overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir/90 via-noir/20 to-noir/30 opacity-70 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span
                    className="px-3 py-1 bg-noir/60 backdrop-blur-sm text-gold text-[10px] tracking-[0.3em] uppercase border border-gold/30"
                    style={sansFont}
                  >
                    {image.category}
                  </span>
                  <span className="w-12 h-12 border border-cream/30 rounded-full flex items-center justify-center text-cream">
                    <Plus className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-32 border border-cream/10">
            <p className="text-3xl text-cream/70 italic" style={serifFont}>
              No archive entries in this category.
            </p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxImage !== null && (
        <div
          className="fixed inset-0 z-[60] bg-noir/97 backdrop-blur-md flex items-center justify-center animate-fade-in"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 text-cream/70 hover:text-gold transition-colors"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prevImage() }}
            className="absolute left-4 md:left-8 p-3 text-cream/70 hover:text-gold transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); nextImage() }}
            className="absolute right-4 md:right-8 p-3 text-cream/70 hover:text-gold transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div
            className="relative max-w-5xl max-h-[80vh] w-full h-full mx-12"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filteredImages[lightboxImage].src}
              alt={filteredImages[lightboxImage].alt}
              fill
              className="object-contain"
            />
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
            <div className="w-12 h-[1px] bg-gold/40" />
            <p className="text-[10px] tracking-[0.3em] uppercase text-cream/60" style={sansFont}>
              {String(lightboxImage + 1).padStart(2, '0')}
              <span className="mx-2 text-cream/30">/</span>
              {String(filteredImages.length).padStart(2, '0')}
            </p>
            <div className="w-12 h-[1px] bg-gold/40" />
          </div>
        </div>
      )}
    </section>
  )
}

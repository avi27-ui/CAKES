'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { galleryImages } from '@/lib/data'

const categories = ['All', 'Wedding', 'Birthday', 'Premium', 'Kids', 'Anniversary', 'Custom']

export function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [lightboxImage, setLightboxImage] = useState<number | null>(null)

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory)

  const openLightbox = (index: number) => setLightboxImage(index)
  const closeLightbox = () => setLightboxImage(null)

  const nextImage = () => {
    if (lightboxImage !== null) {
      setLightboxImage((lightboxImage + 1) % filteredImages.length)
    }
  }

  const prevImage = () => {
    if (lightboxImage !== null) {
      setLightboxImage((lightboxImage - 1 + filteredImages.length) % filteredImages.length)
    }
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                'px-5 py-2 text-xs tracking-[0.15em] uppercase transition-all',
                selectedCategory === category
                  ? 'bg-charcoal text-ivory'
                  : 'bg-champagne/50 text-charcoal hover:bg-champagne'
              )}
              style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid - Masonry style */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => openLightbox(index)}
              className="group relative w-full overflow-hidden break-inside-avoid card-luxury"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors duration-500" />
                
                {/* Category badge */}
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span 
                    className="px-3 py-1 bg-ivory text-charcoal text-[10px] tracking-[0.2em] uppercase"
                    style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                  >
                    {image.category}
                  </span>
                </div>

                {/* View icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-12 h-12 rounded-full border border-ivory flex items-center justify-center">
                    <span className="text-ivory text-2xl">+</span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <p 
              className="text-xl text-charcoal/60"
              style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
            >
              No images found in this category
            </p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 text-ivory hover:text-gold transition-colors"
          >
            <X className="h-8 w-8" />
          </button>

          {/* Navigation */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage() }}
            className="absolute left-6 p-2 text-ivory hover:text-gold transition-colors"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); nextImage() }}
            className="absolute right-6 p-2 text-ivory hover:text-gold transition-colors"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          {/* Image */}
          <div 
            className="relative max-w-4xl max-h-[80vh] w-full h-full mx-6"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filteredImages[lightboxImage].src}
              alt={filteredImages[lightboxImage].alt}
              fill
              className="object-contain"
            />
          </div>

          {/* Image counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
            <p 
              className="text-ivory/70 text-sm"
              style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
            >
              {lightboxImage + 1} / {filteredImages.length}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}

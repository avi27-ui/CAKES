'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Plus, Trash2, Upload } from 'lucide-react'
import { cn } from '@/lib/utils'
import { galleryImages as initialImages } from '@/lib/data'

export default function AdminGalleryPage() {
  const [images, setImages] = useState(initialImages)

  const deleteImage = (id: string) => {
    setImages(images.filter((img) => img.id !== id))
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 
            className="text-3xl font-semibold text-charcoal"
            style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
          >
            Gallery
          </h1>
          <p 
            className="text-charcoal/60 mt-1"
            style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
          >
            Manage your cake gallery images.
          </p>
        </div>

        <button
          className={cn(
            'inline-flex items-center gap-2 px-5 py-3',
            'bg-charcoal text-ivory hover:bg-gold hover:text-charcoal',
            'transition-colors text-sm tracking-wider uppercase'
          )}
          style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
        >
          <Plus className="h-4 w-4" />
          Add Image
        </button>
      </div>

      {/* Upload Area */}
      <div 
        className={cn(
          'border-2 border-dashed border-border hover:border-gold',
          'p-12 text-center transition-colors cursor-pointer',
          'bg-muted/30'
        )}
      >
        <Upload className="h-10 w-10 text-charcoal/40 mx-auto mb-4" />
        <p 
          className="text-charcoal/60 mb-2"
          style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
        >
          Drag and drop images here, or click to browse
        </p>
        <p 
          className="text-xs text-charcoal/40"
          style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
        >
          PNG, JPG up to 5MB
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {images.map((image) => (
          <div 
            key={image.id}
            className="relative group aspect-square bg-muted overflow-hidden"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/50 transition-colors flex items-center justify-center">
              <button
                onClick={() => deleteImage(image.id)}
                className="p-3 bg-ivory text-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-100"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>

            {/* Category badge */}
            <div className="absolute bottom-2 left-2">
              <span 
                className="px-2 py-1 bg-ivory/90 text-charcoal text-[10px] tracking-wider uppercase"
                style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
              >
                {image.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {images.length === 0 && (
        <div className="text-center py-12">
          <p 
            className="text-charcoal/60"
            style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
          >
            No images in gallery
          </p>
        </div>
      )}
    </div>
  )
}

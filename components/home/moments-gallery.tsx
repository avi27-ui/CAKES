import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { galleryImages } from '@/lib/data'

export function MomentsGallery() {
  const tiles = galleryImages.slice(0, 6)

  return (
    <section className="py-32 bg-charcoal relative overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div className="space-y-6 max-w-xl">
            <div className="inline-flex items-center gap-4">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-gold" />
              <span
                className="text-[10px] tracking-[0.4em] uppercase text-gold"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 300 }}
              >
                Captured Moments
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-light text-cream leading-[1.1]"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              A portfolio of{' '}
              <span className="font-semibold italic text-gradient-bronze">
                quiet perfection
              </span>
            </h2>
          </div>

          <Link
            href="/gallery"
            className="group inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase text-cream/70 hover:text-gold transition-colors duration-500 self-start md:self-end"
            style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 400 }}
          >
            <span>View Full Portfolio</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Editorial asymmetric grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {/* Tile 1 — tall feature */}
          <div className="relative col-span-2 lg:col-span-2 lg:row-span-2 aspect-[4/5] lg:aspect-auto overflow-hidden group">
            <Image
              src={tiles[0].src}
              alt={tiles[0].alt}
              fill
              className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-noir/80 via-noir/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
              <p
                className="text-[10px] tracking-[0.4em] uppercase text-gold mb-2"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 300 }}
              >
                {tiles[0].category}
              </p>
              <p
                className="text-2xl md:text-3xl font-light text-cream"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                {tiles[0].alt}
              </p>
            </div>
          </div>

          {/* Tiles 2–5 */}
          {tiles.slice(1, 5).map((t) => (
            <div
              key={t.id}
              className="relative aspect-square overflow-hidden group"
            >
              <Image
                src={t.src}
                alt={t.alt}
                fill
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                sizes="(min-width: 1024px) 25vw, 50vw"
              />
              <div className="absolute inset-0 bg-noir/10 group-hover:bg-noir/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p
                  className="text-[10px] tracking-[0.3em] uppercase text-gold"
                  style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 400 }}
                >
                  {t.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

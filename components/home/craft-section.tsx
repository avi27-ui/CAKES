import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const principles = [
  {
    title: 'Single-origin cocoa',
    detail:
      'Belgian and Ecuadorian, tempered in small batches for a glass-smooth finish and the deepest possible flavour.',
  },
  {
    title: 'Madagascan vanilla',
    detail:
      'Whole pods split and scraped the morning of the bake — never extract, never shortcut.',
  },
  {
    title: 'Cultured butter',
    detail:
      'Slow-churned and folded into sponges at precise temperatures for a crumb that stays tender for days.',
  },
  {
    title: 'Hand-finished',
    detail:
      'Every rosette, pearl, and gold-leaf flake is placed by hand. No templates. No two cakes alike.',
  },
]

export function CraftSection() {
  return (
    <section className="py-32 bg-noir relative overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          {/* Image column */}
          <div className="lg:col-span-6 lg:sticky lg:top-32">
            <div className="relative aspect-[4/5]">
              {/* Frame accents */}
              <div className="absolute -inset-6 border border-gold/10" />
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t border-l border-gold/50" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b border-r border-gold/50" />

              {/* Ambient glow */}
              <div
                className="absolute inset-0 -z-10"
                style={{
                  background:
                    'radial-gradient(ellipse at center, oklch(0.65 0.14 55 / 0.15) 0%, transparent 70%)',
                  filter: 'blur(50px)',
                  transform: 'scale(1.2)',
                }}
              />

              {/* Image */}
              <div className="relative w-full h-full overflow-hidden bg-secondary">
                <Image
                  src="/images/atelier.jpg"
                  alt="A pastry chef hand-piping buttercream in the atelier"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir/70 via-transparent to-noir/20" />
              </div>

              {/* Caption plate */}
              <div className="absolute -bottom-6 left-8 right-8 bg-charcoal/95 backdrop-blur border-t border-gold/20 px-6 py-5 corner-accent">
                <p
                  className="text-[9px] tracking-[0.4em] uppercase text-gold"
                  style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 300 }}
                >
                  Inside the Atelier
                </p>
                <p
                  className="text-base text-cream/80 mt-2 italic"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  &ldquo;Slow hands. Honest ingredients. Nothing else.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Text column */}
          <div className="lg:col-span-6 space-y-12 lg:pt-8">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-4">
                <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-gold" />
                <span
                  className="text-[10px] tracking-[0.4em] uppercase text-gold"
                  style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 300 }}
                >
                  Our Philosophy
                </span>
              </div>

              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-light text-cream leading-[1.05] text-balance"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                A cake should feel{' '}
                <span className="font-semibold italic text-gradient-bronze">
                  like a love letter
                </span>{' '}
                — to the moment, and to the person eating it.
              </h2>

              <div className="w-16 h-[1px] bg-gradient-to-r from-gold to-transparent" />

              <p
                className="text-base md:text-lg text-cream/60 leading-relaxed text-pretty"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 300 }}
              >
                Zia Patisserie began in a small kitchen in Virudhachalam in 2018,
                with one conviction: that a celebration cake can be as considered as
                couture. Seven years on, nothing has changed. Every sponge is baked
                the morning of delivery. Every cream is tempered by hand. Every order
                is given our full, undivided attention — because there are only ever
                eight of them a day.
              </p>
            </div>

            {/* Principles list */}
            <div className="divide-y divide-gold/10 border-t border-b border-gold/10">
              {principles.map((p, i) => (
                <div
                  key={p.title}
                  className="group grid grid-cols-[auto_1fr] gap-6 lg:gap-10 py-7 transition-colors duration-500"
                >
                  <span
                    className="text-2xl font-light text-gold/40 group-hover:text-gold transition-colors duration-500 tabular-nums pt-1"
                    style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3
                      className="text-lg md:text-xl text-cream mb-2 group-hover:text-gold transition-colors duration-500"
                      style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                    >
                      {p.title}
                    </h3>
                    <p
                      className="text-sm text-cream/50 leading-relaxed"
                      style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 300 }}
                    >
                      {p.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Signature */}
            <div className="flex items-center justify-between pt-2">
              <div>
                <p
                  className="text-2xl italic text-cream/80"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  Zia
                </p>
                <p
                  className="text-[10px] tracking-[0.3em] uppercase text-gold/60 mt-1"
                  style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 300 }}
                >
                  Founder &amp; Head Pastry Chef
                </p>
              </div>

              <Link
                href="/about"
                className="group inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase text-cream/70 hover:text-gold transition-colors duration-500"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 400 }}
              >
                <span>Our Story</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

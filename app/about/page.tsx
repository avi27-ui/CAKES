import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { StickyOrderButton } from '@/components/sticky-order-button'
import { PageHeader } from '@/components/page-header'
import { cn } from '@/lib/utils'

export const metadata = {
  title: 'The Atelier | Zia Cakes',
  description: 'The story behind Zia Cakes — an intimate artisan patisserie in Virudhachalam founded on the belief that a cake can be quiet, considered, and unforgettable.',
}

const principles = [
  {
    no: 'I',
    title: 'Composition',
    body: 'Each cake begins as a brief. Flavour, texture, silhouette, the light it will stand in — nothing is left to default. We compose, then we bake.',
  },
  {
    no: 'II',
    title: 'Provenance',
    body: 'Single-origin chocolate. Madagascan vanilla. Cultured butter. Fruit at its peak. The ingredient list is short on purpose.',
  },
  {
    no: 'III',
    title: 'Patience',
    body: 'We accept a maximum of eight orders per day. No cake leaves the atelier until the hand that made it says it is finished.',
  },
  {
    no: 'IV',
    title: 'Restraint',
    body: 'A celebration does not need noise. We choose quiet luxury — a single line of gold, one flower, the silhouette doing the work.',
  },
]

const milestones = [
  { year: '2018', title: 'A home kitchen', body: 'Zia began as a single oven and a notebook of recipes kept at night.' },
  { year: '2020', title: 'First hundred', body: 'One hundred celebrations later, word had traveled quietly across town.' },
  { year: '2022', title: 'The atelier', body: 'We moved into a dedicated space and began refusing the orders we could not do justice to.' },
  { year: '2024', title: 'A signature voice', body: 'The signature collection was defined — cakes we can stand behind entirely.' },
  { year: '2026', title: 'By invitation', body: 'Today, we remain small on purpose. Each cake is still finished by the founder\u2019s hand.' },
]

const sansFont = { fontFamily: 'var(--font-montserrat), sans-serif' }
const serifFont = { fontFamily: 'var(--font-playfair), Georgia, serif' }

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-noir">
      <Header />
      <PageHeader
        eyebrow="The Atelier"
        title="An intimate"
        accent="patisserie"
        description="Not a bakery. A workshop of eight cakes a day, composed and finished by a single pair of hands."
      />

      {/* Founder spread */}
      <section className="py-24 lg:py-32 bg-noir">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Portrait */}
            <div className="lg:col-span-5 lg:col-start-1 relative">
              <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
                <div className="absolute -inset-6 border border-gold/20" aria-hidden="true" />
                <div className="relative w-full h-full bg-card overflow-hidden corner-accent">
                  <Image
                    src="/images/about-baker.jpg"
                    alt="Zia, founder and pastry chef, in the atelier"
                    fill
                    sizes="(min-width: 1024px) 40vw, 80vw"
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Signature plaque */}
                <div className="absolute -bottom-8 -right-4 lg:-right-8 px-8 py-6 bg-noir border border-gold/30 max-w-[260px]">
                  <p className="text-[10px] tracking-[0.35em] uppercase text-gold mb-2" style={sansFont}>
                    Est. 2018
                  </p>
                  <p className="text-3xl text-cream italic leading-tight" style={serifFont}>
                    Eight cakes, a day.
                  </p>
                </div>
              </div>
            </div>

            {/* Letter */}
            <div className="lg:col-span-6 lg:col-start-7 max-w-xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[1px] bg-gold" />
                <span className="text-[10px] tracking-[0.4em] uppercase text-gold" style={sansFont}>
                  From the Founder
                </span>
              </div>

              <p className="text-4xl md:text-5xl font-light text-cream leading-[1.1] text-balance mb-8" style={serifFont}>
                I do not believe a cake <span className="italic text-gradient-bronze">should shout.</span>
              </p>

              <div className="space-y-6 text-base text-cream/65 leading-[1.9] text-pretty" style={sansFont}>
                <p>
                  I started baking at home in 2018 because I could not find the cakes I wanted to eat — the kind where the sponge is the thing, the buttercream is a whisper rather than a declaration, and the surface is almost bare.
                </p>
                <p>
                  Eight years later Zia is still small on purpose. We take a maximum of eight orders a day. Every cake is composed on paper before it is baked, and every cake is finished by my own hand. It is slow. It is unscalable. It is exactly what I want it to be.
                </p>
                <p>
                  If you are considering us for a moment that matters, thank you — I hope we earn it.
                </p>
              </div>

              {/* Signature */}
              <div className="mt-10 pt-8 border-t border-cream/10">
                <p className="text-4xl text-gradient-bronze italic" style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontWeight: 400 }}>
                  Zia
                </p>
                <p className="text-[10px] tracking-[0.35em] uppercase text-cream/50 mt-2" style={sansFont}>
                  Founder &amp; Pastry Chef
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Principles */}
      <section className="py-24 lg:py-32 border-t border-cream/10 bg-card/20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-gold" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-gold" style={sansFont}>
                Four Principles
              </span>
              <div className="w-12 h-[1px] bg-gold" />
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-cream text-balance" style={serifFont}>
              What we will not{' '}
              <span className="italic font-semibold text-gradient-bronze">compromise.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-cream/10 border border-cream/10">
            {principles.map((p) => (
              <article
                key={p.no}
                className="bg-noir p-10 lg:p-14 relative group transition-colors hover:bg-card/40"
              >
                <div className="flex items-baseline justify-between mb-8">
                  <span className="text-6xl font-light text-gold/30 group-hover:text-gold/60 transition-colors" style={serifFont}>
                    {p.no}
                  </span>
                  <div className="w-16 h-[1px] bg-gold/40" />
                </div>
                <h3 className="text-3xl font-light text-cream mb-5" style={serifFont}>
                  {p.title}
                </h3>
                <p className="text-sm text-cream/55 leading-[1.9] max-w-sm" style={sansFont}>
                  {p.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32 bg-noir">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-gold" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-gold" style={sansFont}>
                Our Chronicle
              </span>
              <div className="w-12 h-[1px] bg-gold" />
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-cream text-balance" style={serifFont}>
              Eight years,{' '}
              <span className="italic font-semibold text-gradient-bronze">five chapters.</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-6 lg:gap-10 pb-12 last:pb-0">
                <div className="flex-shrink-0 w-20 lg:w-24 pt-1">
                  <p className="text-2xl lg:text-3xl font-light text-gold" style={serifFont}>
                    {m.year}
                  </p>
                </div>
                <div className="flex flex-col items-center pt-2">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                  {i < milestones.length - 1 && (
                    <div className="w-[1px] flex-1 bg-gradient-to-b from-gold/50 to-gold/10 mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-4">
                  <h3 className="text-2xl font-light text-cream mb-2" style={serifFont}>
                    {m.title}
                  </h3>
                  <p className="text-sm text-cream/55 leading-[1.9] max-w-md" style={sansFont}>
                    {m.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 lg:py-32 border-t border-cream/10 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.15] pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, oklch(0.65 0.14 55 / 0.4) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-6" style={sansFont}>
              Reserve
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-cream leading-[1.1] text-balance mb-10" style={serifFont}>
              Let us compose a cake for your{' '}
              <span className="italic font-semibold text-gradient-bronze">moment.</span>
            </h2>
            <Link
              href="/booking"
              className={cn(
                'inline-flex items-center gap-4 px-10 py-5',
                'text-[11px] tracking-[0.35em] uppercase bg-gold text-noir',
                'hover:bg-gold-light transition-colors',
              )}
              style={sansFont}
            >
              Begin Reservation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <StickyOrderButton />
    </main>
  )
}

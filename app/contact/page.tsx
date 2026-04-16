import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, Instagram, MessageCircle, ArrowRight } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { StickyOrderButton } from '@/components/sticky-order-button'
import { PageHeader } from '@/components/page-header'
import { brandInfo } from '@/lib/data'
import { cn } from '@/lib/utils'

export const metadata = {
  title: 'Correspondence | Zia Cakes',
  description: 'Reach the atelier. We reply personally, within the day.',
}

const sansFont = { fontFamily: 'var(--font-montserrat), sans-serif' }
const serifFont = { fontFamily: 'var(--font-playfair), Georgia, serif' }

const contactMethods = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: brandInfo.phone,
    sub: 'Fastest reply',
    href: `https://wa.me/${brandInfo.whatsapp}?text=${encodeURIComponent('Hello, I would like to enquire about a cake.')}`,
    primary: true,
  },
  {
    icon: Phone,
    label: 'Telephone',
    value: brandInfo.phone,
    sub: '9am – 7pm',
    href: `tel:${brandInfo.phone}`,
  },
  {
    icon: Mail,
    label: 'Correspondence',
    value: brandInfo.email,
    sub: 'For detailed briefs',
    href: `mailto:${brandInfo.email}`,
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: brandInfo.instagram,
    sub: 'Latest work',
    href: `https://instagram.com/${brandInfo.instagram.replace('@', '')}`,
  },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-noir">
      <Header />
      <PageHeader
        eyebrow="Correspondence"
        title="Speak with the"
        accent="atelier"
        description="We answer personally — usually within the hour, always within the day. No call centers, no queues."
      />

      {/* Contact methods */}
      <section className="py-20 lg:py-28 bg-noir">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-cream/10 border border-cream/10 max-w-6xl mx-auto">
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={cn(
                  'group p-10 text-center transition-all duration-500',
                  method.primary ? 'bg-card hover:bg-noir' : 'bg-noir hover:bg-card/60',
                )}
              >
                <method.icon className="h-5 w-5 mx-auto mb-6 text-gold" />
                <p className="text-[10px] tracking-[0.35em] uppercase text-gold mb-4" style={sansFont}>
                  {method.label}
                </p>
                <p className="text-lg text-cream font-light mb-2 break-all" style={serifFont}>
                  {method.value}
                </p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-cream/40 mt-3" style={sansFont}>
                  {method.sub}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-cream/50 group-hover:text-gold transition-colors" style={sansFont}>
                  Open
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Location & hours split */}
      <section className="py-20 lg:py-28 border-t border-cream/10 bg-card/20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 max-w-6xl mx-auto items-start">
            {/* Image column */}
            <div className="relative">
              <div className="relative aspect-[4/5] bg-card overflow-hidden corner-accent">
                <Image
                  src="/images/atelier-door.jpg"
                  alt="The atelier entrance at dusk"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 px-6 py-4 bg-noir border border-gold/30 max-w-xs">
                <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-1" style={sansFont}>
                  By Reservation
                </p>
                <p className="text-sm text-cream/70 leading-relaxed" style={sansFont}>
                  The atelier receives guests on scheduled pickup only.
                </p>
              </div>
            </div>

            {/* Info column */}
            <div className="space-y-14">
              {/* Location */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="h-4 w-4 text-gold" />
                  <p className="text-[10px] tracking-[0.4em] uppercase text-gold" style={sansFont}>
                    Location
                  </p>
                </div>
                <h2 className="text-3xl font-light text-cream mb-3" style={serifFont}>
                  The Zia Atelier
                </h2>
                <p className="text-cream/60 leading-relaxed mb-2" style={sansFont}>
                  {brandInfo.address}
                </p>
                <p className="text-cream/60 leading-relaxed" style={sansFont}>
                  Tamil Nadu, India
                </p>
                <div className="mt-6 pl-5 border-l border-gold/40 text-sm text-cream/55 italic leading-relaxed" style={serifFont}>
                  The exact address is shared on confirmation — the atelier is a working studio, not a walk-in shop.
                </div>
              </div>

              {/* Hours */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="h-4 w-4 text-gold" />
                  <p className="text-[10px] tracking-[0.4em] uppercase text-gold" style={sansFont}>
                    Hours
                  </p>
                </div>
                <div className="space-y-0">
                  {[
                    { days: 'Monday — Saturday', hours: '9:00 — 19:00' },
                    { days: 'Sunday', hours: '10:00 — 17:00' },
                  ].map((s) => (
                    <div key={s.days} className="flex justify-between py-5 border-b border-cream/10">
                      <span className="text-sm text-cream" style={sansFont}>{s.days}</span>
                      <span className="text-sm text-cream/60 tabular-nums" style={sansFont}>{s.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pl-5 border-l border-gold/40 text-sm text-cream/55 italic leading-relaxed" style={serifFont}>
                  We accept a maximum of eight orders per day. Please reserve two days in advance, or more for custom work.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry form */}
      <section className="py-20 lg:py-28 border-t border-cream/10 bg-noir">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-gold" />
                <span className="text-[10px] tracking-[0.4em] uppercase text-gold" style={sansFont}>
                  Brief Us
                </span>
                <div className="w-12 h-[1px] bg-gold" />
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-cream text-balance" style={serifFont}>
                Begin a{' '}
                <span className="italic font-semibold text-gradient-bronze">conversation.</span>
              </h2>
            </div>

            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-[10px] tracking-[0.3em] uppercase text-gold" style={sansFont}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-0 border-b border-cream/20 text-cream py-3 px-0 focus:outline-none focus:border-gold transition-colors placeholder:text-cream/30"
                    style={sansFont}
                    placeholder=""
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] tracking-[0.3em] uppercase text-gold" style={sansFont}>
                    Telephone
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-transparent border-0 border-b border-cream/20 text-cream py-3 px-0 focus:outline-none focus:border-gold transition-colors placeholder:text-cream/30"
                    style={sansFont}
                    placeholder=""
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] tracking-[0.3em] uppercase text-gold" style={sansFont}>
                  The Brief
                </label>
                <textarea
                  rows={5}
                  className="w-full bg-transparent border-0 border-b border-cream/20 text-cream py-3 px-0 focus:outline-none focus:border-gold transition-colors resize-none placeholder:text-cream/30"
                  style={sansFont}
                  placeholder="Tell us about the moment — date, guest count, flavours, anything you\u2019re imagining."
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto inline-flex items-center justify-center gap-4 px-10 py-5 text-[11px] tracking-[0.35em] uppercase bg-gold text-noir hover:bg-gold-light transition-colors"
                style={sansFont}
              >
                Send Enquiry
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 border-t border-cream/10 bg-card/20">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-cream mb-8 text-balance" style={serifFont}>
            Or simply{' '}
            <span className="italic text-gradient-bronze">write to us</span> on WhatsApp.
          </h2>
          <a
            href={`https://wa.me/${brandInfo.whatsapp}?text=${encodeURIComponent('Hello Zia Cakes.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 text-[11px] tracking-[0.35em] uppercase border border-gold text-gold hover:bg-gold hover:text-noir transition-all"
            style={sansFont}
          >
            <MessageCircle className="h-4 w-4" />
            Open WhatsApp
          </a>
        </div>
      </section>

      <Footer />
      <StickyOrderButton />
    </main>
  )
}

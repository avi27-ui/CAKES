import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Instagram, MessageCircle, ArrowRight } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { StickyOrderButton } from '@/components/sticky-order-button'
import { brandInfo } from '@/lib/data'
import { cn } from '@/lib/utils'

export const metadata = {
  title: 'Contact Us | Zia Cakes',
  description: 'Get in touch with Zia Cakes. Contact us via WhatsApp, phone, or visit us in Virudhachalam for premium handcrafted cakes.',
}

const contactMethods = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: brandInfo.phone,
    href: `https://wa.me/${brandInfo.whatsapp}?text=${encodeURIComponent('Hello! I would like to enquire about ordering a cake.')}`,
    primary: true,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: brandInfo.phone,
    href: `tel:${brandInfo.phone}`,
  },
  {
    icon: Mail,
    label: 'Email',
    value: brandInfo.email,
    href: `mailto:${brandInfo.email}`,
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: brandInfo.instagram,
    href: `https://instagram.com/${brandInfo.instagram.replace('@', '')}`,
  },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-champagne/20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <p 
              className="text-sm tracking-[0.3em] uppercase text-gold mb-4"
              style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
            >
              Get in Touch
            </p>
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-light text-charcoal mb-6"
              style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
            >
              Contact <span className="font-semibold">Us</span>
            </h1>
            <p 
              className="text-charcoal/60"
              style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
            >
              Have questions or ready to order? We&apos;d love to hear from you. 
              Reach out through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={cn(
                  'p-8 text-center transition-all duration-300',
                  'hover:shadow-lg',
                  method.primary
                    ? 'bg-charcoal text-ivory hover:bg-gold hover:text-charcoal'
                    : 'bg-champagne/30 hover:bg-champagne'
                )}
              >
                <method.icon className={cn(
                  'h-8 w-8 mx-auto mb-4',
                  method.primary ? 'text-gold' : 'text-gold'
                )} />
                <p 
                  className={cn(
                    'text-xs tracking-[0.2em] uppercase mb-2',
                    method.primary ? 'text-gold' : 'text-gold'
                  )}
                  style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                >
                  {method.label}
                </p>
                <p 
                  className={cn(
                    'text-lg font-semibold',
                    method.primary ? 'text-ivory' : 'text-charcoal'
                  )}
                  style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
                >
                  {method.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-16 bg-champagne/20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Location */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-gold" />
                <h2 
                  className="text-2xl font-semibold text-charcoal"
                  style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
                >
                  Location
                </h2>
              </div>
              
              <div 
                className="space-y-2 text-charcoal/70"
                style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
              >
                <p className="text-lg font-medium text-charcoal">Zia Cakes</p>
                <p>{brandInfo.address}</p>
                <p>Tamil Nadu, India</p>
              </div>

              <div className="p-6 bg-ivory border border-gold/20">
                <p 
                  className="text-sm text-charcoal/60 mb-2"
                  style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                >
                  Pickup Instructions
                </p>
                <p 
                  className="text-charcoal"
                  style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                >
                  Please confirm your order via WhatsApp and collect from our 
                  location at the scheduled time. We&apos;ll send you the exact 
                  address upon confirmation.
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Clock className="h-6 w-6 text-gold" />
                <h2 
                  className="text-2xl font-semibold text-charcoal"
                  style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
                >
                  Hours
                </h2>
              </div>
              
              <div className="space-y-4">
                {[
                  { days: 'Monday - Saturday', hours: '9:00 AM - 7:00 PM' },
                  { days: 'Sunday', hours: '10:00 AM - 5:00 PM' },
                ].map((schedule) => (
                  <div 
                    key={schedule.days}
                    className="flex justify-between py-3 border-b border-border"
                  >
                    <span 
                      className="text-charcoal"
                      style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                    >
                      {schedule.days}
                    </span>
                    <span 
                      className="text-charcoal/70"
                      style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                    >
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-gold/10 border border-gold/30">
                <p 
                  className="text-sm text-gold-dark"
                  style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                >
                  <strong>Note:</strong> We accept limited orders per day to ensure 
                  quality. Please book at least 2 days in advance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Enquiry Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-12">
              <h2 
                className="text-3xl font-semibold text-charcoal mb-4"
                style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
              >
                Quick Enquiry
              </h2>
              <p 
                className="text-charcoal/60"
                style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
              >
                Send us a message and we&apos;ll get back to you shortly.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label 
                    className="text-sm tracking-wider uppercase text-charcoal/60"
                    style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className={cn(
                      'w-full px-4 py-3 bg-champagne/30 border-0',
                      'text-charcoal placeholder:text-charcoal/40',
                      'focus:outline-none focus:ring-2 focus:ring-gold/50'
                    )}
                    style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <label 
                    className="text-sm tracking-wider uppercase text-charcoal/60"
                    style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    className={cn(
                      'w-full px-4 py-3 bg-champagne/30 border-0',
                      'text-charcoal placeholder:text-charcoal/40',
                      'focus:outline-none focus:ring-2 focus:ring-gold/50'
                    )}
                    style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label 
                  className="text-sm tracking-wider uppercase text-charcoal/60"
                  style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                >
                  Message
                </label>
                <textarea
                  rows={4}
                  className={cn(
                    'w-full px-4 py-3 bg-champagne/30 border-0',
                    'text-charcoal placeholder:text-charcoal/40',
                    'focus:outline-none focus:ring-2 focus:ring-gold/50',
                    'resize-none'
                  )}
                  style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                  placeholder="Tell us about your enquiry..."
                />
              </div>

              <button
                type="submit"
                className={cn(
                  'w-full flex items-center justify-center gap-3',
                  'px-8 py-4 text-sm tracking-[0.15em] uppercase',
                  'bg-charcoal text-ivory hover:bg-gold hover:text-charcoal',
                  'transition-all duration-300'
                )}
                style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
              >
                Send Message
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-charcoal">
        <div className="container mx-auto px-6 text-center">
          <h2 
            className="text-2xl md:text-3xl font-light text-ivory mb-6"
            style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
          >
            Ready to Order? <span className="font-semibold text-gold">Let&apos;s Chat</span>
          </h2>
          <a
            href={`https://wa.me/${brandInfo.whatsapp}?text=${encodeURIComponent('Hello! I would like to order a cake.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'inline-flex items-center gap-3',
              'px-8 py-4 text-sm tracking-[0.15em] uppercase',
              'bg-gold text-charcoal hover:bg-ivory',
              'transition-all duration-300'
            )}
            style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
          >
            <MessageCircle className="h-5 w-5" />
            Chat on WhatsApp
          </a>
        </div>
      </section>

      <Footer />
      <StickyOrderButton />
    </main>
  )
}

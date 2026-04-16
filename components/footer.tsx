import Link from 'next/link'
import { Instagram, Phone, Mail, MapPin } from 'lucide-react'
import { brandInfo } from '@/lib/data'

export function Footer() {
  return (
    <footer className="bg-noir relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      
      {/* Background elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 border border-gold/20 rotate-45" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 border border-gold/20 -rotate-12" />
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-12 py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            {/* Logo */}
            <div className="space-y-3">
              <div className="w-16 h-[1px] bg-gradient-to-r from-gold/60 to-transparent" />
              <h3 
                className="text-4xl font-bold tracking-[0.3em] text-cream"
                style={{ fontFamily: 'var(--font-cinzel), Georgia, serif' }}
              >
                ZIA
              </h3>
              <p 
                className="text-[9px] tracking-[0.5em] uppercase text-gold"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 300 }}
              >
                Patisserie
              </p>
            </div>
            
            <p 
              className="text-cream/50 leading-relaxed max-w-xs"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 300 }}
            >
              Crafting edible masterpieces for life&apos;s most precious moments. 
              Each creation tells a story of passion, quality, and artistry.
            </p>
            
            {/* Social */}
            <a
              href={`https://instagram.com/${brandInfo.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-cream/50 hover:text-gold transition-all duration-500 group"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
            >
              <div className="w-10 h-10 flex items-center justify-center border border-gold/20 group-hover:border-gold transition-all duration-500">
                <Instagram className="h-4 w-4" />
              </div>
              <span className="text-sm">{brandInfo.instagram}</span>
            </a>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-8">
            <h4 
              className="text-[10px] tracking-[0.3em] uppercase text-gold"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 400 }}
            >
              Explore
            </h4>
            <nav className="flex flex-col gap-4">
              {[
                { href: '/cakes', label: 'Collection' },
                { href: '/gallery', label: 'Portfolio' },
                { href: '/about', label: 'Atelier' },
                { href: '/booking', label: 'Reserve' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-cream/50 hover:text-gold transition-all duration-500 text-sm tracking-wide"
                  style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 300 }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 space-y-8">
            <h4 
              className="text-[10px] tracking-[0.3em] uppercase text-gold"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 400 }}
            >
              Connect
            </h4>
            <div className="space-y-5">
              <a
                href={`tel:${brandInfo.phone}`}
                className="flex items-center gap-4 text-cream/50 hover:text-gold transition-all duration-500 group"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 300 }}
              >
                <div className="w-10 h-10 flex items-center justify-center border border-gold/20 group-hover:border-gold transition-all duration-500">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="text-sm">{brandInfo.phone}</span>
              </a>
              <a
                href={`mailto:${brandInfo.email}`}
                className="flex items-center gap-4 text-cream/50 hover:text-gold transition-all duration-500 group"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 300 }}
              >
                <div className="w-10 h-10 flex items-center justify-center border border-gold/20 group-hover:border-gold transition-all duration-500">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="text-sm">{brandInfo.email}</span>
              </a>
              <div 
                className="flex items-center gap-4 text-cream/50"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 300 }}
              >
                <div className="w-10 h-10 flex items-center justify-center border border-gold/20">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="text-sm">{brandInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Hours & Reserve */}
          <div className="lg:col-span-3 space-y-8">
            <h4 
              className="text-[10px] tracking-[0.3em] uppercase text-gold"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 400 }}
            >
              Atelier Hours
            </h4>
            <div className="space-y-4">
              <div>
                <p 
                  className="text-cream/50 text-sm"
                  style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 300 }}
                >
                  By Appointment
                </p>
                <p 
                  className="text-cream text-lg mt-1"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  9:00 AM - 7:00 PM
                </p>
              </div>
              <p 
                className="text-cream/30 text-xs"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 300 }}
              >
                Advance booking required for all orders
              </p>
            </div>
            
            <Link
              href="/booking"
              className="btn-luxury inline-flex px-8 py-4 text-[10px] tracking-[0.25em] uppercase text-charcoal"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 500 }}
            >
              <span>Reserve Now</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/10">
        <div className="container mx-auto px-6 lg:px-12 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p 
              className="text-cream/30 text-xs tracking-wider"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 300 }}
            >
              &copy; {new Date().getFullYear()} Zia Patisserie. All rights reserved.
            </p>
            
            <div className="flex items-center gap-4">
              <div className="w-8 h-[1px] bg-gold/20" />
              <p 
                className="text-cream/20 text-[10px] tracking-[0.2em] uppercase"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 300 }}
              >
                Handcrafted with love in Virudhachalam
              </p>
              <div className="w-8 h-[1px] bg-gold/20" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

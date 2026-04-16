'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { brandInfo } from '@/lib/data'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/cakes', label: 'Collection' },
  { href: '/gallery', label: 'Portfolio' },
  { href: '/about', label: 'Atelier' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-700',
        isScrolled
          ? 'bg-noir/95 backdrop-blur-xl py-4 border-b border-gold/10'
          : 'bg-transparent py-8'
      )}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <nav className="flex items-center justify-between">
          {/* Premium Logo */}
          <Link href="/" className="relative group">
            <div className="flex flex-col items-center">
              {/* Decorative top line */}
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gold/60 to-transparent mb-2 group-hover:via-gold transition-all duration-500" />
              
              {/* Main Logo */}
              <span 
                className="text-3xl md:text-4xl font-bold tracking-[0.3em] text-cream group-hover:text-gradient-bronze transition-all duration-500"
                style={{ fontFamily: 'var(--font-cinzel), Georgia, serif' }}
              >
                ZIA
              </span>
              
              {/* Tagline */}
              <span 
                className="text-[9px] md:text-[10px] tracking-[0.5em] uppercase text-gold/80 mt-1"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 300 }}
              >
                Patisserie
              </span>
              
              {/* Decorative bottom line */}
              <div className="w-8 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent mt-2 group-hover:w-16 group-hover:via-gold/60 transition-all duration-500" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative text-[11px] tracking-[0.25em] uppercase transition-all duration-500',
                  pathname === link.href
                    ? 'text-gold'
                    : 'text-cream/70 hover:text-gold'
                )}
                style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 400 }}
              >
                {link.label}
                <span 
                  className={cn(
                    'absolute -bottom-2 left-0 h-[1px] bg-gold transition-all duration-500',
                    pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  )} 
                />
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href={`tel:${brandInfo.phone}`}
              className="flex items-center gap-2 text-cream/60 hover:text-gold transition-all duration-300"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
            >
              <Phone className="h-3.5 w-3.5" />
              <span className="text-[11px] tracking-wider">{brandInfo.phone}</span>
            </a>
            
            <div className="w-[1px] h-6 bg-gold/20" />
            
            <Link
              href="/booking"
              className="btn-luxury px-8 py-3 text-[10px] tracking-[0.3em] uppercase text-charcoal"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 500 }}
            >
              <span>Reserve</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-cream hover:text-gold transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={cn(
            'lg:hidden fixed inset-0 top-0 bg-noir z-40 transition-all duration-700',
            isMobileMenuOpen
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          )}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-gold/20 rotate-45" />
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-gold/20 rotate-12" />
          </div>
          
          <div className="flex flex-col items-center justify-center h-full gap-10 relative">
            {/* Mobile Logo */}
            <div className="mb-8">
              <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold/60 to-transparent mb-3" />
              <span 
                className="text-4xl font-bold tracking-[0.3em] text-cream"
                style={{ fontFamily: 'var(--font-cinzel), Georgia, serif' }}
              >
                ZIA
              </span>
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent mt-3 mx-auto" />
            </div>
            
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  'text-xl tracking-[0.3em] uppercase transition-all duration-500',
                  pathname === link.href ? 'text-gold' : 'text-cream/80 hover:text-gold'
                )}
                style={{
                  fontFamily: 'var(--font-cinzel), Georgia, serif',
                  fontWeight: 400,
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {link.label}
              </Link>
            ))}
            
            <div className="mt-8 pt-8 border-t border-gold/20">
              <Link
                href="/booking"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-luxury px-10 py-4 text-[11px] tracking-[0.3em] uppercase text-charcoal"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 500 }}
              >
                <span>Reserve Your Cake</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

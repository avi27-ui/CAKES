'use client'

import { useState, useEffect } from 'react'
import { MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { brandInfo } from '@/lib/data'

export function StickyOrderButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const whatsappUrl = `https://wa.me/${brandInfo.whatsapp}?text=${encodeURIComponent(
    'Hello Zia Patisserie, I would like to enquire about a cake.'
  )}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'fixed bottom-6 right-6 z-50 lg:hidden',
        'flex items-center gap-3 px-5 py-4',
        'bg-gold text-charcoal border border-gold',
        'shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)]',
        'transition-all duration-500 hover:bg-gold-light',
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10 pointer-events-none'
      )}
      aria-label="Enquire on WhatsApp"
      style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 500 }}
    >
      <MessageCircle className="h-4 w-4" />
      <span className="text-[10px] tracking-[0.25em] uppercase">Enquire</span>
    </a>
  )
}

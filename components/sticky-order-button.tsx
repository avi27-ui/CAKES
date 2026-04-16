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
    'Hello! I would like to order a cake from Zia Cakes.'
  )}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'fixed bottom-6 right-6 z-50',
        'flex items-center gap-3 px-5 py-3',
        'bg-charcoal text-ivory shadow-xl',
        'transition-all duration-500',
        'hover:bg-gold hover:text-charcoal',
        'lg:hidden', // Only show on mobile/tablet
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10 pointer-events-none'
      )}
      aria-label="Order on WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      <span 
        className="text-sm tracking-wider uppercase"
        style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
      >
        Order Now
      </span>
    </a>
  )
}

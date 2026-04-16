import { cn } from '@/lib/utils'

interface PageHeaderProps {
  eyebrow: string
  title: string
  accent: string
  description?: string
  className?: string
}

/**
 * Shared editorial page header for all inner routes.
 * Maintains the noir + bronze rhythm established by the homepage hero:
 * eyebrow — bronze divider — serif headline with italic bronze accent — supporting line.
 */
export function PageHeader({
  eyebrow,
  title,
  accent,
  description,
  className,
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        'relative pt-40 pb-24 lg:pt-48 lg:pb-28 bg-noir overflow-hidden',
        className,
      )}
    >
      {/* Ambient top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-[0.18] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center top, oklch(0.65 0.14 55 / 0.45) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Vertical rule accents */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-gold/10 to-transparent opacity-50" aria-hidden="true" />
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-gold/10 to-transparent opacity-50" aria-hidden="true" />

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" aria-hidden="true" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-gold" />
            <span
              className="text-[10px] tracking-[0.4em] uppercase text-gold"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 300 }}
            >
              {eyebrow}
            </span>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gold" />
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-cream leading-[1.05] text-balance"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            {title}{' '}
            <span className="font-semibold italic text-gradient-bronze">{accent}</span>
          </h1>

          {description && (
            <>
              <div className="w-16 h-[1px] bg-gradient-to-r from-gold via-gold/50 to-transparent mx-auto mt-8" />
              <p
                className="mt-8 text-base md:text-lg text-cream/55 leading-relaxed max-w-xl mx-auto text-pretty"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 300 }}
              >
                {description}
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

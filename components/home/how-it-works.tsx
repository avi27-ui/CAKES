import { cn } from '@/lib/utils'

const steps = [
  {
    number: 'I',
    title: 'Curate',
    description:
      'Browse the collection or share your vision. Each creation begins with an intimate conversation about your occasion.',
  },
  {
    number: 'II',
    title: 'Compose',
    description:
      'Select your flavour profile, dimensions, and bespoke details. Our atelier crafts a design proposal just for you.',
  },
  {
    number: 'III',
    title: 'Confirm',
    description:
      'Reserve your date. A modest deposit secures one of eight daily slots. The remainder settles upon delivery.',
  },
  {
    number: 'IV',
    title: 'Celebrate',
    description:
      'Your cake arrives ready for its moment — photographed, admired, savoured. An heirloom of taste and memory.',
  },
]

export function HowItWorks() {
  return (
    <section className="py-32 bg-noir relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] opacity-[0.15] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center top, oklch(0.65 0.14 55 / 0.4) 0%, transparent 70%)',
        }}
      />

      {/* Divider lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-24">
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-gold" />
            <span
              className="text-[10px] tracking-[0.4em] uppercase text-gold"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 300 }}
            >
              The Ritual
            </span>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gold" />
          </div>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-light text-cream leading-[1.1]"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Four movements,{' '}
            <span className="font-semibold italic text-gradient-bronze">one masterpiece</span>
          </h2>

          <p
            className="text-cream/50 leading-relaxed mt-8 max-w-lg mx-auto"
            style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 300 }}
          >
            From the first brief to the final slice, every order follows a considered
            process — unhurried, personal, and entirely without compromise.
          </p>
        </div>

        {/* Steps — editorial grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/10 border border-gold/10">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={cn(
                'group relative bg-noir px-8 py-16 lg:py-20',
                'transition-all duration-700 hover:bg-charcoal'
              )}
            >
              {/* Large Roman numeral */}
              <div className="flex items-baseline gap-4 mb-10">
                <span
                  className="text-6xl lg:text-7xl font-light text-gradient-bronze leading-none"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  {step.number}
                </span>
                <span
                  className="text-[10px] tracking-[0.3em] uppercase text-cream/30"
                  style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 300 }}
                >
                  Step 0{index + 1}
                </span>
              </div>

              {/* Animated underline */}
              <div className="w-8 h-[1px] bg-gold mb-8 transition-all duration-700 group-hover:w-20" />

              <h3
                className="text-2xl lg:text-3xl font-light text-cream mb-5 transition-colors duration-500 group-hover:text-gold"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                {step.title}
              </h3>

              <p
                className="text-sm text-cream/50 leading-relaxed"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 300 }}
              >
                {step.description}
              </p>

              {/* Corner accent on hover */}
              <div className="absolute top-6 right-6 w-4 h-4 border-t border-r border-gold/0 transition-all duration-500 group-hover:border-gold/40" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

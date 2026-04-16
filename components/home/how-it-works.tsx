import { Search, Palette, Calendar, PartyPopper } from 'lucide-react'
import { cn } from '@/lib/utils'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Browse & Select',
    description: 'Explore our collection and find the perfect cake for your occasion.',
  },
  {
    number: '02',
    icon: Palette,
    title: 'Customise',
    description: 'Choose your flavour, size, and add any special requests.',
  },
  {
    number: '03',
    icon: Calendar,
    title: 'Book & Confirm',
    description: 'Select your date and confirm your order via WhatsApp.',
  },
  {
    number: '04',
    icon: PartyPopper,
    title: 'Celebrate',
    description: 'Receive your handcrafted masterpiece and enjoy the moment.',
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 bg-champagne/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p 
            className="text-sm tracking-[0.3em] uppercase text-gold mb-4"
            style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
          >
            The Process
          </p>
          <h2 
            className="text-4xl md:text-5xl font-light text-charcoal mb-6"
            style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
          >
            How It <span className="font-semibold">Works</span>
          </h2>
          <p 
            className="text-charcoal/60"
            style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
          >
            From selection to celebration, we make ordering your dream cake effortless.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-[1px] bg-gradient-to-r from-gold/40 to-transparent -z-10" />
              )}

              <div className="text-center space-y-6">
                {/* Number & Icon */}
                <div className="relative inline-flex items-center justify-center">
                  {/* Background circle */}
                  <div className={cn(
                    'w-24 h-24 rounded-full border border-gold/30',
                    'flex items-center justify-center',
                    'group-hover:border-gold transition-colors duration-500',
                    'bg-ivory'
                  )}>
                    <step.icon className="h-8 w-8 text-gold" />
                  </div>
                  
                  {/* Number badge */}
                  <span 
                    className={cn(
                      'absolute -top-2 -right-2 w-8 h-8',
                      'flex items-center justify-center',
                      'bg-charcoal text-ivory text-xs',
                      'rounded-full'
                    )}
                    style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 
                    className="text-xl font-semibold text-charcoal"
                    style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
                  >
                    {step.title}
                  </h3>
                  <p 
                    className="text-sm text-charcoal/60 max-w-xs mx-auto"
                    style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

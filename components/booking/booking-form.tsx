'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Calendar, Clock, MessageCircle, Upload, AlertCircle, Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { cakes, brandInfo } from '@/lib/data'

// Simulated blocked dates (would come from CMS in production)
const blockedDates = ['2026-04-20', '2026-04-25', '2026-05-01']

const sansFont = { fontFamily: 'var(--font-montserrat), sans-serif' }
const serifFont = { fontFamily: 'var(--font-playfair), Georgia, serif' }

const stepHeading = 'text-2xl md:text-3xl font-light text-cream flex items-center gap-4'
const labelCls = 'text-[10px] tracking-[0.3em] uppercase text-gold'
const fieldCls = cn(
  'w-full bg-transparent border-0 border-b border-cream/20 text-cream py-3 px-0',
  'focus:outline-none focus:border-gold transition-colors',
  'placeholder:text-cream/30',
)

export function BookingForm() {
  const searchParams = useSearchParams()

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [deliveryDate, setDeliveryDate] = useState('')
  const [selectedCakeId, setSelectedCakeId] = useState('')
  const [selectedFlavour, setSelectedFlavour] = useState('')
  const [selectedWeight, setSelectedWeight] = useState('')
  const [customMessage, setCustomMessage] = useState('')
  const [deliveryType, setDeliveryType] = useState<'pickup' | 'delivery'>('pickup')
  const [referenceImage, setReferenceImage] = useState<File | null>(null)

  useEffect(() => {
    const cakeId = searchParams.get('cake')
    const flavour = searchParams.get('flavour')
    const weight = searchParams.get('weight')
    if (cakeId) setSelectedCakeId(cakeId)
    if (flavour) setSelectedFlavour(flavour)
    if (weight) setSelectedWeight(weight)
  }, [searchParams])

  const selectedCake = cakes.find(c => c.id === selectedCakeId)
  const availableFlavours = selectedCake?.flavours || []
  const availableWeights = selectedCake?.weights || []
  const selectedWeightObj = availableWeights.find(w => w.kg.toString() === selectedWeight)
  const price = selectedWeightObj?.price || 0

  const getMinDate = () => {
    const date = new Date()
    date.setDate(date.getDate() + 2)
    return date.toISOString().split('T')[0]
  }
  const isDateBlocked = (date: string) => blockedDates.includes(date)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `*Reservation — Zia Cakes*

*Guest:*
${name}
${phone}

*Creation:*
${selectedCake?.name || 'Custom'}
Flavour: ${selectedFlavour}
Size: ${selectedWeight}kg
Investment: \u20B9${price.toLocaleString('en-IN')}

*Fulfillment:*
${deliveryType === 'pickup' ? 'Atelier Pickup' : 'Home Delivery'}
Date: ${deliveryDate}

${customMessage ? `*Notes:*\n${customMessage}` : ''}${referenceImage ? '\n\n(Reference image will follow)' : ''}`

    const whatsappUrl = `https://wa.me/${brandInfo.whatsapp}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const isFormValid = name && phone && deliveryDate && selectedCakeId && selectedFlavour && selectedWeight && !isDateBlocked(deliveryDate)

  const stepNumber = (n: number) => (
    <span className="flex-shrink-0 w-10 h-10 rounded-full border border-gold/60 text-gold text-[10px] tracking-[0.2em] flex items-center justify-center" style={sansFont}>
      0{n}
    </span>
  )

  return (
    <section className="py-20 lg:py-28 bg-noir">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-16">
            {/* Step 1 */}
            <div className="space-y-8">
              <h2 className={stepHeading} style={serifFont}>
                {stepNumber(1)}
                Your Details
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className={labelCls} style={sansFont}>Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className={fieldCls}
                    style={sansFont}
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-3">
                  <label className={labelCls} style={sansFont}>Telephone</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className={fieldCls}
                    style={sansFont}
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="space-y-8 pt-10 border-t border-cream/10">
              <h2 className={stepHeading} style={serifFont}>
                {stepNumber(2)}
                The Creation
              </h2>

              <div className="space-y-3">
                <label className={labelCls} style={sansFont}>Select Cake</label>
                <div className="relative">
                  <select
                    value={selectedCakeId}
                    onChange={(e) => {
                      setSelectedCakeId(e.target.value)
                      setSelectedFlavour('')
                      setSelectedWeight('')
                    }}
                    required
                    className={cn(fieldCls, 'appearance-none cursor-pointer pr-8')}
                    style={sansFont}
                  >
                    <option value="" className="bg-noir">Choose from the collection</option>
                    {cakes.map((cake) => (
                      <option key={cake.id} value={cake.id} className="bg-noir">
                        {cake.name} &mdash; from &#8377;{cake.weights[0].price.toLocaleString('en-IN')}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {selectedCake && (
                <>
                  <div className="space-y-3">
                    <label className={labelCls} style={sansFont}>Flavour</label>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {availableFlavours.map((flavour) => (
                        <button
                          key={flavour}
                          type="button"
                          onClick={() => setSelectedFlavour(flavour)}
                          className={cn(
                            'flex items-center gap-2 px-5 py-3 text-[11px] tracking-[0.2em] uppercase border transition-all',
                            selectedFlavour === flavour
                              ? 'bg-gold text-noir border-gold'
                              : 'bg-transparent text-cream/70 border-cream/15 hover:border-gold/50 hover:text-cream',
                          )}
                          style={sansFont}
                        >
                          {selectedFlavour === flavour && <Check className="h-3 w-3" />}
                          {flavour}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className={labelCls} style={sansFont}>Size</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                      {availableWeights.map((weight) => (
                        <button
                          key={weight.kg}
                          type="button"
                          onClick={() => setSelectedWeight(weight.kg.toString())}
                          className={cn(
                            'py-5 text-center border transition-all',
                            selectedWeight === weight.kg.toString()
                              ? 'bg-gold text-noir border-gold'
                              : 'bg-transparent text-cream/70 border-cream/15 hover:border-gold/50 hover:text-cream',
                          )}
                        >
                          <span className="block text-xl font-light" style={serifFont}>{weight.kg}kg</span>
                          <span className="text-[10px] tracking-[0.2em] opacity-70" style={sansFont}>
                            &#8377;{weight.price.toLocaleString('en-IN')}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {price > 0 && (
                <div className="flex items-baseline justify-between pt-6 border-t border-gold/30">
                  <p className={labelCls} style={sansFont}>Investment</p>
                  <p className="text-4xl font-light text-gold" style={serifFont}>
                    &#8377;{price.toLocaleString('en-IN')}
                  </p>
                </div>
              )}
            </div>

            {/* Step 3 */}
            <div className="space-y-8 pt-10 border-t border-cream/10">
              <h2 className={stepHeading} style={serifFont}>
                {stepNumber(3)}
                Fulfillment
              </h2>

              <div className="space-y-3">
                <label className={labelCls} style={sansFont}>Delivery Method</label>
                <div className="grid grid-cols-2 gap-2 pt-1">
                  {[
                    { id: 'pickup', label: 'Atelier Pickup' },
                    { id: 'delivery', label: 'Home Delivery' },
                  ].map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setDeliveryType(type.id as 'pickup' | 'delivery')}
                      className={cn(
                        'py-4 text-[11px] tracking-[0.25em] uppercase border transition-all',
                        deliveryType === type.id
                          ? 'bg-gold text-noir border-gold'
                          : 'bg-transparent text-cream/70 border-cream/15 hover:border-gold/50 hover:text-cream',
                      )}
                      style={sansFont}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <label className={cn(labelCls, 'flex items-center gap-2')} style={sansFont}>
                  <Calendar className="h-3 w-3" />
                  Date
                </label>
                <input
                  type="date"
                  value={deliveryDate}
                  onChange={(e) => setDeliveryDate(e.target.value)}
                  min={getMinDate()}
                  required
                  className={cn(fieldCls, '[color-scheme:dark]')}
                  style={sansFont}
                />
                {deliveryDate && isDateBlocked(deliveryDate) && (
                  <p className="flex items-center gap-2 text-xs text-destructive mt-2" style={sansFont}>
                    <AlertCircle className="h-3.5 w-3.5" />
                    This date is fully reserved. Please choose another.
                  </p>
                )}
                <p className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-cream/40 mt-2" style={sansFont}>
                  <Clock className="h-3 w-3" />
                  Minimum 2 days notice
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="space-y-8 pt-10 border-t border-cream/10">
              <h2 className={stepHeading} style={serifFont}>
                {stepNumber(4)}
                The Detail
              </h2>

              <div className="space-y-3">
                <label className={labelCls} style={sansFont}>Notes &amp; preferences</label>
                <textarea
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  rows={4}
                  className={cn(fieldCls, 'resize-none')}
                  style={sansFont}
                  placeholder="A message for the cake, design preferences, allergies — anything we should know."
                />
              </div>

              <div className="space-y-3">
                <label className={labelCls} style={sansFont}>Reference Image (optional)</label>
                <label className="flex items-center justify-center gap-3 p-8 cursor-pointer border border-dashed border-cream/15 hover:border-gold/60 transition-colors bg-card/30">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setReferenceImage(e.target.files?.[0] || null)}
                    className="hidden"
                  />
                  <Upload className="h-4 w-4 text-gold" />
                  <span className="text-xs tracking-[0.15em] uppercase text-cream/60" style={sansFont}>
                    {referenceImage ? referenceImage.name : 'Click to upload'}
                  </span>
                </label>
              </div>
            </div>

            {/* Submit */}
            <div className="pt-12 border-t border-cream/10">
              <button
                type="submit"
                disabled={!isFormValid}
                className={cn(
                  'w-full flex items-center justify-center gap-4 px-10 py-6',
                  'text-[11px] tracking-[0.35em] uppercase',
                  'bg-gold text-noir hover:bg-gold-light transition-colors',
                  'disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-gold',
                )}
                style={sansFont}
              >
                <MessageCircle className="h-4 w-4" />
                Send to Atelier
              </button>
              <p className="text-center text-[10px] tracking-[0.25em] uppercase text-cream/40 mt-6" style={sansFont}>
                You will be taken to WhatsApp to confirm directly with us
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

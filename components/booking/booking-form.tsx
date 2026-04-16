'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Calendar, Clock, MessageCircle, Upload, AlertCircle, Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { cakes, brandInfo } from '@/lib/data'

// Simulated blocked dates (would come from CMS in production)
const blockedDates = ['2026-04-20', '2026-04-25', '2026-05-01']

export function BookingForm() {
  const searchParams = useSearchParams()
  
  // Form state
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [deliveryDate, setDeliveryDate] = useState('')
  const [selectedCakeId, setSelectedCakeId] = useState('')
  const [selectedFlavour, setSelectedFlavour] = useState('')
  const [selectedWeight, setSelectedWeight] = useState('')
  const [customMessage, setCustomMessage] = useState('')
  const [deliveryType, setDeliveryType] = useState<'pickup' | 'delivery'>('pickup')
  const [referenceImage, setReferenceImage] = useState<File | null>(null)

  // Initialize from URL params
  useEffect(() => {
    const cakeId = searchParams.get('cake')
    const flavour = searchParams.get('flavour')
    const weight = searchParams.get('weight')

    if (cakeId) setSelectedCakeId(cakeId)
    if (flavour) setSelectedFlavour(flavour)
    if (weight) setSelectedWeight(weight)
  }, [searchParams])

  const selectedCake = cakes.find(c => c.id === selectedCakeId)

  // Get available flavours and weights based on selected cake
  const availableFlavours = selectedCake?.flavours || []
  const availableWeights = selectedCake?.weights || []

  // Calculate price
  const selectedWeightObj = availableWeights.find(w => w.kg.toString() === selectedWeight)
  const price = selectedWeightObj?.price || 0

  // Get minimum date (2 days from now)
  const getMinDate = () => {
    const date = new Date()
    date.setDate(date.getDate() + 2)
    return date.toISOString().split('T')[0]
  }

  // Check if date is blocked
  const isDateBlocked = (date: string) => blockedDates.includes(date)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Build WhatsApp message
    const message = `*New Cake Order - Zia Cakes*

*Customer Details:*
Name: ${name}
Phone: ${phone}

*Order Details:*
Cake: ${selectedCake?.name || 'Custom'}
Flavour: ${selectedFlavour}
Weight: ${selectedWeight}kg
Price: ₹${price}

*Delivery:*
Type: ${deliveryType === 'pickup' ? 'Pickup' : 'Home Delivery'}
Date: ${deliveryDate}

${customMessage ? `*Special Instructions:*\n${customMessage}` : ''}

${referenceImage ? '*Reference image attached separately*' : ''}

Looking forward to your confirmation!`

    const whatsappUrl = `https://wa.me/${brandInfo.whatsapp}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const isFormValid = name && phone && deliveryDate && selectedCakeId && selectedFlavour && selectedWeight

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Customer Details */}
            <div className="space-y-6">
              <h2 
                className="text-2xl font-semibold text-charcoal flex items-center gap-3"
                style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
              >
                <span className="w-8 h-8 bg-gold text-charcoal text-sm flex items-center justify-center">1</span>
                Your Details
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label 
                    className="text-sm tracking-wider uppercase text-charcoal/60"
                    style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className={cn(
                      'w-full px-4 py-3 bg-champagne/30 border-0',
                      'text-charcoal placeholder:text-charcoal/40',
                      'focus:outline-none focus:ring-2 focus:ring-gold/50',
                      'transition-all'
                    )}
                    style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                    placeholder="Enter your name"
                  />
                </div>

                <div className="space-y-2">
                  <label 
                    className="text-sm tracking-wider uppercase text-charcoal/60"
                    style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className={cn(
                      'w-full px-4 py-3 bg-champagne/30 border-0',
                      'text-charcoal placeholder:text-charcoal/40',
                      'focus:outline-none focus:ring-2 focus:ring-gold/50',
                      'transition-all'
                    )}
                    style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>
            </div>

            {/* Cake Selection */}
            <div className="space-y-6 pt-6 border-t border-border">
              <h2 
                className="text-2xl font-semibold text-charcoal flex items-center gap-3"
                style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
              >
                <span className="w-8 h-8 bg-gold text-charcoal text-sm flex items-center justify-center">2</span>
                Cake Selection
              </h2>

              {/* Cake dropdown */}
              <div className="space-y-2">
                <label 
                  className="text-sm tracking-wider uppercase text-charcoal/60"
                  style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                >
                  Choose Cake *
                </label>
                <select
                  value={selectedCakeId}
                  onChange={(e) => {
                    setSelectedCakeId(e.target.value)
                    setSelectedFlavour('')
                    setSelectedWeight('')
                  }}
                  required
                  className={cn(
                    'w-full px-4 py-3 bg-champagne/30 border-0',
                    'text-charcoal',
                    'focus:outline-none focus:ring-2 focus:ring-gold/50',
                    'transition-all appearance-none cursor-pointer'
                  )}
                  style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                >
                  <option value="">Select a cake</option>
                  {cakes.map((cake) => (
                    <option key={cake.id} value={cake.id}>
                      {cake.name} - Starting ₹{cake.weights[0].price}
                    </option>
                  ))}
                </select>
              </div>

              {/* Flavour & Weight */}
              {selectedCake && (
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label 
                      className="text-sm tracking-wider uppercase text-charcoal/60"
                      style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                    >
                      Flavour *
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {availableFlavours.map((flavour) => (
                        <button
                          key={flavour}
                          type="button"
                          onClick={() => setSelectedFlavour(flavour)}
                          className={cn(
                            'flex items-center gap-2 px-4 py-2 text-sm transition-all',
                            selectedFlavour === flavour
                              ? 'bg-charcoal text-ivory'
                              : 'bg-champagne/50 text-charcoal hover:bg-champagne'
                          )}
                          style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                        >
                          {selectedFlavour === flavour && <Check className="h-3 w-3" />}
                          {flavour}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label 
                      className="text-sm tracking-wider uppercase text-charcoal/60"
                      style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                    >
                      Weight *
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {availableWeights.map((weight) => (
                        <button
                          key={weight.kg}
                          type="button"
                          onClick={() => setSelectedWeight(weight.kg.toString())}
                          className={cn(
                            'px-4 py-2 text-sm transition-all',
                            selectedWeight === weight.kg.toString()
                              ? 'bg-charcoal text-ivory'
                              : 'bg-champagne/50 text-charcoal hover:bg-champagne'
                          )}
                          style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                        >
                          {weight.kg}kg - ₹{weight.price}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Price display */}
              {price > 0 && (
                <div className="p-4 bg-gold/10 border border-gold/30">
                  <p 
                    className="text-sm text-charcoal/60"
                    style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                  >
                    Total Price
                  </p>
                  <p 
                    className="text-3xl font-semibold text-charcoal"
                    style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
                  >
                    ₹{price}
                  </p>
                </div>
              )}
            </div>

            {/* Delivery Details */}
            <div className="space-y-6 pt-6 border-t border-border">
              <h2 
                className="text-2xl font-semibold text-charcoal flex items-center gap-3"
                style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
              >
                <span className="w-8 h-8 bg-gold text-charcoal text-sm flex items-center justify-center">3</span>
                Delivery Details
              </h2>

              {/* Delivery type */}
              <div className="space-y-2">
                <label 
                  className="text-sm tracking-wider uppercase text-charcoal/60"
                  style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                >
                  Delivery Type
                </label>
                <div className="flex gap-4">
                  {[
                    { id: 'pickup', label: 'Self Pickup' },
                    { id: 'delivery', label: 'Home Delivery' },
                  ].map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setDeliveryType(type.id as 'pickup' | 'delivery')}
                      className={cn(
                        'flex-1 py-3 text-sm transition-all',
                        deliveryType === type.id
                          ? 'bg-charcoal text-ivory'
                          : 'bg-champagne/50 text-charcoal hover:bg-champagne'
                      )}
                      style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date picker */}
              <div className="space-y-2">
                <label 
                  className="text-sm tracking-wider uppercase text-charcoal/60 flex items-center gap-2"
                  style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                >
                  <Calendar className="h-4 w-4" />
                  Delivery Date *
                </label>
                <input
                  type="date"
                  value={deliveryDate}
                  onChange={(e) => setDeliveryDate(e.target.value)}
                  min={getMinDate()}
                  required
                  className={cn(
                    'w-full px-4 py-3 bg-champagne/30 border-0',
                    'text-charcoal',
                    'focus:outline-none focus:ring-2 focus:ring-gold/50',
                    'transition-all'
                  )}
                  style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                />
                {deliveryDate && isDateBlocked(deliveryDate) && (
                  <p className="flex items-center gap-2 text-sm text-red-600">
                    <AlertCircle className="h-4 w-4" />
                    This date is fully booked. Please choose another date.
                  </p>
                )}
                <p 
                  className="flex items-center gap-2 text-xs text-charcoal/50"
                  style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                >
                  <Clock className="h-3 w-3" />
                  Please book at least 2 days in advance
                </p>
              </div>
            </div>

            {/* Additional Details */}
            <div className="space-y-6 pt-6 border-t border-border">
              <h2 
                className="text-2xl font-semibold text-charcoal flex items-center gap-3"
                style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
              >
                <span className="w-8 h-8 bg-gold text-charcoal text-sm flex items-center justify-center">4</span>
                Additional Details
              </h2>

              {/* Custom message */}
              <div className="space-y-2">
                <label 
                  className="text-sm tracking-wider uppercase text-charcoal/60"
                  style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                >
                  Special Instructions (Optional)
                </label>
                <textarea
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  rows={4}
                  className={cn(
                    'w-full px-4 py-3 bg-champagne/30 border-0',
                    'text-charcoal placeholder:text-charcoal/40',
                    'focus:outline-none focus:ring-2 focus:ring-gold/50',
                    'transition-all resize-none'
                  )}
                  style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                  placeholder="Any special message on the cake, design preferences, or allergies we should know about..."
                />
              </div>

              {/* Reference image */}
              <div className="space-y-2">
                <label 
                  className="text-sm tracking-wider uppercase text-charcoal/60"
                  style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                >
                  Reference Image (Optional)
                </label>
                <label
                  className={cn(
                    'flex items-center justify-center gap-3 p-8 cursor-pointer',
                    'border-2 border-dashed border-charcoal/20',
                    'hover:border-gold transition-colors',
                    'bg-champagne/20'
                  )}
                >
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setReferenceImage(e.target.files?.[0] || null)}
                    className="hidden"
                  />
                  <Upload className="h-5 w-5 text-charcoal/40" />
                  <span 
                    className="text-sm text-charcoal/60"
                    style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                  >
                    {referenceImage ? referenceImage.name : 'Click to upload reference image'}
                  </span>
                </label>
                <p 
                  className="text-xs text-charcoal/50"
                  style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                >
                  You can share the reference image directly on WhatsApp after submitting
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t border-border">
              <button
                type="submit"
                disabled={!isFormValid || (deliveryDate && isDateBlocked(deliveryDate))}
                className={cn(
                  'w-full flex items-center justify-center gap-3',
                  'px-8 py-4 text-sm tracking-[0.15em] uppercase',
                  'bg-charcoal text-ivory',
                  'hover:bg-gold hover:text-charcoal',
                  'transition-all duration-300',
                  'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-charcoal disabled:hover:text-ivory'
                )}
                style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
              >
                <MessageCircle className="h-5 w-5" />
                Confirm Order on WhatsApp
              </button>
              <p 
                className="text-center text-xs text-charcoal/50 mt-4"
                style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
              >
                You&apos;ll be redirected to WhatsApp to confirm your order directly with us
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

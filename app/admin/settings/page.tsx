'use client'

import { useState } from 'react'
import { Save } from 'lucide-react'
import { cn } from '@/lib/utils'
import { brandInfo } from '@/lib/data'

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState({
    name: brandInfo.name,
    tagline: brandInfo.tagline,
    phone: brandInfo.phone,
    whatsapp: brandInfo.whatsapp,
    email: brandInfo.email,
    address: brandInfo.address,
    instagram: brandInfo.instagram,
    maxOrdersPerDay: brandInfo.maxOrdersPerDay,
  })

  const handleChange = (key: string, value: string | number) => {
    setSettings({ ...settings, [key]: value })
  }

  return (
    <div className="space-y-8 max-w-2xl">
      {/* Header */}
      <div>
        <h1 
          className="text-3xl font-semibold text-charcoal"
          style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
        >
          Settings
        </h1>
        <p 
          className="text-charcoal/60 mt-1"
          style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
        >
          Configure your bakery details and preferences.
        </p>
      </div>

      {/* Settings Form */}
      <form className="space-y-8">
        {/* Brand Info */}
        <div className="bg-card border border-border p-6 space-y-6">
          <h2 
            className="text-xl font-semibold text-charcoal"
            style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
          >
            Brand Information
          </h2>

          <div className="grid gap-6">
            <div className="space-y-2">
              <label 
                className="text-sm tracking-wider uppercase text-charcoal/60"
                style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
              >
                Business Name
              </label>
              <input
                type="text"
                value={settings.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className={cn(
                  'w-full px-4 py-3 bg-muted border-0',
                  'text-charcoal',
                  'focus:outline-none focus:ring-2 focus:ring-gold/50'
                )}
                style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
              />
            </div>

            <div className="space-y-2">
              <label 
                className="text-sm tracking-wider uppercase text-charcoal/60"
                style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
              >
                Tagline
              </label>
              <input
                type="text"
                value={settings.tagline}
                onChange={(e) => handleChange('tagline', e.target.value)}
                className={cn(
                  'w-full px-4 py-3 bg-muted border-0',
                  'text-charcoal',
                  'focus:outline-none focus:ring-2 focus:ring-gold/50'
                )}
                style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
              />
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-card border border-border p-6 space-y-6">
          <h2 
            className="text-xl font-semibold text-charcoal"
            style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
          >
            Contact Information
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label 
                className="text-sm tracking-wider uppercase text-charcoal/60"
                style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
              >
                Phone Number
              </label>
              <input
                type="tel"
                value={settings.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className={cn(
                  'w-full px-4 py-3 bg-muted border-0',
                  'text-charcoal',
                  'focus:outline-none focus:ring-2 focus:ring-gold/50'
                )}
                style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
              />
            </div>

            <div className="space-y-2">
              <label 
                className="text-sm tracking-wider uppercase text-charcoal/60"
                style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
              >
                WhatsApp Number
              </label>
              <input
                type="text"
                value={settings.whatsapp}
                onChange={(e) => handleChange('whatsapp', e.target.value)}
                className={cn(
                  'w-full px-4 py-3 bg-muted border-0',
                  'text-charcoal',
                  'focus:outline-none focus:ring-2 focus:ring-gold/50'
                )}
                style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                placeholder="Without country code"
              />
            </div>

            <div className="space-y-2">
              <label 
                className="text-sm tracking-wider uppercase text-charcoal/60"
                style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
              >
                Email
              </label>
              <input
                type="email"
                value={settings.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className={cn(
                  'w-full px-4 py-3 bg-muted border-0',
                  'text-charcoal',
                  'focus:outline-none focus:ring-2 focus:ring-gold/50'
                )}
                style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
              />
            </div>

            <div className="space-y-2">
              <label 
                className="text-sm tracking-wider uppercase text-charcoal/60"
                style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
              >
                Instagram Handle
              </label>
              <input
                type="text"
                value={settings.instagram}
                onChange={(e) => handleChange('instagram', e.target.value)}
                className={cn(
                  'w-full px-4 py-3 bg-muted border-0',
                  'text-charcoal',
                  'focus:outline-none focus:ring-2 focus:ring-gold/50'
                )}
                style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label 
              className="text-sm tracking-wider uppercase text-charcoal/60"
              style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
            >
              Address
            </label>
            <textarea
              value={settings.address}
              onChange={(e) => handleChange('address', e.target.value)}
              rows={2}
              className={cn(
                'w-full px-4 py-3 bg-muted border-0 resize-none',
                'text-charcoal',
                'focus:outline-none focus:ring-2 focus:ring-gold/50'
              )}
              style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
            />
          </div>
        </div>

        {/* Order Settings */}
        <div className="bg-card border border-border p-6 space-y-6">
          <h2 
            className="text-xl font-semibold text-charcoal"
            style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
          >
            Order Settings
          </h2>

          <div className="space-y-2">
            <label 
              className="text-sm tracking-wider uppercase text-charcoal/60"
              style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
            >
              Max Orders Per Day
            </label>
            <input
              type="number"
              min="1"
              max="50"
              value={settings.maxOrdersPerDay}
              onChange={(e) => handleChange('maxOrdersPerDay', parseInt(e.target.value))}
              className={cn(
                'w-full px-4 py-3 bg-muted border-0',
                'text-charcoal',
                'focus:outline-none focus:ring-2 focus:ring-gold/50'
              )}
              style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
            />
            <p 
              className="text-xs text-charcoal/50"
              style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
            >
              Limit the number of orders you accept per day to maintain quality.
            </p>
          </div>
        </div>

        {/* Save Button */}
        <button
          type="submit"
          className={cn(
            'flex items-center justify-center gap-2 w-full py-4',
            'bg-charcoal text-ivory hover:bg-gold hover:text-charcoal',
            'transition-colors text-sm tracking-wider uppercase'
          )}
          style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
        >
          <Save className="h-4 w-4" />
          Save Settings
        </button>
      </form>
    </div>
  )
}

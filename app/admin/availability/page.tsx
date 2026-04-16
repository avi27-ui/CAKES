'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { brandInfo } from '@/lib/data'

// Get days in month
const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate()
}

// Get first day of month (0 = Sunday)
const getFirstDayOfMonth = (year: number, month: number) => {
  return new Date(year, month, 1).getDay()
}

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

export default function AdminAvailabilityPage() {
  const today = new Date()
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [currentYear, setCurrentYear] = useState(today.getFullYear())
  const [blockedDates, setBlockedDates] = useState<string[]>(['2026-04-20', '2026-04-25', '2026-05-01'])
  const [maxOrders, setMaxOrders] = useState(brandInfo.maxOrdersPerDay)

  const daysInMonth = getDaysInMonth(currentYear, currentMonth)
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth)

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
  }

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }

  const toggleBlockedDate = (day: number) => {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    
    if (blockedDates.includes(dateStr)) {
      setBlockedDates(blockedDates.filter(d => d !== dateStr))
    } else {
      setBlockedDates([...blockedDates, dateStr])
    }
  }

  const isBlocked = (day: number) => {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    return blockedDates.includes(dateStr)
  }

  const isPast = (day: number) => {
    const date = new Date(currentYear, currentMonth, day)
    const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    return date < todayDate
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 
          className="text-3xl font-semibold text-charcoal"
          style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
        >
          Availability
        </h1>
        <p 
          className="text-charcoal/60 mt-1"
          style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
        >
          Manage order limits and block specific dates.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Calendar */}
        <div className="lg:col-span-2 bg-card border border-border p-6">
          {/* Month navigation */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={prevMonth}
              className="p-2 hover:bg-muted transition-colors rounded"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <h2 
              className="text-xl font-semibold text-charcoal"
              style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
            >
              {months[currentMonth]} {currentYear}
            </h2>
            <button
              onClick={nextMonth}
              className="p-2 hover:bg-muted transition-colors rounded"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Day headers */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div 
                key={day}
                className="text-center text-xs text-charcoal/60 py-2"
                style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
              >
                {day}
              </div>
            ))}
          </div>

          {/* Days grid */}
          <div className="grid grid-cols-7 gap-1">
            {/* Empty cells for days before first of month */}
            {Array.from({ length: firstDay }).map((_, i) => (
              <div key={`empty-${i}`} className="aspect-square" />
            ))}

            {/* Days */}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1
              const blocked = isBlocked(day)
              const past = isPast(day)

              return (
                <button
                  key={day}
                  onClick={() => !past && toggleBlockedDate(day)}
                  disabled={past}
                  className={cn(
                    'aspect-square flex items-center justify-center text-sm transition-all',
                    'border border-transparent hover:border-gold',
                    past && 'opacity-30 cursor-not-allowed hover:border-transparent',
                    blocked && !past && 'bg-red-100 text-red-700 border-red-200',
                    !blocked && !past && 'hover:bg-muted'
                  )}
                  style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                >
                  {day}
                </button>
              )
            })}
          </div>

          {/* Legend */}
          <div className="flex items-center gap-6 mt-6 pt-6 border-t border-border">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-muted border" />
              <span className="text-xs text-charcoal/60">Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-100 border border-red-200" />
              <span className="text-xs text-charcoal/60">Blocked</span>
            </div>
          </div>
        </div>

        {/* Settings Panel */}
        <div className="space-y-6">
          {/* Max Orders */}
          <div className="bg-card border border-border p-6">
            <h3 
              className="text-lg font-semibold text-charcoal mb-4"
              style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
            >
              Daily Order Limit
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setMaxOrders(Math.max(1, maxOrders - 1))}
                  className="w-10 h-10 border border-border hover:border-gold transition-colors flex items-center justify-center"
                >
                  -
                </button>
                <span 
                  className="text-3xl font-semibold text-charcoal"
                  style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
                >
                  {maxOrders}
                </span>
                <button
                  onClick={() => setMaxOrders(maxOrders + 1)}
                  className="w-10 h-10 border border-border hover:border-gold transition-colors flex items-center justify-center"
                >
                  +
                </button>
              </div>
              <p 
                className="text-xs text-charcoal/60"
                style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
              >
                Maximum orders accepted per day
              </p>
            </div>
          </div>

          {/* Blocked Dates List */}
          <div className="bg-card border border-border p-6">
            <h3 
              className="text-lg font-semibold text-charcoal mb-4"
              style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
            >
              Blocked Dates
            </h3>
            {blockedDates.length === 0 ? (
              <p 
                className="text-sm text-charcoal/60"
                style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
              >
                No dates blocked
              </p>
            ) : (
              <div className="space-y-2">
                {blockedDates.sort().map((date) => (
                  <div 
                    key={date}
                    className="flex items-center justify-between py-2 px-3 bg-muted"
                  >
                    <span 
                      className="text-sm text-charcoal"
                      style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                    >
                      {new Date(date).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                    <button
                      onClick={() => setBlockedDates(blockedDates.filter(d => d !== date))}
                      className="p-1 text-charcoal/40 hover:text-red-600 transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Save Button */}
          <button
            className={cn(
              'w-full py-3 text-sm tracking-wider uppercase',
              'bg-charcoal text-ivory hover:bg-gold hover:text-charcoal',
              'transition-colors'
            )}
            style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}

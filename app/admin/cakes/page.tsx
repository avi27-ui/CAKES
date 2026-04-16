'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Plus, Search, Edit2, Trash2, Eye, EyeOff } from 'lucide-react'
import { cn } from '@/lib/utils'
import { cakes as initialCakes, categories } from '@/lib/data'

export default function AdminCakesPage() {
  const [cakes, setCakes] = useState(initialCakes)
  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('all')

  const filteredCakes = cakes.filter((cake) => {
    const matchesSearch = cake.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === 'all' || cake.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  const toggleAvailability = (cakeId: string) => {
    setCakes(cakes.map((cake) => 
      cake.id === cakeId ? { ...cake, isAvailable: !cake.isAvailable } : cake
    ))
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 
            className="text-3xl font-semibold text-charcoal"
            style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
          >
            Cakes
          </h1>
          <p 
            className="text-charcoal/60 mt-1"
            style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
          >
            Manage your cake collection.
          </p>
        </div>

        <button
          className={cn(
            'inline-flex items-center gap-2 px-5 py-3',
            'bg-charcoal text-ivory hover:bg-gold hover:text-charcoal',
            'transition-colors text-sm tracking-wider uppercase'
          )}
          style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
        >
          <Plus className="h-4 w-4" />
          Add Cake
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-charcoal/40" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search cakes..."
            className={cn(
              'w-full pl-10 pr-4 py-3 bg-card border border-border',
              'text-charcoal placeholder:text-charcoal/40',
              'focus:outline-none focus:ring-2 focus:ring-gold/50'
            )}
            style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
          />
        </div>

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className={cn(
            'px-4 py-3 bg-card border border-border',
            'text-charcoal',
            'focus:outline-none focus:ring-2 focus:ring-gold/50'
          )}
          style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* Cakes Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredCakes.map((cake) => (
          <div 
            key={cake.id}
            className={cn(
              'bg-card border border-border overflow-hidden',
              !cake.isAvailable && 'opacity-60'
            )}
          >
            {/* Image */}
            <div className="relative aspect-[4/3] bg-muted">
              <Image
                src={cake.images[0]}
                alt={cake.name}
                fill
                className="object-cover"
              />
              
              {/* Tags */}
              <div className="absolute top-3 left-3 flex gap-1">
                {cake.tags.map((tag) => (
                  <span
                    key={tag}
                    className={cn(
                      'px-2 py-0.5 text-[10px] tracking-wider uppercase',
                      tag === 'bestseller' && 'bg-gold text-charcoal',
                      tag === 'premium' && 'bg-burgundy text-ivory',
                      tag === 'new' && 'bg-charcoal text-ivory'
                    )}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Availability badge */}
              {!cake.isAvailable && (
                <div className="absolute inset-0 bg-charcoal/50 flex items-center justify-center">
                  <span className="px-3 py-1 bg-ivory text-charcoal text-xs uppercase tracking-wider">
                    Hidden
                  </span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 
                className="text-lg font-semibold text-charcoal mb-1"
                style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
              >
                {cake.name}
              </h3>
              <p 
                className="text-sm text-charcoal/60 mb-2"
                style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
              >
                {cake.category}
              </p>
              <p 
                className="text-lg font-semibold text-gold"
                style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
              >
                From ₹{cake.weights[0].price}
              </p>

              {/* Actions */}
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border">
                <button
                  onClick={() => toggleAvailability(cake.id)}
                  className={cn(
                    'p-2 hover:bg-muted transition-colors rounded',
                    cake.isAvailable ? 'text-charcoal/60' : 'text-gold'
                  )}
                  title={cake.isAvailable ? 'Hide cake' : 'Show cake'}
                >
                  {cake.isAvailable ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                </button>
                <button
                  className="p-2 text-charcoal/60 hover:text-gold hover:bg-muted transition-colors rounded"
                  title="Edit cake"
                >
                  <Edit2 className="h-4 w-4" />
                </button>
                <button
                  className="p-2 text-charcoal/60 hover:text-red-600 hover:bg-muted transition-colors rounded ml-auto"
                  title="Delete cake"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredCakes.length === 0 && (
        <div className="text-center py-12">
          <p 
            className="text-charcoal/60"
            style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
          >
            No cakes found
          </p>
        </div>
      )}
    </div>
  )
}

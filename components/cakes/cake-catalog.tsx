'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Star, SlidersHorizontal, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { cakes, categories } from '@/lib/data'

const flavourOptions = ['All', 'Chocolate', 'Vanilla', 'Strawberry', 'Butterscotch', 'Red Velvet']
const budgetRanges = [
  { label: 'All', min: 0, max: Infinity },
  { label: 'Under ₹500', min: 0, max: 500 },
  { label: '₹500 - ₹1000', min: 500, max: 1000 },
  { label: '₹1000 - ₹2000', min: 1000, max: 2000 },
  { label: 'Above ₹2000', min: 2000, max: Infinity },
]

export function CakeCatalog() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedFlavour, setSelectedFlavour] = useState('All')
  const [selectedBudget, setSelectedBudget] = useState(budgetRanges[0])
  const [showFilters, setShowFilters] = useState(false)

  const filteredCakes = useMemo(() => {
    return cakes.filter((cake) => {
      // Category filter
      if (selectedCategory !== 'all' && cake.category !== selectedCategory) {
        return false
      }

      // Flavour filter
      if (selectedFlavour !== 'All' && !cake.flavours.some(f => f.toLowerCase().includes(selectedFlavour.toLowerCase()))) {
        return false
      }

      // Budget filter
      const startingPrice = cake.weights[0].price
      if (startingPrice < selectedBudget.min || startingPrice > selectedBudget.max) {
        return false
      }

      return true
    })
  }, [selectedCategory, selectedFlavour, selectedBudget])

  const activeFiltersCount = [
    selectedCategory !== 'all',
    selectedFlavour !== 'All',
    selectedBudget.label !== 'All'
  ].filter(Boolean).length

  const clearFilters = () => {
    setSelectedCategory('all')
    setSelectedFlavour('All')
    setSelectedBudget(budgetRanges[0])
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        {/* Filter Toggle for Mobile */}
        <div className="flex items-center justify-between mb-8 lg:hidden">
          <p 
            className="text-sm text-charcoal/60"
            style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
          >
            {filteredCakes.length} {filteredCakes.length === 1 ? 'cake' : 'cakes'} found
          </p>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={cn(
              'flex items-center gap-2 px-4 py-2',
              'border border-charcoal/20 hover:border-gold',
              'transition-colors text-sm'
            )}
            style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
            {activeFiltersCount > 0 && (
              <span className="w-5 h-5 bg-gold text-charcoal text-xs flex items-center justify-center rounded-full">
                {activeFiltersCount}
              </span>
            )}
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Filters Sidebar */}
          <aside 
            className={cn(
              'lg:w-64 flex-shrink-0',
              'fixed lg:relative inset-0 z-50 lg:z-auto',
              'bg-ivory lg:bg-transparent',
              'transition-transform duration-300',
              showFilters ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
            )}
          >
            <div className="p-6 lg:p-0 h-full overflow-auto">
              {/* Mobile close button */}
              <div className="flex items-center justify-between mb-8 lg:hidden">
                <h3 
                  className="text-lg font-semibold text-charcoal"
                  style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
                >
                  Filters
                </h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="p-2 hover:text-gold transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Categories */}
              <div className="mb-10">
                <h4 
                  className="text-sm tracking-[0.2em] uppercase text-gold mb-6"
                  style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                >
                  Category
                </h4>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={cn(
                        'block w-full text-left py-2 px-4 text-sm transition-all',
                        'border-l-2',
                        selectedCategory === category.id
                          ? 'border-gold text-charcoal bg-champagne/30'
                          : 'border-transparent text-charcoal/60 hover:text-charcoal hover:border-gold/50'
                      )}
                      style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Flavours */}
              <div className="mb-10">
                <h4 
                  className="text-sm tracking-[0.2em] uppercase text-gold mb-6"
                  style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                >
                  Flavour
                </h4>
                <div className="flex flex-wrap gap-2">
                  {flavourOptions.map((flavour) => (
                    <button
                      key={flavour}
                      onClick={() => setSelectedFlavour(flavour)}
                      className={cn(
                        'px-4 py-2 text-xs tracking-wider uppercase transition-all',
                        selectedFlavour === flavour
                          ? 'bg-charcoal text-ivory'
                          : 'bg-champagne/50 text-charcoal hover:bg-champagne'
                      )}
                      style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                    >
                      {flavour}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget */}
              <div className="mb-10">
                <h4 
                  className="text-sm tracking-[0.2em] uppercase text-gold mb-6"
                  style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                >
                  Budget
                </h4>
                <div className="space-y-3">
                  {budgetRanges.map((range) => (
                    <button
                      key={range.label}
                      onClick={() => setSelectedBudget(range)}
                      className={cn(
                        'block w-full text-left py-2 px-4 text-sm transition-all',
                        'border-l-2',
                        selectedBudget.label === range.label
                          ? 'border-gold text-charcoal bg-champagne/30'
                          : 'border-transparent text-charcoal/60 hover:text-charcoal hover:border-gold/50'
                      )}
                      style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear filters */}
              {activeFiltersCount > 0 && (
                <button
                  onClick={clearFilters}
                  className={cn(
                    'w-full py-3 text-sm tracking-wider uppercase',
                    'border border-charcoal/20 text-charcoal',
                    'hover:border-gold hover:text-gold transition-colors'
                  )}
                  style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </aside>

          {/* Cakes Grid */}
          <div className="flex-1">
            {/* Results count - Desktop */}
            <div className="hidden lg:flex items-center justify-between mb-8">
              <p 
                className="text-sm text-charcoal/60"
                style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
              >
                Showing {filteredCakes.length} {filteredCakes.length === 1 ? 'cake' : 'cakes'}
              </p>
            </div>

            {filteredCakes.length === 0 ? (
              <div className="text-center py-20">
                <p 
                  className="text-xl text-charcoal/60 mb-4"
                  style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
                >
                  No cakes found matching your criteria
                </p>
                <button
                  onClick={clearFilters}
                  className="text-gold hover:underline text-sm"
                  style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCakes.map((cake) => (
                  <Link
                    key={cake.id}
                    href={`/cakes/${cake.id}`}
                    className="group"
                  >
                    <div className="card-luxury">
                      {/* Image */}
                      <div className="relative aspect-[4/5] overflow-hidden bg-champagne/30">
                        <Image
                          src={cake.images[0]}
                          alt={cake.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Tags */}
                        <div className="absolute top-4 left-4 flex flex-col gap-2">
                          {cake.tags.map((tag) => (
                            <span
                              key={tag}
                              className={cn(
                                'px-3 py-1 text-[10px] tracking-[0.2em] uppercase',
                                tag === 'bestseller' && 'bg-gold text-charcoal',
                                tag === 'premium' && 'bg-burgundy text-ivory',
                                tag === 'new' && 'bg-charcoal text-ivory'
                              )}
                              style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Quick view button */}
                        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                          <span
                            className={cn(
                              'flex items-center justify-center gap-2 w-full py-3',
                              'bg-ivory text-charcoal text-xs tracking-[0.15em] uppercase',
                              'transition-colors hover:bg-gold'
                            )}
                            style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                          >
                            View Details
                            <ArrowRight className="h-3 w-3" />
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="pt-6 space-y-3">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-3 w-3 fill-gold text-gold"
                            />
                          ))}
                        </div>
                        
                        <h3 
                          className="text-xl font-semibold text-charcoal group-hover:text-gold transition-colors"
                          style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
                        >
                          {cake.name}
                        </h3>
                        
                        <p 
                          className="text-sm text-charcoal/60 line-clamp-2"
                          style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
                        >
                          {cake.shortDescription}
                        </p>
                        
                        <p 
                          className="text-lg font-semibold text-gold"
                          style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
                        >
                          Starting from{' '}
                          <span className="text-charcoal">
                            ₹{cake.weights[0].price}
                          </span>
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter overlay */}
      {showFilters && (
        <div
          className="fixed inset-0 bg-charcoal/50 z-40 lg:hidden"
          onClick={() => setShowFilters(false)}
        />
      )}
    </section>
  )
}

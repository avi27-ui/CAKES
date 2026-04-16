'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, SlidersHorizontal, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { cakes, categories } from '@/lib/data'

const flavourOptions = ['All', 'Chocolate', 'Vanilla', 'Strawberry', 'Butterscotch', 'Red Velvet']
const budgetRanges = [
  { label: 'All', min: 0, max: Infinity },
  { label: 'Under \u20B9500', min: 0, max: 500 },
  { label: '\u20B9500 – \u20B91,000', min: 500, max: 1000 },
  { label: '\u20B91,000 – \u20B92,000', min: 1000, max: 2000 },
  { label: 'Above \u20B92,000', min: 2000, max: Infinity },
]

const sansFont = { fontFamily: 'var(--font-montserrat), sans-serif' }
const serifFont = { fontFamily: 'var(--font-playfair), Georgia, serif' }

export function CakeCatalog() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedFlavour, setSelectedFlavour] = useState('All')
  const [selectedBudget, setSelectedBudget] = useState(budgetRanges[0])
  const [showFilters, setShowFilters] = useState(false)

  const filteredCakes = useMemo(() => {
    return cakes.filter((cake) => {
      if (selectedCategory !== 'all' && cake.category !== selectedCategory) return false
      if (selectedFlavour !== 'All' && !cake.flavours.some(f => f.toLowerCase().includes(selectedFlavour.toLowerCase()))) return false
      const startingPrice = cake.weights[0].price
      if (startingPrice < selectedBudget.min || startingPrice > selectedBudget.max) return false
      return true
    })
  }, [selectedCategory, selectedFlavour, selectedBudget])

  const activeFiltersCount = [
    selectedCategory !== 'all',
    selectedFlavour !== 'All',
    selectedBudget.label !== 'All',
  ].filter(Boolean).length

  const clearFilters = () => {
    setSelectedCategory('all')
    setSelectedFlavour('All')
    setSelectedBudget(budgetRanges[0])
  }

  return (
    <section className="py-20 lg:py-28 bg-noir">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Mobile filter toggle */}
        <div className="flex items-center justify-between mb-10 lg:hidden">
          <p className="text-xs tracking-[0.25em] uppercase text-cream/50" style={sansFont}>
            {filteredCakes.length} {filteredCakes.length === 1 ? 'Creation' : 'Creations'}
          </p>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 border border-cream/15 hover:border-gold/50 transition-colors text-xs tracking-[0.2em] uppercase text-cream"
            style={sansFont}
          >
            <SlidersHorizontal className="h-3.5 w-3.5" />
            Refine
            {activeFiltersCount > 0 && (
              <span className="w-5 h-5 bg-gold text-noir text-[10px] flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Filters */}
          <aside
            className={cn(
              'lg:w-64 flex-shrink-0',
              'fixed lg:relative inset-0 z-50 lg:z-auto',
              'bg-noir lg:bg-transparent',
              'transition-transform duration-500',
              showFilters ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
            )}
          >
            <div className="p-8 lg:p-0 h-full overflow-auto">
              <div className="flex items-center justify-between mb-8 lg:hidden">
                <h3 className="text-xl text-cream" style={serifFont}>Refine</h3>
                <button onClick={() => setShowFilters(false)} className="p-2 text-cream hover:text-gold transition-colors">
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Categories */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-[1px] bg-gold" />
                  <h4 className="text-[10px] tracking-[0.3em] uppercase text-gold" style={sansFont}>Category</h4>
                </div>
                <div className="space-y-1">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={cn(
                        'block w-full text-left py-2.5 px-4 text-sm transition-all border-l-[1px]',
                        selectedCategory === category.id
                          ? 'border-gold text-cream bg-card/40'
                          : 'border-transparent text-cream/50 hover:text-cream hover:border-gold/40',
                      )}
                      style={sansFont}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Flavours */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-[1px] bg-gold" />
                  <h4 className="text-[10px] tracking-[0.3em] uppercase text-gold" style={sansFont}>Flavour</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {flavourOptions.map((flavour) => (
                    <button
                      key={flavour}
                      onClick={() => setSelectedFlavour(flavour)}
                      className={cn(
                        'px-4 py-2 text-[10px] tracking-[0.2em] uppercase transition-all border',
                        selectedFlavour === flavour
                          ? 'bg-gold text-noir border-gold'
                          : 'bg-transparent text-cream/70 border-cream/15 hover:border-gold/50 hover:text-cream',
                      )}
                      style={sansFont}
                    >
                      {flavour}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-[1px] bg-gold" />
                  <h4 className="text-[10px] tracking-[0.3em] uppercase text-gold" style={sansFont}>Investment</h4>
                </div>
                <div className="space-y-1">
                  {budgetRanges.map((range) => (
                    <button
                      key={range.label}
                      onClick={() => setSelectedBudget(range)}
                      className={cn(
                        'block w-full text-left py-2.5 px-4 text-sm transition-all border-l-[1px]',
                        selectedBudget.label === range.label
                          ? 'border-gold text-cream bg-card/40'
                          : 'border-transparent text-cream/50 hover:text-cream hover:border-gold/40',
                      )}
                      style={sansFont}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {activeFiltersCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="w-full py-3 text-[10px] tracking-[0.3em] uppercase border border-cream/15 text-cream/70 hover:border-gold hover:text-gold transition-colors"
                  style={sansFont}
                >
                  Clear Refinements
                </button>
              )}
            </div>
          </aside>

          {/* Grid */}
          <div className="flex-1">
            <div className="hidden lg:flex items-baseline justify-between mb-10 pb-6 border-b border-cream/10">
              <p className="text-xs tracking-[0.3em] uppercase text-cream/50" style={sansFont}>
                Displaying {filteredCakes.length} of {cakes.length} {filteredCakes.length === 1 ? 'creation' : 'creations'}
              </p>
              <p className="text-[10px] tracking-[0.25em] uppercase text-gold/60" style={sansFont}>
                Handcrafted to order
              </p>
            </div>

            {filteredCakes.length === 0 ? (
              <div className="text-center py-32 border border-cream/10">
                <p className="text-3xl text-cream/70 mb-4 italic" style={serifFont}>
                  No creations match your refinement.
                </p>
                <button
                  onClick={clearFilters}
                  className="text-xs tracking-[0.3em] uppercase text-gold hover:text-gold-light transition-colors"
                  style={sansFont}
                >
                  Reset filters
                </button>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
                {filteredCakes.map((cake, idx) => (
                  <Link key={cake.id} href={`/cakes/${cake.id}`} className="group block">
                    {/* Image */}
                    <div className="relative aspect-[4/5] overflow-hidden bg-card corner-accent">
                      <Image
                        src={cake.images[0]}
                        alt={cake.name}
                        fill
                        sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-all duration-[1.2s] ease-out group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-noir/80 via-noir/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />

                      {/* Tags */}
                      <div className="absolute top-5 left-5 flex flex-col gap-2">
                        {cake.tags.map((tag) => (
                          <span
                            key={tag}
                            className={cn(
                              'px-3 py-1 text-[9px] tracking-[0.3em] uppercase backdrop-blur-sm',
                              tag === 'bestseller' && 'bg-gold/95 text-noir',
                              tag === 'premium' && 'bg-noir/80 text-gold border border-gold/40',
                              tag === 'new' && 'bg-cream/95 text-noir',
                            )}
                            style={sansFont}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Index */}
                      <span
                        className="absolute top-5 right-5 text-[10px] tracking-[0.3em] text-cream/50"
                        style={sansFont}
                      >
                        {String(idx + 1).padStart(2, '0')}
                      </span>

                      {/* Hover CTA */}
                      <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        <span className="text-[10px] tracking-[0.3em] uppercase text-cream" style={sansFont}>
                          View Detail
                        </span>
                        <span className="w-9 h-9 rounded-full bg-gold flex items-center justify-center">
                          <ArrowUpRight className="h-4 w-4 text-noir" />
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="pt-6 space-y-3">
                      <p className="text-[10px] tracking-[0.3em] uppercase text-gold/70" style={sansFont}>
                        {cake.category === 'kids' ? 'Kids Special' : cake.category}
                      </p>
                      <h3
                        className="text-2xl font-light text-cream group-hover:text-gradient-bronze transition-all leading-tight"
                        style={serifFont}
                      >
                        {cake.name}
                      </h3>
                      <p className="text-sm text-cream/55 leading-relaxed line-clamp-2" style={sansFont}>
                        {cake.shortDescription}
                      </p>
                      <div className="pt-3 flex items-baseline justify-between border-t border-cream/10">
                        <span className="text-[10px] tracking-[0.25em] uppercase text-cream/40" style={sansFont}>
                          From
                        </span>
                        <span className="text-lg text-cream font-light" style={serifFont}>
                          &#8377;{cake.weights[0].price.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {showFilters && (
        <div className="fixed inset-0 bg-noir/70 backdrop-blur-sm z-40 lg:hidden" onClick={() => setShowFilters(false)} />
      )}
    </section>
  )
}

'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FunnelIcon, 
  AdjustmentsHorizontalIcon,
  ShoppingCartIcon,
  EyeIcon
} from '@heroicons/react/24/outline'
import ProductCard from '@/components/ProductCard'
import FilterSidebar from '@/components/FilterSidebar'

// Mock data - v reálné aplikaci by pocházelo z API
const products = [
  {
    id: 1,
    name: 'Bukové dřevo suché',
    description: 'Vysušené bukové dřevo s výhřevností 20 MJ/kg',
    price: 2950,
    originalPrice: 3500,
    unit: 'm³',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    woodType: 'buk',
    length: '33 cm',
    moisture: 'suché',
    packaging: 'paleta',
    heatingValue: 20,
    popularity: 95,
    inStock: true
  },
  {
    id: 2,
    name: 'Dubové dřevo čerstvé',
    description: 'Čerstvé dubové dřevo pro dlouhodobé skladování',
    price: 2800,
    unit: 'm³',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    woodType: 'dub',
    length: '50 cm',
    moisture: 'čerstvé',
    packaging: 'sypané',
    heatingValue: 18,
    popularity: 85,
    inStock: true
  },
  {
    id: 3,
    name: 'Smrkové dřevo suché',
    description: 'Suché smrkové dřevo ideální pro rychlé zatopení',
    price: 2200,
    unit: 'm³',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    woodType: 'smrk',
    length: '25 cm',
    moisture: 'suché',
    packaging: 'pytlované',
    heatingValue: 15,
    popularity: 75,
    inStock: false
  },
  {
    id: 4,
    name: 'Akátové dřevo suché',
    description: 'Tvrdé akátové dřevo s vysokou výhřevností',
    price: 3200,
    unit: 'm³',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    woodType: 'akát',
    length: '33 cm',
    moisture: 'suché',
    packaging: 'paleta',
    heatingValue: 22,
    popularity: 90,
    inStock: true
  }
]

const filters = {
  woodType: ['buk', 'dub', 'smrk', 'akát'],
  length: ['25 cm', '33 cm', '50 cm'],
  moisture: ['suché', 'čerstvé'],
  packaging: ['paleta', 'sypané', 'pytlované']
}

const sortOptions = [
  { value: 'popularity', label: 'Podle popularity' },
  { value: 'price-asc', label: 'Cena: od nejnižší' },
  { value: 'price-desc', label: 'Cena: od nejvyšší' },
  { value: 'heating-value', label: 'Výhřevnost' }
]

export default function CategoryPage({ params }: { params: { category: string } }) {
  const [showFilters, setShowFilters] = useState(false)
  const [selectedFilters, setSelectedFilters] = useState({
    woodType: [] as string[],
    length: [] as string[],
    moisture: [] as string[],
    packaging: [] as string[],
    priceRange: [0, 5000] as [number, number]
  })
  const [sortBy, setSortBy] = useState('popularity')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const categoryNames: { [key: string]: string } = {
    'palivove-drevo': 'Palivové dřevo',
    'brikety': 'Brikety',
    'pelety': 'Pelety'
  }

  const categoryName = categoryNames[params.category] || 'Produkty'

  // Filter products
  const filteredProducts = products.filter(product => {
    if (selectedFilters.woodType.length > 0 && !selectedFilters.woodType.includes(product.woodType)) return false
    if (selectedFilters.length.length > 0 && !selectedFilters.length.includes(product.length)) return false
    if (selectedFilters.moisture.length > 0 && !selectedFilters.moisture.includes(product.moisture)) return false
    if (selectedFilters.packaging.length > 0 && !selectedFilters.packaging.includes(product.packaging)) return false
    if (product.price < selectedFilters.priceRange[0] || product.price > selectedFilters.priceRange[1]) return false
    return true
  })

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price - b.price
      case 'price-desc':
        return b.price - a.price
      case 'heating-value':
        return b.heatingValue - a.heatingValue
      case 'popularity':
      default:
        return b.popularity - a.popularity
    }
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-max px-4 py-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-forest-800 mb-2">
              {categoryName}
            </h1>
            <p className="text-forest-600">
              Kvalitní {categoryName.toLowerCase()} přímo od výrobce. Rychlé dodání po celé ČR.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container-max px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-80">
            <FilterSidebar
              filters={filters}
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
              showFilters={showFilters}
              setShowFilters={setShowFilters}
            />
          </div>

          {/* Products */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="bg-white rounded-lg p-4 mb-6 shadow-sm border border-gray-200">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden flex items-center gap-2 px-4 py-2 bg-forest-50 hover:bg-forest-100 text-forest-700 rounded-lg transition-colors"
                  >
                    <FunnelIcon className="h-5 w-5" />
                    Filtry
                  </button>
                  
                  <span className="text-sm text-gray-600">
                    {sortedProducts.length} produktů
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  {/* View mode */}
                  <div className="flex items-center bg-gray-100 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-md transition-colors ${
                        viewMode === 'grid' ? 'bg-white shadow-sm' : 'text-gray-600'
                      }`}
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-md transition-colors ${
                        viewMode === 'list' ? 'bg-white shadow-sm' : 'text-gray-600'
                      }`}
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>

                  {/* Sort */}
                  <div className="flex items-center gap-2">
                    <AdjustmentsHorizontalIcon className="h-5 w-5 text-gray-500" />
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-forest-500 focus:border-forest-500"
                    >
                      {sortOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid/List */}
            {sortedProducts.length > 0 ? (
              <div className={viewMode === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                : 'space-y-4'
              }>
                {sortedProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <ProductCard 
                      product={product} 
                      viewMode={viewMode}
                    />
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FunnelIcon className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-600 mb-2">
                  Žádné produkty nenalezeny
                </h3>
                <p className="text-gray-500 mb-4">
                  Zkuste upravit filtry nebo se podívejte na naši kompletní nabídku.
                </p>
                <button
                  onClick={() => setSelectedFilters({
                    woodType: [],
                    length: [],
                    moisture: [],
                    packaging: [],
                    priceRange: [0, 5000]
                  })}
                  className="btn-primary"
                >
                  Vymazat filtry
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}


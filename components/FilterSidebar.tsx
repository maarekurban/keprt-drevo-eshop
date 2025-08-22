'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'

interface FilterSidebarProps {
  filters: {
    woodType: string[]
    length: string[]
    moisture: string[]
    packaging: string[]
  }
  selectedFilters: {
    woodType: string[]
    length: string[]
    moisture: string[]
    packaging: string[]
    priceRange: [number, number]
  }
  setSelectedFilters: (filters: any) => void
  showFilters: boolean
  setShowFilters: (show: boolean) => void
}

export default function FilterSidebar({
  filters,
  selectedFilters,
  setSelectedFilters,
  showFilters,
  setShowFilters
}: FilterSidebarProps) {
  const [expandedSections, setExpandedSections] = useState({
    woodType: true,
    length: true,
    moisture: true,
    packaging: true,
    price: true
  })

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section as keyof typeof prev]
    }))
  }

  const toggleFilter = (category: string, value: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      [category]: prev[category as keyof typeof prev].includes(value)
        ? prev[category as keyof typeof prev].filter(item => item !== value)
        : [...prev[category as keyof typeof prev], value]
    }))
  }

  const clearAllFilters = () => {
    setSelectedFilters({
      woodType: [],
      length: [],
      moisture: [],
      packaging: [],
      priceRange: [0, 5000]
    })
  }

  const hasActiveFilters = Object.values(selectedFilters).some(filter => 
    Array.isArray(filter) ? filter.length > 0 : false
  )

  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setShowFilters(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className={`fixed lg:relative inset-y-0 left-0 z-50 w-80 bg-white shadow-xl lg:shadow-none border-r border-gray-200 lg:border-none transform transition-transform duration-300 ease-in-out ${
            showFilters ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          }`}
        >
          <div className="h-full overflow-y-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-forest-800">Filtry</h2>
                <button
                  onClick={() => setShowFilters(false)}
                  className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              </div>

              {/* Clear filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearAllFilters}
                  className="w-full mb-6 px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg transition-colors text-sm font-medium"
                >
                  Vymazat všechny filtry
                </button>
              )}

              {/* Wood Type Filter */}
              <div className="mb-6">
                <button
                  onClick={() => toggleSection('woodType')}
                  className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <span className="font-semibold text-forest-800">Druh dřeviny</span>
                  {expandedSections.woodType ? (
                    <ChevronUpIcon className="h-4 w-4" />
                  ) : (
                    <ChevronDownIcon className="h-4 w-4" />
                  )}
                </button>
                
                <AnimatePresence>
                  {expandedSections.woodType && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="mt-3 space-y-2"
                    >
                      {filters.woodType.map(type => (
                        <label key={type} className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedFilters.woodType.includes(type)}
                            onChange={() => toggleFilter('woodType', type)}
                            className="w-4 h-4 text-forest-600 border-gray-300 rounded focus:ring-forest-500"
                          />
                          <span className="text-sm text-forest-700 capitalize">{type}</span>
                        </label>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Length Filter */}
              <div className="mb-6">
                <button
                  onClick={() => toggleSection('length')}
                  className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <span className="font-semibold text-forest-800">Délka polen</span>
                  {expandedSections.length ? (
                    <ChevronUpIcon className="h-4 w-4" />
                  ) : (
                    <ChevronDownIcon className="h-4 w-4" />
                  )}
                </button>
                
                <AnimatePresence>
                  {expandedSections.length && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="mt-3 space-y-2"
                    >
                      {filters.length.map(length => (
                        <label key={length} className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedFilters.length.includes(length)}
                            onChange={() => toggleFilter('length', length)}
                            className="w-4 h-4 text-forest-600 border-gray-300 rounded focus:ring-forest-500"
                          />
                          <span className="text-sm text-forest-700">{length}</span>
                        </label>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Moisture Filter */}
              <div className="mb-6">
                <button
                  onClick={() => toggleSection('moisture')}
                  className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <span className="font-semibold text-forest-800">Vlhkost</span>
                  {expandedSections.moisture ? (
                    <ChevronUpIcon className="h-4 w-4" />
                  ) : (
                    <ChevronDownIcon className="h-4 w-4" />
                  )}
                </button>
                
                <AnimatePresence>
                  {expandedSections.moisture && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="mt-3 space-y-2"
                    >
                      {filters.moisture.map(moisture => (
                        <label key={moisture} className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedFilters.moisture.includes(moisture)}
                            onChange={() => toggleFilter('moisture', moisture)}
                            className="w-4 h-4 text-forest-600 border-gray-300 rounded focus:ring-forest-500"
                          />
                          <span className="text-sm text-forest-700 capitalize">{moisture}</span>
                        </label>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Packaging Filter */}
              <div className="mb-6">
                <button
                  onClick={() => toggleSection('packaging')}
                  className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <span className="font-semibold text-forest-800">Typ balení</span>
                  {expandedSections.packaging ? (
                    <ChevronUpIcon className="h-4 w-4" />
                  ) : (
                    <ChevronDownIcon className="h-4 w-4" />
                  )}
                </button>
                
                <AnimatePresence>
                  {expandedSections.packaging && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="mt-3 space-y-2"
                    >
                      {filters.packaging.map(packaging => (
                        <label key={packaging} className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedFilters.packaging.includes(packaging)}
                            onChange={() => toggleFilter('packaging', packaging)}
                            className="w-4 h-4 text-forest-600 border-gray-300 rounded focus:ring-forest-500"
                          />
                          <span className="text-sm text-forest-700 capitalize">{packaging}</span>
                        </label>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Price Range Filter */}
              <div className="mb-6">
                <button
                  onClick={() => toggleSection('price')}
                  className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <span className="font-semibold text-forest-800">Cena (Kč/m³)</span>
                  {expandedSections.price ? (
                    <ChevronUpIcon className="h-4 w-4" />
                  ) : (
                    <ChevronDownIcon className="h-4 w-4" />
                  )}
                </button>
                
                <AnimatePresence>
                  {expandedSections.price && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="mt-3 p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-forest-700">Min: {selectedFilters.priceRange[0]} Kč</span>
                          <span className="text-sm text-forest-700">Max: {selectedFilters.priceRange[1]} Kč</span>
                        </div>
                        
                        <div className="space-y-2">
                          <input
                            type="range"
                            min="0"
                            max="5000"
                            step="100"
                            value={selectedFilters.priceRange[0]}
                            onChange={(e) => setSelectedFilters(prev => ({
                              ...prev,
                              priceRange: [parseInt(e.target.value), prev.priceRange[1]]
                            }))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                          />
                          <input
                            type="range"
                            min="0"
                            max="5000"
                            step="100"
                            value={selectedFilters.priceRange[1]}
                            onChange={(e) => setSelectedFilters(prev => ({
                              ...prev,
                              priceRange: [prev.priceRange[0], parseInt(e.target.value)]
                            }))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  )
}


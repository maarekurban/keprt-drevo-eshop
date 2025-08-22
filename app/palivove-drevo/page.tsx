'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronRightIcon, FireIcon, CubeIcon, ShoppingCartIcon, ArrowRightIcon, PhoneIcon } from '@heroicons/react/24/outline'

type WoodType = 'soft' | 'hard' | 'all'

interface Product {
  id: string
  name: string
  description: string
  woodType: 'soft' | 'hard'
  category: string
  price: string
  originalPrice?: string
  image: string
  href: string
  rating: number
  reviews: number
  inStock: boolean
  features: string[]
}

const products: Product[] = [
  // Měkké dřevo
  {
    id: 'rovnany-meter-mekky',
    name: 'Rovnaný metr - měkké dřevo',
    description: 'Dřevo skládané do rovnaných stohů. Ideální pro krby a kamna.',
    woodType: 'soft',
    category: 'Rovnaný metr',
    price: '890 Kč',
    originalPrice: '990 Kč',
    image: '/wood-pile.jpg',
    href: '/palivove-drevo/produkt/rovnany-meter-mekky',
    rating: 4.8,
    reviews: 127,
    inStock: true,
    features: ['Suché dřevo', 'Výhřevnost 18 MJ/kg', 'Doprava zdarma']
  },
  {
    id: 'rovnany-meter-suchy-mekky',
    name: 'Rovnaný metr suchý - měkké dřevo',
    description: 'Vysušené dřevo skládané do rovnaných stohů. Maximální výhřevnost.',
    woodType: 'soft',
    category: 'Rovnaný metr suchý',
    price: '1 290 Kč',
    image: '/wood-pile.jpg',
    href: '/palivove-drevo/produkt/rovnany-meter-suchy-mekky',
    rating: 4.9,
    reviews: 89,
    inStock: true,
    features: ['Vlhkost pod 15%', 'Výhřevnost 20 MJ/kg', 'Doprava zdarma']
  },
  {
    id: 'sypany-meter-mekky',
    name: 'Sypaný metr - měkké dřevo',
    description: 'Volně sypané dřevo - minimální odběr od 5ks. Ekonomické balení.',
    woodType: 'soft',
    category: 'Sypaný metr',
    price: '750 Kč',
    image: '/wood-pile.jpg',
    href: '/palivove-drevo/produkt/sypany-meter-mekky',
    rating: 4.7,
    reviews: 203,
    inStock: true,
    features: ['Ekonomické balení', 'Min. odběr 5ks', 'Rychlé dodání']
  },
  {
    id: 'sypany-meter-suchy-mekky',
    name: 'Sypaný metr suchý - měkké dřevo',
    description: 'Vysušené volně sypané dřevo - minimální odběr od 5ks.',
    woodType: 'soft',
    category: 'Sypaný metr suchý',
    price: '1 150 Kč',
    image: '/wood-pile.jpg',
    href: '/palivove-drevo/produkt/sypany-meter-suchy-mekky',
    rating: 4.8,
    reviews: 156,
    inStock: true,
    features: ['Vlhkost pod 15%', 'Min. odběr 5ks', 'Vysoká výhřevnost']
  },
  {
    id: 'sypany-meter-sitich-suchy-mekky',
    name: 'Sypaný metr v sítích suchý 1,6 PRMS',
    description: 'Vysušené dřevo v sítích. Praktické balení pro snadné skladování.',
    woodType: 'soft',
    category: 'Sypaný metr v sítích',
    price: '1 450 Kč',
    image: '/wood-pile.jpg',
    href: '/palivove-drevo/produkt/sypany-meter-sitich-suchy-mekky',
    rating: 4.9,
    reviews: 78,
    inStock: true,
    features: ['V sítích', '1,6 PRMS', 'Snadné skladování']
  },
  {
    id: 'sypany-meter-sitich-mekky',
    name: 'Sypaný metr v sítích - měkké dřevo',
    description: 'Dřevo v sítích. Praktické balení pro snadné manipulaci.',
    woodType: 'soft',
    category: 'Sypaný metr v sítích',
    price: '950 Kč',
    image: '/wood-pile.jpg',
    href: '/palivove-drevo/produkt/sypany-meter-sitich-mekky',
    rating: 4.6,
    reviews: 134,
    inStock: true,
    features: ['V sítích', 'Snadná manipulace', 'Rychlé dodání']
  },
  {
    id: 'odrezky-mekky',
    name: 'Odřezky - měkké dřevo',
    description: 'Dřevní odřezky. Ideální pro podpalování a grilování.',
    woodType: 'soft',
    category: 'Odřezky',
    price: '450 Kč',
    image: '/wood-pile.jpg',
    href: '/palivove-drevo/produkt/odrezky-mekky',
    rating: 4.5,
    reviews: 67,
    inStock: true,
    features: ['Pro podpalování', 'Pro grilování', 'Ekonomické']
  },
  // Tvrdé dřevo
  {
    id: 'rovnany-meter-tvrdy',
    name: 'Rovnaný metr - tvrdé dřevo',
    description: 'Dřevo skládané do rovnaných stohů. Buk, dub, jasan.',
    woodType: 'hard',
    category: 'Rovnaný metr',
    price: '1 290 Kč',
    originalPrice: '1 490 Kč',
    image: '/wood-pile.jpg',
    href: '/palivove-drevo/produkt/rovnany-meter-tvrdy',
    rating: 4.9,
    reviews: 189,
    inStock: true,
    features: ['Tvrdé dřevo', 'Výhřevnost 20 MJ/kg', 'Dlouhá doba hoření']
  },
  {
    id: 'rovnany-meter-suchy-tvrdy',
    name: 'Rovnaný metr suchý - tvrdé dřevo',
    description: 'Vysušené tvrdé dřevo skládané do rovnaných stohů.',
    woodType: 'hard',
    category: 'Rovnaný metr suchý',
    price: '1 690 Kč',
    image: '/wood-pile.jpg',
    href: '/palivove-drevo/produkt/rovnany-meter-suchy-tvrdy',
    rating: 5.0,
    reviews: 145,
    inStock: true,
    features: ['Vlhkost pod 15%', 'Maximální výhřevnost', 'Dlouhá doba hoření']
  },
  {
    id: 'sypany-meter-tvrdy',
    name: 'Sypaný metr - tvrdé dřevo',
    description: 'Volně sypané tvrdé dřevo - minimální odběr od 5ks.',
    woodType: 'hard',
    category: 'Sypaný metr',
    price: '1 150 Kč',
    image: '/wood-pile.jpg',
    href: '/palivove-drevo/produkt/sypany-meter-tvrdy',
    rating: 4.8,
    reviews: 167,
    inStock: true,
    features: ['Tvrdé dřevo', 'Min. odběr 5ks', 'Ekonomické balení']
  },
  {
    id: 'sypany-meter-suchy-tvrdy',
    name: 'Sypaný metr suchý - tvrdé dřevo',
    description: 'Vysušené volně sypané tvrdé dřevo - minimální odběr od 5ks.',
    woodType: 'hard',
    category: 'Sypaný metr suchý',
    price: '1 550 Kč',
    image: '/wood-pile.jpg',
    href: '/palivove-drevo/produkt/sypany-meter-suchy-tvrdy',
    rating: 4.9,
    reviews: 98,
    inStock: true,
    features: ['Vlhkost pod 15%', 'Min. odběr 5ks', 'Maximální výhřevnost']
  },
  {
    id: 'sypany-meter-sitich-suchy-tvrdy',
    name: 'Sypaný metr v sítích suchý 1,6 PRMS - tvrdé',
    description: 'Vysušené tvrdé dřevo v sítích. Nejvyšší kvalita.',
    woodType: 'hard',
    category: 'Sypaný metr v sítích',
    price: '1 850 Kč',
    image: '/wood-pile.jpg',
    href: '/palivove-drevo/produkt/sypany-meter-sitich-suchy-tvrdy',
    rating: 5.0,
    reviews: 67,
    inStock: true,
    features: ['V sítích', '1,6 PRMS', 'Nejvyšší kvalita']
  },
  {
    id: 'sypany-meter-sitich-tvrdy',
    name: 'Sypaný metr v sítích - tvrdé dřevo',
    description: 'Tvrdé dřevo v sítích. Praktické balení.',
    woodType: 'hard',
    category: 'Sypaný metr v sítích',
    price: '1 350 Kč',
    image: '/wood-pile.jpg',
    href: '/palivove-drevo/produkt/sypany-meter-sitich-tvrdy',
    rating: 4.8,
    reviews: 112,
    inStock: true,
    features: ['V sítích', 'Tvrdé dřevo', 'Snadná manipulace']
  },
  {
    id: 'odrezky-tvrdy',
    name: 'Odřezky - tvrdé dřevo',
    description: 'Tvrdé dřevní odřezky. Ideální pro podpalování.',
    woodType: 'hard',
    category: 'Odřezky',
    price: '650 Kč',
    image: '/wood-pile.jpg',
    href: '/palivove-drevo/produkt/odrezky-tvrdy',
    rating: 4.7,
    reviews: 89,
    inStock: true,
    features: ['Tvrdé dřevo', 'Pro podpalování', 'Vysoká kvalita']
  }
]

const categories = [
  'Všechny kategorie',
  'Rovnaný metr',
  'Rovnaný metr suchý',
  'Sypaný metr',
  'Sypaný metr suchý',
  'Sypaný metr v sítích',
  'Odřezky'
]

export default function PalivoveDrevoPage() {
  const [selectedWoodType, setSelectedWoodType] = useState<WoodType>('all')
  const [selectedCategory, setSelectedCategory] = useState('Všechny kategorie')
  const [priceRange, setPriceRange] = useState([0, 2000])
  const [sortBy, setSortBy] = useState('popularity')

  const filteredProducts = products.filter(product => {
    const woodTypeMatch = selectedWoodType === 'all' || product.woodType === selectedWoodType
    const categoryMatch = selectedCategory === 'Všechny kategorie' || product.category === selectedCategory
    const priceMatch = parseInt(product.price.replace(/\D/g, '')) >= priceRange[0] && 
                      parseInt(product.price.replace(/\D/g, '')) <= priceRange[1]
    
    return woodTypeMatch && categoryMatch && priceMatch
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return parseInt(a.price.replace(/\D/g, '')) - parseInt(b.price.replace(/\D/g, ''))
      case 'price-high':
        return parseInt(b.price.replace(/\D/g, '')) - parseInt(a.price.replace(/\D/g, ''))
      case 'rating':
        return b.rating - a.rating
      default:
        return b.reviews - a.reviews // popularity
    }
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-forest-600 to-forest-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-max section-padding relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Palivové{' '}
                <span className="text-gold-400">dřevo</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed text-forest-100">
                Kvalitní palivové dřevo pro krby, kamna a grily. Suché dřevo s vysokou výhřevností 
                a dlouhou dobou hoření. Doprava zdarma od 2 m³.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#produkty"
                  className="btn-primary inline-flex items-center justify-center group"
                >
                  Zobrazit nabídku
                  <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:+420732443827"
                  className="btn-secondary inline-flex items-center justify-center group"
                >
                  <PhoneIcon className="mr-2 h-5 w-5" />
                  Objednat telefonicky
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/wood-pile.jpg"
                  alt="Palivové dřevo"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wood Type Filter */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="flex justify-center mb-6">
            <div className="bg-white rounded-xl p-2 shadow-lg border border-wood-200">
              <div className="flex space-x-2">
                <button
                  onClick={() => setSelectedWoodType('all')}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    selectedWoodType === 'all'
                      ? 'bg-wood-500 text-white'
                      : 'text-forest-600 hover:text-forest-800'
                  }`}
                >
                  Všechny druhy
                </button>
                <button
                  onClick={() => setSelectedWoodType('soft')}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    selectedWoodType === 'soft'
                      ? 'bg-wood-500 text-white'
                      : 'text-forest-600 hover:text-forest-800'
                  }`}
                >
                  Měkké dřevo
                </button>
                <button
                  onClick={() => setSelectedWoodType('hard')}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    selectedWoodType === 'hard'
                      ? 'bg-wood-500 text-white'
                      : 'text-forest-600 hover:text-forest-800'
                  }`}
                >
                  Tvrdé dřevo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-wood-200 sticky top-24">
                <h3 className="text-lg font-semibold text-forest-800 mb-6">Filtry</h3>
                
                {/* Category Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-forest-700 mb-3">Kategorie</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <label key={category} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="category"
                          value={category}
                          checked={selectedCategory === category}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className="text-wood-500 focus:ring-wood-500"
                        />
                        <span className="text-forest-600">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-forest-700 mb-3">Cena (Kč)</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm text-forest-600">
                      <span>{priceRange[0]} Kč</span>
                      <span>{priceRange[1]} Kč</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="2000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full h-2 bg-forest-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                  </div>
                </div>

                {/* Sort By */}
                <div className="mb-6">
                  <h4 className="font-medium text-forest-700 mb-3">Řadit podle</h4>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-3 py-2 border border-forest-300 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-wood-500"
                  >
                    <option value="popularity">Popularita</option>
                    <option value="price-low">Cena: od nejnižší</option>
                    <option value="price-high">Cena: od nejvyšší</option>
                    <option value="rating">Hodnocení</option>
                  </select>
                </div>

                {/* Results Count */}
                <div className="pt-4 border-t border-forest-200">
                  <p className="text-sm text-forest-600">
                    Nalezeno {sortedProducts.length} produktů
                  </p>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {sortedProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-wood-200">
                    <Link href={product.href}>
                      <div className="relative">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                        />
                        {product.originalPrice && (
                          <div className="absolute top-4 left-4">
                            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-sm font-medium">
                              Sleva
                            </span>
                          </div>
                        )}
                      </div>
                    </Link>
                    
                    <div className="p-6">
                      <Link href={product.href}>
                        <h3 className="text-lg font-bold text-forest-800 mb-2 hover:text-wood-600 transition-colors">
                          {product.name}
                        </h3>
                      </Link>
                      
                      <p className="text-forest-600 text-sm mb-4 line-clamp-2">
                        {product.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-1 mb-4">
                        {product.features.slice(0, 2).map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 bg-wood-500 rounded-full"></span>
                            <span className="text-xs text-forest-600">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Price */}
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="text-xl font-bold text-forest-800">
                            od {product.price}
                          </span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-500 line-through ml-2">
                              {product.originalPrice}
                            </span>
                          )}
                        </div>
                        <span className="text-sm text-forest-600">
                          {product.inStock ? 'Skladem' : 'Na dotaz'}
                        </span>
                      </div>

                      {/* Add to Cart Button */}
                      <button className="w-full bg-wood-500 hover:bg-wood-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2">
                        <ShoppingCartIcon className="h-5 w-5" />
                        <span>Do košíku</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {sortedProducts.length === 0 && (
                <div className="text-center py-12">
                  <CubeIcon className="h-16 w-16 text-forest-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-forest-600 mb-2">
                    Nebyly nalezeny žádné produkty
                  </h3>
                  <p className="text-forest-500">
                    Zkuste upravit filtry nebo se podívejte na všechny produkty
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-forest-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-forest-800 mb-4">
              Proč si vybrat naše palivové dřevo?
            </h2>
            <p className="text-lg text-forest-600">
              Kvalita, kterou poznáte při topení
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-wood-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FireIcon className="h-8 w-8 text-wood-600" />
              </div>
              <h3 className="text-xl font-semibold text-forest-800 mb-2">
                Vysoká výhřevnost
              </h3>
              <p className="text-forest-600">
                Naše dřevo má výhřevnost až 20 MJ/kg, což znamená delší a intenzivnější teplo.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-wood-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CubeIcon className="h-8 w-8 text-wood-600" />
              </div>
              <h3 className="text-xl font-semibold text-forest-800 mb-2">
                Správné skladování
              </h3>
              <p className="text-forest-600">
                Dřevo je řádně vysušené a skladované v suchých podmínkách pro optimální kvalitu.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-wood-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FireIcon className="h-8 w-8 text-wood-600" />
              </div>
              <h3 className="text-xl font-semibold text-forest-800 mb-2">
                Rychlé dodání
              </h3>
              <p className="text-forest-600">
                Dodáváme do 24-48 hodin po celé ČR. V okolí Strážnice doprava zdarma od 2 m³.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


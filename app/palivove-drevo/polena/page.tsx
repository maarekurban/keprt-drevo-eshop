'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowRightIcon, 
  PhoneIcon, 
  ShoppingCartIcon,
  CheckIcon,
  QuestionMarkCircleIcon,
  TruckIcon,
  FireIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'

// Mock data pro produkty
const products = [
  {
    id: 1,
    name: 'Bukové dřevo suché',
    description: 'Kvalitní bukové dřevo s vlhkostí 20% a výhřevností 20 MJ/kg',
    price: 2500,
    unit: 'PRMS',
    moisture: '20%',
    calorific: '20 MJ/kg',
    length: '25 cm',
    woodType: 'Buk',
    packaging: 'Sypané',
    availability: 'Skladem',
    image: '/wood-pile.jpg',
    originalPrice: 2950,
    discount: 15
  },
  {
    id: 2,
    name: 'Dubové dřevo suché',
    description: 'Tvrdé dubové dřevo s dlouhou dobou hoření',
    price: 2800,
    unit: 'PRMS',
    moisture: '18%',
    calorific: '19 MJ/kg',
    length: '30 cm',
    woodType: 'Dub',
    packaging: 'Rovnané',
    availability: 'Skladem',
    image: '/wood-pile.jpg'
  },
  {
    id: 3,
    name: 'Smrkové dřevo suché',
    description: 'Měkké smrkové dřevo pro rychlé zatopení',
    price: 1800,
    unit: 'PRMS',
    moisture: '22%',
    calorific: '16 MJ/kg',
    length: '20 cm',
    woodType: 'Smrk',
    packaging: 'Sypané',
    availability: 'Skladem',
    image: '/wood-pile.jpg'
  }
]

// Filtry
const filters = {
  woodType: ['Všechny', 'Buk', 'Dub', 'Smrk', 'Bříza'],
  length: ['Všechny', '20 cm', '25 cm', '30 cm', '40 cm'],
  moisture: ['Všechny', 'Pod 20%', '20-25%', 'Nad 25%'],
  packaging: ['Všechny', 'Sypané', 'Rovnané', 'Plnometr'],
  priceRange: [0, 5000]
}

// FAQ data
const faqData = [
  {
    question: 'Jak skladovat palivové dřevo?',
    answer: 'Dřevo skladujte na suchém a větraném místě, ideálně pod střechou. Polena by měla být uložena tak, aby mezi nimi mohl proudit vzduch.'
  },
  {
    question: 'Jaký je rozdíl mezi měkkým a tvrdým dřevem?',
    answer: 'Tvrdé dřevo (buk, dub) má vyšší výhřevnost a delší dobu hoření. Měkké dřevo (smrk, borovice) hoří rychleji a je vhodné pro zatopení.'
  },
  {
    question: 'Co znamenají zkratky BK, DB, SM?',
    answer: 'BK = Buk, DB = Dub, SM = Smrk. Tyto zkratky označují druh dřeviny.'
  },
  {
    question: 'Jak vybrat vhodnou délku polen?',
    answer: 'Délka by měla odpovídat rozměrům vašeho krbu nebo kamen. Standardní délka je 25-30 cm.'
  }
]

export default function PolenaPage() {
  const [selectedFilters, setSelectedFilters] = useState({
    woodType: 'Všechny',
    length: 'Všechny',
    moisture: 'Všechny',
    packaging: 'Všechny',
    priceRange: [0, 5000]
  })

  const [sortBy, setSortBy] = useState('popularity')

  return (
    <div className="min-h-screen bg-wood-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-forest-600 to-forest-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-max section-padding relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Suché bukové dřevo{' '}
                <span className="text-gold-400">s výhřevností 20 MJ/kg</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed text-forest-100">
                Kvalitní palivové dřevo pro váš krb, kamna nebo gril. 
                Suché dřevo s vlhkostí pod 20% pro maximální výhřevnost.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="btn-primary inline-flex items-center justify-center group">
                  <ShoppingCartIcon className="mr-2 h-5 w-5" />
                  Do košíku
                </button>
                <a
                  href="tel:+420123456789"
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
                  alt="Suché bukové dřevo"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Products */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-4">
                <h3 className="text-xl font-bold text-forest-800 mb-6">Filtry</h3>
                
                {/* Wood Type */}
                <div className="mb-6">
                  <h4 className="font-semibold text-forest-700 mb-3">Druh dřeviny</h4>
                  <div className="space-y-2">
                    {filters.woodType.map((type) => (
                      <label key={type} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="woodType"
                          value={type}
                          checked={selectedFilters.woodType === type}
                          onChange={(e) => setSelectedFilters({...selectedFilters, woodType: e.target.value})}
                          className="text-forest-600 focus:ring-forest-500"
                        />
                        <span className="text-forest-600">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Length */}
                <div className="mb-6">
                  <h4 className="font-semibold text-forest-700 mb-3">Délka polen</h4>
                  <div className="space-y-2">
                    {filters.length.map((length) => (
                      <label key={length} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="length"
                          value={length}
                          checked={selectedFilters.length === length}
                          onChange={(e) => setSelectedFilters({...selectedFilters, length: e.target.value})}
                          className="text-forest-600 focus:ring-forest-500"
                        />
                        <span className="text-forest-600">{length}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Moisture */}
                <div className="mb-6">
                  <h4 className="font-semibold text-forest-700 mb-3">Vlhkost</h4>
                  <div className="space-y-2">
                    {filters.moisture.map((moisture) => (
                      <label key={moisture} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="moisture"
                          value={moisture}
                          checked={selectedFilters.moisture === moisture}
                          onChange={(e) => setSelectedFilters({...selectedFilters, moisture: e.target.value})}
                          className="text-forest-600 focus:ring-forest-500"
                        />
                        <span className="text-forest-600">{moisture}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h4 className="font-semibold text-forest-700 mb-3">Cena (Kč)</h4>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="0"
                      max="5000"
                      value={selectedFilters.priceRange[1]}
                      onChange={(e) => setSelectedFilters({
                        ...selectedFilters, 
                        priceRange: [0, parseInt(e.target.value)]
                      })}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-forest-600">
                      <span>0 Kč</span>
                      <span>{selectedFilters.priceRange[1]} Kč</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedFilters({
                    woodType: 'Všechny',
                    length: 'Všechny',
                    moisture: 'Všechny',
                    packaging: 'Všechny',
                    priceRange: [0, 5000]
                  })}
                  className="w-full text-center text-forest-600 hover:text-forest-800 transition-colors"
                >
                  Vymazat filtry
                </button>
              </div>
            </div>

            {/* Products */}
            <div className="lg:col-span-3">
              {/* Sort and View */}
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-forest-800">
                  Palivové dřevo ({products.length} produktů)
                </h2>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-forest-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500"
                >
                  <option value="popularity">Nejpopulárnější</option>
                  <option value="price-low">Nejlevnější</option>
                  <option value="price-high">Nejdražší</option>
                  <option value="calorific">Výhřevnost</option>
                </select>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                  >
                    {/* Product Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      {product.discount && (
                        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          -{product.discount}%
                        </div>
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-forest-800 mb-2">
                        {product.name}
                      </h3>
                      <p className="text-forest-600 mb-4 text-sm">
                        {product.description}
                      </p>

                      {/* Product Details */}
                      <div className="space-y-2 mb-4 text-sm">
                        <div className="flex justify-between">
                          <span className="text-forest-600">Vlhkost:</span>
                          <span className="font-semibold">{product.moisture}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-forest-600">Výhřevnost:</span>
                          <span className="font-semibold">{product.calorific}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-forest-600">Délka:</span>
                          <span className="font-semibold">{product.length}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-forest-600">Dostupnost:</span>
                          <span className="font-semibold text-green-600">{product.availability}</span>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="text-2xl font-bold text-forest-800">
                            {product.price.toLocaleString()} Kč
                          </span>
                          <span className="text-forest-600 ml-2">/{product.unit}</span>
                        </div>
                        {product.originalPrice && (
                          <span className="text-forest-400 line-through">
                            {product.originalPrice.toLocaleString()} Kč
                          </span>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        <button className="flex-1 bg-forest-600 hover:bg-forest-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center">
                          <ShoppingCartIcon className="w-4 h-4 mr-2" />
                          Do košíku
                        </button>
                        <Link
                          href={`/produkt/${product.id}`}
                          className="flex-1 border border-forest-300 text-forest-700 hover:bg-forest-50 py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
                        >
                          Detail
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Units Explanation */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-forest-800 mb-8 text-center">
              Výklad pojmů a jednotek
            </h2>
            <div className="prose prose-lg max-w-none">
              <h3>Rozdíly mezi jednotkami</h3>
              <ul>
                <li><strong>PRMS (Prostorový metr sypaný):</strong> Dřevo naskládané volně bez mezer</li>
                <li><strong>PRM (Prostorový metr rovnaný):</strong> Dřevo naskládané těsně vedle sebe</li>
                <li><strong>Plnometr (m³):</strong> Skutečný objem dřeva bez mezer</li>
              </ul>
              <p>
                <strong>Důležité:</strong> Suché dřevo má vyšší výhřevnost a nižší hmotnost než dřevo vlhké. 
                Doporučujeme skladovat dřevo na suchém místě pro dosažení maximální výhřevnosti.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-forest-800 mb-8 text-center">
              Často kladené dotazy
            </h2>
            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg"
                >
                  <h3 className="text-xl font-semibold text-forest-800 mb-3 flex items-center">
                    <QuestionMarkCircleIcon className="w-6 h-6 mr-3 text-forest-600" />
                    {faq.question}
                  </h3>
                  <p className="text-forest-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="bg-forest-50 section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-forest-800 mb-4">
              Tipy a rady
            </h2>
            <p className="text-xl text-forest-600">
              Užitečné články o správném skladování a topení dřevem
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Jak správně vyskládat dřevo do dřevníku',
                excerpt: 'Naučte se správné techniky skladování dřeva pro maximální výhřevnost.',
                href: '/blog/jak-spravne-vyskladat-drevo'
              },
              {
                title: 'Proč volit certifikované brikety',
                excerpt: 'Výhody certifikovaných briket a jak je rozpoznat.',
                href: '/blog/proc-volit-certifikovane-brikety'
              },
              {
                title: 'Rozdíl mezi měkkým a tvrdým dřevem',
                excerpt: 'Kdy použít jaký druh dřeva pro optimální topení.',
                href: '/blog/rozdil-mezi-mekkym-a-tvrdym-drevem'
              }
            ].map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-forest-800 mb-3">
                  {tip.title}
                </h3>
                <p className="text-forest-600 mb-4">
                  {tip.excerpt}
                </p>
                <Link
                  href={tip.href}
                  className="inline-flex items-center text-forest-700 font-semibold hover:text-forest-600 transition-colors"
                >
                  Přečíst článek
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-forest-800 mb-8 text-center">
              Doprava palivového dřeva
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-forest-800 mb-4">
                  Jak funguje rozvoz?
                </h3>
                <div className="space-y-4 text-forest-600">
                  <div className="flex items-start space-x-3">
                    <TruckIcon className="w-6 h-6 text-forest-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-forest-800">Doprava po celé ČR</h4>
                      <p>Rozvážíme do všech regionů České republiky</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FireIcon className="w-6 h-6 text-forest-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-forest-800">15% DPH</h4>
                      <p>Palivové dřevo je osvobozeno od DPH</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckIcon className="w-6 h-6 text-forest-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-forest-800">Osobní odběr</h4>
                      <p>Možnost vyzvednutí na naší provozovně ve Strážnici</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-forest-50 rounded-2xl p-6">
                <h4 className="text-xl font-bold text-forest-800 mb-4">
                  Ceny dopravy
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Do 20 km</span>
                    <span className="font-semibold">500 Kč</span>
                  </div>
                  <div className="flex justify-between">
                    <span>20-50 km</span>
                    <span className="font-semibold">800 Kč</span>
                  </div>
                  <div className="flex justify-between">
                    <span>50-100 km</span>
                    <span className="font-semibold">1 200 Kč</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Nad 100 km</span>
                    <span className="font-semibold">30 Kč/km</span>
                  </div>
                  <div className="border-t pt-3 mt-3">
                    <div className="flex justify-between text-forest-700">
                      <span>Při objednávce nad 5 000 Kč</span>
                      <span className="font-bold text-green-600">DOPRAVA ZDARMA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeftIcon, ChevronRightIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const offers = [
  {
    id: 1,
    title: 'Sleva 15% na bukové dřevo',
    description: 'Tento týden sleva na kvalitní bukové dřevo. Suché dřevo s výhřevností 20 MJ/kg.',
    image: '/wood-pile.jpg',
    price: 'od 2 500 Kč/m³',
    originalPrice: '2 950 Kč/m³',
    href: '/kategorie/palivove-drevo/bukove-drevo',
    badge: 'AKCE'
  },
  {
    id: 2,
    title: 'Nové brikety z dubového dřeva',
    description: 'Právě jsme přidali do nabídky kvalitní brikety z dubového dřeva. Ideální pro krby a kamna.',
    image: '/wood-pile.jpg',
    price: 'od 8 500 Kč/t',
    href: '/kategorie/brikety/dubove-brikety',
    badge: 'NOVINKA'
  },
  {
    id: 3,
    title: 'Doprava zdarma po celé ČR',
    description: 'Při objednávce nad 5 000 Kč doprava zdarma po celé České republice.',
    image: '/wood-pile.jpg',
    price: 'Zdarma',
    href: '/doprava',
    badge: 'DOPRAVA'
  }
]

const news = [
  {
    title: 'Jak správně skladovat palivové dřevo',
    excerpt: 'Přečtěte si naše tipy pro správné skladování dřeva, aby si zachovalo svou kvalitu a výhřevnost.',
    date: '15. 12. 2024',
    href: '/blog/jak-spravne-skladovat-drevo',
    image: '/wood-pile.jpg'
  },
  {
    title: 'Rozdíly mezi briketami a peletami',
    excerpt: 'Nevíte si rady s výběrem mezi briketami a peletami? Poradíme vám, co je pro vás nejlepší.',
    date: '10. 12. 2024',
    href: '/blog/brikety-vs-pelety',
    image: '/wood-pile.jpg'
  },
  {
    title: 'Nové certifikáty FSC a PEFC',
    excerpt: 'Jsme hrdí na to, že jsme získali certifikáty pro udržitelné lesní hospodářství.',
    date: '5. 12. 2024',
    href: '/blog/certifikaty-fsc-pefc',
    image: '/wood-pile.jpg'
  }
]

export default function CurrentOffers() {
  const [currentOffer, setCurrentOffer] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentOffer((prev) => (prev + 1) % offers.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextOffer = () => {
    setCurrentOffer((prev) => (prev + 1) % offers.length)
    setIsAutoPlaying(false)
  }

  const prevOffer = () => {
    setCurrentOffer((prev) => (prev - 1 + offers.length) % offers.length)
    setIsAutoPlaying(false)
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-forest-800 mb-4">
            Aktuální akce a novinky
          </h2>
          <p className="text-lg text-forest-600 max-w-2xl mx-auto">
            Sledujte naše nejnovější nabídky a užitečné články o dřevu a topení
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Offers Slider */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h3 className="text-2xl font-bold text-forest-800 mb-6">Aktuální akce</h3>
            
            <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentOffer}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <img
                    src={offers[currentOffer].image}
                    alt={offers[currentOffer].title}
                    className="w-full h-64 object-cover"
                  />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {offers[currentOffer].badge}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-forest-800 mb-2">
                      {offers[currentOffer].title}
                    </h4>
                    <p className="text-forest-600 mb-4">
                      {offers[currentOffer].description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-forest-600">
                          {offers[currentOffer].price}
                        </span>
                        {offers[currentOffer].originalPrice && (
                          <span className="text-gray-400 line-through">
                            {offers[currentOffer].originalPrice}
                          </span>
                        )}
                      </div>
                      
                      <Link
                        href={offers[currentOffer].href}
                        className="btn-primary inline-flex items-center"
                      >
                        Více info
                        <ArrowRightIcon className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <button
                onClick={prevOffer}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-colors"
              >
                <ChevronLeftIcon className="h-5 w-5 text-forest-600" />
              </button>
              
              <button
                onClick={nextOffer}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-colors"
              >
                <ChevronRightIcon className="h-5 w-5 text-forest-600" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {offers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentOffer(index)
                      setIsAutoPlaying(false)
                    }}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentOffer ? 'bg-forest-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* News */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-forest-800 mb-6">Blog a novinky</h3>
            
            <div className="space-y-6">
              {news.map((article, index) => (
                <motion.div
                  key={article.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-32 h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-semibold text-forest-800 hover:text-forest-600 transition-colors">
                          <Link href={article.href}>
                            {article.title}
                          </Link>
                        </h4>
                        <span className="text-sm text-gray-500 whitespace-nowrap ml-4">
                          {article.date}
                        </span>
                      </div>
                      
                      <p className="text-forest-600 mb-4">
                        {article.excerpt}
                      </p>
                      
                      <Link
                        href={article.href}
                        className="inline-flex items-center text-forest-600 hover:text-forest-700 font-medium transition-colors"
                      >
                        Přečíst více
                        <ArrowRightIcon className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/blog"
                className="btn-outline inline-flex items-center"
              >
                Všechny články
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

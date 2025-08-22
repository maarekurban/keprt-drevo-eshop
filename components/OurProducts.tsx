'use client'

import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

export default function OurProducts() {
  const products = [
    {
      id: 1,
      title: 'Palivové dřevo',
      description: 'Kvalitní bukové, dubové a smrkové dřevo pro vytápění. Suché, štípané a připravené k okamžitému použití.',
      image: '/wood-pile.jpg',
      href: '/palivove-drevo',
      features: ['Měkké a tvrdé dřeviny', 'Různé délky polen', 'Suché dřevo 15-20% vlhkost', 'Dodávka po celé ČR']
    },
    {
      id: 2,
      title: 'Brikety',
      description: 'Vysokokvalitní RUF brikety s dlouhou dobou hoření. Ideální pro krby, kamna i kotle.',
      image: '/ruf-briquettes.jpg',
      href: '/brikety',
      features: ['RUF tvrdé brikety', 'RUF dubové brikety', 'Výhřevnost až 20 MJ/kg', 'Ekologické balení']
    },
    {
      id: 3,
      title: 'Truhlářské řezivo',
      description: 'Profesionální řezivo pro truhláře a stavební firmy. Sušené, neomítané v různých dřevinách.',
      image: '/rezivo.png',
      href: '/truhlarske-rezivo',
      features: ['Smrk, dub, buk a další', 'Různé tloušťky a délky', 'Sušené řezivo', 'Velkoobchodní ceny']
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-forest-800 mb-4">
            Naše produkty
          </h2>
          <p className="text-xl text-forest-600 max-w-3xl mx-auto">
            Kompletní sortiment dřevních produktů pro domácnosti i profesionály
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-forest-200 group"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/30 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-forest-800 mb-3 group-hover:text-forest-600 transition-colors">
                  {product.title}
                </h3>
                
                <p className="text-forest-600 mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-forest-700">
                      <div className="w-2 h-2 bg-forest-500 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  href={product.href}
                  className="inline-flex items-center bg-wood-500 hover:bg-wood-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors group-hover:translate-x-1 transition-transform"
                >
                  Zobrazit produkty
                  <ChevronRightIcon className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

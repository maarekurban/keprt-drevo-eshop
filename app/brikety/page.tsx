'use client'

import Link from 'next/link'
import { ChevronRightIcon, FireIcon, CubeIcon, ArrowRightIcon, PhoneIcon } from '@heroicons/react/24/outline'

interface BriquetteProduct {
  id: string
  name: string
  description: string
  price: string
  originalPrice?: string
  image: string
  href: string
  features: string[]
  inStock: boolean
}

const briquetteProducts: BriquetteProduct[] = [
  {
    id: 'ruf-tvrdy',
    name: 'RUF Tvrdé brikety',
    description: 'Kvalitní tvrdé brikety s dlouhou dobou hoření. Ideální pro krby, kamna a grily.',
    price: '4 500 Kč',
    originalPrice: '4 900 Kč',
    image: '/ruf-briquettes.jpg',
    href: '/brikety/produkt/ruf-tvrdy',
    features: ['Dlouhá doba hoření', 'Vysoká výhřevnost', 'Ekologické'],
    inStock: true
  },
  {
    id: 'ruf-dubovy',
    name: 'RUF Dubové brikety',
    description: 'Dubové brikety s výjimečnou výhřevností. Nejvyšší kvalita pro náročné zákazníky.',
    price: '5 200 Kč',
    image: '/ruf-briquettes.jpg',
    href: '/brikety/produkt/ruf-dubovy',
    features: ['Dubové dřevo', 'Maximální výhřevnost', 'Certifikované'],
    inStock: true
  }
]

export default function BriketyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-forest-600 to-forest-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-max section-padding relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Ekologické{' '}
                <span className="text-gold-400">brikety</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed text-forest-100">
                Ekologické brikety s dlouhou dobou hoření. Ideální pro krby, kamna a grily. 
                Vyberte si hmotnost a my vám vypočítáme cenu.
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
                  src="/ruf-briquettes.jpg"
                  alt="Ekologické brikety"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {briquetteProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-wood-200">
                <Link href={product.href}>
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                    />
                    {product.originalPrice && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Sleva
                        </span>
                      </div>
                    )}
                  </div>
                </Link>
                
                <div className="p-8">
                  <Link href={product.href}>
                    <h2 className="text-2xl font-bold text-forest-800 mb-4 hover:text-wood-600 transition-colors">
                      {product.name}
                    </h2>
                  </Link>
                  
                  <p className="text-forest-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-wood-500 rounded-full"></div>
                        <span className="text-forest-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl font-bold text-forest-800">
                        od {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                    <p className="text-forest-600 mt-2">Cena za paletu včetně DPH</p>
                  </div>

                  {/* Stock Status */}
                  <div className="mb-6">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      product.inStock 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {product.inStock ? 'Skladem' : 'Na dotaz'}
                    </span>
                  </div>

                  {/* Detail Button */}
                  <Link
                    href={product.href}
                    className="w-full bg-wood-500 hover:bg-wood-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Detail produktu</span>
                    <ChevronRightIcon className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Briquettes */}
      <section className="section-padding bg-forest-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-forest-800 mb-4">
              Proč si vybrat naše brikety?
            </h2>
            <p className="text-lg text-forest-600">
              Ekologické a ekonomické řešení pro vaše topení
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-wood-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FireIcon className="h-8 w-8 text-wood-600" />
              </div>
              <h3 className="text-xl font-semibold text-forest-800 mb-2">
                Dlouhá doba hoření
              </h3>
              <p className="text-forest-600">
                Naše brikety hoří až 3x déle než běžné dřevo, což znamená méně práce s přikládáním.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-wood-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CubeIcon className="h-8 w-8 text-wood-600" />
              </div>
              <h3 className="text-xl font-semibold text-forest-800 mb-2">
                Ekologické
              </h3>
              <p className="text-forest-600">
                Vyrobené z čistého dřevního odpadu bez chemických přísad. Šetrné k životnímu prostředí.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-wood-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FireIcon className="h-8 w-8 text-wood-600" />
              </div>
              <h3 className="text-xl font-semibold text-forest-800 mb-2">
                Vysoká výhřevnost
              </h3>
              <p className="text-forest-600">
                Výhřevnost až 18 MJ/kg zajišťuje intenzivní teplo a efektivní vytápění.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Order */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-forest-800 mb-4">
              Jak objednat brikety?
            </h2>
            <p className="text-lg text-forest-600">
              Jednoduchý proces objednávky
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-wood-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-wood-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-forest-800 mb-2">
                Vyberte typ
              </h3>
              <p className="text-forest-600">
                Zvolte si mezi RUF tvrdými nebo dubovými briketami podle vašich preferencí.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-wood-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-wood-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-forest-800 mb-2">
                Zvolte hmotnost
              </h3>
              <p className="text-forest-600">
                Vyberte požadovanou hmotnost a systém vám automaticky vypočítá cenu.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-wood-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-wood-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-forest-800 mb-2">
                Objednejte
              </h3>
              <p className="text-forest-600">
                Dokončete objednávku a my vám brikety doručíme do 24-48 hodin.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

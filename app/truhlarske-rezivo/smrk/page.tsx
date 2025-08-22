'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronRightIcon, HomeIcon, StarIcon, ShoppingCartIcon, TruckIcon, CheckIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function SmrkPage() {
  const [selectedThickness, setSelectedThickness] = useState<30 | 40 | 50 | 60>(30)
  const [selectedLength, setSelectedLength] = useState<3 | 4 | 5>(3)
  const [selectedImage, setSelectedImage] = useState(0)
  const [activeTab, setActiveTab] = useState('specifications')

  const images = [
    '/rezivo.png',
    '/rezivo.png',
    '/rezivo.png',
    '/rezivo.png'
  ]

  const thicknessOptions = [30, 40, 50, 60] as const
  const lengthOptions = [3, 4, 5] as const

  // Ceník podle tloušťky a délky (cena za m³)
  const priceTable: Record<30 | 40 | 50 | 60, Record<3 | 4 | 5, number>> = {
    30: { 3: 12500, 4: 12800, 5: 13100 },
    40: { 3: 13200, 4: 13500, 5: 13800 },
    50: { 3: 13900, 4: 14200, 5: 14500 },
    60: { 3: 14600, 4: 14900, 5: 15200 }
  }

  const currentPrice = priceTable[selectedThickness][selectedLength]
  const volume = selectedLength * 0.1 * 0.1 // zjednodušený výpočet objemu
  const totalPrice = currentPrice * volume

  const features = [
    'Sušené neomítané řezivo',
    'Vlhkost pod 12%',
    'Kvalita A/B nebo B/C',
    'Dostupné délky: 3m, 4m, 5m',
    'Tloušťky: 30mm, 40mm, 50mm, 60mm',
    'Dostupnost: skladem'
  ]

  const specifications = [
    { label: 'Druh dřeva', value: 'Smrk (Picea abies)' },
    { label: 'Vlhkost', value: 'Pod 12%' },
    { label: 'Kvalita', value: 'A/B nebo B/C' },
    { label: 'Stav', value: 'Neomítané' },
    { label: 'Dostupné tloušťky', value: '30mm, 40mm, 50mm, 60mm' },
    { label: 'Dostupné délky', value: '3m, 4m, 5m' },
    { label: 'Minimální odběr', value: '1 m³' },
    { label: 'Dostupnost', value: 'Skladem' }
  ]

  const reviews = [
    {
      id: 1,
      name: 'Truhlářství Novák',
      rating: 5,
      date: '15. 12. 2024',
      comment: 'Výborná kvalita řeziva, přesné rozměry a rychlé dodání. Určitě budeme spolupracovat dál.'
    },
    {
      id: 2,
      name: 'Nábytek Svoboda',
      rating: 4,
      date: '10. 12. 2024',
      comment: 'Spokojenost s kvalitou a dodacími lhůtami. Dřevo je opravdu suché a dobře zpracovatelné.'
    },
    {
      id: 3,
      name: 'Dřevovýroba Černý',
      rating: 5,
      date: '5. 12. 2024',
      comment: 'Kvalitní smrkové řezivo za rozumnou cenu. Doporučujeme všem truhlářům.'
    }
  ]

  const relatedProducts = [
    {
      id: 'borovice',
      name: 'Borovice',
      price: 'od 11 800 Kč',
      image: '/rezivo.png',
      href: '/truhlarske-rezivo/borovice'
    },
    {
      id: 'modrin',
      name: 'Modřín',
      price: 'od 14 200 Kč',
      image: '/rezivo.png',
      href: '/truhlarske-rezivo/modrin'
    },
    {
      id: 'dub',
      name: 'Dub',
      price: 'od 18 500 Kč',
      image: '/rezivo.png',
      href: '/truhlarske-rezivo/dub'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-forest-50 border-b border-forest-200">
        <div className="container-max px-4 py-3">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-forest-600 hover:text-forest-800 flex items-center">
              <HomeIcon className="h-4 w-4 mr-1" />
              Domů
            </Link>
            <ChevronRightIcon className="h-4 w-4 text-forest-400" />
            <Link href="/truhlarske-rezivo" className="text-forest-600 hover:text-forest-800">
              Truhlářské řezivo
            </Link>
            <ChevronRightIcon className="h-4 w-4 text-forest-400" />
            <span className="text-forest-800 font-medium">Smrk</span>
          </nav>
        </div>
      </div>

      {/* Product Details */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <div className="mb-4">
                <img
                  src={images[selectedImage]}
                  alt="Smrk - truhlářské řezivo"
                  className="w-full h-96 object-cover rounded-xl"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-wood-500' : 'border-forest-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Obrázek ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-forest-800 mb-2">
                  Smrk - truhlářské řezivo
                </h1>
                <p className="text-forest-600 mb-4">
                  Kvalitní sušené neomítané řezivo ve dřevině smrk. Ideální pro výrobu nábytku a stavebně-truhlářských výrobků.
                </p>
                
                {/* Rating */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`h-5 w-5 ${
                          i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-forest-600">(89 recenzí)</span>
                </div>
              </div>

              {/* Price Calculator */}
              <div className="mb-8 bg-forest-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-forest-800 mb-4">Výběr parametrů</h3>
                
                {/* Thickness Selection */}
                <div className="mb-6">
                  <label className="block text-forest-700 font-medium mb-3">Tloušťka:</label>
                  <div className="grid grid-cols-4 gap-2">
                    {thicknessOptions.map((thickness) => (
                      <button
                        key={thickness}
                        onClick={() => setSelectedThickness(thickness)}
                        className={`py-3 px-4 rounded-lg font-medium transition-colors ${
                          selectedThickness === thickness
                            ? 'bg-wood-500 text-white'
                            : 'bg-white text-forest-600 border border-forest-200 hover:border-wood-300'
                        }`}
                      >
                        {thickness} mm
                      </button>
                    ))}
                  </div>
                </div>

                {/* Length Selection */}
                <div className="mb-6">
                  <label className="block text-forest-700 font-medium mb-3">Délka:</label>
                  <div className="grid grid-cols-3 gap-2">
                    {lengthOptions.map((length) => (
                      <button
                        key={length}
                        onClick={() => setSelectedLength(length)}
                        className={`py-3 px-4 rounded-lg font-medium transition-colors ${
                          selectedLength === length
                            ? 'bg-wood-500 text-white'
                            : 'bg-white text-forest-600 border border-forest-200 hover:border-wood-300'
                        }`}
                      >
                        {length} m
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Display */}
                <div className="border-t border-forest-200 pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-forest-600">Cena za m³:</span>
                    <span className="text-xl font-bold text-forest-800">{currentPrice.toLocaleString()} Kč</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-forest-600">Celková cena:</span>
                    <span className="text-2xl font-bold text-wood-600">{totalPrice.toLocaleString()} Kč</span>
                  </div>
                  <p className="text-sm text-forest-500 mt-2">Cena bez DPH</p>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="space-y-3 mb-8">
                <button className="w-full bg-wood-500 hover:bg-wood-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2">
                  <ShoppingCartIcon className="h-6 w-6" />
                  <span>Přidat do košíku - {totalPrice.toLocaleString()} Kč</span>
                </button>
                
                <a
                  href="tel:+420732443827"
                  className="w-full bg-forest-600 hover:bg-forest-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <PhoneIcon className="h-6 w-6" />
                  <span>Objednat telefonicky</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="section-padding bg-forest-50">
        <div className="container-max">
          {/* Tab Navigation */}
          <div className="flex border-b border-forest-200 mb-6">
            <button
              onClick={() => setActiveTab('specifications')}
              className={`px-6 py-3 font-medium transition-colors rounded-lg ${
                activeTab === 'specifications'
                  ? 'bg-[#dda15e] text-white'
                  : 'text-forest-600 hover:text-forest-800'
              }`}
            >
              Specifikace produktu
            </button>
            <button
              onClick={() => setActiveTab('features')}
              className={`px-6 py-3 font-medium transition-colors rounded-lg ${
                activeTab === 'features'
                  ? 'bg-[#dda15e] text-white'
                  : 'text-forest-600 hover:text-forest-800'
              }`}
            >
              Klíčové vlastnosti
            </button>
            <button
              onClick={() => setActiveTab('delivery')}
              className={`px-6 py-3 font-medium transition-colors rounded-lg ${
                activeTab === 'delivery'
                  ? 'bg-[#dda15e] text-white'
                  : 'text-forest-600 hover:text-forest-800'
              }`}
            >
              Doprava a dostupnost
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`px-6 py-3 font-medium transition-colors rounded-lg ${
                activeTab === 'reviews'
                  ? 'bg-[#dda15e] text-white'
                  : 'text-forest-600 hover:text-forest-800'
              }`}
            >
              Recenze zákazníků
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'specifications' && (
              <div>
                <h3 className="text-lg font-semibold text-forest-800 mb-4">Specifikace produktu</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-md font-semibold text-forest-800 mb-4">Technické parametry</h4>
                    <div className="space-y-3">
                      {specifications.map((spec, index) => (
                        <div key={index} className="flex justify-between py-2 border-b border-forest-100 last:border-b-0">
                          <span className="font-medium text-forest-700">{spec.label}:</span>
                          <span className="text-forest-600">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-md font-semibold text-forest-800 mb-4">Vhodné použití</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <CheckIcon className="h-5 w-5 text-green-500" />
                        <span className="text-forest-600">Výroba nábytku</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckIcon className="h-5 w-5 text-green-500" />
                        <span className="text-forest-600">Okna a dveře</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckIcon className="h-5 w-5 text-green-500" />
                        <span className="text-forest-600">Spárovky a lišty</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckIcon className="h-5 w-5 text-green-500" />
                        <span className="text-forest-600">Podlahy a palubky</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div>
                <h3 className="text-lg font-semibold text-forest-800 mb-4">Klíčové vlastnosti</h3>
                <div className="grid grid-cols-1 gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckIcon className="h-5 w-5 text-green-500" />
                      <span className="text-forest-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'delivery' && (
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <TruckIcon className="h-6 w-6 text-wood-600" />
                  <h3 className="text-lg font-semibold text-forest-800">Doprava a dostupnost</h3>
                </div>
                <div className="space-y-3 text-forest-600">
                  <div className="flex items-center space-x-2">
                    <CheckIcon className="h-5 w-5 text-green-500" />
                    <span>Doprava po celé ČR kontejnerovou autodopravou</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckIcon className="h-5 w-5 text-green-500" />
                    <span>Dodání do 3-5 pracovních dnů</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckIcon className="h-5 w-5 text-green-500" />
                    <span>Možnost osobního odběru ve Strážnici</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckIcon className="h-5 w-5 text-green-500" />
                    <span>Skladem - okamžitá expedice</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <h3 className="text-lg font-semibold text-forest-800 mb-6">Recenze zákazníků</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="bg-white rounded-xl p-6 shadow-lg border border-wood-200">
                      <div className="flex items-center space-x-2 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-forest-600 mb-4">{review.comment}</p>
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-forest-800">{review.name}</span>
                        <span className="text-sm text-forest-500">{review.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-2xl font-bold text-forest-800 mb-8 text-center">Související produkty</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <Link
                key={product.id}
                href={product.href}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-wood-200"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-forest-800 mb-2 hover:text-wood-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xl font-bold text-forest-800">{product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

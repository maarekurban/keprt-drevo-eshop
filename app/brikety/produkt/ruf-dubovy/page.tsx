'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronRightIcon, HomeIcon, StarIcon, ShoppingCartIcon, TruckIcon, CheckIcon, PhoneIcon, CalculatorIcon } from '@heroicons/react/24/outline'

interface PriceTier {
  min: number
  max: number
  pricePerKg: number
  description: string
}

const priceTiers: PriceTier[] = [
  { min: 10, max: 100, pricePerKg: 5.20, description: 'Malé balení' },
  { min: 110, max: 250, pricePerKg: 4.90, description: 'Střední balení' },
  { min: 260, max: 500, pricePerKg: 4.70, description: 'Velké balení' },
  { min: 510, max: 1000, pricePerKg: 4.50, description: 'Velkoobjemové balení' }
]

export default function RufDubovyPage() {
  const [quantity, setQuantity] = useState(50)
  const [selectedImage, setSelectedImage] = useState(0)
  const [activeTab, setActiveTab] = useState('specifications')

  const images = [
    '/ruf-briquettes.jpg',
    '/ruf-briquettes.jpg',
    '/ruf-briquettes.jpg',
    '/ruf-briquettes.jpg'
  ]

  const features = [
    'Dubové dřevo s výjimečnou výhřevností',
    'Výhřevnost 19 MJ/kg',
    'Dlouhá doba hoření až 4x déle než běžné dřevo',
    'Ekologické - vyrobené z dubového dřevního odpadu',
    'Bez chemických přísad',
    'Certifikované kvality - nejvyšší třída'
  ]

  const specifications = [
    { label: 'Typ briket', value: 'RUF Dubové brikety' },
    { label: 'Výhřevnost', value: '19 MJ/kg' },
    { label: 'Vlhkost', value: 'Pod 8%' },
    { label: 'Rozměry', value: '15 x 6,5 x 5,5 cm' },
    { label: 'Hmotnost kusu', value: '0,9 kg' },
    { label: 'Balení', value: 'Paleta nebo pytle' },
    { label: 'Minimální odběr', value: '10 kg' },
    { label: 'Dostupnost', value: 'Skladem' }
  ]

  const reviews = [
    {
      id: 1,
      name: 'Tomáš Dvořák',
      rating: 5,
      date: '18. 12. 2024',
      comment: 'Nejlepší brikety, které jsem kdy měl. Dubové dřevo je opravdu kvalitní a hoří dlouho.'
    },
    {
      id: 2,
      name: 'Anna Malá',
      rating: 5,
      date: '12. 12. 2024',
      comment: 'Výborná kvalita za rozumnou cenu. Dubové brikety jsou opravdu výjimečné.'
    },
    {
      id: 3,
      name: 'Josef Veselý',
      rating: 5,
      date: '8. 12. 2024',
      comment: 'Spokojenost na 100%. Brikety jsou suché, dobře hoří a mají skvělou výhřevnost.'
    }
  ]

  const relatedProducts = [
    {
      id: 'ruf-tvrdy',
      name: 'RUF Tvrdé brikety',
      price: 'od 4 500 Kč',
      image: '/ruf-briquettes.jpg',
      href: '/brikety/produkt/ruf-tvrdy'
    },
    {
      id: 'rovnany-meter-tvrdy',
      name: 'Rovnaný metr - tvrdé dřevo',
      price: 'od 1 290 Kč',
      image: '/wood-pile.jpg',
      href: '/palivove-drevo/produkt/rovnany-meter-tvrdy'
    },
    {
      id: 'sypany-meter-tvrdy',
      name: 'Sypaný metr - tvrdé dřevo',
      price: 'od 1 190 Kč',
      image: '/wood-pile.jpg',
      href: '/palivove-drevo/produkt/sypany-meter-tvrdy'
    }
  ]

  // Calculate price based on quantity
  const getCurrentPriceTier = () => {
    return priceTiers.find(tier => quantity >= tier.min && quantity <= tier.max) || priceTiers[0]
  }

  const currentTier = getCurrentPriceTier()
  const totalPrice = quantity * currentTier.pricePerKg

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
            <Link href="/brikety" className="text-forest-600 hover:text-forest-800">
              Brikety
            </Link>
            <ChevronRightIcon className="h-4 w-4 text-forest-400" />
            <span className="text-forest-800 font-medium">RUF Dubové brikety</span>
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
                  alt="RUF Dubové brikety"
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
                  RUF Dubové brikety
                </h1>
                <p className="text-forest-600 mb-4">
                  Dubové brikety s výjimečnou výhřevností. Nejvyšší kvalita pro náročné zákazníky.
                </p>
                
                {/* Rating */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`h-5 w-5 ${
                          i < 5 ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-forest-600">(67 recenzí)</span>
                </div>
              </div>

              {/* Price Calculator */}
              <div className="mb-8 bg-forest-50 rounded-xl p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <CalculatorIcon className="h-6 w-6 text-wood-600" />
                  <h3 className="text-lg font-semibold text-forest-800">Kalkulátor ceny</h3>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-forest-700 mb-2">
                    Množství (kg): {quantity} kg
                  </label>
                  <div className="flex items-center space-x-4 mb-2">
                    <input
                      type="range"
                      min="10"
                      max="1000"
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value))}
                      className="flex-1 h-3 bg-forest-200 rounded-lg appearance-none cursor-pointer slider"
                      style={{
                        background: `linear-gradient(to right, #dda15e 0%, #dda15e ${(quantity - 10) / (1000 - 10) * 100}%, #e5e7eb ${(quantity - 10) / (1000 - 10) * 100}%, #e5e7eb 100%)`
                      }}
                    />
                    <input
                      type="number"
                      min="10"
                      max="1000"
                      value={quantity}
                      onChange={(e) => {
                        const value = parseInt(e.target.value)
                        if (value >= 10 && value <= 1000) {
                          setQuantity(value)
                        }
                      }}
                      className="w-20 px-2 py-1 border border-forest-300 rounded text-center text-sm"
                    />
                    <span className="text-sm text-forest-600">kg</span>
                  </div>
                  <div className="flex justify-between text-xs text-forest-500">
                    <span>10 kg</span>
                    <span>1000 kg</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-forest-600">Cena za kg:</span>
                    <span className="font-semibold text-forest-800">{currentTier.pricePerKg} Kč</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-forest-600">Cenová kategorie:</span>
                    <span className="font-semibold text-forest-800">{currentTier.description}</span>
                  </div>
                </div>

                <div className="border-t border-forest-200 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-forest-800">Celková cena:</span>
                    <span className="text-2xl font-bold text-forest-800">{totalPrice.toLocaleString()} Kč</span>
                  </div>
                  <p className="text-sm text-forest-600 mt-1">včetně DPH</p>
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="mb-8">
                <div className="space-y-3">
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
              onClick={() => setActiveTab('pricing')}
              className={`px-6 py-3 font-medium transition-colors rounded-lg ${
                activeTab === 'pricing'
                  ? 'bg-[#dda15e] text-white'
                  : 'text-forest-600 hover:text-forest-800'
              }`}
            >
              Cenové kategorie
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
                    <h4 className="text-md font-semibold text-forest-800 mb-4">Výhody dubového dřeva</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <CheckIcon className="h-5 w-5 text-green-500" />
                        <span className="text-forest-600">Nejvyšší výhřevnost ze všech dřevin</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckIcon className="h-5 w-5 text-green-500" />
                        <span className="text-forest-600">Dlouhá doba hoření</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckIcon className="h-5 w-5 text-green-500" />
                        <span className="text-forest-600">Stabilní plamen</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckIcon className="h-5 w-5 text-green-500" />
                        <span className="text-forest-600">Minimální popel</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckIcon className="h-5 w-5 text-green-500" />
                        <span className="text-forest-600">Ideální pro náročné topení</span>
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

            {activeTab === 'pricing' && (
              <div>
                <h3 className="text-lg font-semibold text-forest-800 mb-6">Cenové kategorie</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {priceTiers.map((tier, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-wood-200">
                      <div className="text-center">
                        <h4 className="text-lg font-semibold text-forest-800 mb-2">{tier.description}</h4>
                        <p className="text-forest-600 mb-4">{tier.min} - {tier.max} kg</p>
                        <div className="text-2xl font-bold text-wood-600 mb-2">{tier.pricePerKg} Kč/kg</div>
                        <p className="text-sm text-forest-500">včetně DPH</p>
                      </div>
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
                    <span>Doprava zdarma od 500 kg</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckIcon className="h-5 w-5 text-green-500" />
                    <span>Dodání do 24-48 hodin</span>
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

      {/* Price Tiers */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-2xl font-bold text-forest-800 mb-8 text-center">Cenové kategorie</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {priceTiers.map((tier, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-wood-200">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-forest-800 mb-2">{tier.description}</h3>
                  <p className="text-forest-600 mb-4">{tier.min} - {tier.max} kg</p>
                  <div className="text-2xl font-bold text-wood-600 mb-2">{tier.pricePerKg} Kč/kg</div>
                  <p className="text-sm text-forest-500">včetně DPH</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="section-padding bg-forest-50">
        <div className="container-max">
          <h2 className="text-2xl font-bold text-forest-800 mb-8 text-center">Specifikace produktu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-wood-200">
              <h3 className="text-lg font-semibold text-forest-800 mb-4">Technické parametry</h3>
              <div className="space-y-3">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-forest-100 last:border-b-0">
                    <span className="font-medium text-forest-700">{spec.label}:</span>
                    <span className="text-forest-600">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-wood-200">
              <h3 className="text-lg font-semibold text-forest-800 mb-4">Výhody dubového dřeva</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckIcon className="h-5 w-5 text-green-500" />
                  <span className="text-forest-600">Nejvyšší výhřevnost ze všech dřevin</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckIcon className="h-5 w-5 text-green-500" />
                  <span className="text-forest-600">Dlouhá doba hoření</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckIcon className="h-5 w-5 text-green-500" />
                  <span className="text-forest-600">Stabilní plamen</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckIcon className="h-5 w-5 text-green-500" />
                  <span className="text-forest-600">Minimální popel</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckIcon className="h-5 w-5 text-green-500" />
                  <span className="text-forest-600">Ideální pro náročné topení</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-2xl font-bold text-forest-800 mb-8 text-center">Recenze zákazníků</h2>
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
      </section>

      {/* Related Products */}
      <section className="section-padding bg-forest-50">
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

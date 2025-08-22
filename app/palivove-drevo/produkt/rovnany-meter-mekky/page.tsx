'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  ChevronRightIcon, 
  HomeIcon, 
  StarIcon,
  TruckIcon,
  ShieldCheckIcon,
  FireIcon
} from '@heroicons/react/24/outline'
import AddToCart from '@/components/AddToCart'

const product = {
  id: 'rovnany-meter-mekky-1',
  name: 'Rovnaný metr měkký',
  price: 800,
  image: '/wood-pile.jpg',
  category: 'Palivové dřevo',
  unit: 'm³',
  minQuantity: 1,
  maxQuantity: 10,
  description: 'Měkké dřevo (smrk, borovice) rovnané do metru. Ideální pro rychlé rozdělání ohně a přitápění.',
  features: [
    'Dřevina: Smrk, borovice',
    'Výhřevnost: 15 MJ/kg',
    'Vlhkost: 15-20%',
    'Délka polen: 25 cm',
    'Dostupné množství: 1-10 m³'
  ],
  images: [
    '/wood-pile.jpg',
    '/wood-pile.jpg',
    '/wood-pile.jpg'
  ]
}

export default function RovnanyMeterMekkyPage() {
  const [selectedImage, setSelectedImage] = useState(0)

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
            <Link href="/palivove-drevo" className="text-forest-600 hover:text-forest-800">
              Palivové dřevo
            </Link>
            <ChevronRightIcon className="h-4 w-4 text-forest-400" />
            <span className="text-forest-800 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-96 object-cover rounded-lg"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-forest-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                </div>
              </div>
              
              {/* Thumbnail Images */}
              <div className="flex space-x-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-forest-600' : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} - obrázek ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-forest-800 mb-2">
                  {product.name}
                </h1>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">(8 recenzí)</span>
                  </div>
                </div>
                <p className="text-lg text-forest-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Price */}
              <div className="bg-forest-50 rounded-lg p-6">
                <div className="flex items-baseline space-x-2 mb-2">
                  <span className="text-3xl font-bold text-forest-800">
                    {product.price.toLocaleString()} Kč
                  </span>
                  <span className="text-lg text-forest-600">/ {product.unit}</span>
                </div>
                <p className="text-sm text-forest-600">
                  Cena včetně DPH • Dostupné skladem
                </p>
              </div>

              {/* Add to Cart */}
              <AddToCart product={product} />

              {/* Features */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-forest-800 mb-4">Vlastnosti produktu</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <FireIcon className="h-4 w-4 text-forest-600" />
                      <span className="text-forest-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Badges */}
              <div className="border-t pt-6">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <TruckIcon className="h-5 w-5 text-forest-600" />
                    <span className="text-sm text-forest-700">Rychlé dodání</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ShieldCheckIcon className="h-5 w-5 text-forest-600" />
                    <span className="text-sm text-forest-700">Bezpečná platba</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Description */}
          <div className="mt-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-forest-800 mb-6">Popis produktu</h2>
                
                <div className="prose prose-lg max-w-none">
                  <h3>Charakteristika</h3>
                  <p>
                    Rovnaný metr měkkého dřeva obsahuje smrk a borovici, které jsou ideální pro rychlé 
                    rozdělání ohně. Měkké dřevo má nižší hustotu než tvrdé dřevo, ale hoří rychleji 
                    a je skvělé pro přitápění.
                  </p>

                  <h3>Parametry</h3>
                  <ul>
                    <li><strong>Druh dřeviny:</strong> Smrk (Picea abies), Borovice (Pinus sylvestris)</li>
                    <li><strong>Výhřevnost:</strong> 15 MJ/kg</li>
                    <li><strong>Vlhkost:</strong> 15-20%</li>
                    <li><strong>Délka polen:</strong> 25 cm</li>
                    <li><strong>Průměr polen:</strong> 6-10 cm</li>
                    <li><strong>Způsob balení:</strong> Rovnaný metr (PRM)</li>
                  </ul>

                  <h3>Výhody měkkého dřeva</h3>
                  <ul>
                    <li>Rychlé rozdělání ohně</li>
                    <li>Ideální pro přitápění</li>
                    <li>Nižší cena než tvrdé dřevo</li>
                    <li>Snadné skladování</li>
                  </ul>

                  <h3>Vhodné použití</h3>
                  <p>
                    Měkké dřevo je ideální pro krby a kamna, kde potřebujete rychle rozdělat oheň. 
                    Je také vhodné pro přitápění v chladnějších dnech, kdy nepotřebujete dlouhodobé 
                    intenzivní topení.
                  </p>

                  <h3>Rozdíl mezi PRM a PRMS</h3>
                  <p>
                    <strong>PRM (Prostorový metr rovnaný):</strong> Dřevo je ručně naskládáno do 
                    přesné krabice o objemu 1 m³. Tento způsob balení zajišťuje konzistentní množství 
                    a kvalitu.
                  </p>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <div className="bg-forest-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-forest-800 mb-4">Doprava</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Strážnice</span>
                      <span className="font-semibold">700 Kč</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Okolní obce</span>
                      <span className="font-semibold">900 Kč</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Osobní odběr</span>
                      <span className="font-semibold text-green-600">Zdarma</span>
                    </div>
                  </div>
                </div>

                <div className="bg-forest-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-forest-800 mb-4">Kontakt</h3>
                  <p className="text-sm text-forest-600 mb-3">
                    Máte dotaz k tomuto produktu?
                  </p>
                  <a
                    href="tel:+420732443827"
                    className="bg-forest-600 hover:bg-forest-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm inline-block"
                  >
                    Zavolejte nám
                  </a>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-yellow-800 mb-2">Tip pro nákup</h3>
                  <p className="text-sm text-yellow-700">
                    Nakupte za další 4 200 Kč a získejte dárkovou tašku zdarma s podpalovačem, 
                    zápalkami a ochrannými rukavicemi!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'

import { useEffect } from 'react'
import { useCart } from '@/contexts/CartContext'
import Link from 'next/link'
import { 
  CheckCircleIcon, 
  HomeIcon, 
  PhoneIcon,
  EnvelopeIcon,
  GiftIcon,
  TruckIcon
} from '@heroicons/react/24/outline'

export default function OrderConfirmedPage() {
  const { state, clearCart } = useCart()

  useEffect(() => {
    // Vyčistit košík po úspěšném nákupu
    clearCart()
  }, [clearCart])

  const orderNumber = `ORD-${Date.now().toString().slice(-8)}`
  const estimatedDelivery = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000) // +5 dní

  const relatedProducts = [
    {
      id: 'podpalovac-1',
      name: 'Podpalovač na dřevo',
      price: 89,
      image: '/wood-pile.jpg',
      href: '/palivove-drevo'
    },
    {
      id: 'rukavice-1',
      name: 'Ochranné rukavice',
      price: 149,
      image: '/wood-pile.jpg',
      href: '/palivove-drevo'
    },
    {
      id: 'plachta-1',
      name: 'Plachta na dřevo',
      price: 299,
      image: '/wood-pile.jpg',
      href: '/palivove-drevo'
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
            <span className="text-forest-800 font-medium">Objednávka potvrzena</span>
          </nav>
        </div>
      </div>

      <div className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            {/* Success Message */}
            <div className="text-center mb-12">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircleIcon className="h-12 w-12 text-green-600" />
              </div>
              <h1 className="text-4xl font-bold text-forest-800 mb-4">
                Děkujeme za vaši objednávku!
              </h1>
              <p className="text-xl text-forest-600 mb-6">
                Vaše objednávka byla úspěšně přijata a zpracovává se.
              </p>
              <div className="bg-forest-50 rounded-lg p-6 inline-block">
                <p className="text-lg font-semibold text-forest-800">
                  Číslo objednávky: <span className="text-forest-600">{orderNumber}</span>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Order Summary */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-forest-800 mb-6">Rekapitulace objednávky</h2>
                
                <div className="space-y-4">
                  {state.items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 py-3 border-b border-gray-100">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium text-forest-800">{item.name}</h3>
                        <p className="text-sm text-gray-600">{item.quantity} {item.unit}</p>
                      </div>
                      <span className="font-semibold text-forest-600">
                        {(item.price * item.quantity).toLocaleString()} Kč
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 mt-4 space-y-2">
                  <div className="flex justify-between">
                    <span>Mezisoučet:</span>
                    <span>{state.total.toLocaleString()} Kč</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Doprava:</span>
                    <span>700 Kč</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-bold text-lg">
                    <span>Celkem:</span>
                    <span>{(state.total + 700).toLocaleString()} Kč</span>
                  </div>
                </div>
              </div>

              {/* Delivery Information */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-forest-800 mb-6">Informace o dodání</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <TruckIcon className="h-6 w-6 text-forest-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-forest-800">Předpokládané dodání</h3>
                      <p className="text-forest-600">
                        {estimatedDelivery.toLocaleDateString('cs-CZ', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <GiftIcon className="h-6 w-6 text-forest-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-forest-800">Dárková taška</h3>
                      <p className="text-forest-600">
                        {state.total >= 5000 
                          ? '🎉 Získáváte dárkovou tašku zdarma!' 
                          : 'Nakupte za další ' + (5000 - state.total).toLocaleString() + ' Kč a získejte dárkovou tašku zdarma'
                        }
                      </p>
                    </div>
                  </div>

                  <div className="bg-forest-50 rounded-lg p-4">
                    <h3 className="font-semibold text-forest-800 mb-2">Co dál?</h3>
                    <ul className="text-sm text-forest-600 space-y-1">
                      <li>• Obdržíte potvrzovací e-mail s detaily objednávky</li>
                      <li>• Náš tým vás bude kontaktovat ohledně dodání</li>
                      <li>• Můžete sledovat stav objednávky na našem webu</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
              <h2 className="text-2xl font-bold text-forest-800 mb-6">Kontaktní informace</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-4">
                  <PhoneIcon className="h-6 w-6 text-forest-600" />
                  <div>
                    <h3 className="font-semibold text-forest-800">Telefon</h3>
                    <p className="text-forest-600">+420 732 443 827</p>
                    <p className="text-sm text-gray-500">Po-Pá 8:00-17:00</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <EnvelopeIcon className="h-6 w-6 text-forest-600" />
                  <div>
                    <h3 className="font-semibold text-forest-800">E-mail</h3>
                    <p className="text-forest-600">info@keprt-drevo.cz</p>
                    <p className="text-sm text-gray-500">Odpovídáme do 24 hodin</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Products */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-forest-800 mb-6">Mohlo by se vám hodit</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-forest-800 mb-2">{product.name}</h3>
                      <p className="text-forest-600 font-bold mb-4">{product.price} Kč</p>
                      <Link
                        href={product.href}
                        className="bg-forest-600 hover:bg-forest-700 text-white font-semibold px-4 py-2 rounded text-sm transition-colors inline-block"
                      >
                        Zobrazit produkt
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="text-center space-y-4">
              <Link
                href="/"
                className="bg-forest-600 hover:bg-forest-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors inline-block"
              >
                Zpět do obchodu
              </Link>
              
              <div className="text-sm text-gray-500">
                <p>Máte dotaz? Neváhejte nás kontaktovat na +420 732 443 827</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

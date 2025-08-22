'use client'

import { useState } from 'react'
import { useCart } from '@/contexts/CartContext'
import Link from 'next/link'
import { 
  ChevronRightIcon, 
  HomeIcon, 
  TrashIcon, 
  PlusIcon, 
  MinusIcon,
  GiftIcon
} from '@heroicons/react/24/outline'
import { toast } from 'react-hot-toast'

const GIFT_THRESHOLD = 5000 // Limit pro dárkovou tašku v Kč

export default function CartPage() {
  const { state, removeItem, updateQuantity } = useCart()
  const [isUpdating, setIsUpdating] = useState<string | null>(null)

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(id)
      toast.success('Položka byla odstraněna z košíku')
    } else {
      updateQuantity(id, newQuantity)
      setIsUpdating(id)
      setTimeout(() => setIsUpdating(null), 500)
    }
  }

  const giftProgress = Math.min((state.total / GIFT_THRESHOLD) * 100, 100)
  const remainingForGift = GIFT_THRESHOLD - state.total
  const hasGift = state.total >= GIFT_THRESHOLD

  const shippingCost = state.total > 0 ? 700 : 0 // Základní cena dopravy
  const totalWithShipping = state.total + shippingCost

  const upsellProducts = [
    {
      id: 'podpalovac-1',
      name: 'Podpalovač na dřevo',
      price: 89,
      image: '/wood-pile.jpg',
      description: 'Rychlé a bezpečné rozdělání ohně'
    },
    {
      id: 'rukavice-1',
      name: 'Ochranné rukavice',
      price: 149,
      image: '/wood-pile.jpg',
      description: 'Ochrana rukou při manipulaci s dřevem'
    },
    {
      id: 'plachta-1',
      name: 'Plachta na dřevo',
      price: 299,
      image: '/wood-pile.jpg',
      description: 'Ochrana dřeva před vlhkostí'
    }
  ]

  if (state.items.length === 0) {
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
              <span className="text-forest-800 font-medium">Košík</span>
            </nav>
          </div>
        </div>

        {/* Empty Cart */}
        <div className="section-padding">
          <div className="container-max">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <GiftIcon className="h-12 w-12 text-gray-400" />
              </div>
              <h1 className="text-3xl font-bold text-forest-800 mb-4">
                Váš košík je prázdný
              </h1>
              <p className="text-lg text-forest-600 mb-8">
                Přidejte si do košíku nějaké produkty a začněte nakupovat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/palivove-drevo"
                  className="bg-forest-600 hover:bg-forest-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
                >
                  Prohlédnout palivové dřevo
                </Link>
                <Link
                  href="/brikety"
                  className="bg-wood-500 hover:bg-wood-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
                >
                  Prohlédnout brikety
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

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
            <span className="text-forest-800 font-medium">Košík</span>
          </nav>
        </div>
      </div>

      <div className="section-padding">
        <div className="container-max">
          <h1 className="text-3xl font-bold text-forest-800 mb-8">Košík</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-forest-700 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-semibold">Produkt</th>
                        <th className="px-6 py-4 text-center font-semibold">Množství</th>
                        <th className="px-6 py-4 text-center font-semibold">Cena za kus</th>
                        <th className="px-6 py-4 text-center font-semibold">Celkem</th>
                        <th className="px-6 py-4 text-center font-semibold">Akce</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {state.items.map((item) => (
                        <tr key={item.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-4">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-16 h-16 object-cover rounded"
                              />
                              <div>
                                <h3 className="font-medium text-forest-800">{item.name}</h3>
                                <p className="text-sm text-gray-500">{item.category}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center justify-center space-x-2">
                              <button
                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded flex items-center justify-center transition-colors"
                              >
                                <MinusIcon className="h-4 w-4" />
                              </button>
                              <span className="w-12 text-center font-medium">
                                {item.quantity} {item.unit}
                              </span>
                              <button
                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded flex items-center justify-center transition-colors"
                              >
                                <PlusIcon className="h-4 w-4" />
                              </button>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-center">
                            {item.price.toLocaleString()} Kč
                          </td>
                          <td className="px-6 py-4 text-center font-semibold">
                            {(item.price * item.quantity).toLocaleString()} Kč
                          </td>
                          <td className="px-6 py-4 text-center">
                            <button
                              onClick={() => {
                                removeItem(item.id)
                                toast.success('Položka byla odstraněna z košíku')
                              }}
                              className="text-red-500 hover:text-red-700 transition-colors"
                            >
                              <TrashIcon className="h-5 w-5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Upsell Section */}
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-forest-800 mb-6">Mohlo by se vám hodit</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {upsellProducts.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-32 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="font-semibold text-forest-800 mb-2">{product.name}</h3>
                        <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-forest-600">{product.price} Kč</span>
                          <button
                            onClick={() => {
                              // Přidat do košíku
                              toast.success('Produkt byl přidán do košíku')
                            }}
                            className="bg-forest-600 hover:bg-forest-700 text-white px-4 py-2 rounded text-sm transition-colors"
                          >
                            Přidat
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
                <h2 className="text-xl font-bold text-forest-800 mb-6">Souhrn objednávky</h2>

                {/* Gift Progress */}
                <div className="mb-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <GiftIcon className="h-5 w-5 text-forest-600" />
                    <span className="font-semibold text-forest-800">Dárková taška zdarma</span>
                  </div>
                  
                  {hasGift ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <p className="text-green-800 text-sm font-medium">
                        🎉 Gratulujeme! Získáváte dárkovou tašku zdarma.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Do dárku zbývá:</span>
                        <span className="font-semibold">{remainingForGift.toLocaleString()} Kč</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-forest-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${giftProgress}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span>Mezisoučet:</span>
                    <span>{state.total.toLocaleString()} Kč</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Doprava:</span>
                    <span>{shippingCost} Kč</span>
                  </div>
                  {hasGift && (
                    <div className="flex justify-between text-green-600">
                      <span>Dárková taška:</span>
                      <span>- 0 Kč</span>
                    </div>
                  )}
                  <div className="border-t pt-3 flex justify-between font-bold text-lg">
                    <span>Celkem:</span>
                    <span>{totalWithShipping.toLocaleString()} Kč</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Link
                    href="/pokladna"
                    className="w-full bg-forest-600 hover:bg-forest-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                  >
                    Pokračovat k pokladně
                    <ChevronRightIcon className="ml-2 h-5 w-5" />
                  </Link>
                  <Link
                    href="/palivove-drevo"
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                  >
                    Pokračovat v nákupu
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

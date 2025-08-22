'use client'

import { useState, useEffect } from 'react'
import { useCart } from '@/contexts/CartContext'
import { XMarkIcon, ShoppingCartIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

interface MiniCartProps {
  isOpen: boolean
  onClose: () => void
}

const recommendedProducts = [
  {
    id: 'podpalovac-1',
    name: 'Podpalovač na dřevo',
    price: 89,
    image: '/wood-pile.jpg',
    category: 'Příslušenství'
  },
  {
    id: 'rukavice-1',
    name: 'Ochranné rukavice',
    price: 149,
    image: '/wood-pile.jpg',
    category: 'Příslušenství'
  },
  {
    id: 'plachta-1',
    name: 'Plachta na dřevo',
    price: 299,
    image: '/wood-pile.jpg',
    category: 'Příslušenství'
  }
]

export default function MiniCart({ isOpen, onClose }: MiniCartProps) {
  const { state, addItem } = useCart()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  const handleAddRecommended = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
      category: product.category,
      unit: 'ks'
    })
  }

  if (!isVisible) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <ShoppingCartIcon className="h-6 w-6 text-forest-600" />
              <h2 className="text-lg font-semibold text-forest-800">
                Košík ({state.itemCount})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <XMarkIcon className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {state.items.length === 0 ? (
              <div className="text-center py-8">
                <ShoppingCartIcon className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Košík je prázdný</p>
              </div>
            ) : (
              <div className="space-y-4">
                {state.items.map((item) => (
                  <div key={item.id} className="flex space-x-3 p-3 bg-gray-50 rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-forest-800 truncate">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {item.quantity} {item.unit} × {item.price} Kč
                      </p>
                      <p className="text-sm font-semibold text-forest-600">
                        {(item.price * item.quantity).toLocaleString()} Kč
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Recommended Products */}
          {state.items.length > 0 && (
            <div className="border-t border-gray-200 p-4">
              <h3 className="text-sm font-semibold text-forest-800 mb-3">
                Mohlo by se vám hodit:
              </h3>
              <div className="space-y-3">
                {recommendedProducts.map((product) => (
                  <div key={product.id} className="flex items-center space-x-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-forest-800 truncate">
                        {product.name}
                      </h4>
                      <p className="text-sm text-forest-600 font-semibold">
                        {product.price} Kč
                      </p>
                    </div>
                    <button
                      onClick={() => handleAddRecommended(product)}
                      className="px-3 py-1 bg-forest-600 text-white text-xs rounded hover:bg-forest-700 transition-colors"
                    >
                      Přidat
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="border-t border-gray-200 p-4">
            {state.items.length > 0 ? (
              <>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold text-forest-800">
                    Celkem:
                  </span>
                  <span className="text-lg font-bold text-forest-600">
                    {state.total.toLocaleString()} Kč
                  </span>
                </div>
                <div className="space-y-2">
                  <Link
                    href="/kosik"
                    className="w-full bg-forest-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-forest-700 transition-colors flex items-center justify-center"
                  >
                    Zobrazit košík
                    <ChevronRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                  <button
                    onClick={onClose}
                    className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                  >
                    Pokračovat v nákupu
                  </button>
                </div>
              </>
            ) : (
              <Link
                href="/palivove-drevo"
                className="w-full bg-forest-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-forest-700 transition-colors flex items-center justify-center"
              >
                Začít nakupovat
                <ChevronRightIcon className="ml-2 h-4 w-4" />
              </Link>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

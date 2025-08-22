'use client'

import { useState } from 'react'
import { useCart } from '@/contexts/CartContext'
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline'
import { toast } from 'react-hot-toast'

interface AddToCartProps {
  product: {
    id: string
    name: string
    price: number
    image: string
    category: string
    unit: string
    minQuantity?: number
    maxQuantity?: number
  }
  className?: string
}

export default function AddToCart({ product, className = '' }: AddToCartProps) {
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(product.minQuantity || 1)

  const handleAddToCart = () => {
    addItem({
      ...product,
      quantity
    })
    
    toast.success(`${product.name} byl přidán do košíku!`)
  }

  const handleQuantityChange = (newQuantity: number) => {
    const min = product.minQuantity || 1
    const max = product.maxQuantity || 999
    
    if (newQuantity >= min && newQuantity <= max) {
      setQuantity(newQuantity)
    }
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Quantity Selector */}
      <div className="flex items-center space-x-4">
        <label className="text-sm font-medium text-forest-700">
          Množství:
        </label>
        <div className="flex items-center border border-gray-300 rounded-lg">
          <button
            onClick={() => handleQuantityChange(quantity - 1)}
            disabled={quantity <= (product.minQuantity || 1)}
            className="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <MinusIcon className="h-4 w-4" />
          </button>
          <span className="px-4 py-2 text-center min-w-[60px] font-medium">
            {quantity} {product.unit}
          </span>
          <button
            onClick={() => handleQuantityChange(quantity + 1)}
            disabled={quantity >= (product.maxQuantity || 999)}
            className="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <PlusIcon className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className="w-full bg-forest-600 hover:bg-forest-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
      >
        <span>Přidat do košíku</span>
        <span className="text-sm">
          ({(product.price * quantity).toLocaleString()} Kč)
        </span>
      </button>

      {/* Quick Actions */}
      <div className="flex space-x-2">
        <button
          onClick={() => {
            addItem({ ...product, quantity: 1 })
            toast.success(`${product.name} byl přidán do košíku!`)
          }}
          className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors text-sm"
        >
          Rychle přidat
        </button>
        <button
          onClick={() => {
            // Zde by byla logika pro telefonickou objednávku
            toast.success('Budeme vás kontaktovat!')
          }}
          className="flex-1 bg-wood-500 hover:bg-wood-600 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm"
        >
          Objednat telefonicky
        </button>
      </div>
    </div>
  )
}

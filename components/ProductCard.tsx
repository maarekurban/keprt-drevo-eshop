'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ShoppingCartIcon, 
  EyeIcon, 
  HeartIcon,
  StarIcon
} from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'
import Link from 'next/link'
import toast from 'react-hot-toast'

interface Product {
  id: number
  name: string
  description: string
  price: number
  originalPrice?: number
  unit: string
  image: string
  woodType: string
  length: string
  moisture: string
  packaging: string
  heatingValue: number
  popularity: number
  inStock: boolean
}

interface ProductCardProps {
  product: Product
  viewMode: 'grid' | 'list'
}

export default function ProductCard({ product, viewMode }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const addToCart = async () => {
    if (!product.inStock) {
      toast.error('Produkt není skladem')
      return
    }

    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      toast.success(`${product.name} přidán do košíku`)
    }, 1000)
  }

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted)
    toast.success(isWishlisted ? 'Odebráno z oblíbených' : 'Přidáno do oblíbených')
  }

  if (viewMode === 'list') {
    return (
      <motion.div
        whileHover={{ y: -2 }}
        className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden"
      >
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="md:w-48 h-48 md:h-auto relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {!product.inStock && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <span className="text-white font-semibold">Není skladem</span>
              </div>
            )}
            
            {/* Wishlist button */}
            <button
              onClick={toggleWishlist}
              className="absolute top-3 right-3 p-2 bg-white/80 hover:bg-white rounded-full transition-colors"
            >
              <HeartIcon className={`h-5 w-5 ${isWishlisted ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 p-6">
            <div className="flex flex-col h-full">
              <div className="flex-1">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-forest-800 mb-2 hover:text-forest-600 transition-colors">
                      <Link href={`/produkt/${product.id}`}>
                        {product.name}
                      </Link>
                    </h3>
                    <p className="text-forest-600 mb-4">{product.description}</p>
                  </div>
                  
                  {/* Price */}
                  <div className="text-right">
                    <div className="text-2xl font-bold text-forest-600">
                      {product.price.toLocaleString()} Kč/{product.unit}
                    </div>
                    {product.originalPrice && (
                      <div className="text-gray-400 line-through">
                        {product.originalPrice.toLocaleString()} Kč/{product.unit}
                      </div>
                    )}
                  </div>
                </div>

                {/* Product details */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="text-sm">
                    <span className="text-gray-500">Dřevina:</span>
                    <span className="ml-2 font-medium capitalize">{product.woodType}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-500">Délka:</span>
                    <span className="ml-2 font-medium">{product.length}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-500">Vlhkost:</span>
                    <span className="ml-2 font-medium capitalize">{product.moisture}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-500">Balení:</span>
                    <span className="ml-2 font-medium capitalize">{product.packaging}</span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <StarIconSolid
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(product.popularity / 20) ? 'text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    ({product.popularity}% spokojenost)
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <button
                  onClick={addToCart}
                  disabled={!product.inStock || isLoading}
                  className="flex-1 bg-forest-600 hover:bg-forest-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <ShoppingCartIcon className="h-5 w-5" />
                  )}
                  {product.inStock ? 'Do košíku' : 'Není skladem'}
                </button>
                
                <Link
                  href={`/produkt/${product.id}`}
                  className="flex items-center gap-2 px-4 py-3 border border-forest-600 text-forest-600 hover:bg-forest-50 rounded-lg transition-colors"
                >
                  <EyeIcon className="h-5 w-5" />
                  Detail
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  // Grid view
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-semibold">Není skladem</span>
          </div>
        )}
        
        {product.originalPrice && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
            -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
          </div>
        )}
        
        {/* Wishlist button */}
        <button
          onClick={toggleWishlist}
          className="absolute top-3 right-3 p-2 bg-white/80 hover:bg-white rounded-full transition-colors"
        >
          <HeartIcon className={`h-5 w-5 ${isWishlisted ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-forest-800 mb-2 hover:text-forest-600 transition-colors line-clamp-2">
          <Link href={`/produkt/${product.id}`}>
            {product.name}
          </Link>
        </h3>
        
        <p className="text-forest-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Product specs */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
          <span className="capitalize">{product.woodType}</span>
          <span>{product.length}</span>
          <span className="capitalize">{product.moisture}</span>
        </div>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <StarIconSolid
                key={i}
                className={`h-3 w-3 ${i < Math.floor(product.popularity / 20) ? 'text-yellow-400' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="ml-1 text-xs text-gray-600">
            ({product.popularity}%)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-xl font-bold text-forest-600">
              {product.price.toLocaleString()} Kč/{product.unit}
            </div>
            {product.originalPrice && (
              <div className="text-sm text-gray-400 line-through">
                {product.originalPrice.toLocaleString()} Kč/{product.unit}
              </div>
            )}
          </div>
          
          <div className="text-xs text-forest-600 bg-forest-50 px-2 py-1 rounded">
            {product.heatingValue} MJ/kg
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button
            onClick={addToCart}
            disabled={!product.inStock || isLoading}
            className="flex-1 bg-forest-600 hover:bg-forest-700 disabled:bg-gray-400 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-1 text-sm"
          >
            {isLoading ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <ShoppingCartIcon className="h-4 w-4" />
            )}
            {product.inStock ? 'Do košíku' : 'Není skladem'}
          </button>
          
          <Link
            href={`/produkt/${product.id}`}
            className="p-2 border border-forest-600 text-forest-600 hover:bg-forest-50 rounded-lg transition-colors"
          >
            <EyeIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}


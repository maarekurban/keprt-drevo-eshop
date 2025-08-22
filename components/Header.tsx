'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  MagnifyingGlassIcon, 
  PhoneIcon, 
  Bars3Icon, 
  XMarkIcon,
  ShoppingCartIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '@/contexts/CartContext'
import MiniCart from './MiniCart'

  const navigation = [
    { name: 'Domů', href: '/' },
    { name: 'Palivové dřevo', href: '/palivove-drevo' },
    { name: 'Brikety', href: '/brikety' },
    { 
      name: 'Truhlářské řezivo', 
      href: '/truhlarske-rezivo',
      submenu: [
        { name: 'Speciální truhlářské řezivo', href: '/truhlarske-rezivo/specialni' }
      ]
    },
    { name: 'Doprava', href: '/kontejnery' },
    { name: 'O nás', href: '/o-nas' },
    { name: 'Blog', href: '/blog' },
    { name: 'Kontakt', href: '/kontakt' },
    { 
      name: 'Ostatní', 
      href: '#',
      submenu: [
        { name: 'Výklad pojmů', href: '/vyklad-pojmu' },
        { name: 'Ceník', href: '/cenik' },
        { name: 'Galerie', href: '/galerie' },
        { name: 'Ke stažení', href: '/ke-stazeni' }
      ]
    },
  ]

const languages = [
  { code: 'cs', name: 'Česky', flag: '🇨🇿' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [languageOpen, setLanguageOpen] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState(languages[0])
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)
  const [miniCartOpen, setMiniCartOpen] = useState(false)
  const { getItemCount } = useCart()

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-forest-700 text-white">
        <div className="container-max px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <span>📞 +420 123 456 789</span>
              <span>📧 info@keprt-drevo.cz</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button
                  onClick={() => setLanguageOpen(!languageOpen)}
                  className="flex items-center space-x-1 hover:text-gold-300 transition-colors"
                >
                  <GlobeAltIcon className="h-4 w-4" />
                  <span>{currentLanguage.flag} {currentLanguage.name}</span>
                </button>
                <AnimatePresence>
                  {languageOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setCurrentLanguage(lang)
                            setLanguageOpen(false)
                          }}
                          className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 flex items-center space-x-2"
                        >
                          <span>{lang.flag}</span>
                          <span>{lang.name}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container-max px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src="/keprt-slide.png" 
              alt="KEPRT Logo" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Search bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Hledat produkty..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500"
              />
              <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Phone button */}
            <a
              href="tel:+420123456789"
              className="hidden sm:flex items-center space-x-2 bg-gold-500 hover:bg-gold-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <PhoneIcon className="h-5 w-5" />
              <span className="font-semibold">Zavolejte nám</span>
            </a>

            {/* Cart */}
            <button
              onClick={() => setMiniCartOpen(true)}
              className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ShoppingCartIcon className="h-6 w-6 text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {getItemCount()}
              </span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:block mt-4">
          <ul className="flex space-x-8">
            {navigation.map((item) => (
              <li key={item.name} className="relative">
                {item.submenu ? (
                  <div
                    onMouseEnter={() => setDropdownOpen(item.name)}
                    onMouseLeave={() => setDropdownOpen(null)}
                  >
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-forest-600 font-medium transition-colors flex items-center"
                    >
                      {item.name}
                      <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>
                    {dropdownOpen === item.name && (
                      <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="block px-4 py-2 text-gray-700 hover:text-forest-600 hover:bg-gray-50 transition-colors"
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-forest-600 font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-4">
              {/* Mobile search */}
              <div className="mb-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Hledat produkty..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500"
                  />
                  <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              {/* Mobile navigation */}
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-gray-700 hover:text-forest-600 font-medium transition-colors"
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <ul className="ml-4 space-y-1">
                        {item.submenu.map((subitem) => (
                          <li key={subitem.name}>
                            <Link
                              href={subitem.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-1 text-gray-600 hover:text-forest-600 font-medium transition-colors"
                            >
                              {subitem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>

              {/* Mobile phone button */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <a
                  href="tel:+420123456789"
                  className="flex items-center justify-center space-x-2 bg-gold-500 hover:bg-gold-600 text-white px-4 py-3 rounded-lg transition-colors"
                >
                  <PhoneIcon className="h-5 w-5" />
                  <span className="font-semibold">Zavolejte nám</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mini Cart */}
      <MiniCart isOpen={miniCartOpen} onClose={() => setMiniCartOpen(false)} />
    </header>
  )
}

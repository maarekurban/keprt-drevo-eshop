'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronRightIcon, HomeIcon, PhotoIcon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default function GaleriePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    {
      id: 1,
      src: '/wood-pile.jpg',
      alt: 'Palivové dřevo - bukové polena',
      category: 'Palivové dřevo',
      title: 'Bukové polena'
    },
    {
      id: 2,
      src: '/wood-pile.jpg',
      alt: 'Palivové dřevo - dubové polena',
      category: 'Palivové dřevo',
      title: 'Dubové polena'
    },
    {
      id: 3,
      src: '/wood-pile.jpg',
      alt: 'Brikety RUF tvrdé',
      category: 'Brikety',
      title: 'RUF tvrdé brikety'
    },
    {
      id: 4,
      src: '/wood-pile.jpg',
      alt: 'Brikety RUF dubové',
      category: 'Brikety',
      title: 'RUF dubové brikety'
    },
    {
      id: 5,
      src: '/rezivo.png',
      alt: 'Truhlářské řezivo - smrk',
      category: 'Truhlářské řezivo',
      title: 'Smrkové řezivo'
    },
    {
      id: 6,
      src: '/rezivo.png',
      alt: 'Truhlářské řezivo - dub',
      category: 'Truhlářské řezivo',
      title: 'Dubové řezivo'
    },
    {
      id: 7,
      src: '/wood-pile.jpg',
      alt: 'Kontejnerová doprava',
      category: 'Doprava',
      title: 'Kontejnerová doprava'
    },
    {
      id: 8,
      src: '/wood-pile.jpg',
      alt: 'Sklad dřeva',
      category: 'Sklad',
      title: 'Náš sklad'
    },
    {
      id: 9,
      src: '/wood-pile.jpg',
      alt: 'Štípání dřeva',
      category: 'Výroba',
      title: 'Automatické štípání'
    },
    {
      id: 10,
      src: '/wood-pile.jpg',
      alt: 'Dodávka dřeva',
      category: 'Doprava',
      title: 'Dodávka k zákazníkovi'
    },
    {
      id: 11,
      src: '/wood-pile.jpg',
      alt: 'Kvalitní dřevo',
      category: 'Palivové dřevo',
      title: 'Kontrola kvality'
    },
    {
      id: 12,
      src: '/wood-pile.jpg',
      alt: 'Lesní práce',
      category: 'Lesnictví',
      title: 'Lesní práce'
    }
  ]

  const categories = ['Všechny', 'Palivové dřevo', 'Brikety', 'Truhlářské řezivo', 'Doprava', 'Sklad', 'Výroba', 'Lesnictví']
  const [selectedCategory, setSelectedCategory] = useState('Všechny')

  const filteredImages = selectedCategory === 'Všechny' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

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
            <Link href="#" className="text-forest-600 hover:text-forest-800">
              Ostatní
            </Link>
            <ChevronRightIcon className="h-4 w-4 text-forest-400" />
            <span className="text-forest-800 font-medium">Galerie</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-forest-600 to-forest-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-max section-padding relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Galerie
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed text-forest-100">
                Reálná galerie fotek produktů a služeb
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#galerie"
                  className="btn-primary inline-flex items-center justify-center group"
                >
                  Prohlédnout galerii
                  <ChevronRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/wood-pile.jpg"
                  alt="Galerie produktů a služeb"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galerie" className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-forest-800 mb-4">
              Naše produkty a služby
            </h2>
            <p className="text-lg text-forest-600 max-w-3xl mx-auto">
              Prohlédněte si fotografie našich produktů, výrobních procesů a služeb
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-forest-700 text-white'
                    : 'bg-forest-100 text-forest-700 hover:bg-forest-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-forest-700 text-white px-2 py-1 rounded text-xs font-medium mb-2 inline-block">
                      {image.category}
                    </div>
                    <h3 className="text-white font-semibold text-lg">
                      {image.title}
                    </h3>
                    <div className="flex items-center text-white/80 text-sm mt-2">
                      <MagnifyingGlassIcon className="h-4 w-4 mr-1" />
                      Klikněte pro zvětšení
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <PhotoIcon className="h-16 w-16 text-forest-300 mx-auto mb-4" />
              <p className="text-forest-600 text-lg">
                Pro vybranou kategorii nejsou k dispozici žádné fotografie.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <XMarkIcon className="h-8 w-8" />
            </button>
            <img
              src={selectedImage}
              alt="Zvětšený obrázek"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section className="section-padding bg-forest-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-forest-800 mb-6">
              Zajímá vás něco z naší galerie?
            </h2>
            <p className="text-lg text-forest-600 mb-8">
              Kontaktujte nás a rádi vám poskytneme více informací o našich produktech a službách.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/kontakt"
                className="bg-wood-500 hover:bg-wood-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <span>Kontaktovat nás</span>
              </a>
              <a
                href="/palivove-drevo"
                className="bg-forest-600 hover:bg-forest-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <span>Zobrazit produkty</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

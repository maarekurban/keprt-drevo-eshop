'use client'

import { PhoneIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-wood-50 to-forest-50 overflow-hidden">
      <div className="container-max section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-forest-800 mb-6 leading-tight">
              Palivové dřevo a brikety{' '}
              <span className="text-gold-600">přímo od výrobce</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-forest-700 mb-8 leading-relaxed">
              Kvalitní palivové dřevo, brikety a pelety přímo od výrobce – Strážnice
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/palivove-drevo"
                className="btn-primary inline-flex items-center justify-center group"
              >
                Zobrazit nabídku
                <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a
                href="tel:+420123456789"
                className="btn-secondary inline-flex items-center justify-center group"
              >
                <PhoneIcon className="mr-2 h-5 w-5" />
                Objednat telefonicky
              </a>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-forest-600">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-forest-500 rounded-full"></span>
                <span>Rychlé dodání</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-forest-500 rounded-full"></span>
                <span>Kvalitní dřevo</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-forest-500 rounded-full"></span>
                <span>Doprava zdarma</span>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/wood-pile.jpg"
                alt="Kvalitní palivové dřevo"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/30 to-transparent"></div>
              
              {/* Floating card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">🔥</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-forest-800">Výhřevnost až 20 MJ/kg</h3>
                    <p className="text-sm text-forest-600">Suché bukové dřevo</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold-200 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-forest-200 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

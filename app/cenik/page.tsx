'use client'

import Link from 'next/link'
import { ChevronRightIcon, HomeIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'

export default function CenikPage() {
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
            <span className="text-forest-800 font-medium">Ceník</span>
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
                Ceník
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed text-forest-100">
                Informace o kvalitě a zpracování našeho dřeva
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#upozorneni"
                  className="btn-primary inline-flex items-center justify-center group"
                >
                  Zobrazit upozornění
                  <ChevronRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/wood-pile.jpg"
                  alt="Ceník a kvalita dřeva"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upozornění Section */}
      <section id="upozorneni" className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 mb-8">
              <div className="flex items-start space-x-4">
                <ExclamationTriangleIcon className="h-8 w-8 text-yellow-600 mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-yellow-800 mb-4">
                    Důležité upozornění
                  </h2>
                  <div className="text-yellow-700 space-y-4">
                    <p className="text-lg leading-relaxed">
                      Sypané dřevo je v převážné většině vyráběno štípacím automatem, proto můžete v dodávce dřeva zaznamenat nestandardní dřevo (štípy, odřezky, kůru) ne však větší než je vaše požadovaná délka. Jedná se <strong>POUZE o 1-2%</strong> z celkového množství.
                    </p>
                    
                    <div className="bg-white rounded-lg p-6 border border-yellow-300">
                      <h3 className="font-semibold text-yellow-800 mb-3">Příklad:</h3>
                      <p className="text-yellow-700">
                        Kláda má 400 cm, a stroj z ní odřezává 25cm polena + 1cm na prořez pilové listu. Stroj tedy uřeže 15 polen a to 16 má délku 10cm.
                      </p>
                    </div>
                    
                    <p className="text-lg font-semibold">
                      Na konečné množství to ale nemá vliv.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-forest-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-forest-800 mb-4">
                Proč se to děje?
              </h3>
              <div className="text-forest-700 space-y-3">
                <p>
                  Automatické štípání dřeva je efektivní proces, který zajišťuje konzistentní kvalitu a rychlost výroby. Během tohoto procesu může dojít k malým odchylkám v délce jednotlivých kusů, což je zcela normální a neovlivňuje celkovou kvalitu ani množství dodávaného dřeva.
                </p>
                <p>
                  Všechny kusy dřeva jsou pečlivě kontrolovány a dodáváme pouze kvalitní materiál, který splňuje naše vysoké standardy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt Section */}
      <section className="section-padding bg-forest-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-forest-800 mb-6">
              Máte dotazy ohledně kvality?
            </h2>
            <p className="text-lg text-forest-600 mb-8">
              Kontaktujte nás a rádi vám vysvětlíme všechny detaily o našem dřevu a procesu výroby.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+420732443827"
                className="bg-wood-500 hover:bg-wood-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <span>Zavolejte nám</span>
              </a>
              <a
                href="/kontakt"
                className="bg-forest-600 hover:bg-forest-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <span>Kontaktní formulář</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

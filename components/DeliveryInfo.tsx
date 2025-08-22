'use client'

import Link from 'next/link'
import { ChevronRightIcon, TruckIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline'

export default function DeliveryInfo() {
  return (
    <section className="section-padding bg-forest-50">
      <div className="container-max">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-forest-800 mb-4">
              Doprava a rozvoz
            </h2>
            <p className="text-xl text-forest-600 max-w-3xl mx-auto">
              Rychlá a spolehlivá doprava vašeho dřeva přímo k vám
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-forest-600 rounded-lg flex items-center justify-center">
                    <TruckIcon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-forest-800 mb-2">
                    Kontejnerová doprava
                  </h3>
                  <p className="text-forest-600">
                    Disponujeme vlastní kontejnerovou autodopravou s nosností 13,5 t. Dopravíme vaše dřevo po celé České republice.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-forest-600 rounded-lg flex items-center justify-center">
                    <MapPinIcon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-forest-800 mb-2">
                    Lokální rozvoz
                  </h3>
                  <p className="text-forest-600">
                    Ve Strážnici a okolí (do 20 km) rozvoz zdarma od 5 m³. Pro ostatní lokality platí ceník dopravy.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-forest-600 rounded-lg flex items-center justify-center">
                    <ClockIcon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-forest-800 mb-2">
                    Rychlé dodání
                  </h3>
                  <p className="text-forest-600">
                    Standardní dodání do 3-5 pracovních dnů. Pro urgentní objednávky možnost rychlého dodání.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border border-forest-200">
                <h4 className="font-semibold text-forest-800 mb-3">
                  Ceny dopravy (včetně DPH):
                </h4>
                <div className="space-y-2 text-sm text-forest-600">
                  <div className="flex justify-between">
                    <span>Strážnice</span>
                    <span className="font-semibold">700 Kč</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Petrov, Vnorovy, Tvarožná Lhota</span>
                    <span className="font-semibold">900 Kč</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Veselí n. Moravou, Hodonín</span>
                    <span className="font-semibold">1 100 Kč</span>
                  </div>
                  <div className="text-xs text-forest-500 mt-2">
                    * Ceny pro ostatní lokality na dotaz
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/wood-pile.jpg"
                  alt="Kontejnerová doprava"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-2xl font-bold mb-2">
                    Kontejnerová autodoprava
                  </h3>
                  <p className="text-white/90 mb-4">
                    Mercedes-Benz Atego s nosností 13,5 t
                  </p>
                  <Link
                    href="/kontejnery"
                    className="inline-flex items-center bg-white text-forest-800 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Zobrazit ceník dopravy
                    <ChevronRightIcon className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

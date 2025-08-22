'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowRightIcon, 
  PhoneIcon, 
  TruckIcon,
  CheckIcon,
  MapPinIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

const services = [
  {
    title: 'Přeprava dřeva a palet',
    description: 'Profesionální přeprava palivového dřeva, řeziva a palet po celé ČR',
    icon: '🪵'
  },
  {
    title: 'Likvidace odpadu',
    description: 'Odvoz stavebního odpadu, zeminy a dalších materiálů',
    icon: '🗑️'
  },
  {
    title: 'Doprava stavebních materiálů',
    description: 'Přeprava cihel, betonu, písku a dalších stavebních materiálů',
    icon: '🏗️'
  },
  {
    title: 'Kontejnerový transport',
    description: 'Vysoký, suťový a plošinový kontejner pro různé účely',
    icon: '📦'
  },
  {
    title: 'Pronájem kontejnerů',
    description: 'Dlouhodobý i krátkodobý pronájem kontejnerů',
    icon: '🏠'
  },
  {
    title: 'Přistavení kontejnerů',
    description: 'Přistavení a odvoz kontejnerů na klíč',
    icon: '📍'
  }
]

const equipment = [
  {
    name: 'Mercedes-Benz Atego',
    specs: [
      'Nosnost: 13,5 t',
      'Motor: 4,25 l',
      'Výkon: 150 kW',
      'Převodovka: 6+1'
    ]
  },
  {
    name: 'Kontejner vysoký',
    specs: [
      'Objem: 14 m³',
      'Rozměry: 3,5 x 2,5 x 1,6 m',
      'Nosnost: 2 t',
      'Uzavíratelný'
    ]
  },
  {
    name: 'Kontejner suťový',
    specs: [
      'Objem: 5 m³',
      'Rozměry: 2,5 x 2 x 1,2 m',
      'Nosnost: 1,5 t',
      'Otevřený'
    ]
  },
  {
    name: 'Plošina',
    specs: [
      'Rozměry: 6 x 2,5 m',
      'Nosnost: 10 t',
      'Hydraulické spouštění',
      'Pro těžké náklady'
    ]
  }
]

export default function KontejneryPage() {
  const [activeTab, setActiveTab] = useState('services')



  return (
    <div className="min-h-screen bg-wood-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-forest-600 to-forest-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-max section-padding relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Kontejnerová{' '}
                <span className="text-gold-400">autodoprava</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed text-forest-100">
                Profesionální kontejnerová doprava a lesnická autodoprava po celé ČR. 
                Pronájem kontejnerů a přeprava materiálů.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="tel:+420123456789"
                  className="btn-primary inline-flex items-center justify-center group"
                >
                  Zavolejte nám
                  <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:+420123456789"
                  className="btn-secondary inline-flex items-center justify-center group"
                >
                  <PhoneIcon className="mr-2 h-5 w-5" />
                  Zavolejte nám
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/wood-pile.jpg"
                  alt="Kontejnerová autodoprava"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-800 mb-4">
              Přehled služeb
            </h2>
            <p className="text-xl text-forest-600 max-w-3xl mx-auto">
              Kompletní kontejnerové služby pro firmy i jednotlivce. 
              Přeprava, pronájem a likvidace odpadů.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-forest-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-forest-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment and Capacities */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-forest-800 mb-4">
              Technika a kapacity
            </h2>
            <p className="text-xl text-forest-600">
              Moderní vozidla a kontejnery pro všechny typy přeprav
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipment.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-forest-50 rounded-2xl p-6 text-center"
              >
                <TruckIcon className="w-12 h-12 text-forest-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-forest-800 mb-4">
                  {item.name}
                </h3>
                <div className="space-y-2 text-sm">
                  {item.specs.map((spec, specIndex) => (
                    <div key={specIndex} className="text-forest-600">
                      {spec}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-forest-800 mb-8 text-center">
              Ceník služeb
            </h2>
            
            {/* Tab Navigation */}
            <div className="flex justify-center border-b border-forest-200 mb-6">
              <button
                onClick={() => setActiveTab('services')}
                className={`px-6 py-3 font-medium transition-colors rounded-lg ${
                  activeTab === 'services'
                    ? 'bg-[#dda15e] text-white'
                    : 'text-forest-600 hover:text-forest-800'
                }`}
              >
                Ceny dopravy
              </button>
              <button
                onClick={() => setActiveTab('local')}
                className={`px-6 py-3 font-medium transition-colors rounded-lg ${
                  activeTab === 'local'
                    ? 'bg-[#dda15e] text-white'
                    : 'text-forest-600 hover:text-forest-800'
                }`}
              >
                Lokální služby
              </button>
              <button
                onClick={() => setActiveTab('pricing')}
                className={`px-6 py-3 font-medium transition-colors rounded-lg ${
                  activeTab === 'pricing'
                    ? 'bg-[#dda15e] text-white'
                    : 'text-forest-600 hover:text-forest-800'
                }`}
              >
                Ceník dopravy
              </button>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {activeTab === 'services' && (
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-forest-800 mb-6">
                    Ceny dopravy
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-forest-200">
                      <span className="text-forest-700">Cena za km (tam i zpět)</span>
                      <span className="font-bold text-forest-800">30 Kč</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-forest-200">
                      <span className="text-forest-700">Poplatek do 20 km</span>
                      <span className="font-bold text-forest-800">500 Kč</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-forest-200">
                      <span className="text-forest-700">Pronájem kontejneru</span>
                      <span className="font-bold text-forest-800">100 Kč/den</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-forest-700">Čekání</span>
                      <span className="font-bold text-forest-800">750 Kč/hod</span>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-forest-50 rounded-lg">
                    <p className="text-sm text-forest-600">
                      <strong>Poznámka:</strong> Ceny jsou bez 21% DPH. Při dlouhodobé spolupráci 
                      lze domluvit individuální sazby.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'local' && (
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-forest-800 mb-6">
                    Lokální služby
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPinIcon className="w-6 h-6 text-forest-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-forest-800">Region Strážnice</h4>
                        <p className="text-forest-600">Obluhujeme Strážnice a okolí s preferenčními cenami</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <TruckIcon className="w-6 h-6 text-forest-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-forest-800">Celá ČR</h4>
                        <p className="text-forest-600">Po domluvě zajistíme dopravu po celé České republice</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <ClockIcon className="w-6 h-6 text-forest-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-forest-800">Rychlé dodání</h4>
                        <p className="text-forest-600">Standardní dodání do 24 hodin v regionu</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-gold-50 rounded-lg">
                    <h4 className="font-semibold text-forest-800 mb-2">Kontakt pro dopravu</h4>
                    <p className="text-forest-600">Adam Keprt</p>
                    <p className="text-forest-600">+420 123 456 789</p>
                  </div>
                </div>
              )}

              {activeTab === 'pricing' && (
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-forest-800 mb-6">
                    Ceník dopravy
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-forest-200">
                      <span className="text-forest-700">Strážnice</span>
                      <span className="font-bold text-forest-800">700 Kč</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-forest-200">
                      <span className="text-forest-700">Petrov, Vnorovy, Tvarožná Lhota, Radějov, Sudoměřice, Bzenec</span>
                      <span className="font-bold text-forest-800">900 Kč</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-forest-200">
                      <span className="text-forest-700">Veselí n. Moravou, Kněždub, Hroznová Lhota, Tasov, Rohatec, Žeraviny, Kozojídky, Moravský Písek</span>
                      <span className="font-bold text-forest-800">1 100 Kč</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-forest-200">
                      <span className="text-forest-700">Lučina, Ratíškovice, Lipov, Vracov</span>
                      <span className="font-bold text-forest-800">1 300 Kč</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-forest-200">
                      <span className="text-forest-700">Blatnice, Domanín, Uherský Ostroh, Louka, Těmice</span>
                      <span className="font-bold text-forest-800">1 400 Kč</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-forest-200">
                      <span className="text-forest-700">Vacenovice, Vlkoš, Hodonín</span>
                      <span className="font-bold text-forest-800">1 500 Kč</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-forest-700">Ostrožská Nová Ves, Velká n. Veličkou</span>
                      <span className="font-bold text-forest-800">1 600 Kč</span>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-forest-50 rounded-lg">
                    <p className="text-sm text-forest-600">
                      <strong>Poznámka:</strong> Ceny jsou včetně DPH.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>



      {/* Local Services Emphasis */}
      <section className="bg-forest-50 section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-forest-800 mb-6">
              Důraz na lokální služby
            </h2>
            <p className="text-xl text-forest-600 mb-8">
              Firma obsluhuje region Strážnice a okolí s preferenčními cenami. 
              Po domluvě je možné zajistit dopravu po celé České republice.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <MapPinIcon className="w-12 h-12 text-forest-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-forest-800 mb-2">
                  Lokální působnost
                </h3>
                <p className="text-forest-600">
                  Strážnice a okolí s rychlým dodáním do 24 hodin
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <TruckIcon className="w-12 h-12 text-forest-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-forest-800 mb-2">
                  Celá ČR
                </h3>
                <p className="text-forest-600">
                  Po domluvě doprava do všech regionů České republiky
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <ClockIcon className="w-12 h-12 text-forest-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-forest-800 mb-2">
                  Flexibilní termíny
                </h3>
                <p className="text-forest-600">
                  Přizpůsobíme se vašim časovým požadavkům
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


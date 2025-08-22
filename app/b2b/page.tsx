'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowRightIcon, 
  PhoneIcon, 
  BuildingOfficeIcon,
  TruckIcon,
  ClipboardDocumentIcon,
  UserIcon,
  CheckIcon,
  StarIcon
} from '@heroicons/react/24/outline'

const products = [
  {
    category: 'Prkna',
    items: [
      { name: 'Prkna smrková', description: 'Dostupné délky 2-6m, průřezy 25x100mm až 50x200mm', minOrder: '1 m³' },
      { name: 'Prkna borová', description: 'Dostupné délky 2-6m, průřezy 25x100mm až 50x200mm', minOrder: '1 m³' }
    ]
  },
  {
    category: 'Latě',
    items: [
      { name: 'Latě smrkové', description: 'Dostupné délky 2-6m, průřezy 20x40mm až 30x60mm', minOrder: '0.5 m³' },
      { name: 'Latě borové', description: 'Dostupné délky 2-6m, průřezy 20x40mm až 30x60mm', minOrder: '0.5 m³' }
    ]
  },
  {
    category: 'Fošny',
    items: [
      { name: 'Fošny smrkové', description: 'Dostupné délky 2-6m, průřezy 50x100mm až 100x200mm', minOrder: '2 m³' },
      { name: 'Fošny borové', description: 'Dostupné délky 2-6m, průřezy 50x100mm až 100x200mm', minOrder: '2 m³' }
    ]
  },
  {
    category: 'Krovy',
    items: [
      { name: 'Krovy smrkové', description: 'Dostupné délky 3-8m, průřezy 80x120mm až 120x180mm', minOrder: '5 m³' },
      { name: 'Krovy borové', description: 'Dostupné délky 3-8m, průřezy 80x120mm až 120x180mm', minOrder: '5 m³' }
    ]
  },
  {
    category: 'Hranoly',
    items: [
      { name: 'Hranoly smrkové', description: 'Dostupné délky 2-6m, průřezy 60x60mm až 120x120mm', minOrder: '1 m³' },
      { name: 'Hranoly borové', description: 'Dostupné délky 2-6m, průřezy 60x60mm až 120x120mm', minOrder: '1 m³' }
    ]
  },
  {
    category: 'OSB desky',
    items: [
      { name: 'OSB desky 12mm', description: 'Rozměry 2500x1250mm, třída OSB/3', minOrder: '10 ks' },
      { name: 'OSB desky 18mm', description: 'Rozměry 2500x1250mm, třída OSB/3', minOrder: '10 ks' },
      { name: 'OSB desky 22mm', description: 'Rozměry 2500x1250mm, třída OSB/3', minOrder: '10 ks' }
    ]
  },
  {
    category: 'Překližky',
    items: [
      { name: 'Překližka 12mm', description: 'Rozměry 2500x1250mm, březová', minOrder: '5 ks' },
      { name: 'Překližka 18mm', description: 'Rozměry 2500x1250mm, březová', minOrder: '5 ks' }
    ]
  }
]

const references = [
  {
    name: 'Truhlářství Novák',
    location: 'Brno',
    text: 'Spolupracujeme s KEPRT již 5 let. Kvalita řeziva je vždy výborná a dodávky včasné.',
    rating: 5
  },
  {
    name: 'Stavební firma Svoboda',
    location: 'Praha',
    text: 'Pro naše projekty odebíráme řezivo pravidelně. Ceny jsou férové a materiál kvalitní.',
    rating: 5
  },
  {
    name: 'Dřevovýroba Malý',
    location: 'Ostrava',
    text: 'Individuální řez na míru funguje perfektně. Šetří nám čas i peníze.',
    rating: 5
  }
]

export default function B2BPage() {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    productType: '',
    quantity: '',
    date: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Zde by byla logika pro odeslání formuláře
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-wood-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-forest-600 to-forest-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-max section-padding relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Kvalitní řezivo pro{' '}
                <span className="text-gold-400">truhláře a stavební firmy</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed text-forest-100">
                Profesionální řezivo ve Strážnici a okolí. Prkna, trámy, OSB desky a překližky 
                s možností individuálního řezu na míru.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#poptavka"
                  className="btn-primary inline-flex items-center justify-center group"
                >
                  Získat nabídku
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
                  alt="Sklad řeziva"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Range */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-800 mb-4">
              Nabídka sortimentu
            </h2>
            <p className="text-xl text-forest-600 max-w-3xl mx-auto">
              Široká nabídka řeziva pro profesionální použití. Všechny produkty jsou dostupné 
              s možností individuálního řezu na míru.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <BuildingOfficeIcon className="w-8 h-8 text-forest-600 mr-3" />
                  <h3 className="text-xl font-bold text-forest-800">
                    {category.category}
                  </h3>
                </div>
                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-l-4 border-forest-200 pl-4">
                      <h4 className="font-semibold text-forest-800 mb-1">
                        {item.name}
                      </h4>
                      <p className="text-sm text-forest-600 mb-1">
                        {item.description}
                      </p>
                      <p className="text-xs text-forest-500">
                        Min. odběr: {item.minOrder}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Info */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-forest-800 mb-8 text-center">
              Doprava řeziva
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-forest-800 mb-4">
                  Kontejnerová autodoprava
                </h3>
                <div className="space-y-4 text-forest-600">
                  <div className="flex items-start space-x-3">
                    <TruckIcon className="w-6 h-6 text-forest-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-forest-800">Doprava po celé ČR</h4>
                      <p>Materiál dopravíme kontejnerovou autodopravou do všech regionů</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckIcon className="w-6 h-6 text-forest-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-forest-800">Cena podle kilometrů</h4>
                      <p>Cena dopravy se počítá dle vzdálenosti - 30 Kč/km</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <BuildingOfficeIcon className="w-6 h-6 text-forest-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-forest-800">Minimální odběr</h4>
                      <p>Minimální odběr se liší podle typu materiálu</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-forest-50 rounded-2xl p-6">
                <h4 className="text-xl font-bold text-forest-800 mb-4">
                  Ceník dopravy
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Do 20 km</span>
                    <span className="font-semibold">500 Kč</span>
                  </div>
                  <div className="flex justify-between">
                    <span>20-50 km</span>
                    <span className="font-semibold">800 Kč</span>
                  </div>
                  <div className="flex justify-between">
                    <span>50-100 km</span>
                    <span className="font-semibold">1 200 Kč</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Nad 100 km</span>
                    <span className="font-semibold">30 Kč/km</span>
                  </div>
                  <div className="border-t pt-3 mt-3">
                    <p className="text-forest-600 text-xs">
                      Ceny jsou bez DPH. Při dlouhodobé spolupráci lze domluvit individuální sazby.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="poptavka" className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-forest-800 mb-8 text-center">
              Poptávkový formulář
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-forest-800 mb-4">
                  Získejte nabídku
                </h3>
                <p className="text-forest-600 mb-6">
                  Vyplňte formulář a my vám připravíme individuální nabídku. 
                  Můžete také nahrát výkres nebo specifikaci.
                </p>
                <div className="bg-forest-50 rounded-2xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <UserIcon className="w-6 h-6 text-forest-600" />
                    <div>
                      <h4 className="font-semibold text-forest-800">Kontakt na obchodníka</h4>
                      <p className="text-forest-600">Lukáš Keprt</p>
                      <p className="text-forest-600">+420 123 456 789</p>
                    </div>
                  </div>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-forest-700 mb-2">
                      Firma *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full px-4 py-3 border border-forest-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-forest-700 mb-2">
                      Jméno *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 border border-forest-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-forest-700 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border border-forest-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-forest-700 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-forest-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-forest-700 mb-2">
                      Typ řeziva *
                    </label>
                    <select
                      required
                      value={formData.productType}
                      onChange={(e) => setFormData({...formData, productType: e.target.value})}
                      className="w-full px-4 py-3 border border-forest-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500"
                    >
                      <option value="">Vyberte typ</option>
                      <option value="prkna">Prkna</option>
                      <option value="late">Latě</option>
                      <option value="fosny">Fošny</option>
                      <option value="krovy">Krovy</option>
                      <option value="hranoly">Hranoly</option>
                      <option value="osb">OSB desky</option>
                      <option value="prekližky">Překližky</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-forest-700 mb-2">
                      Množství *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="např. 5 m³"
                      value={formData.quantity}
                      onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                      className="w-full px-4 py-3 border border-forest-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-forest-700 mb-2">
                    Požadovaný termín
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full px-4 py-3 border border-forest-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-forest-700 mb-2">
                    Zpráva / Specifikace
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Popište vaše požadavky, můžete nahrát výkres nebo specifikaci..."
                    className="w-full px-4 py-3 border border-forest-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-forest-700 mb-2">
                    Nahrát soubor (výkres, specifikace)
                  </label>
                  <input
                    type="file"
                    accept=".pdf,.jpg,.png,.dwg"
                    className="w-full px-4 py-3 border border-forest-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-forest-600 hover:bg-forest-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                >
                  <ClipboardDocumentIcon className="w-5 h-5 mr-2" />
                  Odeslat poptávku
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* References */}
      <section className="bg-forest-50 section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-forest-800 mb-4">
              Reference a fotografie
            </h2>
            <p className="text-xl text-forest-600">
              Spokojení firemní zákazníci a jejich realizace
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {references.map((reference, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="flex text-gold-400">
                    {[...Array(reference.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-forest-600 mb-4 italic">
                  "{reference.text}"
                </p>
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-forest-800">
                    {reference.name}
                  </h4>
                  <p className="text-sm text-forest-600">
                    {reference.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}


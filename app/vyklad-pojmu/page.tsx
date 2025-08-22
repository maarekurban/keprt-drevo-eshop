'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronRightIcon, HomeIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'

export default function VykladPojmuPage() {
  const [openAccordion, setOpenAccordion] = useState(0)

  const accordionItems = [
    {
      id: 0,
      title: 'Prostorový metr sypaný (PRMS)',
      content: {
        definition: 'Volně sypaný štípaný špalkový materiál, který není ukládán do přesné krabice.',
        tip: 'Tato jednotka je pro zákazníka finančně nejvýhodnější, protože nevyžaduje ruční skládání a vyrobené dříví je levnější.',
        warning: 'Po sestavění bude objem naskládaného dřeva menší než objem sypaný.',
        image: '/wood-pile.jpg'
      }
    },
    {
      id: 1,
      title: 'Kubík / plnometr / PLM / m³ / CBM',
      content: {
        definition: 'Nejpřesnější měrná jednotka pro prodej dřeva, určená pro měření surových kmenů v celých délkách.',
        detail: 'Objem se vypočítá měřením délky a průměru a používají se objemové tabulky.',
        image: '/wood-pile.jpg'
      }
    },
    {
      id: 2,
      title: 'Prostorový metr rovnaný (PRM, PRMR, RM)',
      content: {
        definition: 'Dřevo skládající se do rovnaných stohů (např. na paletách 1 × 1 × 1 m) nebo mezi kolíky na dopravních prostředcích.',
        detail: 'Tato jednotka se používá především pro štípané špalky.',
        image: '/wood-pile.jpg'
      }
    }
  ]

  const densityData = [
    { wood: 'Borovice lesní', fresh: 700, air: 520, kiln: 510 },
    { wood: 'Bříza bělokorá', fresh: 940, air: 600, kiln: 590 },
    { wood: 'Buk lesní', fresh: 990, air: 720, kiln: 570 },
    { wood: 'Dub cer', fresh: 1110, air: 850, kiln: 730 },
    { wood: 'Dub letní/zimní', fresh: 1080, air: 760, kiln: 660 },
    { wood: 'Habr', fresh: 1100, air: 810, kiln: 740 },
    { wood: 'Javor klen/mléč', fresh: 1000, air: 690, kiln: 650 },
    { wood: 'Jasan obecný', fresh: 1200, air: 800, kiln: 690 }
  ]

  const hardwoods = [
    { code: 'BK', name: 'Buk lesní' },
    { code: 'HB', name: 'Habr obecný' },
    { code: 'DB', name: 'Dub (zimní, letní, slavonský)' },
    { code: 'JS', name: 'Jasan obecný' },
    { code: 'JV', name: 'Javor (babyka, mléč, klen)' },
    { code: 'OR', name: 'Ořešák černý' },
    { code: 'BR', name: 'Bříza bělokorá (dříví na pomezí měkkého a tvrdého)' },
    { code: 'OL', name: 'Olše lepkavá (dříví na pomezí měkkého a tvrdého)' },
    { code: 'AK', name: 'Trnovník akát' },
    { code: 'LTX', name: 'Ostatní listnaté tvrdé' }
  ]

  const softwoods = [
    { code: 'LP', name: 'Lípa (srdčitá, velkolistá, plstnatá)' },
    { code: 'TP', name: 'Topol (šlechtěný, bílý, šlechtěný)' },
    { code: 'VR', name: 'Vrba' },
    { code: 'LMX', name: 'Ostatní listnaté měkké' }
  ]

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
            <span className="text-forest-800 font-medium">Výklad pojmů</span>
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
                Výklad{' '}
                <span className="text-gold-400">pojmů</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed text-forest-100">
                Přehled používaných jednotek, hmotnosti a zkratek v lesnictví
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#pojmy"
                  className="btn-primary inline-flex items-center justify-center group"
                >
                  Zobrazit pojmy
                  <ChevronRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/wood-pile.jpg"
                  alt="Výklad pojmů v lesnictví"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Používané pojmy Section */}
      <section id="pojmy" className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-forest-800 mb-4">
              Používané pojmy
            </h2>
            <p className="text-lg text-forest-600 max-w-3xl mx-auto">
              Seznamte se s nejdůležitějšími jednotkami a pojmy používanými v lesnictví a prodeji dřeva.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {accordionItems.map((item) => (
              <div key={item.id} className="border border-forest-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenAccordion(openAccordion === item.id ? -1 : item.id)}
                  className="w-full px-6 py-4 bg-forest-50 hover:bg-forest-100 transition-colors flex items-center justify-between text-left"
                >
                  <h3 className="text-xl font-semibold text-forest-800">
                    {item.title}
                  </h3>
                  {openAccordion === item.id ? (
                    <ChevronUpIcon className="h-5 w-5 text-forest-600" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 text-forest-600" />
                  )}
                </button>
                
                {openAccordion === item.id && (
                  <div className="px-6 py-6 bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-forest-800 mb-2">Definice:</h4>
                          <p className="text-forest-700">{item.content.definition}</p>
                        </div>
                        
                        {item.content.detail && (
                          <div>
                            <h4 className="font-semibold text-forest-800 mb-2">Detail:</h4>
                            <p className="text-forest-700">{item.content.detail}</p>
                          </div>
                        )}
                        
                        {item.content.tip && (
                          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                            <h4 className="font-semibold text-green-800 mb-2">💡 Tip:</h4>
                            <p className="text-green-700">{item.content.tip}</p>
                          </div>
                        )}
                        
                        {item.content.warning && (
                          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                            <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Upozornění:</h4>
                            <p className="text-yellow-700">{item.content.warning}</p>
                          </div>
                        )}
                      </div>
                      
                      <div className="relative">
                        <img
                          src={item.content.image}
                          alt={item.title}
                          className="w-full h-64 object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Váha dřeva Section */}
      <section className="section-padding bg-forest-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-forest-800 mb-4">
              Váha dřeva
            </h2>
            <p className="text-lg text-forest-600 max-w-3xl mx-auto">
              Přehled hustoty nejběžnějších dřevin v různých stavech vlhkosti
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-forest-700 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Dřevina</th>
                      <th className="px-6 py-4 text-center font-semibold">Čerstvé dřevo (kg/m³)</th>
                      <th className="px-6 py-4 text-center font-semibold">Na vzduchu vyschlé (kg/m³)</th>
                      <th className="px-6 py-4 text-center font-semibold">Uměle dosušené (kg/m³)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-forest-200">
                    {densityData.map((row, index) => (
                      <tr key={index} className="hover:bg-forest-50">
                        <td className="px-6 py-4 font-medium text-forest-800">{row.wood}</td>
                        <td className="px-6 py-4 text-center text-forest-700">{row.fresh}</td>
                        <td className="px-6 py-4 text-center text-forest-700">{row.air}</td>
                        <td className="px-6 py-4 text-center text-forest-700">{row.kiln}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-blue-800 text-sm">
                <strong>Poznámka:</strong> Hustota čerstvého dřeva závisí na obsahu vody a může se lišit v závislosti na podmínkách.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Zkratky dřevin Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-forest-800 mb-4">
              Zkratky dřevin
            </h2>
            <p className="text-lg text-forest-600 max-w-3xl mx-auto">
              Přehled zkratek používaných pro označení jednotlivých druhů dřevin
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Tvrdé dřeviny */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold text-forest-800 mb-6 flex items-center">
                <span className="w-4 h-4 bg-forest-700 rounded-full mr-3"></span>
                Tvrdé dřeviny
              </h3>
              <div className="space-y-3">
                {hardwoods.map((wood, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-forest-100 last:border-b-0">
                    <span className="font-mono font-bold text-forest-700 bg-forest-100 px-2 py-1 rounded text-sm">
                      {wood.code}
                    </span>
                    <span className="text-forest-800">{wood.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Měkké dřeviny */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold text-forest-800 mb-6 flex items-center">
                <span className="w-4 h-4 bg-forest-500 rounded-full mr-3"></span>
                Měkké dřeviny
              </h3>
              <div className="space-y-3">
                {softwoods.map((wood, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-forest-100 last:border-b-0">
                    <span className="font-mono font-bold text-forest-600 bg-forest-50 px-2 py-1 rounded text-sm">
                      {wood.code}
                    </span>
                    <span className="text-forest-800">{wood.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Graf Section */}
      <section className="section-padding bg-forest-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-forest-800 mb-6">
              Závislost výhřevnosti na obsahu vody
            </h2>
            <p className="text-lg text-forest-600 mb-8">
              S rostoucí vlhkostí dřeva se snižuje jeho výhřevnost.
            </p>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-full h-64 bg-gradient-to-br from-forest-100 to-forest-200 rounded-lg flex items-center justify-center">
                <p className="text-forest-600 text-lg">
                  Graf bude implementován pomocí Chart.js
                </p>
              </div>
              <p className="text-sm text-forest-500 mt-4">
                Graf ukazuje lineární závislost mezi vlhkostí dřeva (%) a jeho výhřevností (MJ/kg)
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

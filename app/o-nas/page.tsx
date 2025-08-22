'use client'

import Link from 'next/link'
import { ChevronRightIcon, HomeIcon, PhoneIcon, EnvelopeIcon, MapPinIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

export default function ONasPage() {
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
            <span className="text-forest-800 font-medium">O nás</span>
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
                KEPRT{' '}
                <span className="text-gold-400">spol. s r.o.</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed text-forest-100">
                Komplexní služby v lesnictví a velkoobchod s dřevní hmotou
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#o-nas"
                  className="btn-primary inline-flex items-center justify-center group"
                >
                  Zjistit více
                  <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:+420732443827"
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
                  alt="KEPRT spol. s r.o."
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KLA - LES Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-forest-800 mb-6">KEPRT spol. s r.o.</h2>
                <h3 className="text-xl font-semibold text-forest-700 mb-4">Komplexní služby v lesnictví a velkoobchod s dřevní hmotou</h3>
                
                <p className="text-forest-700 leading-relaxed mb-6">
                  Firma <strong>KEPRT spol. s r.o.</strong> se zabývá kompletní lesnickou činností – těžbou dřeva, pěstebními pracemi, prodejem a nákupem dříví. Máme dlouholetou praxi v oboru lesnictví.
                </p>

                <p className="text-forest-700 leading-relaxed mb-6">
                  Zajistíme celý proces od vytěžení, přiblížení a odvozu dříví.
                </p>

                <p className="text-forest-700 leading-relaxed mb-6">
                  Naším cílem je vždy dohodnout se na co nejvýhodnějších podmínkách prodeje či nákupu a ušetřit Vám starosti spojené s těmito pracemi.
                </p>

                <p className="text-forest-700 leading-relaxed mb-6">
                  Provádíme výrobu palivového dříví pro konečné odběratele, manipulaci dříví a zhodnocování sortimentů pro zásobení pil a dřevozpracujících podniků. Disponujeme vlastním dřevoskladem ve Strážnici.
                </p>

                <p className="text-forest-700 leading-relaxed mb-6">
                  Rádi pomůžeme malým vlastníkům lesů, obcím i dalším subjektům se zpracováním dříví.
                </p>
              </div>
            </div>

            {/* Forest Image with Tree Ring Overlay */}
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/wood-pile.jpg"
                  alt="Fotografie lesa"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                
                {/* Tree Ring Overlay */}
                <div className="absolute bottom-8 left-8">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img
                      src="/wood-pile.jpg"
                      alt="Letokruhy dřeva"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KEPRT spol. s r.o. Section */}
      <section className="section-padding bg-forest-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Cut Wood Image */}
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/wood-pile.jpg"
                  alt="Nařezané dříví"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>

            {/* Text Content */}
            <div>
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-forest-800 mb-6">KEPRT spol. s r.o.</h2>
                <h3 className="text-xl font-semibold text-forest-700 mb-4">Velkoobchod s dřevní hmotou</h3>
                
                <p className="text-forest-700 leading-relaxed mb-6">
                  <strong>KEPRT spol. s r.o.</strong> je budoucí projekt zaměřený na mezinárodní velkoobchod s dřevní hmotou.
                </p>

                <p className="text-forest-700 leading-relaxed mb-6">
                  Nabízený sortiment:
                </p>

                <ul className="list-disc list-inside space-y-2 mb-8 text-forest-700">
                  <li>kulatinové sortimenty</li>
                  <li>řezivo</li>
                  <li>palivo</li>
                </ul>

                <Link
                  href="/kontakt"
                  className="inline-flex items-center bg-wood-500 hover:bg-wood-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
                >
                  Prodej a nákup dříví
                  <ChevronRightIcon className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-forest-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-forest-800 mb-4">
              Kontaktní informace
            </h2>
            <p className="text-lg text-forest-600">
              Jsme tu pro vás a rádi vám pomůžeme
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Adam Keprt */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-wood-200">
              <h3 className="text-xl font-bold text-forest-800 mb-4">Adam Keprt</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPinIcon className="h-5 w-5 text-wood-600" />
                  <span className="text-forest-600">Kasárna 1009, Bzenec 696 81</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-forest-600">IČO: 06402500</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-forest-600">DIČ: CZ9504284647</span>
                </div>
                <div className="flex items-center space-x-3">
                  <PhoneIcon className="h-5 w-5 text-wood-600" />
                  <a href="tel:+420732443827" className="text-forest-600 hover:text-wood-600">
                    +420 732 443 827
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <EnvelopeIcon className="h-5 w-5 text-wood-600" />
                  <a href="mailto:keprtadam@gmail.com" className="text-forest-600 hover:text-wood-600">
                    keprtadam@gmail.com
                  </a>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-wood-200">
                <p className="text-sm text-forest-600 font-medium">Bankovní spojení:</p>
                <p className="text-sm text-forest-600">Česká spořitelna: 5027223389/0800</p>
                <p className="text-sm text-forest-600">Raiffeisen Bank EURO: 3845145002/5500</p>
              </div>
            </div>

            {/* Lukáš Keprt */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-wood-200">
              <h3 className="text-xl font-bold text-forest-800 mb-4">Lukáš Keprt</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPinIcon className="h-5 w-5 text-wood-600" />
                  <span className="text-forest-600">Radějov 214, 696 67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-forest-600">IČO: 48840271</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-forest-600">DIČ: CZ7006014312</span>
                </div>
                <div className="flex items-center space-x-3">
                  <PhoneIcon className="h-5 w-5 text-wood-600" />
                  <a href="tel:+420602613254" className="text-forest-600 hover:text-wood-600">
                    +420 602 613 254
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <EnvelopeIcon className="h-5 w-5 text-wood-600" />
                  <a href="mailto:keprtlukas@seznam.cz" className="text-forest-600 hover:text-wood-600">
                    keprtlukas@seznam.cz
                  </a>
                </div>
              </div>
            </div>

            {/* KEPRT spol. s r.o. */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-wood-200">
              <h3 className="text-xl font-bold text-forest-800 mb-4">KEPRT spol. s r.o.</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPinIcon className="h-5 w-5 text-wood-600" />
                  <span className="text-forest-600">Radějov 214, 696 67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-forest-600">IČO: 26292084</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-wood-200">
                <p className="text-sm text-forest-600 font-medium">Bankovní spojení:</p>
                <p className="text-sm text-forest-600">Raiffeisen Bank č.ú. 8136778002/5500</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

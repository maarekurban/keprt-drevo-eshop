'use client'

import Link from 'next/link'
import { ChevronRightIcon, HomeIcon, PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

export default function KontaktPage() {
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
            <span className="text-forest-800 font-medium">Kontakt</span>
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
                KONTAKT
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed text-forest-100">
                Zde nás můžete zastihnout. Disponujeme dvěma skladovacími plochami pro vaše pohodlí.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#lokace"
                  className="btn-primary inline-flex items-center justify-center group"
                >
                  Zobrazit lokace
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
                  alt="Kontakt"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Strážnice */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-wood-200">
              <h2 className="text-2xl font-bold text-forest-800 mb-4">Strážnice</h2>
              <p className="text-forest-600 mb-6">
                Zde probíhá výroba palivového dříví a nachází se kanceláře.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <MapPinIcon className="h-5 w-5 text-wood-600" />
                  <span className="text-forest-600">W855+HW Strážnice</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ClockIcon className="h-5 w-5 text-wood-600" />
                  <span className="text-forest-600">PO-PÁ 8:00-14:30</span>
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

              {/* Map placeholder */}
              <div className="bg-forest-100 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPinIcon className="h-12 w-12 text-forest-400 mx-auto mb-2" />
                  <p className="text-forest-600">Interaktivní mapa Strážnice</p>
                  <p className="text-sm text-forest-500">GPS: W855+HW Strážnice</p>
                </div>
              </div>
            </div>

            {/* Tvarožná Lhota */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-wood-200">
              <h2 className="text-2xl font-bold text-forest-800 mb-4">Tvarožná Lhota</h2>
              <p className="text-forest-600 mb-6">
                Sklad kulatinových sortimentů vzdálený 5 km od Strážnice. Návštěva se domlouvá telefonicky.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <MapPinIcon className="h-5 w-5 text-wood-600" />
                  <span className="text-forest-600">GPS: 48°52′50.0″N 17°21′03.8″E</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ClockIcon className="h-5 w-5 text-wood-600" />
                  <span className="text-forest-600">Po domluvě telefonicky</span>
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

              {/* Map placeholder */}
              <div className="bg-forest-100 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPinIcon className="h-12 w-12 text-forest-400 mx-auto mb-2" />
                  <p className="text-forest-600">Interaktivní mapa Tvarožná Lhota</p>
                  <p className="text-sm text-forest-500">GPS: 48°52′50.0″N 17°21′03.8″E</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Persons */}
      <section className="section-padding bg-forest-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-forest-800 mb-4">
              Kontaktní osoby
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

      {/* Contact Form */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-forest-800 mb-4">
                Kontaktní formulář
              </h2>
              <p className="text-lg text-forest-600">
                Napište nám a my vám odpovíme co nejdříve
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-forest-700 mb-2">
                    Jméno *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-forest-300 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-wood-500 transition-colors"
                    placeholder="Vaše jméno"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-forest-700 mb-2">
                    Příjmení *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-forest-300 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-wood-500 transition-colors"
                    placeholder="Vaše příjmení"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-forest-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-forest-300 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-wood-500 transition-colors"
                    placeholder="vas@email.cz"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-forest-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-forest-300 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-wood-500 transition-colors"
                    placeholder="+420 123 456 789"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-forest-700 mb-2">
                  Předmět *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-forest-300 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-wood-500 transition-colors"
                >
                  <option value="">Vyberte předmět</option>
                  <option value="palivove-drevo">Palivové dřevo</option>
                  <option value="brikety">Brikety</option>
                  <option value="truhlarske-rezivo">Truhlářské řezivo</option>
                  <option value="kontejnerova-doprava">Kontejnerová doprava</option>
                  <option value="jine">Jiné</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-forest-700 mb-2">
                  Zpráva *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-forest-300 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-wood-500 transition-colors"
                  placeholder="Napište nám vaši zprávu..."
                ></textarea>
              </div>

              <div>
                <label htmlFor="file" className="block text-sm font-medium text-forest-700 mb-2">
                  Příloha (volitelné)
                </label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  className="w-full px-4 py-3 border border-forest-300 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-wood-500 transition-colors"
                />
                <p className="text-sm text-forest-500 mt-1">
                  Můžete přiložit výkres, specifikaci nebo jiný dokument (max. 10 MB)
                </p>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-wood-500 hover:bg-wood-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
                >
                  Odeslat zprávu
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="section-padding bg-forest-50">
        <div className="container-max">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-forest-800 mb-4">
              Sledujte nás
            </h2>
            <p className="text-lg text-forest-600 mb-8">
              Buďte v obraze s našimi novinkami a tipy
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-forest-600 hover:text-wood-600 transition-colors text-2xl">
                📘 Facebook
              </a>
              <a href="#" className="text-forest-600 hover:text-wood-600 transition-colors text-2xl">
                📷 Instagram
              </a>
              <a href="#" className="text-forest-600 hover:text-wood-600 transition-colors text-2xl">
                📺 YouTube
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronRightIcon, HomeIcon, EnvelopeIcon, CheckIcon } from '@heroicons/react/24/outline'

export default function SpecialniRezivoPage() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const galleryImages = [
    '/rezivo.png',
    '/rezivo.png',
    '/rezivo.png',
    '/rezivo.png',
    '/rezivo.png',
    '/rezivo.png',
    '/rezivo.png',
    '/rezivo.png',
    '/rezivo.png',
    '/rezivo.png',
    '/rezivo.png',
    '/rezivo.png'
  ]

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Zde by byla logika pro odeslání e-mailu
    setIsSubscribed(true)
    setEmail('')
  }

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
            <Link href="/truhlarske-rezivo" className="text-forest-600 hover:text-forest-800">
              Truhlářské řezivo
            </Link>
            <ChevronRightIcon className="h-4 w-4 text-forest-400" />
            <span className="text-forest-800 font-medium">Speciální truhlářské řezivo</span>
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
                Speciální{' '}
                <span className="text-gold-400">truhlářské řezivo</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed text-forest-100">
                Exkluzivní nabídky a speciální řešení pro náročné truhlářské projekty. 
                Připojte se k našemu newsletteru a získejte přístup k exkluzivním nabídkám.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#newsletter"
                  className="btn-primary inline-flex items-center justify-center group"
                >
                  Přihlásit k newsletteru
                  <ChevronRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:+420732443827"
                  className="btn-secondary inline-flex items-center justify-center group"
                >
                  Zavolejte nám
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/rezivo.png"
                  alt="Speciální truhlářské řezivo"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-forest-800 mb-8 text-center">
            Galerie našeho zboží
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={image}
                  alt={`Speciální truhlářské řezivo - výrobek ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg">
                      Speciální řezivo {index + 1}
                    </h3>
                    <p className="text-white/80 text-sm">
                      Exkluzivní nabídka
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="section-padding bg-forest-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-forest-800 mb-6">
              Exkluzivní nabídky pro profesionály
            </h2>
            <div className="text-lg text-forest-600 space-y-4">
              <p>
                Naše speciální truhlářské řezivo zahrnuje exkluzivní sortiment, který není běžně dostupný v našem standardním katalogu. 
                Jedná se o speciální řezy, vzácné dřeviny, větší formáty nebo limitované série.
              </p>
              <p>
                Pro přístup k těmto exkluzivním nabídkám se přihlaste k našemu newsletteru. 
                Budeme vám pravidelně zasílat aktuální nabídky, novinky a speciální ceny.
              </p>
              <p>
                Newsletter obsahuje informace o:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="flex items-center space-x-2">
                  <CheckIcon className="h-5 w-5 text-green-500" />
                  <span className="text-forest-600">Exkluzivní nabídky</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckIcon className="h-5 w-5 text-green-500" />
                  <span className="text-forest-600">Speciální ceny</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckIcon className="h-5 w-5 text-green-500" />
                  <span className="text-forest-600">Novinky v sortimentu</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="section-padding">
        <div className="container-max">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-forest-800 mb-4">
              Přihlaste se k newsletteru
            </h2>
            <p className="text-forest-600 mb-8">
              Získejte exkluzivní přístup k našim speciálním nabídkám a buďte mezi prvními, 
              kdo se dozví o novinkách v sortimentu.
            </p>

            {!isSubscribed ? (
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Váš e-mail"
                      required
                      className="w-full px-4 py-3 border border-forest-300 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-transparent"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-wood-500 hover:bg-wood-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors flex items-center justify-center space-x-2"
                  >
                    <EnvelopeIcon className="h-5 w-5" />
                    <span>Přihlásit se</span>
                  </button>
                </div>
                <p className="text-sm text-forest-500">
                  Můžete se kdykoliv odhlásit. Vaše data jsou v bezpečí.
                </p>
              </form>
            ) : (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center justify-center space-x-2 text-green-800">
                  <CheckIcon className="h-6 w-6" />
                  <span className="text-lg font-semibold">
                    Úspěšně přihlášeno k newsletteru!
                  </span>
                </div>
                <p className="text-green-600 mt-2">
                  Děkujeme za přihlášení. První nabídky vám zašleme již brzy.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-forest-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-forest-800 mb-6">
              Potřebujete individuální řešení?
            </h2>
            <p className="text-lg text-forest-600 mb-8">
              Máte specifické požadavky na truhlářské řezivo? Kontaktujte nás a společně najdeme 
              nejlepší řešení pro váš projekt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+420732443827"
                className="bg-wood-500 hover:bg-wood-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <span>Zavolejte nám</span>
              </a>
              <a
                href="mailto:keprtadam@gmail.com"
                className="bg-forest-600 hover:bg-forest-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <EnvelopeIcon className="h-5 w-5" />
                <span>Napište nám</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

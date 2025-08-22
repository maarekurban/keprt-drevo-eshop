'use client'

import Link from 'next/link'
import { ChevronRightIcon, HomeIcon, DocumentArrowDownIcon, DocumentTextIcon } from '@heroicons/react/24/outline'

export default function KeStazeniPage() {
  const documents = [
    {
      id: 1,
      title: 'KEPRT spol. s.r.o. Aktuální výpis',
      description: 'Aktuální výpis z obchodního rejstříku',
      type: 'PDF',
      size: '245 KB',
      href: '#',
      icon: DocumentTextIcon
    },
    {
      id: 2,
      title: 'KEPRT spol. s.r.o. Úplný výpis',
      description: 'Úplný výpis z obchodního rejstříku',
      type: 'PDF',
      size: '1.2 MB',
      href: '#',
      icon: DocumentTextIcon
    },
    {
      id: 3,
      title: 'OSVČ Adam Keprt',
      description: 'Živnostenský list - Adam Keprt',
      type: 'PDF',
      size: '180 KB',
      href: '#',
      icon: DocumentTextIcon
    },
    {
      id: 4,
      title: 'OSVČ Lukáš Keprt',
      description: 'Živnostenský list - Lukáš Keprt',
      type: 'PDF',
      size: '195 KB',
      href: '#',
      icon: DocumentTextIcon
    }
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
            <span className="text-forest-800 font-medium">Ke stažení</span>
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
                Ke{' '}
                <span className="text-gold-400">stažení</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed text-forest-100">
                Dokumenty a certifikáty naší společnosti
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#dokumenty"
                  className="btn-primary inline-flex items-center justify-center group"
                >
                  Zobrazit dokumenty
                  <ChevronRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/wood-pile.jpg"
                  alt="Dokumenty ke stažení"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section id="dokumenty" className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-forest-800 mb-4">
              Dokumenty ke stažení
            </h2>
            <p className="text-lg text-forest-600 max-w-3xl mx-auto">
              Stáhněte si potřebné dokumenty a certifikáty naší společnosti
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {documents.map((doc) => (
                <div
                  key={doc.id}
                  className="bg-white border border-forest-200 rounded-lg p-6 hover:shadow-lg transition-shadow group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-forest-100 rounded-lg flex items-center justify-center group-hover:bg-forest-200 transition-colors">
                        <doc.icon className="h-6 w-6 text-forest-600" />
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-forest-800 mb-2 group-hover:text-forest-600 transition-colors">
                        {doc.title}
                      </h3>
                      <p className="text-forest-600 text-sm mb-3">
                        {doc.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-forest-500">
                          <span className="bg-forest-100 text-forest-700 px-2 py-1 rounded text-xs font-medium">
                            {doc.type}
                          </span>
                          <span>{doc.size}</span>
                        </div>
                        <a
                          href={doc.href}
                          className="inline-flex items-center text-forest-600 hover:text-forest-800 font-medium text-sm group-hover:translate-x-1 transition-transform"
                        >
                          <DocumentArrowDownIcon className="h-4 w-4 mr-1" />
                          Stáhnout
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">
                Informace o dokumentech
              </h3>
              <div className="text-blue-700 space-y-2 text-sm">
                <p>
                  Všechny dokumenty jsou ve formátu PDF a jsou aktuální k datu zveřejnění.
                </p>
                <p>
                  Pro otevření PDF souborů potřebujete Adobe Reader nebo jiný PDF prohlížeč.
                </p>
                <p>
                  V případě problémů se stažením nás kontaktujte.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-forest-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-forest-800 mb-6">
              Potřebujete další informace?
            </h2>
            <p className="text-lg text-forest-600 mb-8">
              Kontaktujte nás pro více informací o našich dokumentech a certifikátech.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/kontakt"
                className="bg-wood-500 hover:bg-wood-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <span>Kontaktovat nás</span>
              </a>
              <a
                href="tel:+420732443827"
                className="bg-forest-600 hover:bg-forest-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <span>Zavolejte nám</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

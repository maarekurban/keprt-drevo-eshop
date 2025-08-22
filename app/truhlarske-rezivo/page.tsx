'use client'

import Link from 'next/link'
import { ChevronRightIcon, HomeIcon, ArrowRightIcon, PhoneIcon } from '@heroicons/react/24/outline'

interface WoodType {
  id: string
  name: string
  description: string
  image: string
  href: string
}

const woodTypes: WoodType[] = [
  {
    id: 'smrk',
    name: 'Smrk',
    description: 'Truhlářské řezivo neomítané ve dřevině smrk. Kvalitní sušené řezivo pro výrobu nábytku a stavebně-truhlářských výrobků.',
    image: '/rezivo.png',
    href: '/truhlarske-rezivo/smrk'
  },
  {
    id: 'borovice',
    name: 'Borovice',
    description: 'Truhlářské řezivo neomítané ve dřevině borovice. Lehké a pevné dřevo vhodné pro interiérové použití.',
    image: '/rezivo.png',
    href: '/truhlarske-rezivo/borovice'
  },
  {
    id: 'modrin',
    name: 'Modřín',
    description: 'Truhlářské řezivo neomítané ve dřevině modřín. Odolné dřevo s přirozenou ochranou proti hnilobě.',
    image: '/rezivo.png',
    href: '/truhlarske-rezivo/modrin'
  },
  {
    id: 'dub',
    name: 'Dub',
    description: 'Truhlářské řezivo neomítané ve dřevině dub. Tvrdé a trvanlivé dřevo pro náročné aplikace.',
    image: '/rezivo.png',
    href: '/truhlarske-rezivo/dub'
  },
  {
    id: 'buk',
    name: 'Buk',
    description: 'Truhlářské řezivo neomítané ve dřevině buk. Rovnoměrná struktura a vysoká pevnost.',
    image: '/rezivo.png',
    href: '/truhlarske-rezivo/buk'
  },
  {
    id: 'buk-pařeny',
    name: 'Buk pařený',
    description: 'Truhlářské řezivo neomítané ve dřevině buk pařený. Tmavší odstín a zvýšená odolnost.',
    image: '/rezivo.png',
    href: '/truhlarske-rezivo/buk-pařeny'
  },
  {
    id: 'jasan',
    name: 'Jasan',
    description: 'Truhlářské řezivo neomítané ve dřevině jasan. Pružné a pevné dřevo s krásnou kresbou.',
    image: '/rezivo.png',
    href: '/truhlarske-rezivo/jasan'
  },
  {
    id: 'javor',
    name: 'Javor',
    description: 'Truhlářské řezivo neomítané ve dřevině javor. Světlé dřevo s jemnou strukturou.',
    image: '/rezivo.png',
    href: '/truhlarske-rezivo/javor'
  },
  {
    id: 'lipa',
    name: 'Lípa',
    description: 'Truhlářské řezivo neomítané ve dřevině lípa. Měkké dřevo vhodné pro řezbářství a dekorativní prvky.',
    image: '/rezivo.png',
    href: '/truhlarske-rezivo/lipa'
  },
  {
    id: 'olše',
    name: 'Olše',
    description: 'Truhlářské řezivo neomítané ve dřevině olše. Stabilní dřevo s dobrou zpracovatelností.',
    image: '/rezivo.png',
    href: '/truhlarske-rezivo/olše'
  },
  {
    id: 'akát',
    name: 'Akát',
    description: 'Truhlářské řezivo neomítané ve dřevině akát. Velmi tvrdé a odolné dřevo pro exteriérové použití.',
    image: '/rezivo.png',
    href: '/truhlarske-rezivo/akát'
  }
]

export default function TruhlarskeRezivoPage() {
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
            <span className="text-forest-800 font-medium">Truhlářské řezivo</span>
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
                Truhlářské{' '}
                <span className="text-gold-400">řezivo</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed text-forest-100">
                Sušené a neomítané truhlářské řezivo určené zejména pro výrobu nábytku a stavebně-truhlářských výrobků (okna, dveře) a pro další polotovary jako spárovky, lišty, podlahy nebo palubky.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#produkty"
                  className="btn-primary inline-flex items-center justify-center group"
                >
                  Zobrazit nabídku
                  <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:+420732443827"
                  className="btn-secondary inline-flex items-center justify-center group"
                >
                  <PhoneIcon className="mr-2 h-5 w-5" />
                  Objednat telefonicky
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/rezivo.png"
                  alt="Truhlářské řezivo"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {woodTypes.map((wood) => (
              <div key={wood.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-wood-200">
                <Link href={wood.href}>
                  <div className="relative">
                    <img
                      src={wood.image}
                      alt={`${wood.name} - truhlářské řezivo`}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Link>
                
                <div className="p-6">
                  <Link href={wood.href}>
                    <h2 className="text-xl font-bold text-forest-800 mb-2 hover:text-wood-600 transition-colors">
                      {wood.name}
                    </h2>
                  </Link>
                  
                  <p className="text-forest-600 mb-4 leading-relaxed">
                    {wood.description}
                  </p>

                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-forest-800">
                      od 12 500 Kč
                    </span>
                    <p className="text-forest-600 mt-1">Cena za m³ bez DPH</p>
                  </div>

                  {/* Stock Status */}
                  <div className="mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      Skladem
                    </span>
                  </div>

                  {/* Detail Button */}
                  <Link
                    href={wood.href}
                    className="w-full bg-wood-500 hover:bg-wood-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Detail produktu</span>
                    <ChevronRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="section-padding bg-forest-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-forest-800 mb-4">
              Kvalita a certifikace
            </h2>
            <p className="text-lg text-forest-600">
              Naše truhlářské řezivo splňuje nejvyšší standardy kvality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-wood-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌳</span>
              </div>
              <h3 className="text-xl font-semibold text-forest-800 mb-2">
                Sušené řezivo
              </h3>
              <p className="text-forest-600">
                Všechno řezivo je řádně vysušené na optimální vlhkost pro truhlářské použití.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-wood-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📏</span>
              </div>
              <h3 className="text-xl font-semibold text-forest-800 mb-2">
                Přesné rozměry
              </h3>
              <p className="text-forest-600">
                Dodáváme řezivo v přesných rozměrech podle vašich požadavků a specifikací.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-wood-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold text-forest-800 mb-2">
                Certifikované
              </h3>
              <p className="text-forest-600">
                Naše řezivo splňuje všechny normy a certifikace pro truhlářské použití.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

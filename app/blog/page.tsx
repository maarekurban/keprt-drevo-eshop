'use client'

import Link from 'next/link'
import { ChevronRightIcon, HomeIcon, CalendarIcon, UserIcon, ArrowRightIcon, PhoneIcon } from '@heroicons/react/24/outline'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  author: string
  date: string
  category: string
  image: string
  href: string
}

const blogPosts: BlogPost[] = [
  {
    id: 'jak-spravne-skladovat-drevo',
    title: 'Jak správně skladovat palivové dřevo',
    excerpt: 'Přečtěte si naše tipy pro správné skladování dřeva, aby si zachovalo svou kvalitu a výhřevnost.',
    author: 'Adam Keprt',
    date: '15. 12. 2024',
    category: 'Tipy pro topení',
    image: '/wood-pile.jpg',
    href: '/blog/jak-spravne-skladovat-drevo'
  },
  {
    id: 'brikety-vs-pelety',
    title: 'Rozdíly mezi briketami a peletami',
    excerpt: 'Nevíte si rady s výběrem mezi briketami a peletami? Poradíme vám, co je pro vás nejlepší.',
    author: 'Lukáš Keprt',
    date: '10. 12. 2024',
    category: 'Výběr paliva',
    image: '/wood-pile.jpg',
    href: '/blog/brikety-vs-pelety'
  },
  {
    id: 'certifikaty-fsc-pefc',
    title: 'Nové certifikáty FSC a PEFC',
    excerpt: 'Jsme hrdí na to, že jsme získali certifikáty pro udržitelné lesní hospodářství.',
    author: 'Adam Keprt',
    date: '5. 12. 2024',
    category: 'Novinky z firmy',
    image: '/wood-pile.jpg',
    href: '/blog/certifikaty-fsc-pefc'
  },
  {
    id: 'jak-vybrat-drevo',
    title: 'Jak vybrat správné palivové dřevo',
    excerpt: 'Průvodce výběrem dřeva podle druhu, vlhkosti a výhřevnosti pro optimální topení.',
    author: 'Adam Keprt',
    date: '1. 12. 2024',
    category: 'Výběr paliva',
    image: '/wood-pile.jpg',
    href: '/blog/jak-vybrat-drevo'
  },
  {
    id: 'recepty-na-gril',
    title: 'Recepty na gril s dřevěným uhlím',
    excerpt: 'Inspirujte se našimi recepty pro grilování s kvalitním dřevěným uhlím a grilovacím dřevem.',
    author: 'Lukáš Keprt',
    date: '28. 11. 2024',
    category: 'Recepty na gril',
    image: '/wood-pile.jpg',
    href: '/blog/recepty-na-gril'
  },
  {
    id: 'case-study-truhlarstvi',
    title: 'Case study: Dodávka řeziva pro truhlářství',
    excerpt: 'Přečtěte si o úspěšné spolupráci s truhlářskou firmou a dodávce kvalitního řeziva.',
    author: 'Adam Keprt',
    date: '25. 11. 2024',
    category: 'Case studies (B2B)',
    image: '/wood-pile.jpg',
    href: '/blog/case-study-truhlarstvi'
  }
]

const categories = [
  'Všechny články',
  'Tipy pro topení',
  'Jak skladovat',
  'Výběr paliva',
  'Recepty na gril',
  'Novinky z firmy',
  'Case studies (B2B)'
]

export default function BlogPage() {
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
            <span className="text-forest-800 font-medium">Blog</span>
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
                Blog /{' '}
                <span className="text-gold-400">Magazín</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed text-forest-100">
                Užitečné tipy, novinky a články o dřevu, topení a našich službách. 
                Buďte v obraze s nejnovějšími informacemi z oboru.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#clanky"
                  className="btn-primary inline-flex items-center justify-center group"
                >
                  Zobrazit články
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
                  alt="Blog / Magazín"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="section-padding bg-white border-b border-forest-200">
        <div className="container-max">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 rounded-lg font-medium transition-colors bg-forest-100 text-forest-700 hover:bg-wood-500 hover:text-white"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-wood-200">
                <Link href={post.href} className="block">
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-forest-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-forest-800 mb-3 hover:text-wood-600 transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-forest-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-forest-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <UserIcon className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <CalendarIcon className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-wood-600 font-medium hover:text-wood-700 transition-colors">
                        Přečíst více
                        <ChevronRightIcon className="h-4 w-4 ml-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-forest-50">
        <div className="container-max">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-forest-800 mb-4">
              Buďte v obraze
            </h2>
            <p className="text-lg text-forest-600 mb-8">
              Přihlaste se k odběru newsletteru a získejte exkluzivní tipy a akce jako první
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Váš e-mail"
                className="flex-1 px-4 py-3 rounded-lg border border-forest-300 focus:ring-2 focus:ring-wood-500 focus:border-wood-500 transition-colors"
                required
              />
              <button
                type="submit"
                className="bg-wood-500 hover:bg-wood-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Přihlásit
              </button>
            </form>
            
            <p className="text-sm text-forest-500 mt-4">
              Můžete se kdykoliv odhlásit. Vaše údaje jsou v bezpečí.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-forest-800 mb-4">
              Oblíbené kategorie
            </h2>
            <p className="text-lg text-forest-600">
              Prozkoumejte naše nejpopulárnější články
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Tipy pro topení', count: 12, href: '/blog/kategorie/tipy-pro-topeni' },
              { name: 'Výběr paliva', count: 8, href: '/blog/kategorie/vyber-paliva' },
              { name: 'Skladování', count: 6, href: '/blog/kategorie/skladovani' },
              { name: 'Novinky', count: 15, href: '/blog/kategorie/novinky' }
            ].map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="bg-forest-50 rounded-xl p-6 text-center hover:bg-wood-50 transition-colors border border-forest-200 hover:border-wood-300"
              >
                <h3 className="text-lg font-semibold text-forest-800 mb-2">
                  {category.name}
                </h3>
                <p className="text-forest-600">
                  {category.count} článků
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

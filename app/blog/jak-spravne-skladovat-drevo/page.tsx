'use client'

import Link from 'next/link'
import { ChevronRightIcon, HomeIcon, CalendarIcon, UserIcon } from '@heroicons/react/24/outline'

export default function BlogPostPage() {
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
            <Link href="/blog" className="text-forest-600 hover:text-forest-800">
              Blog
            </Link>
            <ChevronRightIcon className="h-4 w-4 text-forest-400" />
            <span className="text-forest-800 font-medium">Jak správně skladovat palivové dřevo</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-forest-600 to-forest-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-max section-padding relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="mb-4">
                <span className="bg-forest-700 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Tipy pro topení
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Jak správně{' '}
                <span className="text-gold-400">skladovat</span>{' '}
                palivové dřevo
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed text-forest-100">
                Přečtěte si naše tipy pro správné skladování dřeva, aby si zachovalo svou kvalitu a výhřevnost.
              </p>
              <div className="flex items-center justify-center lg:justify-start space-x-6 text-forest-100">
                <div className="flex items-center space-x-2">
                  <UserIcon className="h-5 w-5" />
                  <span>Adam Keprt</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CalendarIcon className="h-5 w-5" />
                  <span>15. 12. 2024</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/wood-pile.jpg"
                  alt="Skladování palivového dřeva"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <h2>Proč je správné skladování dřeva důležité?</h2>
              <p>
                Správné skladování palivového dřeva je klíčové pro zachování jeho kvality a výhřevnosti. 
                Špatně uskladněné dřevo může ztratit až 30% své výhřevnosti a stát se neefektivním palivem.
              </p>

              <h2>Základní pravidla skladování</h2>
              <h3>1. Suché a větrané místo</h3>
              <p>
                Dřevo musí být skladováno na suchém a dobře větraném místě. Vlhkost je největším nepřítelem 
                kvalitního palivového dřeva. Ideální je dřevník nebo přístřešek.
              </p>

              <h3>2. Správné naskládání</h3>
              <p>
                Dřevo by mělo být naskládáno tak, aby mezi jednotlivými kusy mohl proudit vzduch. 
                Nejlepší je použít metodu "štípané dřevo na sebe" nebo "křížové skládání".
              </p>

              <h3>3. Doba skladování</h3>
              <p>
                Čerstvě pokácené dřevo potřebuje minimálně 1-2 roky na vyschnutí. Tvrdé dřevo (buk, dub) 
                může potřebovat i více času. Měkké dřevo (smrk, borovice) schně rychleji.
              </p>

              <h2>Kontrola vlhkosti</h2>
              <p>
                Ideální vlhkost palivového dřeva je 15-20%. Můžete ji zkontrolovat vlhkoměrem nebo jednoduše 
                poklepáním - suché dřevo vydává jasný, kovový zvuk.
              </p>

              <h2>Časté chyby při skladování</h2>
              <ul>
                <li>Skladování dřeva přímo na zemi</li>
                <li>Přikrytí dřeva neprodyšnou fólií</li>
                <li>Skladování v uzavřeném prostoru bez větrání</li>
                <li>Příliš těsné naskládání bez mezer</li>
                <li>Ignorování orientace dřeva</li>
              </ul>

              <h2>Závěr</h2>
              <p>
                Správné skladování palivového dřeva vyžaduje trpělivost a dodržování základních pravidel. 
                Investice do kvalitního dřevníku a správného postupu se vám vrátí v podobě vyšší výhřevnosti.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="section-padding bg-forest-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-forest-800 mb-4">
              Související články
            </h2>
            <p className="text-lg text-forest-600">
              Další užitečné tipy a informace
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-wood-200">
              <Link href="/blog/brikety-vs-pelety">
                <div className="relative">
                  <img
                    src="/wood-pile.jpg"
                    alt="Rozdíly mezi briketami a peletami"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-forest-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Výběr paliva
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-forest-800 mb-3 hover:text-wood-600 transition-colors">
                    Rozdíly mezi briketami a peletami
                  </h3>
                  
                  <p className="text-forest-600 mb-4">
                    Nevíte si rady s výběrem mezi briketami a peletami? Poradíme vám, co je pro vás nejlepší.
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-forest-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <UserIcon className="h-4 w-4" />
                        <span>Lukáš Keprt</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <CalendarIcon className="h-4 w-4" />
                        <span>10. 12. 2024</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-wood-600 font-medium hover:text-wood-700 transition-colors">
                      Přečíst více
                      <ChevronRightIcon className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-wood-200">
              <Link href="/blog/jak-vybrat-drevo">
                <div className="relative">
                  <img
                    src="/wood-pile.jpg"
                    alt="Jak vybrat správné palivové dřevo"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-forest-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Výběr paliva
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-forest-800 mb-3 hover:text-wood-600 transition-colors">
                    Jak vybrat správné palivové dřevo
                  </h3>
                  
                  <p className="text-forest-600 mb-4">
                    Průvodce výběrem dřeva podle druhu, vlhkosti a výhřevnosti pro optimální topení.
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-forest-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <UserIcon className="h-4 w-4" />
                        <span>Adam Keprt</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <CalendarIcon className="h-4 w-4" />
                        <span>1. 12. 2024</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-wood-600 font-medium hover:text-wood-700 transition-colors">
                      Přečíst více
                      <ChevronRightIcon className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-wood-200">
              <Link href="/blog/certifikaty-fsc-pefc">
                <div className="relative">
                  <img
                    src="/wood-pile.jpg"
                    alt="Nové certifikáty FSC a PEFC"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-forest-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Novinky z firmy
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-forest-800 mb-3 hover:text-wood-600 transition-colors">
                    Nové certifikáty FSC a PEFC
                  </h3>
                  
                  <p className="text-forest-600 mb-4">
                    Jsme hrdí na to, že jsme získali certifikáty pro udržitelné lesní hospodářství.
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-forest-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <UserIcon className="h-4 w-4" />
                        <span>Adam Keprt</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <CalendarIcon className="h-4 w-4" />
                        <span>5. 12. 2024</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-wood-600 font-medium hover:text-wood-700 transition-colors">
                      Přečíst více
                      <ChevronRightIcon className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-forest-800 mb-4">
              Buďte v obraze
            </h2>
            <p className="text-lg text-forest-600 mb-8">
              Přihlaste se k našemu newsletteru a získejte exkluzivní tipy a informace o akcích
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Váš e-mail"
                className="flex-1 px-4 py-3 border border-wood-200 rounded-lg focus:ring-2 focus:ring-wood-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="bg-wood-500 hover:bg-wood-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Přihlásit se
              </button>
            </form>
            
            <p className="text-sm text-forest-500 mt-4">
              Můžete se kdykoliv odhlásit. Vaše údaje jsou v bezpečí.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

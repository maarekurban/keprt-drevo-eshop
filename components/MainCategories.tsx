'use client'

import { motion } from 'framer-motion'
import { ArrowRightIcon, TruckIcon, BuildingOfficeIcon, CubeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { WoodCuttingIcon, StackedLogsIcon, LoggingTruckIcon } from './Icons'

const categories = [
  {
    title: 'Palivové dřevo & brikety',
    description: 'Kvalitní palivové dřevo, brikety a pelety pro váš krb, kamna nebo gril. Suché dřevo s výhřevností až 20 MJ/kg.',
    icon: WoodCuttingIcon,
    href: '/kategorie/palivove-drevo',
    color: 'from-forest-500 to-forest-600',
    bgColor: 'bg-forest-50',
    features: ['Buk, dub, smrk', 'Suché dřevo', 'Doprava zdarma']
  },
  {
    title: 'Řezivo – velkoobchod (B2B)',
    description: 'Profesionální řezivo pro truhláře a výrobní podniky. Prkna, trámy, hranoly a OSB desky v nejvyšší kvalitě.',
    icon: StackedLogsIcon,
    href: '/b2b',
    color: 'from-wood-500 to-wood-600',
    bgColor: 'bg-wood-50',
    features: ['Prkna a trámy', 'OSB desky', 'Minimální odběr']
  },
  {
    title: 'Kontejnerová autodoprava',
    description: 'Kontejnerová doprava a lesnická autodoprava po celé ČR. Pronájem kontejnerů a profesionální přeprava.',
    icon: LoggingTruckIcon,
    href: '/kontejnery',
    color: 'from-gold-500 to-gold-600',
    bgColor: 'bg-gold-50',
    features: ['Po celé ČR', 'Pronájem kontejnerů', 'Lesnická doprava']
  }
]

export default function MainCategories() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-forest-800 mb-4">
            Naše hlavní služby
          </h2>
          <p className="text-lg text-forest-600 max-w-2xl mx-auto">
            Kompletní nabídka pro všechny vaše potřeby s dřevem - od palivového dřeva až po profesionální dopravu
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={category.href} className="block h-full">
                <div className={`h-full ${category.bgColor} rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2`}>
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-forest-800 mb-4 group-hover:text-forest-600 transition-colors">
                    {category.title}
                  </h3>
                  
                  <p className="text-forest-600 mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {category.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-forest-600">
                        <span className="w-1.5 h-1.5 bg-forest-400 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="flex items-center text-forest-600 font-semibold group-hover:text-forest-700 transition-colors">
                    Více informací
                    <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/kontakt"
            className="btn-primary inline-flex items-center"
          >
            <TruckIcon className="mr-2 h-5 w-5" />
            Poptat všechny služby
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

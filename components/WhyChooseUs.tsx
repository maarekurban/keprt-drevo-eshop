'use client'

import { motion } from 'framer-motion'
import { 
  HeartIcon, 
  GiftIcon, 
  TruckIcon, 
  MapPinIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

const benefits = [
  {
    icon: HeartIcon,
    title: 'Proklientský přístup',
    description: 'Vždy vás vyslechneme a poradíme s výběrem nejvhodnějšího dřeva pro vaše potřeby.',
    color: 'text-red-500'
  },
  {
    icon: GiftIcon,
    title: 'Dárkové balení',
    description: 'Nabízíme možnost dárkového balení pro vaše blízké. Elegantní tašky a balení zdarma.',
    color: 'text-pink-500'
  },
  {
    icon: TruckIcon,
    title: 'Rychlé dodání',
    description: 'Dodáváme do 24-48 hodin po celé ČR. V okolí Strážnice doprava zdarma od 2 m³.',
    color: 'text-blue-500'
  },
  {
    icon: MapPinIcon,
    title: 'Regionální působnost',
    description: 'Jsme rodinná firma ze Strážnice s více než 20 letou tradicí v oboru.',
    color: 'text-green-500'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Kvalita garantována',
    description: 'Všechno dřevo je řádně vysušené a testované. Poskytujeme záruku kvality.',
    color: 'text-purple-500'
  }
]

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-gradient-to-br from-forest-50 to-wood-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-forest-800 mb-4">
            Proč nakupovat u nás?
          </h2>
          <p className="text-lg text-forest-600 max-w-2xl mx-auto">
            Jsme rodinná firma s tradicí, která si váží každého zákazníka a nabízí pouze nejkvalitnější produkty
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 border border-gray-100">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className={`h-8 w-8 ${benefit.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-forest-800 mb-4 group-hover:text-forest-600 transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="text-forest-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-forest-600 mb-2">20+</div>
              <div className="text-forest-600">Let tradice</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-forest-600 mb-2">1000+</div>
              <div className="text-forest-600">Spokojených zákazníků</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-forest-600 mb-2">24h</div>
              <div className="text-forest-600">Dodání</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-forest-600 mb-2">100%</div>
              <div className="text-forest-600">Kvalita</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


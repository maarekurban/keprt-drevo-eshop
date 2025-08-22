'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { EnvelopeIcon, CheckIcon } from '@heroicons/react/24/outline'
import toast from 'react-hot-toast'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !name) {
      toast.error('Vyplňte prosím všechna pole')
      return
    }

    if (!email.includes('@')) {
      toast.error('Zadejte platný e-mail')
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubscribed(true)
      toast.success('Úspěšně jste se přihlásili k newsletteru!')
      setEmail('')
      setName('')
    }, 1000)
  }

  if (isSubscribed) {
    return (
      <section className="section-padding bg-gradient-to-br from-forest-600 to-forest-700">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckIcon className="h-10 w-10 text-forest-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Děkujeme za přihlášení!
            </h2>
            <p className="text-xl text-forest-100 max-w-2xl mx-auto">
              Budeme vás informovat o nejnovějších akcích, slevách a užitečných článcích o dřevu a topení.
            </p>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="section-padding bg-gradient-to-br from-forest-600 to-forest-700">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <EnvelopeIcon className="h-10 w-10 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Získejte informace o akcích a nových produktech
          </h2>
          
          <p className="text-xl text-forest-100 max-w-2xl mx-auto mb-8">
            Přihlaste se k odběru newsletteru a buďte první, kdo se dozví o slevách, novinkách a užitečných tipů pro topení dřevem.
          </p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="max-w-md mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Vaše jméno"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg border border-forest-500 bg-white/10 text-white placeholder-forest-200 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors"
                required
              />
              <input
                type="email"
                placeholder="Váš e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg border border-forest-500 bg-white/10 text-white placeholder-forest-200 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors"
                required
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-4 bg-gold-500 hover:bg-gold-600 disabled:bg-gold-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2 focus:ring-offset-forest-600"
            >
              {isSubmitting ? 'Přihlašuji...' : 'Přihlásit k odběru'}
            </button>
          </motion.form>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-sm text-forest-200 mt-4"
          >
            Můžete se kdykoliv odhlásit. Vaše údaje jsou v bezpečí.
          </motion.p>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-lg">🎁</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Exkluzivní slevy</h3>
              <p className="text-forest-200 text-sm">Získejte slevy, které najdete pouze v newsletteru</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-lg">📰</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Užitečné tipy</h3>
              <p className="text-forest-200 text-sm">Články o správném topení a skladování dřeva</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-lg">🚚</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Novinky první</h3>
              <p className="text-forest-200 text-sm">Buďte první, kdo se dozví o nových produktech</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


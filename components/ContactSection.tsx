'use client'

import { useState } from 'react'
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Zde by byla logika pro odeslání formuláře
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-forest-800 mb-4">
              Kontaktujte nás
            </h2>
            <p className="text-xl text-forest-600 max-w-3xl mx-auto">
              Máte dotaz nebo chcete objednat? Neváhejte nás kontaktovat
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Kontaktní informace */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-forest-800 mb-6">
                  Kontaktní údaje
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-forest-600 rounded-lg flex items-center justify-center">
                        <PhoneIcon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-forest-800 mb-1">Telefon</h4>
                      <a href="tel:+420732443827" className="text-forest-600 hover:text-forest-800 transition-colors">
                        +420 732 443 827
                      </a>
                      <p className="text-sm text-forest-500 mt-1">
                        Adam Keprt - objednávky a dotazy
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-forest-600 rounded-lg flex items-center justify-center">
                        <EnvelopeIcon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-forest-800 mb-1">E-mail</h4>
                      <a href="mailto:keprtadam@gmail.com" className="text-forest-600 hover:text-forest-800 transition-colors">
                        keprtadam@gmail.com
                      </a>
                      <p className="text-sm text-forest-500 mt-1">
                        Odpovídáme do 24 hodin
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-forest-600 rounded-lg flex items-center justify-center">
                        <MapPinIcon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-forest-800 mb-1">Adresa</h4>
                      <p className="text-forest-600">
                        Kasárna 1009<br />
                        696 81 Bzenec
                      </p>
                      <p className="text-sm text-forest-500 mt-1">
                        Sklad a výroba palivového dřeva
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-forest-600 rounded-lg flex items-center justify-center">
                        <ClockIcon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-forest-800 mb-1">Otevírací doba</h4>
                      <p className="text-forest-600">
                        Po-Pá: 8:00 - 14:30<br />
                        So-Ne: Zavřeno
                      </p>
                      <p className="text-sm text-forest-500 mt-1">
                        Osobní odběr po předchozí domluvě
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-forest-50 rounded-lg p-6">
                <h4 className="font-semibold text-forest-800 mb-3">
                  Další kontaktní osoby
                </h4>
                <div className="space-y-3 text-sm text-forest-600">
                  <div>
                    <strong>Lukáš Keprt:</strong> +420 602 613 254
                  </div>
                  <div>
                    <strong>E-mail:</strong> keprtlukas@seznam.cz
                  </div>
                </div>
              </div>
            </div>

            {/* Kontaktní formulář */}
            <div className="bg-forest-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-forest-800 mb-6">
                Napište nám
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-forest-700 mb-2">
                    Jméno a příjmení *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-forest-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                    placeholder="Vaše jméno"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-forest-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-forest-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
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
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-forest-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                    placeholder="+420 123 456 789"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-forest-700 mb-2">
                    Zpráva *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-forest-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                    placeholder="Napište nám váš dotaz nebo objednávku..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-forest-600 hover:bg-forest-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Odeslat zprávu
                </button>
              </form>

              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-blue-800 text-sm">
                  <strong>Poznámka:</strong> Odpovíme vám do 24 hodin. Pro urgentní dotazy nás prosím kontaktujte telefonicky.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

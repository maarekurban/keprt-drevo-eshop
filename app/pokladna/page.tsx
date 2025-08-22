'use client'

import { useState } from 'react'
import { useCart } from '@/contexts/CartContext'
import Link from 'next/link'
import { 
  ChevronRightIcon, 
  HomeIcon, 
  CheckIcon,
  TruckIcon,
  CreditCardIcon,
  BanknotesIcon
} from '@heroicons/react/24/outline'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

const GIFT_THRESHOLD = 5000

export default function CheckoutPage() {
  const { state } = useCart()
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Kontaktní údaje
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Adresa doručení
    street: '',
    city: '',
    zipCode: '',
    country: 'Česká republika',
    
    // Fakturační adresa
    billingSameAsDelivery: true,
    billingStreet: '',
    billingCity: '',
    billingZipCode: '',
    billingCountry: 'Česká republika',
    
    // Doprava a platba
    shippingMethod: 'standard',
    paymentMethod: 'bank-transfer',
    
    // Poznámka
    note: ''
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const shippingMethods = [
    {
      id: 'standard',
      name: 'Standardní doprava',
      price: 700,
      description: 'Dodání do 3-5 pracovních dnů',
      icon: TruckIcon
    },
    {
      id: 'express',
      name: 'Expresní doprava',
      price: 1200,
      description: 'Dodání do 1-2 pracovních dnů',
      icon: TruckIcon
    },
    {
      id: 'pickup',
      name: 'Osobní odběr',
      price: 0,
      description: 'Osobní odběr ve Strážnici',
      icon: TruckIcon
    }
  ]

  const paymentMethods = [
    {
      id: 'bank-transfer',
      name: 'Bankovní převod',
      description: 'Platba předem na účet',
      icon: BanknotesIcon
    },
    {
      id: 'card',
      name: 'Platební karta',
      description: 'Online platba kartou',
      icon: CreditCardIcon
    },
    {
      id: 'cod',
      name: 'Dobírka',
      description: 'Platba při převzetí',
      icon: BanknotesIcon
    }
  ]

  const selectedShipping = shippingMethods.find(m => m.id === formData.shippingMethod) || shippingMethods[0]
  const shippingCost = selectedShipping.price
  const subtotal = state.total
  const hasGift = subtotal >= GIFT_THRESHOLD
  const total = subtotal + shippingCost

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName.trim()) newErrors.firstName = 'Jméno je povinné'
    if (!formData.lastName.trim()) newErrors.lastName = 'Příjmení je povinné'
    if (!formData.email.trim()) newErrors.email = 'E-mail je povinný'
    if (!formData.phone.trim()) newErrors.phone = 'Telefon je povinný'
    if (!formData.street.trim()) newErrors.street = 'Ulice je povinná'
    if (!formData.city.trim()) newErrors.city = 'Město je povinné'
    if (!formData.zipCode.trim()) newErrors.zipCode = 'PSČ je povinné'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (validateForm()) {
      // Zde by byla logika pro odeslání objednávky
      toast.success('Objednávka byla úspěšně odeslána!')
      router.push('/objednavka-potvrzena')
    } else {
      toast.error('Prosím opravte chyby ve formuláři')
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <div className="section-padding">
          <div className="container-max">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-3xl font-bold text-forest-800 mb-4">
                Košík je prázdný
              </h1>
              <p className="text-lg text-forest-600 mb-8">
                Nejdříve přidejte produkty do košíku.
              </p>
              <Link
                href="/palivove-drevo"
                className="bg-forest-600 hover:bg-forest-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                Začít nakupovat
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
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
            <Link href="/kosik" className="text-forest-600 hover:text-forest-800">
              Košík
            </Link>
            <ChevronRightIcon className="h-4 w-4 text-forest-400" />
            <span className="text-forest-800 font-medium">Pokladna</span>
          </nav>
        </div>
      </div>

      <div className="section-padding">
        <div className="container-max">
          <h1 className="text-3xl font-bold text-forest-800 mb-8">Pokladna</h1>

          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4">
              {[
                { step: 1, label: 'Kontaktní údaje', icon: CheckIcon },
                { step: 2, label: 'Doprava a platba', icon: CheckIcon },
                { step: 3, label: 'Shrnutí', icon: CheckIcon }
              ].map((item, index) => (
                <div key={item.step} className="flex items-center">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                    currentStep >= item.step 
                      ? 'bg-forest-600 border-forest-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-500'
                  }`}>
                    {currentStep > item.step ? (
                      <CheckIcon className="h-5 w-5" />
                    ) : (
                      <span className="text-sm font-semibold">{item.step}</span>
                    )}
                  </div>
                  <span className={`ml-2 text-sm font-medium ${
                    currentStep >= item.step ? 'text-forest-800' : 'text-gray-500'
                  }`}>
                    {item.label}
                  </span>
                  {index < 2 && (
                    <div className={`w-16 h-0.5 mx-4 ${
                      currentStep > item.step ? 'bg-forest-600' : 'bg-gray-300'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Step 1: Contact Information */}
                {currentStep === 1 && (
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-bold text-forest-800 mb-6">Kontaktní údaje</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-forest-700 mb-2">
                          Jméno *
                        </label>
                        <input
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent ${
                            errors.firstName ? 'border-red-500' : 'border-gray-300'
                          }`}
                        />
                        {errors.firstName && (
                          <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                        )}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-forest-700 mb-2">
                          Příjmení *
                        </label>
                        <input
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent ${
                            errors.lastName ? 'border-red-500' : 'border-gray-300'
                          }`}
                        />
                        {errors.lastName && (
                          <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                        )}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-forest-700 mb-2">
                          E-mail *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent ${
                            errors.email ? 'border-red-500' : 'border-gray-300'
                          }`}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-forest-700 mb-2">
                          Telefon *
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent ${
                            errors.phone ? 'border-red-500' : 'border-gray-300'
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                        )}
                      </div>
                    </div>

                    <div className="mt-6">
                      <h3 className="text-lg font-semibold text-forest-800 mb-4">Adresa doručení</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-forest-700 mb-2">
                            Ulice a číslo *
                          </label>
                          <input
                            type="text"
                            value={formData.street}
                            onChange={(e) => handleInputChange('street', e.target.value)}
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent ${
                              errors.street ? 'border-red-500' : 'border-gray-300'
                            }`}
                          />
                          {errors.street && (
                            <p className="text-red-500 text-sm mt-1">{errors.street}</p>
                          )}
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-forest-700 mb-2">
                              Město *
                            </label>
                            <input
                              type="text"
                              value={formData.city}
                              onChange={(e) => handleInputChange('city', e.target.value)}
                              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent ${
                                errors.city ? 'border-red-500' : 'border-gray-300'
                              }`}
                            />
                            {errors.city && (
                              <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                            )}
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-forest-700 mb-2">
                              PSČ *
                            </label>
                            <input
                              type="text"
                              value={formData.zipCode}
                              onChange={(e) => handleInputChange('zipCode', e.target.value)}
                              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent ${
                                errors.zipCode ? 'border-red-500' : 'border-gray-300'
                              }`}
                            />
                            {errors.zipCode && (
                              <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex justify-end">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(2)}
                        className="bg-forest-600 hover:bg-forest-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                      >
                        Pokračovat
                        <ChevronRightIcon className="ml-2 h-5 w-5 inline" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2: Shipping and Payment */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                      <h2 className="text-2xl font-bold text-forest-800 mb-6">Způsob dopravy</h2>
                      
                      <div className="space-y-4">
                        {shippingMethods.map((method) => (
                          <label key={method.id} className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                            <input
                              type="radio"
                              name="shippingMethod"
                              value={method.id}
                              checked={formData.shippingMethod === method.id}
                              onChange={(e) => handleInputChange('shippingMethod', e.target.value)}
                              className="mr-4"
                            />
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <div>
                                  <h3 className="font-semibold text-forest-800">{method.name}</h3>
                                  <p className="text-sm text-gray-600">{method.description}</p>
                                </div>
                                <span className="font-semibold text-forest-600">
                                  {method.price === 0 ? 'Zdarma' : `${method.price} Kč`}
                                </span>
                              </div>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6">
                      <h2 className="text-2xl font-bold text-forest-800 mb-6">Způsob platby</h2>
                      
                      <div className="space-y-4">
                        {paymentMethods.map((method) => (
                          <label key={method.id} className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                            <input
                              type="radio"
                              name="paymentMethod"
                              value={method.id}
                              checked={formData.paymentMethod === method.id}
                              onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                              className="mr-4"
                            />
                            <div className="flex-1">
                              <h3 className="font-semibold text-forest-800">{method.name}</h3>
                              <p className="text-sm text-gray-600">{method.description}</p>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6">
                      <h2 className="text-2xl font-bold text-forest-800 mb-6">Poznámka k objednávce</h2>
                      
                      <textarea
                        value={formData.note}
                        onChange={(e) => handleInputChange('note', e.target.value)}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                        placeholder="Zde můžete napsat jakékoliv poznámky k vaší objednávce..."
                      />
                    </div>

                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(1)}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-8 py-3 rounded-lg transition-colors"
                      >
                        Zpět
                      </button>
                      <button
                        type="button"
                        onClick={() => setCurrentStep(3)}
                        className="bg-forest-600 hover:bg-forest-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                      >
                        Pokračovat
                        <ChevronRightIcon className="ml-2 h-5 w-5 inline" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Summary */}
                {currentStep === 3 && (
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-bold text-forest-800 mb-6">Shrnutí objednávky</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-forest-800 mb-3">Kontaktní údaje</h3>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p><strong>{formData.firstName} {formData.lastName}</strong></p>
                          <p>{formData.email}</p>
                          <p>{formData.phone}</p>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-forest-800 mb-3">Adresa doručení</h3>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p>{formData.street}</p>
                          <p>{formData.zipCode} {formData.city}</p>
                          <p>{formData.country}</p>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-forest-800 mb-3">Produkty</h3>
                        <div className="space-y-2">
                          {state.items.map((item) => (
                            <div key={item.id} className="flex justify-between items-center py-2 border-b border-gray-100">
                              <div className="flex items-center space-x-3">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-12 h-12 object-cover rounded"
                                />
                                <div>
                                  <p className="font-medium text-forest-800">{item.name}</p>
                                  <p className="text-sm text-gray-600">{item.quantity} {item.unit}</p>
                                </div>
                              </div>
                              <span className="font-semibold text-forest-600">
                                {(item.price * item.quantity).toLocaleString()} Kč
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-forest-800 mb-3">Doprava a platba</h3>
                        <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                          <p><strong>Doprava:</strong> {selectedShipping.name}</p>
                          <p><strong>Platba:</strong> {paymentMethods.find(m => m.id === formData.paymentMethod)?.name}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between mt-8">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(2)}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-8 py-3 rounded-lg transition-colors"
                      >
                        Zpět
                      </button>
                      <button
                        type="submit"
                        className="bg-forest-600 hover:bg-forest-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                      >
                        Odeslat objednávku
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
                <h2 className="text-xl font-bold text-forest-800 mb-6">Souhrn objednávky</h2>
                
                <div className="space-y-4">
                  {state.items.map((item) => (
                    <div key={item.id} className="flex justify-between items-center">
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-forest-800 truncate">{item.name}</p>
                        <p className="text-sm text-gray-600">{item.quantity} {item.unit}</p>
                      </div>
                      <span className="font-semibold text-forest-600 ml-4">
                        {(item.price * item.quantity).toLocaleString()} Kč
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 mt-4 space-y-2">
                  <div className="flex justify-between">
                    <span>Mezisoučet:</span>
                    <span>{subtotal.toLocaleString()} Kč</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Doprava:</span>
                    <span>{shippingCost === 0 ? 'Zdarma' : `${shippingCost} Kč`}</span>
                  </div>
                  {hasGift && (
                    <div className="flex justify-between text-green-600">
                      <span>Dárková taška:</span>
                      <span>- 0 Kč</span>
                    </div>
                  )}
                  <div className="border-t pt-2 flex justify-between font-bold text-lg">
                    <span>Celkem:</span>
                    <span>{total.toLocaleString()} Kč</span>
                  </div>
                </div>

                {!hasGift && (
                  <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-yellow-800 text-sm">
                      <strong>Tip:</strong> Nakupte za další {(GIFT_THRESHOLD - subtotal).toLocaleString()} Kč a získejte dárkovou tašku zdarma!
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import HeroSection from '@/components/HeroSection'
import OurProducts from '@/components/OurProducts'
import DeliveryInfo from '@/components/DeliveryInfo'
import WhyChooseUs from '@/components/WhyChooseUs'
import CurrentOffers from '@/components/CurrentOffers'
import ContactSection from '@/components/ContactSection'
import Newsletter from '@/components/Newsletter'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Naše produkty */}
      <OurProducts />
      
      {/* Informace o dopravě */}
      <DeliveryInfo />
      
      {/* Why Choose Us */}
      <WhyChooseUs />
      
      {/* Current Offers */}
      <CurrentOffers />
      
      {/* Kontaktní sekce */}
      <ContactSection />
      
      {/* Newsletter */}
      <Newsletter />
    </div>
  )
}


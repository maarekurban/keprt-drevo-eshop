import Link from 'next/link'
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

const footerLinks = {
  produkty: [
    { name: 'Palivové dřevo', href: '/palivove-drevo' },
    { name: 'Brikety', href: '/brikety' },
    { name: 'Truhlářské řezivo', href: '/truhlarske-rezivo' },
  ],
  sluzby: [
    { name: 'Kontejnerová doprava', href: '/kontejnery' },
    { name: 'Doprava zdarma', href: '/doprava' },
    { name: 'Dárkové balení', href: '/darkove-baleni' },
    { name: 'Osobní odběr', href: '/osobni-odeber' },
  ],
  firma: [
    { name: 'O nás', href: '/o-nas' },
    { name: 'Blog', href: '/blog' },
    { name: 'Kontakt', href: '/kontakt' },
    { name: 'Reference', href: '/reference' },
  ],
  podpora: [
    { name: 'Jak vybrat dřevo', href: '/blog/jak-vybrat-drevo' },
    { name: 'Skladování dřeva', href: '/blog/skladovani-dreva' },
    { name: 'Často kladené otázky', href: '/faq' },
    { name: 'Obchodní podmínky', href: '/obchodni-podminky' },
  ],
}

const socialLinks = [
  { name: 'Facebook', href: '#', icon: '📘' },
  { name: 'Instagram', href: '#', icon: '📷' },
  { name: 'YouTube', href: '#', icon: '📺' },
]

export default function Footer() {
  return (
    <footer className="bg-forest-800 text-white">
      {/* Main footer content */}
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-forest-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">KEPRT Dřevo</h3>
                <p className="text-forest-200">Strážnice</p>
              </div>
            </div>
            <p className="text-forest-200 mb-6">
              Rodinná firma s tradicí v prodeji kvalitního palivového dřeva, briket a řeziva. 
              Proklientský přístup a rychlé dodání po celé ČR.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 text-forest-300" />
                <span className="text-forest-200">+420 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="h-5 w-5 text-forest-300" />
                <span className="text-forest-200">info@keprt-drevo.cz</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPinIcon className="h-5 w-5 text-forest-300" />
                <span className="text-forest-200">Strážnice 696 62</span>
              </div>
              <div className="flex items-center space-x-3">
                <ClockIcon className="h-5 w-5 text-forest-300" />
                <span className="text-forest-200">Po-Pá 8:00-17:00</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Produkty</h4>
            <ul className="space-y-2">
              {footerLinks.produkty.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-forest-200 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Služby</h4>
            <ul className="space-y-2">
              {footerLinks.sluzby.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-forest-200 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Firma</h4>
            <ul className="space-y-2 mb-6">
              {footerLinks.firma.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-forest-200 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h4 className="text-lg font-semibold mb-4">Podpora</h4>
            <ul className="space-y-2">
              {footerLinks.podpora.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-forest-200 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>



      {/* Bottom bar */}
      <div className="bg-forest-900 py-4">
        <div className="container-max px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <span className="text-forest-300 text-sm">
                © 2024 KEPRT Dřevo. Všechna práva vyhrazena.
              </span>
              <div className="flex space-x-4">
                <Link href="/gdpr" className="text-forest-300 hover:text-white text-sm transition-colors">
                  GDPR
                </Link>
                <Link href="/cookies" className="text-forest-300 hover:text-white text-sm transition-colors">
                  Cookies
                </Link>
              </div>
            </div>
            
            {/* Social links */}
            <div className="flex items-center space-x-4">
              <span className="text-forest-300 text-sm">Sledujte nás:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-forest-300 hover:text-white transition-colors text-lg"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

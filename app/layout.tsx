import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Toaster } from 'react-hot-toast'
import { CartProvider } from '@/contexts/CartContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'KEPRT Dřevo - Palivové dřevo a brikety přímo od výrobce | Strážnice',
  description: 'Kvalitní palivové dřevo, brikety a pelety přímo od výrobce. Řezivo pro truhláře, kontejnerová doprava. Rychlé dodání po celé ČR. Strážnice.',
  keywords: 'palivové dřevo, brikety, pelety, řezivo, kontejnerová doprava, Strážnice, KEPRT',
  authors: [{ name: 'KEPRT Dřevo' }],
  openGraph: {
    title: 'KEPRT Dřevo - Palivové dřevo a brikety přímo od výrobce',
    description: 'Kvalitní palivové dřevo, brikety a pelety přímo od výrobce. Rychlé dodání po celé ČR.',
    type: 'website',
    locale: 'cs_CZ',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <body className={inter.className}>
        <CartProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster position="top-right" />
        </CartProvider>
      </body>
    </html>
  )
}


import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Cinzel, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
  display: 'swap',
})

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-cinzel',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Zia Cakes | Artisanal Cakes Crafted with Passion',
  description: 'Premium handcrafted cakes for life\'s most precious moments. Custom birthday, wedding & celebration cakes in Virudhachalam.',
  keywords: ['premium cakes', 'custom cakes', 'wedding cakes', 'birthday cakes', 'Virudhachalam', 'artisanal bakery'],
  authors: [{ name: 'Zia Cakes' }],
  openGraph: {
    title: 'Zia Cakes | Artisanal Cakes Crafted with Passion',
    description: 'Premium handcrafted cakes for life\'s most precious moments.',
    type: 'website',
    locale: 'en_IN',
  },
}

export const viewport: Viewport = {
  themeColor: '#D4AF37',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${cinzel.variable} ${montserrat.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

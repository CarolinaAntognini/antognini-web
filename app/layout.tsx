import type { Metadata, Viewport } from 'next'
import { Aboreto, Cormorant_Garamond, Urbanist } from 'next/font/google'
import './globals.css'
import BarraCelular from './components/BarraCelular'
import Header from './components/Header'
import RevealObserver from './components/RevealObserver'
import Ticker from './components/Ticker'
import { instagramUrl, SITIO, URL_SITIO } from './data/sitio'

export const revalidate = 3600

// Las tres tipografías de la marca. Visby (la del texto) no está en Google Fonts:
// se usa Urbanist, que es muy parecida. Si se consigue el archivo de Visby, se cambia acá.
const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--f-display',
  display: 'swap',
})
const label = Aboreto({ subsets: ['latin'], weight: '400', variable: '--f-label', display: 'swap' })
const body = Urbanist({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--f-body',
  display: 'swap',
})

const DESCRIPCION =
  'Medicina estética integral en Mar del Plata. Toxina botulínica, rellenos, bioestimulación, mesoterapia y plasma rico en plaquetas, con criterio médico y resultados naturales.'

export const metadata: Metadata = {
  metadataBase: new URL(URL_SITIO),
  title: {
    default: 'Antognini | Medicina Estética Integral en Mar del Plata',
    template: '%s | Antognini',
  },
  description: DESCRIPCION,
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    siteName: 'Antognini Medicina Estética Integral',
    title: 'Antognini | Medicina Estética Integral',
    description: DESCRIPCION,
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: '/' },
}

export const viewport: Viewport = {
  themeColor: '#1D1D1D',
  width: 'device-width',
  initialScale: 1,
}

const datosEstructurados = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Antognini Medicina Estética Integral',
  url: URL_SITIO,
  telephone: `+${SITIO.whatsapp}`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITIO.direccion[0],
    addressLocality: SITIO.ciudad,
    addressRegion: 'Buenos Aires',
    addressCountry: 'AR',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '20:00',
    },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '14:00' },
  ],
  sameAs: [instagramUrl],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${display.variable} ${label.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a className="skip" href="#contenido">
          Saltar al contenido
        </a>
        <Ticker />
        <Header />
        {children}
        <BarraCelular />
        <RevealObserver />
        <noscript>
          <style>{'[data-reveal]{opacity:1!important;transform:none!important}'}</style>
        </noscript>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datosEstructurados) }} />
      </body>
    </html>
  )
}

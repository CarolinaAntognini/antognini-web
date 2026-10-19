import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Grano } from '../components/Detalles'
import { EQUIPO } from '../data/equipo'
import { promocionVigente } from '../data/promociones'
import { instagramUrl, SITIO, whatsappUrl } from '../data/sitio'

// Se regenera seguido: así la promo desaparece sola poco después de su último día
export const revalidate = 600

export const metadata: Metadata = {
  title: 'Links',
  description: 'Reservá tu turno, mirá los tratamientos y los resultados de Antognini Medicina Estética Integral en Mar del Plata.',
  alternates: { canonical: '/links' },
  // Es una pantalla para el QR y las redes: no compite con la página de inicio en Google
  robots: { index: false, follow: true },
}

type Boton = { texto: string; detalle?: string; href: string; externo?: boolean; principal?: boolean }

const Flecha = () => (
  <svg width="20" height="12" viewBox="0 0 20 12" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
    <path d="M0 6h18M13 1l5 5-5 5" />
  </svg>
)

export default function PaginaLinks() {
  const promo = promocionVigente()
  const medica = EQUIPO[0]

  const botones: Boton[] = [
    { texto: 'Reservar turno', detalle: 'Por WhatsApp', href: whatsappUrl('Hola, quiero reservar un turno'), externo: true, principal: true },
    ...(promo ? [{ texto: `Promo ${promo.titulo}`, detalle: `${promo.destacado} ${promo.etiqueta} ${promo.descripcion}`, href: '/#promo' }] : []),
    { texto: 'Tratamientos', href: '/tratamientos' },
    { texto: 'Resultados', href: '/resultados' },
    { texto: 'Gift card', detalle: 'Regalá un tratamiento', href: whatsappUrl('Hola, quiero comprar una gift card'), externo: true },
    { texto: 'Preguntas frecuentes', href: '/#preguntas' },
    { texto: 'Ubicación', href: SITIO.mapa, externo: true },
    { texto: 'Seguinos en Instagram', href: instagramUrl, externo: true },
    { texto: 'Visitá nuestra web', href: '/' },
  ]

  return (
    <main id="contenido" className="links-page">
      <div className="hero-glow" aria-hidden="true" />
      <Grano id="grano-links" />
      <div className="links-in">
        <div className="links-cab">
          <h1 className="links-h1">
            {/* Sin optimizar: es un PNG de 1600 px que así se ve nítido también en pantallas de alta densidad */}
            <Image src="/brand/wordmark-blanco.png" alt="Antognini" width={1600} height={290} priority unoptimized />
          </h1>
          {/* La bajada ocupa exactamente el mismo ancho que el nombre */}
          <svg className="links-sub" viewBox="0 0 1600 84" role="img" aria-label="Medicina estética integral">
            <text x="0" y="66" textLength="1600" lengthAdjust="spacing">
              MEDICINA ESTÉTICA INTEGRAL
            </text>
          </svg>
          <p className="links-dra">
            {medica.nombre}
            <span aria-hidden="true">|</span>
            <small>{medica.matricula}</small>
          </p>
        </div>

        <nav className="links-lista" aria-label="Enlaces">
          {botones.map((b) => {
            const clases = `links-btn ${b.principal ? 'links-btn-principal' : ''}`
            const contenido = (
              <>
                <span className="links-btn-t">
                  <span>{b.texto}</span>
                  {b.detalle && <small>{b.detalle}</small>}
                </span>
                <Flecha />
              </>
            )
            return b.externo ? (
              <a key={b.texto} className={clases} href={b.href} target="_blank" rel="noopener noreferrer">
                {contenido}
              </a>
            ) : (
              <Link key={b.texto} className={clases} href={b.href}>
                {contenido}
              </Link>
            )
          })}
        </nav>

        <p className="links-pie">
          <Link href="/terminos">Términos y condiciones</Link> · <Link href="/privacidad">Política de privacidad</Link>
        </p>
      </div>
    </main>
  )
}

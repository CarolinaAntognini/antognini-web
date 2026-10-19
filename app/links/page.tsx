import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Grano } from '../components/Detalles'
import { instagramUrl, SITIO, whatsappUrl } from '../data/sitio'

export const revalidate = 3600

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
  const botones: Boton[] = [
    { texto: 'Reservar turno', detalle: 'Por WhatsApp', href: whatsappUrl('Hola, quiero reservar un turno'), externo: true, principal: true },
    { texto: 'Tratamientos', detalle: 'Qué hacemos y para qué sirve', href: '/tratamientos' },
    { texto: 'Resultados', detalle: 'Antes y después', href: '/resultados' },
    { texto: 'Cómo llegar', detalle: `${SITIO.direccion[0]}, ${SITIO.ciudad}`, href: SITIO.mapa, externo: true },
    { texto: 'Instagram', detalle: `@${SITIO.instagram}`, href: instagramUrl, externo: true },
  ]

  return (
    <main id="contenido" className="links-page">
      <div className="hero-glow" aria-hidden="true" />
      <Grano id="grano-links" />
      <div className="links-in">
        <div className="links-cab">
          <div className="links-avatar">
            <Image src="/brand/isotipo-blanco.png" alt="" width={900} height={704} aria-hidden="true" />
          </div>
          <h1 className="links-h1">
            <Image src="/brand/wordmark-blanco.png" alt="Antognini" width={1600} height={290} priority sizes="260px" />
          </h1>
          <p className="links-sub">
            Medicina estética integral
            <br />
            {SITIO.ciudad}
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
          {SITIO.horarios.map((h, i) => (
            <span key={h.dias}>
              {i > 0 && ' · '}
              {h.dias}: {h.horas}
            </span>
          ))}
        </p>
        <p className="links-pie links-pie-2">
          <Link href="/">Ver el sitio completo</Link>
          <br />
          <Link href="/terminos">Términos y condiciones</Link> · <Link href="/privacidad">Política de privacidad</Link>
        </p>
      </div>
    </main>
  )
}

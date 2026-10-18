import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import AntesDespues from '../components/AntesDespues'
import { Grano } from '../components/Detalles'
import Footer from '../components/Footer'
import JsonLd from '../components/JsonLd'
import { URL_SITIO, whatsappUrl } from '../data/sitio'
import { TRATAMIENTOS } from '../data/tratamientos'

export const revalidate = 3600

const DESCRIPCION =
  'Antes y después de tratamientos de medicina estética en Mar del Plata: toxina botulínica, relleno de labios, bioestimuladores, plasma rico en plaquetas y más.'

export const metadata: Metadata = {
  title: 'Resultados de tratamientos de medicina estética en Mar del Plata',
  description: DESCRIPCION,
  alternates: { canonical: '/resultados' },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    siteName: 'Antognini Medicina Estética Integral',
    title: 'Resultados de tratamientos de medicina estética en Mar del Plata | Antognini',
    description: DESCRIPCION,
    url: '/resultados',
    images: ['/opengraph-image.png'],
  },
}

export default function PaginaResultados() {
  // Solo los tratamientos que tienen fotos de antes y después
  const con = TRATAMIENTOS.filter((t) => t.antesDespues && t.antesDespues.length > 0)

  return (
    <>
      <JsonLd
        datos={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Inicio', item: URL_SITIO },
            { '@type': 'ListItem', position: 2, name: 'Resultados', item: `${URL_SITIO}/resultados` },
          ],
        }}
      />
      <main id="contenido">
        <section className="pg-hero" id="inicio">
          <div className="hero-glow" aria-hidden="true" />
          <Image className="hero-mark pg-mark" src="/brand/isotipo-blanco.png" alt="" width={900} height={704} aria-hidden="true" />
          <Grano id="grano-resultados" />
          <div className="hero-top" />
          <div className="wrap pg-body">
            <p className="lbl fadeup pg-migas">
              <Link href="/">Inicio</Link> &nbsp;/&nbsp; Resultados
            </p>
            <h1 className="pg-h1">
              <span className="mask">
                <span style={{ animationDelay: '.15s' }}>Algunos</span>
              </span>
              <span className="mask">
                <span style={{ animationDelay: '.3s' }}>
                  <em>resultados</em>
                </span>
              </span>
            </h1>
            <p className="body fadeup pg-p" style={{ animationDelay: '.6s' }}>
              Antes y después de algunos de nuestros tratamientos.
            </p>
          </div>
        </section>

        {con.map((t, i) => (
          <section className={`sec rs-sec ${i % 2 === 1 ? 'rs-alt' : ''}`} key={t.slug} id={t.slug}>
            <div className="wrap">
              <div className="rs-cab">
                <p className="lbl">{t.zonas.join(' · ')}</p>
                <h2 className="h2">
                  <Link href={`/tratamientos/${t.slug}`}>{t.nombre}</Link>
                </h2>
                {t.resultado && <p className="body">{t.resultado}</p>}
              </div>
              <AntesDespues pares={t.antesDespues ?? []} eager={i < 2} />
              <Link className="rs-ver" href={`/tratamientos/${t.slug}`}>
                Ver el tratamiento
              </Link>
            </div>
          </section>
        ))}

        <section className="sec cta-eleccion" data-reveal>
          <div className="wrap cta-eleccion-in">
            <Image src="/brand/isotipo-negro.png" alt="" width={900} height={704} aria-hidden="true" />
            <h2 className="h2">
              ¿Querés saber <em>qué es para vos?</em>
            </h2>
            <p className="body">Contanos qué te gustaría mejorar y la doctora te orienta en la consulta.</p>
            <a className="btn btn-oscuro-solido" href={whatsappUrl('Hola, quiero reservar una consulta')} target="_blank" rel="noopener noreferrer">
              Reservar mi consulta
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

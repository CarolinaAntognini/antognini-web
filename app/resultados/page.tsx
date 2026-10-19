import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Grano } from '../components/Detalles'
import Footer from '../components/Footer'
import GaleriaResultados, { type GrupoResultados } from '../components/GaleriaResultados'
import JsonLd from '../components/JsonLd'
import { URL_SITIO, whatsappUrl } from '../data/sitio'
import { TRATAMIENTOS } from '../data/tratamientos'

export const revalidate = 3600

const DESCRIPCION =
  'Antes y después de tratamientos de medicina estética en Mar del Plata: toxina botulínica, relleno de labios, bioestimuladores, plasma rico en plaquetas y más.'

export const metadata: Metadata = {
  title: 'Resultados de tratamientos en Mar del Plata',
  description: DESCRIPCION,
  alternates: { canonical: '/resultados' },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    siteName: 'Antognini Medicina Estética Integral',
    title: 'Resultados de tratamientos en Mar del Plata | Antognini',
    description: DESCRIPCION,
    url: '/resultados',
    images: ['/opengraph-image.png'],
  },
}

export default function PaginaResultados() {
  // Un grupo por tratamiento que tiene fotos de antes y después
  const grupos: GrupoResultados[] = TRATAMIENTOS.filter((t) => t.antesDespues && t.antesDespues.length > 0).map((t) => ({
    slug: t.slug,
    nombre: t.nombre,
    zonas: t.zonas.join(' · '),
    texto: t.resultado,
    pares: (t.antesDespues ?? []).map((p) => ({ antes: p.antes, despues: p.despues, alt: p.alt, zona: p.zona ?? t.zonas[0] })),
  }))

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
                <span style={{ animationDelay: '.15s' }}>Antes y</span>
              </span>
              <span className="mask">
                <span style={{ animationDelay: '.3s' }}>
                  <em>después</em>
                </span>
              </span>
            </h1>
          </div>
        </section>

        <GaleriaResultados grupos={grupos} />

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

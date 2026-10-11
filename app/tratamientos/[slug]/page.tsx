import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Flecha, Grano } from '../../components/Detalles'
import Footer from '../../components/Footer'
import { whatsappUrl } from '../../data/sitio'
import { ETIQUETAS_DATOS, relacionados, tratamientoPorSlug, TRATAMIENTOS } from '../../data/tratamientos'

export const revalidate = 3600

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return TRATAMIENTOS.map((t) => ({ slug: t.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const t = tratamientoPorSlug(params.slug)
  if (!t) return {}
  return {
    title: t.nombre,
    description: t.intro,
    alternates: { canonical: `/tratamientos/${t.slug}` },
    openGraph: { images: [t.foto.src] },
  }
}

export default function FichaTratamiento({ params }: Props) {
  const t = tratamientoPorSlug(params.slug)
  if (!t) notFound()

  const palabras = t.nombre.split(' ')
  const ultima = palabras.length > 1 ? palabras.pop() : null
  const largo = t.nombre.length > 13
  const mensaje = `Hola, quiero consultar por ${t.nombre}`
  const datos = (Object.keys(ETIQUETAS_DATOS) as (keyof typeof ETIQUETAS_DATOS)[]).map((clave) => ({
    etiqueta: ETIQUETAS_DATOS[clave],
    valor: t.datos[clave],
  }))

  return (
    <>
      <main id="contenido">
        <section className="pg-hero ficha-hero" id="inicio">
          <div className="hero-glow" aria-hidden="true" />
          <Grano id="grano-ficha" />
          <div className="hero-top" />
          <div className="wrap ficha-grid">
            <div>
              <p className="lbl fadeup pg-migas">
                <Link href="/tratamientos">Tratamientos</Link> &nbsp;/&nbsp; {t.nombre}
              </p>
              <h1 className={`ficha-h1 ${largo ? 'largo' : ''}`}>
                <span className="mask">
                  <span style={{ animationDelay: '.15s' }}>
                    {palabras.join(' ')}
                    {ultima && ' '}
                    {ultima && <em>{ultima}</em>}
                  </span>
                </span>
              </h1>
              <p className="body fadeup pg-p" style={{ animationDelay: '.5s' }}>
                {t.intro}
              </p>
              <div className="fadeup" style={{ animationDelay: '.7s', marginTop: 44 }}>
                <a className="btn btn-solido" href={whatsappUrl(mensaje)} target="_blank" rel="noopener noreferrer">
                  Consultar por WhatsApp
                </a>
              </div>
            </div>
            <div className="ficha-arco hide-m">
              <Image
                src={t.foto.src}
                alt={t.foto.alt}
                fill
                priority
                sizes="(max-width: 900px) 0px, 420px"
                style={{ objectPosition: t.foto.posicion ?? '50% 50%' }}
              />
              <div className="ficha-velo" aria-hidden="true" />
              {t.foto.ilustrativa && <span className="ficha-ilustrativa">Imagen ilustrativa</span>}
            </div>
          </div>
        </section>

        <section className="datos-sec">
          <div className="wrap datos">
            {datos.map((d) => (
              <div className="dato" key={d.etiqueta}>
                <p className="lbl">{d.etiqueta}</p>
                <p className="dato-v">{d.valor}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="sec ficha-cuerpo">
          <div className="wrap dos">
            <div className="dos-izq">
              <p className="lbl">Preguntas frecuentes</p>
              <h2 className="h2">
                ¿Para qué <em>sirve?</em>
              </h2>
              {t.sirve.ideal && <p className="ideal">{t.sirve.ideal}</p>}
            </div>
            <div className="dos-der" data-reveal>
              <ol className="usos">
                {t.sirve.items.map((item, i) => (
                  <li className="uso" key={item}>
                    <em>{String(i + 1).padStart(2, '0')}</em>
                    <p>{item}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="sec res-sec">
          <div className="wrap dos">
            <div className="dos-izq">
              <p className="lbl">En detalle</p>
              <h2 className="h2">
                Cómo es <em>el tratamiento.</em>
              </h2>
            </div>
            <div className="dos-der" data-reveal>
              <div className="detalle">
                {t.detalle.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              {t.noApto && <p className="no-apto-nota">{t.noApto}</p>}
            </div>
          </div>
        </section>

        <section className="sec ficha-cta" data-reveal>
          <Grano id="grano-ficha-cta" />
          <div className="wrap ficha-cta-in">
            <h2 className="h2">
              ¿Querés saber si <em>es para vos?</em>
            </h2>
            <p className="body">La indicación y la cantidad de sesiones las define la doctora en la consulta, según tu piel y tus objetivos.</p>
            <a className="btn btn-solido" href={whatsappUrl(mensaje)} target="_blank" rel="noopener noreferrer">
              Reservar mi consulta
            </a>
          </div>
        </section>

        <section className="sec otros-sec">
          <div className="wrap">
            <p className="lbl">Otros tratamientos</p>
            <div className="otros">
              {relacionados(t).map((r) => (
                <Link className="otro" href={`/tratamientos/${r.slug}`} key={r.slug}>
                  <span className="lbl">{r.zonas.join(' · ')}</span>
                  <span className="otro-t">{r.nombre}</span>
                  <span className="otro-flecha">
                    <Flecha />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

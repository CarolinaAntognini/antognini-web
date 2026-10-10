import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import { Grano } from '../components/Detalles'
import Footer from '../components/Footer'
import ListaTratamientos from '../components/ListaTratamientos'
import { whatsappUrl } from '../data/sitio'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Tratamientos',
  description:
    'Tratamientos de medicina estética para rostro y cuerpo en Mar del Plata: toxina botulínica, rellenos, bioestimulación, mesoterapia, plasma rico en plaquetas y más.',
  alternates: { canonical: '/tratamientos' },
}

export default function PaginaTratamientos() {
  return (
    <>
      <main id="contenido">
        <section className="pg-hero" id="inicio">
          <div className="hero-glow" aria-hidden="true" />
          <Image className="hero-mark pg-mark" src="/brand/isotipo-blanco.png" alt="" width={900} height={704} aria-hidden="true" />
          <Grano id="grano-tratamientos" />
          <div className="hero-top" />
          <div className="wrap pg-body">
            <p className="lbl fadeup pg-migas">
              <Link href="/">Inicio</Link> &nbsp;/&nbsp; Tratamientos
            </p>
            <h1 className="pg-h1">
              <span className="mask">
                <span style={{ animationDelay: '.15s' }}>Nuestros</span>
              </span>
              <span className="mask">
                <span style={{ animationDelay: '.3s' }}>
                  <em>tratamientos</em>
                </span>
              </span>
            </h1>
            <p className="body fadeup pg-p" style={{ animationDelay: '.6s' }}>
              Cada tratamiento se indica en la consulta médica, según tu piel y lo que querés lograr. La cantidad de sesiones también la define la doctora.
            </p>
          </div>
        </section>

        <Suspense fallback={null}>
          <ListaTratamientos />
        </Suspense>

        <section className="sec lista-nota">
          <div className="wrap">
            <p className="body">
              También trabajamos Peeling, Mesoterapia NCTF y Mesobotox.{' '}
              <a href={whatsappUrl('Hola, quiero consultar por un tratamiento')} target="_blank" rel="noopener noreferrer">
                Consultanos por WhatsApp.
              </a>
            </p>
          </div>
        </section>

        <section className="sec cta-eleccion" data-reveal>
          <div className="wrap cta-eleccion-in">
            <Image src="/brand/isotipo-negro.png" alt="" width={900} height={704} aria-hidden="true" />
            <h2 className="h2">
              ¿No sabés <em>cuál elegir?</em>
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

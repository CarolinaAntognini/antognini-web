import Image from 'next/image'
import Link from 'next/link'
import { SITIO, whatsappUrl } from '../data/sitio'
import { Flecha, Grano } from './Detalles'

const FOTO_ESPERA = { src: '/fotos/hero-recepcion.jpg', alt: 'Sala de espera con el logo de Antognini en la pared' }
const FOTO_CONSULTORIO = { src: '/fotos/hero-consultorio.jpg', alt: 'Camilla del consultorio' }

export default function Hero() {
  const horarios = SITIO.horarios.map((h) => `${h.dias} ${h.horas}`).join(' · ')

  return (
    <>
      <section className="hero" id="inicio">
        <div className="hero-glow" aria-hidden="true" />
        <Image className="hero-mark" src="/brand/isotipo-blanco.png" alt="" width={900} height={704} aria-hidden="true" priority />
        <Grano id="grano-hero" />

        <div className="hero-arch hide-m">
          <div className="hero-arch-in">
            <div className="hero-foto">
              <Image src={FOTO_ESPERA.src} alt={FOTO_ESPERA.alt} fill sizes="(max-width: 900px) 0px, 400px" priority style={{ objectPosition: '50% 40%' }} />
            </div>
            <div className="hero-foto">
              <Image src={FOTO_CONSULTORIO.src} alt={FOTO_CONSULTORIO.alt} fill sizes="(max-width: 900px) 0px, 400px" priority style={{ objectPosition: '70% 50%' }} />
            </div>
          </div>
        </div>
        <div className="hero-arch-line hide-m" aria-hidden="true" />

        <div className="hero-top" />
        <div className="hero-body">
          <div className="wrap">
            <p className="lbl fadeup hero-lbl" style={{ animationDelay: '.1s' }}>
              Medicina estética integral · {SITIO.ciudad}
            </p>
            <h1 className="hero-h1">
              <span className="mask">
                <span style={{ animationDelay: '.2s' }}>Un espacio</span>
              </span>
              <span className="mask">
                <span style={{ animationDelay: '.38s' }}>
                  <em>para vos.</em>
                </span>
              </span>
            </h1>
            <p className="body fadeup hero-p" style={{ animationDelay: '.7s' }}>
              Una experiencia diseñada para que te sientas bien desde el primer momento, con criterio médico y resultados naturales.
            </p>
            <div className="hero-cta fadeup" style={{ animationDelay: '.85s' }}>
              <a className="btn btn-solido" href={whatsappUrl('Hola, quiero reservar un turno')} target="_blank" rel="noopener noreferrer">
                Reservar por WhatsApp <Flecha />
              </a>
              <Link className="btn btn-claro" href="/#tratamientos">
                Ver tratamientos
              </Link>
            </div>
          </div>
        </div>

        <div className="hero-bar">
          <span>{SITIO.direccion[0]}</span>
          <span className="hide-m hero-bar-c">{horarios}</span>
          <span className="hide-m hero-bar-d">
            Descubrí<span className="hero-linea" aria-hidden="true" />
          </span>
        </div>
      </section>

      <div className="hero-band" aria-hidden="false">
        <div className="hero-foto">
          <Image src={FOTO_ESPERA.src} alt={FOTO_ESPERA.alt} fill sizes="(min-width: 901px) 0px, 50vw" style={{ objectPosition: '55% 40%' }} />
        </div>
        <div className="hero-foto">
          <Image src={FOTO_CONSULTORIO.src} alt={FOTO_CONSULTORIO.alt} fill sizes="(min-width: 901px) 0px, 50vw" style={{ objectPosition: '85% 50%' }} />
        </div>
      </div>
    </>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { GIFT_CARD } from '../data/promociones'
import { EQUIPO, FRASE_DE_LA_DOCTORA } from '../data/equipo'
import { instagramUrl, SITIO, whatsappUrl } from '../data/sitio'
import { FlechaLarga, Grano } from './Detalles'

export function Filosofia() {
  const columnas = [
    {
      titulo: 'Visión integral',
      texto: 'Cada tratamiento comienza con una evaluación personalizada para comprender tus objetivos, necesidades y estilo de vida.',
    },
    {
      titulo: 'Resultados naturales',
      texto: 'Realzamos tu belleza respetando tu esencia, sin perder tu gestualidad ni tus rasgos.',
    },
    {
      titulo: 'Criterio médico',
      texto: 'Tu piel refleja tu salud. Desde la primera consulta hasta el seguimiento, estás en manos de profesionales que conocen tu historia y cuidan tu proceso.',
    },
  ]
  return (
    <section className="sec fil">
      <div className="wrap">
        <div className="fil-cab" data-reveal>
          <p className="lbl">Nuestra mirada</p>
          <h2 className="h2">
            Realzamos tu belleza, <em>respetando tu esencia.</em>
          </h2>
        </div>
        <div className="g3">
          {columnas.map((c, i) => (
            <div className="fil-col" key={c.titulo} data-reveal={i + 1}>
              <em className="fil-n">{String(i + 1).padStart(2, '0')}</em>
              <h3>{c.titulo}</h3>
              <p className="body">{c.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CategoriasTratamientos() {
  const cats = [
    {
      zona: 'Rostro',
      numero: '01',
      texto: 'Hidratación, bioestimulación, toxina botulínica y rellenos.',
      clase: 'cat-ink',
      marca: '/brand/isotipo-blanco.png',
    },
    {
      zona: 'Cuerpo',
      numero: '02',
      texto: 'Contorno, grasa localizada y celulitis.',
      clase: 'cat-blush',
      marca: '/brand/isotipo-negro.png',
    },
  ]
  return (
    <section id="tratamientos" className="sec trat-sec">
      <div className="wrap">
        <div className="trat-cab" data-reveal>
          <div>
            <p className="lbl">Tratamientos</p>
            <h2 className="h2">
              Cada piel. Cada cuerpo. <em>Cada objetivo.</em>
            </h2>
          </div>
          <p className="body">Cada tratamiento se indica en la consulta médica, según tu piel y lo que querés lograr.</p>
        </div>
        <div className="g2">
          {cats.map((c, i) => (
            <Link key={c.zona} href={`/tratamientos?zona=${c.zona}`} className={`cat ${c.clase}`} data-reveal={i + 1}>
              <Image className="cat-mark" src={c.marca} alt="" width={900} height={704} aria-hidden="true" />
              {c.clase === 'cat-ink' && <Grano id="grano-cat" />}
              <span className="lbl cat-num">{c.numero}</span>
              <span className="cat-centro">
                <span className="cat-w">{c.zona}</span>
                <span className="body cat-t">{c.texto}</span>
              </span>
              <span className="cat-pie">
                <span className="lbl">Ver tratamientos de {c.zona.toLowerCase()}</span>
                <span className="cat-a">
                  <FlechaLarga ancho={26} />
                </span>
              </span>
            </Link>
          ))}
        </div>
        <div className="trat-boton" data-reveal>
          <Link className="btn btn-oscuro" href="/tratamientos">
            Ver todos los tratamientos <FlechaLarga ancho={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export function GiftCard() {
  if (!GIFT_CARD.activa) return null
  return (
    <section id="gift" className="sec gift">
      <div className="wrap gift-grid">
        <div className="gift-visual" data-reveal>
          <div className="gift-arco" aria-hidden="true" />
          <div className="gcard">
            <Grano id="grano-gift" />
            <div className="gcard-cab">
              <span className="lbl">Gift card</span>
              <Image src="/brand/isotipo-blanco.png" alt="" width={900} height={704} aria-hidden="true" />
            </div>
            <Image className="gcard-logo" src="/brand/wordmark-blanco.png" alt="Antognini" width={1600} height={290} />
            <div className="gcard-pie">
              <span>Válida por {GIFT_CARD.validezDias} días</span>
              <em>Para: ______</em>
            </div>
          </div>
        </div>
        <div data-reveal="2">
          <p className="lbl gift-lbl">Gift card</p>
          <h2 className="h2">
            Regalá <em>un tratamiento.</em>
          </h2>
          <p className="body gift-p">
            Una gift card para regalar cualquier tratamiento. Se puede usar durante {GIFT_CARD.validezDias} días.
          </p>
          <dl className="gift-datos">
            <div>
              <dt>Para usar en</dt>
              <dd>Cualquier tratamiento</dd>
            </div>
            <div>
              <dt>Tiempo de uso</dt>
              <dd>Hasta {GIFT_CARD.validezDias} días</dd>
            </div>
          </dl>
          <a className="btn btn-oscuro" href={whatsappUrl(GIFT_CARD.mensajeWhatsapp)} target="_blank" rel="noopener noreferrer">
            Quiero una gift card
          </a>
        </div>
      </div>
    </section>
  )
}

export function Consulta() {
  const pasos = [
    { titulo: 'Escribinos', texto: 'Reservá tu turno por WhatsApp y te respondemos con los horarios disponibles.' },
    { titulo: 'Evaluación', texto: 'La doctora te escucha y evalúa tu piel, tus necesidades y tus objetivos.' },
    { titulo: 'Tu plan', texto: 'Definimos en conjunto qué tratamiento te conviene y cuántas sesiones necesitás.' },
  ]
  return (
    <section id="consulta" className="sec cons-sec">
      <Image className="cons-marca" src="/brand/isotipo-blanco.png" alt="" width={900} height={704} aria-hidden="true" />
      <div className="wrap cons-wrap">
        <div className="cons-cab" data-reveal>
          <p className="lbl">Cómo empezamos</p>
          <h2 className="h2">
            Tu primera <em>consulta.</em>
          </h2>
        </div>
        <ol className="g3 pasos">
          {pasos.map((p, i) => (
            <li className="paso" key={p.titulo} data-reveal={i + 1}>
              <em className="paso-n">{String(i + 1).padStart(2, '0')}</em>
              <h3>{p.titulo}</h3>
              <p className="body">{p.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function Equipo() {
  return (
    <section id="equipo" className="sec equipo">
      <div className="wrap">
        <div className="equipo-cab" data-reveal>
          <p className="lbl">El equipo</p>
          <h2 className="h2">
            Profesionales <em>que te acompañan.</em>
          </h2>
        </div>
        <div className="team">
          {EQUIPO.map((p, i) => (
            <div className="miembro" key={p.nombre} data-reveal={i + 1}>
              <div className="arco">
                <Image src={p.foto} alt={p.alt} fill sizes="(max-width: 900px) 78vw, 420px" />
              </div>
              <p className="m-n">{p.nombre}</p>
              <p className="lbl m-r">{[p.rol, p.matricula].filter(Boolean).join(' · ')}</p>
            </div>
          ))}
        </div>
        <figure className="cita" data-reveal>
          <blockquote>“{FRASE_DE_LA_DOCTORA.texto}”</blockquote>
          <figcaption className="lbl">{FRASE_DE_LA_DOCTORA.autora}</figcaption>
        </figure>
      </div>
    </section>
  )
}

export function Contacto() {
  return (
    <section id="contacto" className="sec contacto">
      <div className="wrap">
        <div className="contacto-grid">
          <div data-reveal>
            <p className="lbl">Contacto</p>
            <h2 className="h2">
              Empecemos por <em>una consulta.</em>
            </h2>
            <p className="body contacto-p">
              Conocé nuestro espacio y descubrí qué tratamiento es adecuado para vos. Te acompañamos para encontrar la mejor versión de tus resultados, siempre desde una mirada médica e integral.
            </p>
            <a className="btn btn-solido" href={whatsappUrl('Hola, quiero reservar un turno')} target="_blank" rel="noopener noreferrer">
              Reservar turno por WhatsApp
            </a>
          </div>
          <div className="info-lista" data-reveal="2">
            <div className="info">
              <span className="lbl">Dirección</span>
              <span>
                {SITIO.direccion[0]}
                <br />
                {SITIO.direccion[1]}{' '}
                <a className="info-link" href={SITIO.mapa} target="_blank" rel="noopener noreferrer">
                  Cómo llegar
                </a>
              </span>
            </div>
            <div className="info">
              <span className="lbl">Horarios</span>
              <span>
                {SITIO.horarios.map((h, i) => (
                  <span key={h.dias}>
                    {i > 0 && <br />}
                    {h.dias}: {h.horas}
                  </span>
                ))}
              </span>
            </div>
            <div className="info">
              <span className="lbl">WhatsApp</span>
              <span>
                <a href={whatsappUrl('Hola, quiero hacer una consulta')} target="_blank" rel="noopener noreferrer">
                  {SITIO.whatsappVisible}
                </a>
              </span>
            </div>
            <div className="info">
              <span className="lbl">Instagram</span>
              <span>
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                  @{SITIO.instagram}
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="contacto-marca" aria-hidden="true">
          <Image src="/brand/wordmark-blanco.png" alt="" width={1600} height={290} />
        </div>
      </div>
    </section>
  )
}

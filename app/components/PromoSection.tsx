import Image from 'next/image'
import { fechaLarga, type Promocion } from '../data/promociones'
import { whatsappUrl } from '../data/sitio'
import { Grano } from './Detalles'

export default function PromoSection({ promo }: { promo: Promocion }) {
  const esPorcentaje = promo.destacado.endsWith('%')
  const numero = esPorcentaje ? promo.destacado.slice(0, -1) : promo.destacado
  const anillo = `${Array(3).fill(promo.titulo.toUpperCase()).join(' · ')} ·`
  const partes = promo.titulo.split(' ')
  const ultima = partes.pop()

  return (
    <section id="promo" className="sec promo-sec">
      <div className="wrap">
        <div className="promo" data-reveal>
          <Grano id="grano-promo" />
          <div className="promo-izq">
            <p className="lbl promo-lbl">
              <span className="punto" aria-hidden="true" />
              Promoción vigente
            </p>
            <h2 className="h2">
              {partes.join(' ')} <em>{ultima}</em>
            </h2>
            <div className="promo-m">
              <p className="promo-m-num">
                <span>
                  {numero}
                  {esPorcentaje && <em>%</em>}
                </span>
                <span className="lbl">{promo.etiqueta}</span>
              </p>
              <p className="promo-m-desc">{promo.descripcion}</p>
            </div>
            <p className="body promo-detalle">{promo.detalle}</p>
            <a className="promo-gift" href="#gift">
              También: gift card para regalar
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
                <path d="M0 6h16M11 1l5 5-5 5" />
              </svg>
            </a>
            <div className="promo-pie">
              <a className="btn btn-solido" href={whatsappUrl(promo.mensajeWhatsapp)} target="_blank" rel="noopener noreferrer">
                {promo.botonTexto}
              </a>
              <span className="promo-valida">Válida hasta el {fechaLarga(promo.hasta)}</span>
            </div>
          </div>

          <div className="promo-der hide-m">
            <div className="promo-arco">
              <Image className="promo-marca" src="/brand/isotipo-blanco.png" alt="" width={900} height={704} aria-hidden="true" />
              <span className="promo-num">
                {numero}
                {esPorcentaje && <em>%</em>}
              </span>
              <span className="lbl promo-etq">{promo.etiqueta}</span>
              <span className="lbl promo-desc">{promo.descripcion}</span>
            </div>
            <svg className="promo-giro" aria-hidden="true" viewBox="0 0 360 360" width="190" height="190">
              <path id="anillo-promo" d="M180,180 m-140,0 a140,140 0 1,1 280,0 a140,140 0 1,1 -280,0" fill="none" />
              <text fill="#F2EAE6" fontFamily="var(--f-label), serif" fontSize="17" letterSpacing="5">
                <textPath href="#anillo-promo" textLength="868" lengthAdjust="spacing">
                  {anillo}
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

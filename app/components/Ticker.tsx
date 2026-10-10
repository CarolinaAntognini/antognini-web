import Image from 'next/image'
import Link from 'next/link'
import { AVISOS_FIJOS } from '../data/sitio'
import { fechaCorta, promocionVigente } from '../data/promociones'

type Aviso = { clave: string; texto: string; promo?: { titulo: string } }

/** Cinta en movimiento de arriba de todo: promo vigente (si hay) y beneficios de pago. */
export default function Ticker() {
  const promo = promocionVigente()
  const avisos: Aviso[] = [
    ...(promo
      ? [
          {
            clave: promo.id,
            texto: `${promo.textoCinta} · Hasta el ${fechaCorta(promo.hasta)}`,
            promo: { titulo: promo.titulo },
          },
        ]
      : []),
    ...AVISOS_FIJOS.map((texto) => ({ clave: texto, texto })),
  ]
  const tanda = [...avisos, ...avisos, ...avisos]

  return (
    <div className="tk" role="region" aria-label="Avisos">
      <div className="tk-in">
        <div className="mq tk-track">
          {[0, 1].map((copia) => (
            <div className="tk-half" key={copia} aria-hidden={copia === 1 ? true : undefined}>
              {tanda.map((a, i) => (
                <span className="tk-item" key={`${a.clave}-${i}`}>
                  {a.promo ? (
                    <Link href="/#promo" className="tk-promo" tabIndex={copia === 1 ? -1 : undefined}>
                      <span className="lbl tk-lbl">{a.promo.titulo}</span>
                      {a.texto}
                    </Link>
                  ) : (
                    <span>{a.texto}</span>
                  )}
                  <Image src="/brand/isotipo-negro.png" alt="" width={20} height={16} className="tk-sep" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

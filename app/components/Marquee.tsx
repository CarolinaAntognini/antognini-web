import Image from 'next/image'
import BotonPausa from './BotonPausa'
import { ESPECIALIDADES } from '../data/sitio'

/** Franja en movimiento con las especialidades. */
export default function Marquee() {
  return (
    <section className="mq-sec" aria-label="Especialidades">
      <div className="mq mq-lento">
        {[0, 1].map((copia) => (
          <div className="mq-half" key={copia} aria-hidden={copia === 1 ? true : undefined}>
            {[...ESPECIALIDADES, ...ESPECIALIDADES].map((texto, i) => (
              <span className="mq-item" key={`${texto}-${i}`}>
                <em>{texto}</em>
                <Image src="/brand/isotipo-negro.png" alt="" width={38} height={30} />
              </span>
            ))}
          </div>
        ))}
      </div>
      <BotonPausa objetivo=".mq-sec" />
    </section>
  )
}

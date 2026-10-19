import Image from 'next/image'
import type { ParAntesDespues } from '../data/tratamientos'

/** Fotos de antes y después, de a pares. Todas las fotos ocupan el mismo cuadro y se ven completas. */
export default function AntesDespues({ pares }: { pares: ParAntesDespues[] }) {
  return (
    <div className="ad-grid">
      {pares.map((par) => (
        <figure className="ad-par" key={par.antes}>
          <div className="ad-foto">
            <Image src={par.antes} alt={`${par.alt}: antes`} fill loading="eager" sizes="(max-width: 900px) 46vw, 300px" />
            <span className="ad-tag">Antes</span>
          </div>
          <div className="ad-foto">
            <Image src={par.despues} alt={`${par.alt}: después`} fill loading="eager" sizes="(max-width: 900px) 46vw, 300px" />
            <span className="ad-tag">Después</span>
          </div>
        </figure>
      ))}
    </div>
  )
}

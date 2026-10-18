import Image from 'next/image'
import type { ParAntesDespues } from '../data/tratamientos'

/** Fotos de antes y después, de a pares. En las fichas cargan de entrada; en la página de resultados, las de abajo cargan al acercarse. */
export default function AntesDespues({ pares, eager = true }: { pares: ParAntesDespues[]; eager?: boolean }) {
  const carga = eager ? 'eager' : 'lazy'
  return (
    <div className="ad-grid">
      {pares.map((par) => (
        <figure className="ad-par" key={par.antes}>
          <div className="ad-foto" style={{ aspectRatio: par.proporcion }}>
            <Image src={par.antes} alt={`${par.alt}: antes`} fill loading={carga} sizes="(max-width: 900px) 46vw, 300px" />
            <span className="ad-tag">Antes</span>
          </div>
          <div className="ad-foto" style={{ aspectRatio: par.proporcion }}>
            <Image src={par.despues} alt={`${par.alt}: después`} fill loading={carga} sizes="(max-width: 900px) 46vw, 300px" />
            <span className="ad-tag">Después</span>
          </div>
        </figure>
      ))}
    </div>
  )
}

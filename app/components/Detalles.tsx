import { partirCursiva } from '../data/tratamientos'

/** Grano sutil sobre fondos oscuros. Cada uso necesita un id distinto. */
export function Grano({ id }: { id: string }) {
  return (
    <svg className="grain" aria-hidden="true">
      <filter id={id}>
        <feTurbulence type="fractalNoise" baseFrequency=".85" numOctaves="2" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter={`url(#${id})`} />
    </svg>
  )
}

export function Flecha({ ancho = 18 }: { ancho?: number }) {
  return (
    <svg width={ancho} height={Math.round(ancho * 0.67)} viewBox="0 0 18 12" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
      <path d="M0 6h16M11 1l5 5-5 5" />
    </svg>
  )
}

export function FlechaLarga({ ancho = 28 }: { ancho?: number }) {
  return (
    <svg width={ancho} height={Math.round(ancho / 2)} viewBox="0 0 28 14" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
      <path d="M0 7h26M20 1l6 6-6 6" />
    </svg>
  )
}

/** Texto con partes en cursiva marcadas con *asteriscos*. */
export function TextoCursiva({ texto }: { texto: string }) {
  return (
    <>
      {partirCursiva(texto).map((p, i) => (p.cursiva ? <em key={i}>{p.texto}</em> : <span key={i}>{p.texto}</span>))}
    </>
  )
}

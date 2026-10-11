'use client'

import { useRef, useState } from 'react'

/** Botón para pausar una franja en movimiento (accesibilidad: el movimiento automático debe poder detenerse). */
export default function BotonPausa({ objetivo }: { objetivo: string }) {
  const boton = useRef<HTMLButtonElement>(null)
  const [pausado, setPausado] = useState(false)

  function alternar() {
    const nuevo = !pausado
    setPausado(nuevo)
    boton.current?.closest(objetivo)?.classList.toggle('pausado', nuevo)
  }

  return (
    <button
      ref={boton}
      type="button"
      className="pausa"
      onClick={alternar}
      aria-pressed={pausado}
      aria-label={pausado ? 'Reanudar el movimiento de la cinta' : 'Pausar el movimiento de la cinta'}
    >
      {pausado ? (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
          <path d="M2.5 1.2v9.6L10.5 6z" />
        </svg>
      ) : (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
          <rect x="2" y="1.2" width="2.6" height="9.6" />
          <rect x="7.4" y="1.2" width="2.6" height="9.6" />
        </svg>
      )}
    </button>
  )
}

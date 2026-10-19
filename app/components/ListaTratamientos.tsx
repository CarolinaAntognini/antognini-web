'use client'

import Link from 'next/link'
import { useState, useSyncExternalStore } from 'react'
import { TRATAMIENTOS, ZONAS, type Zona } from '../data/tratamientos'
import { FlechaLarga } from './Detalles'

type Filtro = 'Todos' | Zona
const FILTROS: Filtro[] = ['Todos', ...ZONAS]

function filtroInicial(zona: string | null): Filtro {
  return ZONAS.find((z) => z.toLowerCase() === (zona ?? '').toLowerCase()) ?? 'Todos'
}

// Lee ?zona= de la dirección sin romper el HTML del servidor (ahí siempre sale la lista completa)
function suscribirse(avisar: () => void) {
  window.addEventListener('popstate', avisar)
  return () => window.removeEventListener('popstate', avisar)
}
const zonaDeLaDireccion = () => new URLSearchParams(window.location.search).get('zona') ?? ''

export default function ListaTratamientos() {
  const zona = useSyncExternalStore(suscribirse, zonaDeLaDireccion, () => '')
  const [elegido, setElegido] = useState<Filtro | null>(null)
  const filtro = elegido ?? filtroInicial(zona)

  const lista = TRATAMIENTOS.filter((t) => filtro === 'Todos' || t.zonas.includes(filtro))

  function elegir(nuevo: Filtro) {
    setElegido(nuevo)
    const url = nuevo === 'Todos' ? '/tratamientos' : `/tratamientos?zona=${nuevo}`
    window.history.replaceState(null, '', url)
  }

  return (
    <>
      <div className="filtros">
        <div className="wrap filtros-in">
          <div className="filtros-chips" role="group" aria-label="Filtrar por zona">
            {FILTROS.map((f) => (
              <button key={f} type="button" className={`chip ${f === filtro ? 'on' : ''}`} aria-pressed={f === filtro} onClick={() => elegir(f)}>
                {f}
              </button>
            ))}
          </div>
          <span className="lbl filtros-cuenta" aria-live="polite">
            {lista.length === 1 ? '1 tratamiento' : `${lista.length} tratamientos`}
          </span>
        </div>
      </div>

      <section className="sec lista-sec">
        <div className="wrap">
          <ul className="lista">
            {lista.map((t, i) => (
              <li key={t.slug}>
                <Link href={`/tratamientos/${t.slug}`} className="fila">
                  <span className="fila-n">{String(i + 1).padStart(2, '0')}</span>
                  <span>
                    <span className="fila-t">{t.nombre}</span>
                    <span className="fila-d">{t.resumen}</span>
                  </span>
                  <span className="fila-z">{t.zonas.join(' · ')}</span>
                  <span className="fila-a">
                    <FlechaLarga />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

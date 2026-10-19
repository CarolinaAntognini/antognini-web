'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'

type Par = { antes: string; despues: string; alt: string; zona: string }
export type GrupoResultados = { slug: string; nombre: string; zonas: string; texto?: string; pares: Par[] }

const FILTROS = ['Todos', 'Rostro', 'Cuerpo', 'Cabello']

/** Resultados: filtros por zona, una fila deslizable por tratamiento y ampliación de cada caso. */
export default function GaleriaResultados({ grupos }: { grupos: GrupoResultados[] }) {
  const [filtro, setFiltro] = useState('Todos')
  const [abierto, setAbierto] = useState<number | null>(null)
  const botonCerrar = useRef<HTMLButtonElement>(null)
  const ultimoFoco = useRef<HTMLElement | null>(null)

  const visibles = grupos
    .map((g) => ({ ...g, pares: g.pares.filter((p) => filtro === 'Todos' || p.zona === filtro) }))
    .filter((g) => g.pares.length > 0)
  // lista plana para pasar de un caso al siguiente en la ampliación
  const plana = visibles.flatMap((g) => g.pares.map((p) => ({ g, p })))
  const total = plana.length

  const cerrar = useCallback(() => {
    setAbierto(null)
    ultimoFoco.current?.focus()
  }, [])

  useEffect(() => {
    if (abierto === null) return
    const anterior = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    botonCerrar.current?.focus()
    const alTecla = (e: KeyboardEvent) => {
      if (e.key === 'Escape') cerrar()
      if (e.key === 'ArrowRight') setAbierto((i) => (i === null ? i : (i + 1) % total))
      if (e.key === 'ArrowLeft') setAbierto((i) => (i === null ? i : (i - 1 + total) % total))
    }
    window.addEventListener('keydown', alTecla)
    return () => {
      document.body.style.overflow = anterior
      window.removeEventListener('keydown', alTecla)
    }
  }, [abierto, total, cerrar])

  function abrir(slug: string, i: number, el: HTMLElement) {
    ultimoFoco.current = el
    const inicio = plana.findIndex((x) => x.g.slug === slug)
    setAbierto(inicio + i)
  }

  function mover(pista: HTMLDivElement | null, dir: number) {
    pista?.scrollBy({ left: dir * Math.max(pista.clientWidth * 0.8, 280), behavior: 'smooth' })
  }

  const actual = abierto !== null ? plana[abierto] : null

  return (
    <>
      <div className="filtros rg-filtros">
        <div className="wrap filtros-in">
          <div className="filtros-chips" role="group" aria-label="Filtrar por zona">
            {FILTROS.map((f) => (
              <button key={f} type="button" className={`chip ${f === filtro ? 'on' : ''}`} aria-pressed={f === filtro} onClick={() => setFiltro(f)}>
                {f}
              </button>
            ))}
          </div>
          <span className="lbl filtros-cuenta" aria-live="polite">
            {total === 1 ? '1 caso' : `${total} casos`}
          </span>
        </div>
      </div>

      <div className="rg-lista">
        {visibles.map((g, i) => (
          <PistaGrupo key={g.slug} g={g} abrir={abrir} mover={mover} eager={i < 2} />
        ))}
      </div>

      {actual && (
        <div className="rg-modal" role="dialog" aria-modal="true" aria-label={`Antes y después: ${actual.g.nombre}`} onClick={cerrar}>
          <div className="rg-modal-in" onClick={(e) => e.stopPropagation()}>
            <div className="rg-modal-cab">
              <div>
                <p className="lbl">{actual.g.zonas}</p>
                <h3 className="rg-modal-t">{actual.g.nombre}</h3>
              </div>
              <button ref={botonCerrar} type="button" className="rg-x" onClick={cerrar} aria-label="Cerrar">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <path d="M3 3l12 12M15 3L3 15" />
                </svg>
              </button>
            </div>
            <div className="rg-modal-fotos">
              <div className="rg-grande">
                <Image src={actual.p.antes} alt={`${actual.p.alt}: antes`} fill sizes="(max-width: 900px) 92vw, 520px" />
                <span className="ad-tag">Antes</span>
              </div>
              <div className="rg-grande">
                <Image src={actual.p.despues} alt={`${actual.p.alt}: después`} fill sizes="(max-width: 900px) 92vw, 520px" />
                <span className="ad-tag">Después</span>
              </div>
            </div>
            {actual.g.texto && <p className="rg-modal-p">{actual.g.texto}</p>}
            <div className="rg-modal-pie">
              <Link className="rs-ver" href={`/tratamientos/${actual.g.slug}`}>
                Ver el tratamiento
              </Link>
              {total > 1 && (
                <div className="rg-nav">
                  <button type="button" onClick={() => setAbierto((i) => (i === null ? i : (i - 1 + total) % total))} aria-label="Caso anterior">
                    ←
                  </button>
                  <span>
                    {(abierto ?? 0) + 1} / {total}
                  </span>
                  <button type="button" onClick={() => setAbierto((i) => (i === null ? i : (i + 1) % total))} aria-label="Caso siguiente">
                    →
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function PistaGrupo({
  g,
  abrir,
  mover,
  eager,
}: {
  eager: boolean
  g: GrupoResultados
  abrir: (slug: string, i: number, el: HTMLElement) => void
  mover: (pista: HTMLDivElement | null, dir: number) => void
}) {
  const pista = useRef<HTMLDivElement>(null)
  return (
    <section className="rg-grupo" id={g.slug}>
      <div className="wrap">
        <div className="rg-cab">
          <div>
            <p className="lbl">{g.zonas}</p>
            <h2 className="rg-h">
              <Link href={`/tratamientos/${g.slug}`}>{g.nombre}</Link>
            </h2>
            {g.texto && <p className="body rg-texto">{g.texto}</p>}
          </div>
          {g.pares.length > 1 && (
            <div className="rg-flechas">
              <button type="button" onClick={() => mover(pista.current, -1)} aria-label={`Ver casos anteriores de ${g.nombre}`}>
                ←
              </button>
              <button type="button" onClick={() => mover(pista.current, 1)} aria-label={`Ver más casos de ${g.nombre}`}>
                →
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="rg-pista" ref={pista} role="region" aria-label={`Casos de ${g.nombre}`} tabIndex={0}>
        {g.pares.map((p, i) => (
          <button type="button" className="rg-par" key={p.antes} onClick={(e) => abrir(g.slug, i, e.currentTarget)} aria-label={`Ampliar: ${p.alt}`}>
            <span className="ad-foto">
              <Image src={p.antes} alt="" fill sizes="(max-width: 900px) 42vw, 250px" loading={eager ? 'eager' : 'lazy'} />
              <span className="ad-tag">Antes</span>
            </span>
            <span className="ad-foto">
              <Image src={p.despues} alt="" fill sizes="(max-width: 900px) 42vw, 250px" loading={eager ? 'eager' : 'lazy'} />
              <span className="ad-tag">Después</span>
            </span>
            <span className="rg-ampliar" aria-hidden="true">
              Ampliar
            </span>
          </button>
        ))}
      </div>
    </section>
  )
}

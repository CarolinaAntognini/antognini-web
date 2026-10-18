'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { NAVEGACION, whatsappUrl } from '../data/sitio'

/** Menú: transparente arriba, se oscurece al bajar y queda siempre fijo a la vista. */
export default function Header() {
  const [solido, setSolido] = useState(false)
  const [abierto, setAbierto] = useState(false)

  useEffect(() => {
    let pendiente = false
    const alScrollear = () => {
      if (pendiente) return
      pendiente = true
      requestAnimationFrame(() => {
        setSolido(window.scrollY > 60)
        pendiente = false
      })
    }
    window.addEventListener('scroll', alScrollear, { passive: true })
    return () => window.removeEventListener('scroll', alScrollear)
  }, [])

  useEffect(() => {
    document.body.style.overflow = abierto ? 'hidden' : ''
    const alApretarTecla = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setAbierto(false)
    }
    window.addEventListener('keydown', alApretarTecla)
    return () => {
      window.removeEventListener('keydown', alApretarTecla)
      document.body.style.overflow = ''
    }
  }, [abierto])

  const clases = ['hdr', solido ? 'solid' : ''].join(' ').trim()

  return (
    <>
      <header className={clases}>
        <div className="hdr-in">
          <Link href="/" aria-label="Antognini, inicio" className="hdr-logo" onClick={() => setAbierto(false)}>
            <Image src="/brand/wordmark-blanco.png" alt="Antognini" width={1600} height={290} sizes="170px" priority />
          </Link>
          <nav className="hdr-nav" aria-label="Principal">
            {NAVEGACION.map((l) => (
              <Link key={l.href} href={l.href} className="navlink">
                {l.texto}
              </Link>
            ))}
            <a className="btn btn-claro btn-chico" href={whatsappUrl('Hola, quiero reservar un turno')} target="_blank" rel="noopener noreferrer">
              Reservar turno
            </a>
          </nav>
          <button
            type="button"
            className="burger"
            aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={abierto}
            aria-controls="menu-celular"
            onClick={() => setAbierto((v) => !v)}
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
              {abierto ? <path d="M6 6l16 16M22 6L6 22" /> : <path d="M4 9h20M4 19h20" />}
            </svg>
          </button>
        </div>
      </header>

      <div id="menu-celular" className={`menu-m ${abierto ? 'abierto' : ''}`} aria-hidden={!abierto}>
        <nav aria-label="Menú del celular">
          {NAVEGACION.map((l, i) => (
            <Link key={l.href} href={l.href} onClick={() => setAbierto(false)} tabIndex={abierto ? 0 : -1} style={{ transitionDelay: `${0.08 * i + 0.12}s` }}>
              {l.texto}
            </Link>
          ))}
        </nav>
        <a
          className="btn btn-solido btn-bloque"
          href={whatsappUrl('Hola, quiero reservar un turno')}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={abierto ? 0 : -1}
        >
          Reservar por WhatsApp
        </a>
      </div>
    </>
  )
}

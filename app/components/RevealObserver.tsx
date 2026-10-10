'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

/** Hace aparecer suavemente los elementos con data-reveal cuando entran en pantalla. */
export default function RevealObserver() {
  const pathname = usePathname()

  useEffect(() => {
    const elementos = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]:not(.in)'))
    if (!('IntersectionObserver' in window)) {
      elementos.forEach((e) => e.classList.add('in'))
      return
    }
    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add('in')
            observador.unobserve(entrada.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )
    elementos.forEach((e) => observador.observe(e))
    return () => observador.disconnect()
  }, [pathname])

  return null
}

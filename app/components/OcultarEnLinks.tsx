'use client'

import { usePathname } from 'next/navigation'

/** La página /links es una pantalla aparte (para el QR y las redes): sin menú, cinta ni barra de abajo. */
export default function OcultarEnLinks({ children }: { children: React.ReactNode }) {
  const ruta = usePathname()
  if (ruta === '/links') return null
  return <>{children}</>
}

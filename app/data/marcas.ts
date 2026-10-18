// Marcas con las que trabaja la doctora (se ven en un sector de la página de inicio).
// Los logos están en public/marcas/ en un solo tono oscuro y con fondo transparente, para que se vean parejos.
// Para sumar o cambiar uno: guardar el archivo ahí (PNG con fondo transparente o SVG) y agregarlo a la lista.
// "ancho" es el tamaño con el que se muestra en PC (en celular se achica solo).
// No se incluyen marcas de toxina botulínica porque son medicamentos de venta bajo receta.

export type Marca = {
  nombre: string
  logo: string
  /** Medidas reales del archivo */
  w: number
  h: number
  /** Ancho con el que se muestra en PC, en píxeles */
  ancho: number
}

export const MARCAS: Marca[] = [
  { nombre: 'Mesoestetic', logo: '/marcas/mesoestetic.png', w: 720, h: 109, ancho: 210 },
  { nombre: 'Radiesse', logo: '/marcas/radiesse.png', w: 559, h: 160, ancho: 190 },
  { nombre: 'Sculptra', logo: '/marcas/sculptra.png', w: 387, h: 160, ancho: 124 },
  { nombre: 'Galderma', logo: '/marcas/galderma.png', w: 720, h: 85, ancho: 230 },
  { nombre: 'Revanesse', logo: '/marcas/revanesse.png', w: 720, h: 69, ancho: 230 },
  { nombre: 'PB Serum', logo: '/marcas/pbserum.png', w: 616, h: 120, ancho: 180 },
]

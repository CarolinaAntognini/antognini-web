// Marcas con las que trabaja la doctora (se ven en un sector de la página de inicio).
// Salen de los productos que aparecen en las fotos del consultorio: la doctora tiene que confirmar la lista.
// Para mostrar el logo en lugar del nombre: guardar el archivo (mejor SVG o PNG con fondo transparente)
// en public/marcas/ y cargarlo acá, por ejemplo logo: '/marcas/mesoestetic.svg'.
// No se incluyen marcas de toxina botulínica porque son medicamentos de venta bajo receta.

export type Marca = {
  nombre: string
  logo?: string
}

export const MARCAS: Marca[] = [
  { nombre: 'Mesoestetic' },
  { nombre: 'Fillmed' },
  { nombre: 'Merz Aesthetics' },
  { nombre: 'Galderma' },
  { nombre: 'Suisselle' },
]

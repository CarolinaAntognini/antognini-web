export type Integrante = {
  nombre: string
  rol: string
  matricula?: string
  foto: string
  alt: string
}

export const EQUIPO: Integrante[] = [
  {
    nombre: 'Dra. Agustina Antognini',
    rol: 'Médica estética',
    matricula: 'M.P. 97025',
    foto: '/fotos/dra-agustina.jpg',
    alt: 'La Dra. Agustina Antognini',
  },
  {
    nombre: 'Milagros De La Garma',
    rol: 'Cosmetología',
    foto: '/fotos/milagros.jpg',
    alt: 'Milagros De La Garma',
  },
  {
    nombre: 'Lic. Sofía Zappalá',
    rol: 'Nutrición',
    foto: '/fotos/sofia.jpg',
    alt: 'Lic. Sofía Zappalá',
  },
]

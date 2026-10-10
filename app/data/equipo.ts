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

export const FRASE_DE_LA_DOCTORA = {
  texto: 'Mi objetivo es acompañarte a través de tratamientos seguros, personalizados y alineados con tu esencia.',
  autora: 'Dra. Agustina Antognini',
}

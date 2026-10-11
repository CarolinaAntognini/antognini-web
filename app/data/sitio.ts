// Datos de contacto y textos generales del centro.
// Si cambia el teléfono, la dirección o los horarios, se edita acá y se actualiza toda la web.

export const SITIO = {
  nombre: 'Antognini',
  descriptor: 'Medicina Estética Integral',
  ciudad: 'Mar del Plata',
  whatsapp: '5492235021512',
  whatsappVisible: '+54 9 223 502-1512',
  instagram: 'antognini.medicinaestetica',
  direccion: ['Garay 1382, Piso 2', 'Mar del Plata, Buenos Aires'],
  mapa: 'https://maps.app.goo.gl/FxJ2pYTsQiNUAH7s5',
  horarios: [
    { dias: 'Lun a Vie', horas: '9 a 20 h' },
    { dias: 'Sábados', horas: '9 a 14 h' },
  ],
} as const

// Dirección pública de la web (para Google y al compartir el link).
// Si se compra un dominio propio, cargar NEXT_PUBLIC_SITE_URL en Vercel (ej: https://www.antognini.com.ar).
export const URL_SITIO =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000')

export function whatsappUrl(mensaje: string): string {
  return `https://wa.me/${SITIO.whatsapp}?text=${encodeURIComponent(mensaje)}`
}

export const instagramUrl = `https://www.instagram.com/${SITIO.instagram}/`

// Beneficios de pago que se muestran siempre en la cinta de arriba.
export const AVISOS_FIJOS = [
  '10% de descuento en efectivo o transferencia',
  '3 cuotas sin interés',
] as const

export const NAVEGACION = [
  { href: '/tratamientos', texto: 'Tratamientos' },
  { href: '/#consulta', texto: 'Primera consulta' },
  { href: '/#equipo', texto: 'Equipo' },
  { href: '/#contacto', texto: 'Contacto' },
] as const

export const ESPECIALIDADES = [
  'Medicina estética integral',
  'Toxina botulínica',
  'Bioestimulación',
  'Mesoterapia',
  'Plasma rico en plaquetas',
  'Relleno de labios',
  'Dermapen',
  'Skinbooster',
] as const

// Promociones y gift card.
//
// Para cargar una promo nueva: agregar un objeto a PROMOCIONES con sus fechas.
// La web la muestra sola entre "desde" y "hasta" (inclusive, hora de Argentina)
// y la oculta cuando vence. Sin ninguna vigente, solo quedan los beneficios de pago.

export type Promocion = {
  id: string
  activa: boolean
  /** Primer día en que se muestra, formato AAAA-MM-DD */
  desde: string
  /** Último día en que se muestra, formato AAAA-MM-DD */
  hasta: string
  titulo: string
  /** El dato grande: "30%", "2x1", etc. */
  destacado: string
  /** Palabra chica junto al dato grande: "off" */
  etiqueta: string
  /** Frase corta del dato grande: "en plasma rico en plaquetas" */
  descripcion: string
  /** Párrafo de la sección de promo */
  detalle: string
  /** Texto de la cinta de arriba */
  textoCinta: string
  botonTexto: string
  mensajeWhatsapp: string
}

export const PROMOCIONES: Promocion[] = [
  {
    id: 'dia-de-la-madre-2026',
    activa: true,
    desde: '2026-10-01',
    hasta: '2026-10-31',
    titulo: 'Día de la Madre',
    destacado: '30%',
    etiqueta: 'off',
    descripcion: 'en plasma rico en plaquetas',
    detalle:
      '30% de descuento en plasma rico en plaquetas, un tratamiento 100% natural realizado con tu propia sangre.',
    textoCinta: '30% off en plasma rico en plaquetas',
    botonTexto: 'Quiero la promo',
    mensajeWhatsapp: 'Hola, quiero el 30% off en plasma rico en plaquetas',
  },
]

export const GIFT_CARD = {
  activa: true,
  validezDias: 30,
  mensajeWhatsapp: 'Hola, quiero comprar una gift card',
} as const

const ZONA = '-03:00' // Argentina, sin horario de verano

function inicioDelDia(iso: string): Date {
  return new Date(`${iso}T00:00:00${ZONA}`)
}

function finDelDia(iso: string): Date {
  return new Date(`${iso}T23:59:59${ZONA}`)
}

export function promocionVigente(ahora: Date = new Date()): Promocion | null {
  return (
    PROMOCIONES.find(
      (p) => p.activa && ahora >= inicioDelDia(p.desde) && ahora <= finDelDia(p.hasta),
    ) ?? null
  )
}

/** 2026-10-31 -> "31/10" */
export function fechaCorta(iso: string): string {
  const [, mes, dia] = iso.split('-')
  return `${Number(dia)}/${Number(mes)}`
}

/** 2026-10-31 -> "31 de octubre" */
export function fechaLarga(iso: string): string {
  return new Intl.DateTimeFormat('es-AR', {
    day: 'numeric',
    month: 'long',
    timeZone: 'America/Argentina/Buenos_Aires',
  }).format(new Date(`${iso}T12:00:00${ZONA}`))
}

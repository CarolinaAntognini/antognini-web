// Promociones y gift card.
//
// Las promociones se cargan desde el sistema de gestión (panel "Promociones web") y se guardan en
// la tabla `promociones` de Supabase. La web las lee de ahí y las muestra sola entre "desde" y
// "hasta" (inclusive, hora de Argentina), y las oculta cuando vencen.
// El arreglo PROMOCIONES de abajo es solo el RESPALDO: se usa si Supabase no responde o si faltan
// las variables SUPABASE_URL y SUPABASE_ANON_KEY. Sin ninguna vigente, solo quedan los beneficios de pago.

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

function vigenteEn(lista: Promocion[], ahora: Date): Promocion | null {
  return (
    lista.find((p) => p.activa && ahora >= inicioDelDia(p.desde) && ahora <= finDelDia(p.hasta)) ?? null
  )
}

/** Solo con el arreglo de respaldo de este archivo (sin Supabase). */
export function promocionVigente(ahora: Date = new Date()): Promocion | null {
  return vigenteEn(PROMOCIONES, ahora)
}

type FilaPromocion = {
  id: string
  activa: boolean
  desde: string
  hasta: string
  titulo: string
  destacado: string
  etiqueta: string
  descripcion: string
  detalle: string
  texto_cinta: string
  boton_texto: string
  mensaje_whatsapp: string
}

/**
 * Lee las promociones activas de Supabase (se renuevan cada 5 minutos).
 * Con la clave pública solo se pueden leer las activas (lo controla la base).
 * Si algo falla, devuelve el arreglo de respaldo para que la web nunca quede rota.
 */
export async function cargarPromociones(): Promise<Promocion[]> {
  const url = process.env.SUPABASE_URL
  const clave = process.env.SUPABASE_ANON_KEY
  if (!url || !clave) return PROMOCIONES
  try {
    const res = await fetch(`${url}/rest/v1/promociones?select=*&activa=eq.true&order=desde.asc`, {
      headers: { apikey: clave, Authorization: `Bearer ${clave}` },
      next: { revalidate: 300 },
      signal: AbortSignal.timeout(4000),
    })
    if (!res.ok) return PROMOCIONES
    const filas = (await res.json()) as FilaPromocion[]
    if (!Array.isArray(filas)) return PROMOCIONES
    return filas.map((f) => ({
      id: f.id,
      activa: f.activa,
      desde: f.desde,
      hasta: f.hasta,
      titulo: f.titulo,
      destacado: f.destacado,
      etiqueta: f.etiqueta,
      descripcion: f.descripcion,
      detalle: f.detalle,
      textoCinta: f.texto_cinta,
      botonTexto: f.boton_texto,
      mensajeWhatsapp: f.mensaje_whatsapp,
    }))
  } catch {
    return PROMOCIONES
  }
}

/** La promoción que corresponde mostrar hoy (de la base de datos), o null si no hay ninguna. */
export async function promocionVigenteAsync(ahora: Date = new Date()): Promise<Promocion | null> {
  return vigenteEn(await cargarPromociones(), ahora)
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

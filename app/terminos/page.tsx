import type { Metadata } from 'next'
import PaginaLegal, { type SeccionLegal } from '../components/PaginaLegal'
import { SITIO } from '../data/sitio'

export const metadata: Metadata = {
  title: 'Términos y condiciones',
  description: 'Términos y condiciones de uso del sitio y de la reserva de turnos de Antognini Medicina Estética Integral.',
  alternates: { canonical: '/terminos' },
}

const SECCIONES: SeccionLegal[] = [
  {
    titulo: 'Quiénes somos',
    parrafos: [
      `Este sitio pertenece a Antognini Medicina Estética Integral, consultorio ubicado en ${SITIO.direccion[0]}, ${SITIO.direccion[1]}. Al navegar por el sitio y reservar un turno aceptás estos términos y condiciones.`,
    ],
  },
  {
    titulo: 'Carácter informativo del sitio',
    parrafos: [
      'La información del sitio es de carácter general e informativo. No reemplaza la consulta médica, no constituye un diagnóstico ni una indicación de tratamiento.',
      'La indicación de cada tratamiento la realiza la profesional en una consulta presencial, según las características y los objetivos de cada persona. Los resultados, la cantidad de sesiones y los tiempos pueden variar de una persona a otra.',
    ],
  },
  {
    titulo: 'Profesionales',
    parrafos: [
      'La Dra. Agustina Antognini es médica, recibida en la Universidad FASTA de Mar del Plata, con posgrado en Medicina Estética en la Universidad de Buenos Aires (UBA). Matrícula provincial M.P. 97025.',
      'El equipo incluye además a Milagros De La Garma (cosmetología) y a la Lic. Sofía Zappalá (nutrición).',
    ],
  },
  {
    titulo: 'Turnos, seña y cancelaciones',
    parrafos: [
      'Los turnos se coordinan por WhatsApp. Para reservar un turno se solicita una seña de $20.000.',
      'El turno puede cancelarse o reprogramarse sin cargo hasta 24 horas antes del horario reservado. Las cancelaciones con menos de 24 horas de anticipación no están comprendidas en esta condición.',
      'La consulta médica tiene costo. El valor de la consulta y de los tratamientos se informa al coordinar el turno; el sitio no publica precios.',
    ],
  },
  {
    titulo: 'Medios de pago, promociones y gift card',
    parrafos: [
      'Se ofrece un 10% de descuento en pagos en efectivo o por transferencia, y 3 cuotas sin interés con tarjetas de crédito Visa y Mastercard.',
      'Las promociones informadas en el sitio rigen durante el período indicado en cada caso. La gift card puede utilizarse para cualquier tratamiento y tiene una validez de 30 días.',
    ],
  },
  {
    titulo: 'Contenidos e imágenes',
    parrafos: [
      'Los textos, el diseño, las marcas y las imágenes del sitio pertenecen a Antognini Medicina Estética Integral o se utilizan con la debida autorización. No pueden copiarse, reproducirse ni usarse con fines comerciales sin autorización previa y por escrito.',
      'Las fotografías de antes y después corresponden a pacientes que dieron su consentimiento para su publicación. Las marcas de terceros que se muestran en el sitio pertenecen a sus respectivos titulares y se mencionan solo para informar con qué productos se trabaja.',
    ],
  },
  {
    titulo: 'Enlaces a otros sitios',
    parrafos: [
      'El sitio incluye enlaces a servicios de terceros, como WhatsApp, Instagram y Google Maps. Cada uno se rige por sus propios términos y políticas, y Antognini Medicina Estética Integral no es responsable por sus contenidos.',
    ],
  },
  {
    titulo: 'Responsabilidad',
    parrafos: [
      'Se procura que la información publicada sea correcta y esté actualizada, pero puede contener errores o cambiar sin aviso previo. No nos responsabilizamos por interrupciones técnicas ni por decisiones tomadas únicamente a partir de la información del sitio, sin consulta médica.',
    ],
  },
  {
    titulo: 'Cambios en estos términos',
    parrafos: ['Estos términos pueden actualizarse. La versión vigente es la publicada en esta página.'],
  },
  {
    titulo: 'Ley aplicable y jurisdicción',
    parrafos: [
      'Estos términos se rigen por las leyes de la República Argentina. Ante cualquier controversia serán competentes los tribunales ordinarios de la ciudad de Mar del Plata, sin perjuicio de los derechos que la Ley N° 24.240 de Defensa del Consumidor reconoce a los consumidores.',
    ],
  },
  {
    titulo: 'Contacto',
    parrafos: [`Podés escribirnos por WhatsApp al ${SITIO.whatsappVisible} o acercarte a ${SITIO.direccion[0]}, ${SITIO.direccion[1]}.`],
  },
]

export default function Terminos() {
  return (
    <PaginaLegal
      titulo="Términos y condiciones"
      intro="Estos términos explican cómo se usa este sitio y cómo funcionan la reserva de turnos, la seña y las cancelaciones."
      secciones={SECCIONES}
    />
  )
}

import type { Metadata } from 'next'
import PaginaLegal, { type SeccionLegal } from '../components/PaginaLegal'
import { SITIO } from '../data/sitio'

export const metadata: Metadata = {
  title: 'Política de privacidad',
  description: 'Cómo Antognini Medicina Estética Integral trata y protege tus datos personales y de salud.',
  alternates: { canonical: '/privacidad' },
}

const SECCIONES: SeccionLegal[] = [
  {
    titulo: 'Responsable del tratamiento',
    parrafos: [
      `Antognini Medicina Estética Integral, con domicilio en ${SITIO.direccion[0]}, ${SITIO.direccion[1]}, es responsable del tratamiento de los datos personales que se describen en esta política. Podés comunicarte por WhatsApp al ${SITIO.whatsappVisible}.`,
    ],
  },
  {
    titulo: 'Qué datos tratamos',
    lista: [
      'Sitio web: el sitio no tiene formularios, cuentas de usuario ni registro. No usa cookies publicitarias ni de seguimiento, ni herramientas de medición de visitas. El servicio de alojamiento (Vercel) puede registrar datos técnicos de conexión, como dirección IP, navegador y fecha y hora, por motivos de seguridad y funcionamiento.',
      'Contacto por WhatsApp o Instagram: si nos escribís, usamos los datos que nos compartas (por ejemplo, nombre, teléfono y tu consulta) para responderte y coordinar el turno. Esas plataformas tienen sus propias políticas de privacidad.',
      'Atención de pacientes: al reservar y ser atendido registramos datos de identificación y contacto, y los datos de salud necesarios para tu atención, que forman parte de la historia clínica.',
      'Imágenes: las fotografías de seguimiento y de antes y después se toman y se publican únicamente con tu consentimiento.',
    ],
  },
  {
    titulo: 'Para qué usamos tus datos',
    lista: [
      'Coordinar turnos y enviarte recordatorios por mail o WhatsApp.',
      'Brindarte la atención médica y llevar tu historia clínica.',
      'Responder tus consultas.',
      'Cumplir con obligaciones legales.',
    ],
  },
  {
    titulo: 'Confidencialidad y datos de salud',
    parrafos: [
      'Los datos de salud son datos sensibles. Se tratan con estricta confidencialidad, en el marco de la Ley N° 25.326 de Protección de los Datos Personales y de la Ley N° 26.529 de Derechos del Paciente. Solo acceden a ellos las personas del equipo que los necesitan para tu atención.',
      'No vendemos ni cedemos tus datos a terceros, salvo que lo exija la ley o una autoridad competente.',
    ],
  },
  {
    titulo: 'Proveedores tecnológicos',
    parrafos: [
      'Para gestionar turnos y pacientes usamos servicios tecnológicos que actúan por nuestra cuenta, como almacenamiento en la nube, agenda y envío de correo electrónico. Los elegimos por sus medidas de seguridad y solo les damos los datos necesarios para prestar el servicio.',
    ],
  },
  {
    titulo: 'Cuánto tiempo los conservamos',
    parrafos: [
      'La historia clínica se conserva durante el plazo que establece la ley, que es de al menos diez años. El resto de los datos se conserva mientras sean necesarios para las finalidades indicadas o hasta que pidas su supresión, cuando corresponda.',
    ],
  },
  {
    titulo: 'Tus derechos',
    parrafos: [
      'Podés pedir acceder a tus datos, rectificarlos, actualizarlos o, cuando corresponda, suprimirlos. También podés pedir que retiremos una imagen tuya que hayamos publicado. Escribinos por WhatsApp y te respondemos.',
      'La Agencia de Acceso a la Información Pública, en su carácter de Órgano de Control de la Ley N° 25.326, tiene la atribución de atender las denuncias y reclamos que se interpongan con relación al incumplimiento de las normas sobre protección de datos personales.',
    ],
  },
  {
    titulo: 'Seguridad',
    parrafos: [
      'Aplicamos medidas razonables para proteger tus datos: acceso restringido por usuario, conexiones cifradas y copias de respaldo. Ningún sistema es completamente infalible, por eso trabajamos para mejorarlas de forma continua.',
    ],
  },
  {
    titulo: 'Cookies y medición',
    parrafos: [
      'Hoy este sitio no usa herramientas de medición ni cookies de seguimiento. Si en el futuro se incorporan, lo informaremos en esta página y pediremos tu consentimiento cuando corresponda.',
    ],
  },
  {
    titulo: 'Menores de edad',
    parrafos: ['El sitio no está dirigido a menores de edad. Las personas menores se atienden con la autorización de su madre, padre o representante legal.'],
  },
  {
    titulo: 'Cambios en esta política',
    parrafos: ['Podemos actualizar esta política. La versión vigente es la publicada en esta página, con su fecha de actualización.'],
  },
]

export default function Privacidad() {
  return (
    <PaginaLegal
      titulo="Política de privacidad"
      actualizado="19 de octubre de 2026"
      intro="Esta política explica qué datos tratamos, para qué los usamos y cómo los cuidamos, en particular los datos de salud de las pacientes."
      secciones={SECCIONES}
    />
  )
}

// Preguntas frecuentes de la página de inicio. Para agregar o cambiar una, se edita acá.
// "enlace" es opcional: agrega un link al final de la respuesta ("whatsapp" abre el chat del centro).

export type Pregunta = {
  pregunta: string
  respuesta: string
  enlace?: { texto: string; href: string; whatsapp?: string }
}

export const PREGUNTAS: Pregunta[] = [
  {
    pregunta: '¿La Dra. Agustina Antognini es médica matriculada?',
    respuesta:
      'Sí. La Dra. Agustina Antognini es médica, recibida en la Universidad FASTA de Mar del Plata, con posgrado en Medicina Estética en la Universidad de Buenos Aires (UBA). Su matrícula provincial es M.P. 97025.',
    enlace: { texto: 'Conocer al equipo', href: '/#equipo' },
  },
  {
    pregunta: '¿Quiénes forman el equipo?',
    respuesta:
      'Además de la Dra. Agustina Antognini, el equipo incluye a Milagros De La Garma, cosmetóloga, y a la Lic. Sofía Zappalá, nutricionista.',
  },
  {
    pregunta: '¿Qué tratamientos realizan?',
    respuesta:
      'Armonización facial, toxina botulínica, relleno de labios, Skinbooster, hidroxiapatita de calcio, Sculptra, Dermapen, mesoterapia facial, Mesoterapia NCTF, Mesobotox, Mesopeel, peeling, exosomas, plasma rico en plaquetas, Cellbooster Shape, fosfatidilcolina, enzimas lipolíticas y mesoterapia corporal.',
    enlace: { texto: 'Ver todos los tratamientos', href: '/tratamientos' },
  },
  {
    pregunta: '¿La consulta tiene costo?',
    respuesta:
      'Sí, la consulta tiene costo. Es una evaluación médica personalizada: la doctora te escucha, evalúa tu piel y tus objetivos, y te indica qué tratamientos te convienen y cuántas sesiones necesitás. El valor te lo informamos al coordinar el turno.',
  },
  {
    pregunta: '¿Cómo reservo un turno?',
    respuesta: 'Escribinos por WhatsApp y te respondemos con los horarios disponibles.',
    enlace: { texto: 'Reservar por WhatsApp', href: '', whatsapp: 'Hola, quiero reservar un turno' },
  },
  {
    pregunta: '¿Se cobra seña para reservar?',
    respuesta: 'Sí. Para reservar el turno se solicita una seña de $20.000.',
  },
  {
    pregunta: '¿Puedo cancelar o reprogramar mi turno?',
    respuesta:
      'Sí. El turno puede cancelarse o reprogramarse sin cargo hasta 24 horas antes del horario reservado. Para hacerlo, escribinos por WhatsApp.',
  },
  {
    pregunta: '¿Qué medios de pago tienen?',
    respuesta: 'Tenemos 10% de descuento en efectivo o transferencia, y 3 cuotas sin interés con tarjetas de crédito Visa y Mastercard.',
  },
  {
    pregunta: '¿Cuántas sesiones necesito?',
    respuesta:
      'Depende de cada tratamiento y de cada persona. En la página de cada tratamiento encontrás el rango habitual de sesiones, y en la consulta la doctora arma tu plan.',
  },
  {
    pregunta: '¿Cuándo se ven los resultados?',
    respuesta:
      'Depende del tratamiento: algunos se notan enseguida y otros mejoran de forma gradual. En cada tratamiento figura cuándo se ven los resultados y cuánto duran.',
    enlace: { texto: 'Ver resultados', href: '/resultados' },
  },
  {
    pregunta: '¿Hay tratamientos que no se pueden hacer durante el embarazo?',
    respuesta:
      'Sí. Algunos tratamientos no están indicados durante el embarazo ni la lactancia. Lo aclaramos en la página de cada uno y lo evaluamos en la consulta.',
  },
  {
    pregunta: '¿Tienen gift card?',
    respuesta: 'Sí. Tenemos una gift card para regalar cualquier tratamiento, con una validez de 30 días.',
    enlace: { texto: 'Quiero una gift card', href: '', whatsapp: 'Hola, quiero comprar una gift card' },
  },
  {
    pregunta: '¿Dónde están y en qué horarios atienden?',
    respuesta: 'Estamos en Garay 1382, Piso 2, Mar del Plata. Atendemos de lunes a viernes de 9 a 20 h y los sábados de 9 a 14 h.',
    enlace: { texto: 'Cómo llegar', href: 'https://maps.app.goo.gl/FxJ2pYTsQiNUAH7s5' },
  },
]

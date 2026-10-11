// Tratamientos del centro. El contenido sale de las fichas que pasó la doctora.
// No se publican precios ni cuidados posteriores.
//
// Todos los tratamientos usan la misma estructura (los mismos bloques y los mismos 4 datos):
// la lista, los filtros y la página de cada uno se arman solos al sumar uno nuevo.
// En los textos, lo que va entre *asteriscos* se muestra en cursiva.
//
// OJO: en "datos", la cantidad de sesiones y el tiempo entre sesiones de toxina, relleno de labios,
// hidroxiapatita, Sculptra, Dermapen, mesoterapia facial, Mesopeel, plasma, fosfatidilcolina,
// enzimas (sesiones) y mesoterapia corporal (sesiones) NO salen de las fichas de la doctora:
// son los rangos habituales de cada tratamiento y ella tiene que validarlos.

export type Zona = 'Rostro' | 'Cuerpo' | 'Cabello'

export type Foto = {
  src: string
  alt: string
  posicion?: string
  /** Imagen ilustrativa (no es una foto real del consultorio) */
  ilustrativa?: boolean
}

export type Tratamiento = {
  slug: string
  nombre: string
  zonas: Zona[]
  /** Frase corta para la lista de tratamientos */
  resumen: string
  /** Párrafo principal, debajo del título */
  intro: string
  /** Los 4 datos que lleva todo tratamiento */
  datos: {
    sesiones: string
    entreSesiones: string
    resultados: string
    zonas: string
  }
  /** Respuesta a "¿Para qué sirve?" */
  sirve: { encabezado: string; items: string[]; ideal?: string }
  /** Cómo es el tratamiento (párrafos) */
  detalle: string[]
  noApto?: string
  foto: Foto
}

export const ETIQUETAS_DATOS = {
  sesiones: 'Sesiones',
  entreSesiones: 'Entre sesiones',
  resultados: 'Resultados',
  zonas: 'Zonas',
} as const

const NO_APTO_EMBARAZADAS = 'No apto para embarazadas'

export const TRATAMIENTOS: Tratamiento[] = [
  {
    slug: 'toxina-botulinica',
    nombre: 'Toxina botulínica',
    zonas: ['Rostro'],
    resumen: 'Relaja las arrugas de expresión para una mirada descansada y natural, sin perder gestualidad.',
    intro:
      'La toxina botulínica actúa relajando de forma temporal los músculos responsables de las arrugas dinámicas del tercio superior del rostro, como frente, entrecejo y patas de gallo.',
    datos: {
      sesiones: '1 sesión, con control a los 15 días',
      entreSesiones: 'Cada 3 a 4 meses, cuando termina el efecto',
      resultados: 'Desde las 72 a 96 horas, con efecto máximo a los 15 días',
      zonas: 'Tercio superior, tercio inferior, bruxismo e hiperhidrosis',
    },
    sirve: {
      encabezado: 'Una mirada *descansada* y natural.',
      items: [
        'Relajar las arrugas de expresión de la frente, el entrecejo y las patas de gallo',
        'Lograr una expresión más descansada, natural y rejuvenecida',
        'Mantener la gestualidad',
        'Tratar también el bruxismo y la hiperhidrosis, según indicación',
      ],
    },
    detalle: [
      'El resultado es una expresión más descansada, natural y rejuvenecida, sin perder gestualidad.',
      'El efecto no es inmediato y su duración varía según cada paciente.',
      'Al confirmar el turno, es importante contar con disponibilidad para asistir al control a los 15 días.',
    ],
    foto: { src: '/fotos/trat-toxina.jpg', alt: 'Aplicación de toxina botulínica en la frente', posicion: '50% 30%' },
  },
  {
    slug: 'relleno-de-labios',
    nombre: 'Relleno de labios',
    zonas: ['Rostro'],
    resumen: 'Ácido hialurónico para mejorar hidratación, definición y armonía, con volumen a medida.',
    intro:
      'Es un tratamiento estético realizado con ácido hialurónico que permite mejorar la hidratación, definición y armonía de los labios.',
    datos: {
      sesiones: '1 sesión',
      entreSesiones: 'Si hace falta un retoque, a las 2 a 4 semanas',
      resultados: 'Inmediatos, con evolución durante los días posteriores. Duran alrededor de 6 a 12 meses',
      zonas: 'Labios',
    },
    sirve: {
      encabezado: 'Labios hidratados, *definidos* y armónicos.',
      items: [
        'Mejorar la hidratación de los labios',
        'Definir el contorno labial',
        'Aportar volumen de forma personalizada',
        'Corregir pequeñas asimetrías y recuperar la proyección natural del labio',
      ],
    },
    detalle: [
      'Ayuda a aportar volumen de forma personalizada, mejorar el contorno labial, corregir pequeñas asimetrías y recuperar la proyección natural del labio.',
      'El procedimiento es ambulatorio. Puede generar inflamación, sensibilidad o pequeños hematomas transitorios.',
    ],
    noApto: NO_APTO_EMBARAZADAS,
    foto: { src: '/fotos/trat-relleno-de-labios.jpg', alt: 'Labios con acabado natural', posicion: '50% 45%', ilustrativa: true },
  },
  {
    slug: 'skinbooster',
    nombre: 'Skinbooster',
    zonas: ['Rostro'],
    resumen: 'Hidratación profunda con ácido hialurónico de baja densidad, sin dar volumen.',
    intro:
      'Un tratamiento médico-estético que consiste en la aplicación de ácido hialurónico de baja densidad, diseñado específicamente para hidratar la piel en profundidad y mejorar su calidad, sin dar volumen ni cambiar los rasgos.',
    datos: {
      sesiones: '2 a 3',
      entreSesiones: '3 a 4 semanas',
      resultados: 'Piel más hidratada, fresca y uniforme. Mantenimiento cada 6 a 12 meses',
      zonas: 'Rostro, cuello, escote y manos',
    },
    sirve: {
      encabezado: 'Una piel más *fresca, uniforme* y saludable.',
      items: [
        'Aumentar la hidratación profunda de la piel',
        'Mejorar la textura, la elasticidad y la luminosidad',
        'Suavizar líneas finas',
        'Dar un aspecto más fresco, uniforme y saludable',
      ],
      ideal: 'Ideal para pieles deshidratadas, apagadas o con primeros signos de envejecimiento.',
    },
    detalle: [
      'Es un procedimiento ambulatorio que puede generar enrojecimiento, sensibilidad o pequeños hematomas transitorios.',
    ],
    foto: {
      src: '/fotos/trat-skinbooster.jpg',
      alt: 'Aplicación de un tratamiento inyectable en el rostro',
      posicion: '50% 45%',
    },
  },
  {
    slug: 'hidroxiapatita-de-calcio',
    nombre: 'Hidroxiapatita de calcio',
    zonas: ['Rostro', 'Cuerpo'],
    resumen: 'Bioestimulador de colágeno: firmeza y elasticidad de forma progresiva y natural.',
    intro:
      'La hidroxiapatita de calcio es un bioestimulador de colágeno de última generación que mejora la firmeza, elasticidad y calidad de la piel de manera progresiva y natural.',
    datos: {
      sesiones: '1 sesión',
      entreSesiones: 'Si hace falta una segunda, a los 2 a 3 meses',
      resultados: 'Desde el primer mes. Pueden durar entre 12 y 18 meses',
      zonas: 'Rostro, mandíbula, mentón, cuello y otras zonas con pérdida de firmeza o volumen',
    },
    sirve: {
      encabezado: 'Una piel más *firme* y elástica, de forma natural.',
      items: [
        'Mejorar la firmeza y la elasticidad de la piel',
        'Mejorar la calidad de la piel de manera progresiva y natural',
        'Estimular la producción de colágeno',
        'Tratar zonas con pérdida de firmeza o volumen',
      ],
    },
    detalle: [
      'Es un tratamiento seguro, biocompatible y muy utilizado en medicina estética para rejuvenecimiento facial y corporal.',
      'Los resultados mejoran de forma progresiva, dependiendo de cada paciente.',
    ],
    foto: {
      src: '/fotos/trat-hidroxiapatita-de-calcio.jpg',
      alt: 'Perfil de un rostro con piel firme y luminosa',
      posicion: '50% 40%',
      ilustrativa: true,
    },
  },
  {
    // Ficha armada con información general pública (no viene de una ficha de la doctora):
    // la doctora tiene que revisar y ajustar sesiones y contraindicaciones.
    slug: 'sculptra',
    nombre: 'Sculptra',
    zonas: ['Rostro', 'Cuerpo'],
    resumen: 'Bioestimulador de colágeno de larga duración para restaurar volumen de forma gradual y natural.',
    intro:
      'Sculptra es un bioestimulador de colágeno a base de ácido poli-L-láctico, un material biocompatible y reabsorbible. En lugar de rellenar de inmediato, estimula a la piel a producir su propio colágeno para recuperar firmeza y volumen de forma gradual y natural.',
    datos: {
      sesiones: '2 a 4 sesiones',
      entreSesiones: '4 a 6 semanas',
      resultados: 'Graduales, durante las semanas siguientes. Pueden durar hasta 2 años',
      zonas: 'Rostro y cuerpo, en zonas con pérdida de firmeza o volumen',
    },
    sirve: {
      encabezado: 'Firmeza y volumen, *de forma gradual.*',
      items: [
        'Recuperar el volumen que se pierde con el paso del tiempo',
        'Mejorar la firmeza y la calidad de la piel',
        'Estimular la producción de colágeno propio',
        'Lograr un resultado natural y progresivo',
      ],
      ideal: 'Ideal para quienes buscan mejorar la firmeza y el volumen de manera progresiva, respetando sus rasgos.',
    },
    detalle: [
      'El resultado no es inmediato: el producto actúa a medida que el cuerpo produce colágeno, según cada paciente.',
      'Se aplica en el consultorio mediante inyecciones en las capas profundas de la piel.',
    ],
    noApto: 'No indicado durante el embarazo ni la lactancia',
    foto: { src: '/fotos/trat-sculptra.jpg', alt: 'Cuello y escote con piel firme', posicion: '50% 50%', ilustrativa: true },
  },
  {
    slug: 'dermapen',
    nombre: 'Dermapen',
    zonas: ['Rostro'],
    resumen: 'Microagujas que estimulan colágeno y elastina para mejorar textura, poros y marcas.',
    intro:
      'Es un tratamiento de bioestimulación que mejora la calidad de la piel mediante microperforaciones controladas con microagujas.',
    datos: {
      sesiones: '4 a 6 sesiones',
      entreSesiones: 'Cada 3 a 4 semanas',
      resultados: 'Progresivos: la piel mejora con cada sesión',
      zonas: 'Rostro',
    },
    sirve: {
      encabezado: 'Una piel con mejor *textura* y menos marcas.',
      items: [
        'Estimular la producción de colágeno y elastina',
        'Mejorar la textura y los poros',
        'Suavizar líneas finas y manchas',
        'Mejorar las marcas de acné',
      ],
    },
    detalle: [
      'Estimula la producción de colágeno y elastina, mejorando textura, poros, líneas finas, manchas y marcas de acné.',
      'Es un procedimiento ambulatorio que puede generar enrojecimiento o sensibilidad transitoria.',
    ],
    noApto: NO_APTO_EMBARAZADAS,
    foto: { src: '/fotos/trat-dermapen.jpg', alt: 'Profesional realizando un tratamiento facial', posicion: '50% 50%' },
  },
  {
    slug: 'mesoterapia-facial',
    nombre: 'Mesoterapia facial',
    zonas: ['Rostro'],
    resumen: 'Microinyecciones con activos a medida para hidratar y dar luminosidad.',
    intro:
      'Es un tratamiento que consiste en la aplicación de microinyecciones con activos específicos según las necesidades de cada piel.',
    datos: {
      sesiones: '4 a 6 sesiones',
      entreSesiones: 'Cada 2 a 4 semanas',
      resultados: 'Progresivos: más hidratación y luminosidad en cada sesión',
      zonas: 'Rostro',
    },
    sirve: {
      encabezado: 'Una piel *hidratada* y luminosa.',
      items: [
        'Aportar hidratación y luminosidad',
        'Mejorar la calidad de la piel',
        'Estimular la producción de colágeno',
        'Mejorar la textura, las líneas finas y los signos de cansancio',
      ],
    },
    detalle: [
      'Aporta hidratación, luminosidad y mejora la calidad de la piel, ayudando a estimular la producción de colágeno y mejorar la textura, líneas finas y signos de cansancio.',
      'Es un procedimiento ambulatorio que puede generar enrojecimiento, sensibilidad o pequeños hematomas transitorios.',
    ],
    noApto: NO_APTO_EMBARAZADAS,
    foto: {
      src: '/fotos/trat-mesoterapia-facial.jpg',
      alt: 'Limpieza facial con algodón durante un tratamiento',
      posicion: '50% 50%',
    },
  },
  {
    slug: 'mesopeel',
    nombre: 'Mesopeel',
    zonas: ['Rostro'],
    resumen: 'Mesoterapia y peeling médico en un mismo tratamiento: renovación y activos.',
    intro:
      'Es un tratamiento combinado de mesoterapia y peeling médico que busca mejorar la calidad y apariencia de la piel mediante la renovación celular y la aplicación de activos específicos.',
    datos: {
      sesiones: '4 a 6 sesiones',
      entreSesiones: 'Cada 2 a 4 semanas',
      resultados: 'Progresivos: más luminosidad y mejor textura',
      zonas: 'Rostro',
    },
    sirve: {
      encabezado: 'Una piel *renovada*, más uniforme y luminosa.',
      items: [
        'Favorecer la renovación y la regeneración de la piel',
        'Mejorar la textura, la luminosidad, las manchas y los poros',
        'Atenuar los signos de envejecimiento',
        'Potenciar la hidratación y la revitalización de la piel',
      ],
    },
    detalle: [
      'El peeling favorece la regeneración de la piel, mejorando textura, luminosidad, manchas, poros y signos de envejecimiento. La mesoterapia permite aportar principios activos según la necesidad de cada paciente.',
      'Es un procedimiento ambulatorio que puede generar enrojecimiento, sensibilidad o descamación leve transitoria.',
    ],
    noApto: NO_APTO_EMBARAZADAS,
    foto: { src: '/fotos/trat-mesopeel.jpg', alt: 'Tratamiento facial con cuidado de la piel', posicion: '50% 40%' },
  },
  {
    slug: 'plasma-rico-en-plaquetas',
    nombre: 'Plasma rico en plaquetas',
    zonas: ['Rostro', 'Cabello', 'Cuerpo'],
    resumen: 'Un tratamiento natural, con tu propia sangre, para piel y cuero cabelludo.',
    intro:
      'Es un tratamiento 100% natural, realizado con sangre del propio paciente. A través de un proceso de centrifugado se obtienen plaquetas ricas en factores de crecimiento que estimulan la regeneración de la piel y el cuero cabelludo.',
    datos: {
      sesiones: '3 a 4 sesiones',
      entreSesiones: 'Cada 4 semanas',
      resultados: 'Regeneración progresiva de la piel y fortalecimiento del cabello',
      zonas: 'Rostro, cuero cabelludo y cuerpo',
    },
    sirve: {
      encabezado: 'Regenera la piel y *fortalece* el cabello.',
      items: [
        'Mejorar arrugas, cicatrices (acné) y estrías',
        'Reparar daños solares',
        'Prevenir y retrasar el envejecimiento',
        'Aportar hidratación y brillo a la piel',
        'Fortalecer el cabello y aumentar su grosor',
      ],
    },
    detalle: [
      'Puede realizarse facial (rostro y cuello), capilar, o facial y capilar en una misma consulta, y también combinado con Dermapen.',
      'Se obtiene a partir de una pequeña muestra de sangre, que se centrifuga para separar el plasma rico en plaquetas.',
    ],
    foto: { src: '/fotos/trat-prp.jpg', alt: 'Centrífuga para obtener plasma rico en plaquetas', posicion: '50% 50%' },
  },
  {
    slug: 'cellbooster-shape',
    nombre: 'Cellbooster Shape',
    zonas: ['Rostro', 'Cuerpo'],
    resumen: 'Modela el contorno: papada, óvalo facial y retención de líquidos.',
    intro:
      'Es un tratamiento inyectable de mesoterapia avanzada para modelar contorno, reducir grasa localizada leve y desinflamar tejidos.',
    datos: {
      sesiones: '3 (protocolo habitual)',
      entreSesiones: '2 a 3 semanas',
      resultados: 'Contorno más definido, menos hinchazón y piel más firme e hidratada. Luego, mantenimiento mensual',
      zonas: 'Papada, óvalo facial y mejillas',
    },
    sirve: {
      encabezado: 'Un contorno *más definido.*',
      items: ['Papada y óvalo facial', 'Jowls / mejillas', 'Retención de líquidos', 'Mejorar firmeza y textura'],
    },
    detalle: [
      'Contiene ácido hialurónico no reticulado, L-carnitina (metabolismo de grasa) y vitamina C (calidad de piel).',
    ],
    foto: {
      src: '/fotos/trat-cellbooster-shape.jpg',
      alt: 'Mentón y mandíbula con contorno definido',
      posicion: '50% 45%',
      ilustrativa: true,
    },
  },
  {
    slug: 'fosfatidilcolina',
    nombre: 'Fosfatidilcolina',
    zonas: ['Cuerpo', 'Rostro'],
    resumen: 'Inyectable para reducir la grasa localizada en papada, abdomen, flancos y más.',
    intro:
      'Es un tratamiento indicado para reducir grasa localizada (como papada, abdomen, flancos, brazos o muslos).',
    datos: {
      sesiones: 'Hasta 6 sesiones',
      entreSesiones: 'Cada 2 a 4 semanas',
      resultados: 'Reducción progresiva de la grasa localizada',
      zonas: 'Papada, abdomen, flancos, brazos y muslos',
    },
    sirve: {
      encabezado: 'Menos grasa *localizada* y mejor contorno.',
      items: [
        'Reducir la grasa localizada',
        'Ayudar a romper las células grasas para que el cuerpo las elimine de forma natural',
        'Mejorar el contorno en papada, abdomen, flancos, brazos o muslos',
      ],
    },
    detalle: [
      'Se aplica mediante inyecciones en la zona a tratar, ayudando a romper las células grasas para que el cuerpo las elimine de forma natural.',
    ],
    noApto: NO_APTO_EMBARAZADAS,
    foto: {
      src: '/fotos/trat-fosfatidilcolina.jpg',
      alt: 'Cintura y abdomen en una vista lateral',
      posicion: '50% 50%',
      ilustrativa: true,
    },
  },
  {
    slug: 'enzimas-lipoliticas',
    nombre: 'Enzimas lipolíticas',
    zonas: ['Cuerpo', 'Rostro'],
    resumen: 'Degradan los adipocitos del tejido graso localizado y remodelan el contorno.',
    intro:
      'Son sustancias que actúan degradando los adipocitos acumulados en el tejido graso localizado, ayudando a reducir adiposidades rebeldes y a remodelar el contorno corporal.',
    datos: {
      sesiones: '3 a 4 sesiones',
      entreSesiones: '15 a 20 días',
      resultados: 'Primeros resultados a las 2 a 4 semanas de la primera sesión',
      zonas: 'Papada, flancos, abdomen, brazos, trocánter y rodillas',
    },
    sirve: {
      encabezado: 'Un contorno *remodelado*, de forma progresiva.',
      items: [
        'Degradar los adipocitos del tejido graso localizado',
        'Reducir adiposidades rebeldes',
        'Remodelar el contorno corporal',
        'Tratar zonas pequeñas y medianas como papada, flancos, abdomen, brazos, trocánter y rodillas',
      ],
    },
    detalle: [
      'Son ideales para zonas pequeñas y medianas.',
      'Los resultados son progresivos y naturales.',
    ],
    foto: {
      src: '/fotos/trat-enzimas-lipoliticas.jpg',
      alt: 'Silueta de espalda, cintura y caderas',
      posicion: '50% 50%',
      ilustrativa: true,
    },
  },
  {
    slug: 'mesoterapia-corporal',
    nombre: 'Mesoterapia corporal',
    zonas: ['Cuerpo'],
    resumen: 'Microinyecciones superficiales para la celulitis en muslos, glúteos y abdomen.',
    intro:
      'Consiste en aplicar microinyecciones superficiales en la piel de las zonas con celulitis (como muslos, glúteos, caderas o abdomen).',
    datos: {
      sesiones: '8 a 10 sesiones, de 20 a 30 minutos cada una',
      entreSesiones: '7 a 15 días',
      resultados: 'Menos aspecto de “piel de naranja”',
      zonas: 'Flancos, abdomen, muslos y pantalón de montar',
    },
    sirve: {
      encabezado: 'Menos aspecto de *piel de naranja.*',
      items: [
        'Mejorar la circulación sanguínea y linfática',
        'Favorecer la eliminación de líquidos retenidos',
        'Reducir el tamaño de las células grasas',
        'Disminuir el aspecto de “piel de naranja”',
      ],
    },
    detalle: [
      'Puede haber leve ardor o rojez en la zona tratada, con los puntos marcados por 48 horas.',
    ],
    noApto: NO_APTO_EMBARAZADAS,
    foto: {
      src: '/fotos/trat-mesoterapia-corporal.jpg',
      alt: 'Cadera y muslo con piel suave',
      posicion: '50% 50%',
      ilustrativa: true,
    },
  },
]

export function tratamientoPorSlug(slug: string): Tratamiento | undefined {
  return TRATAMIENTOS.find((t) => t.slug === slug)
}

export function relacionados(actual: Tratamiento, cantidad = 3): Tratamiento[] {
  const mismos = TRATAMIENTOS.filter(
    (t) => t.slug !== actual.slug && t.zonas.some((z) => actual.zonas.includes(z)),
  )
  const otros = TRATAMIENTOS.filter((t) => t.slug !== actual.slug && !mismos.includes(t))
  return [...mismos, ...otros].slice(0, cantidad)
}

export const ZONAS: Zona[] = ['Rostro', 'Cuerpo', 'Cabello']

/** Parte un texto en tramos normales y tramos en cursiva (los que van entre *asteriscos*). */
export function partirCursiva(texto: string): { texto: string; cursiva: boolean }[] {
  return texto
    .split('*')
    .map((parte, i) => ({ texto: parte, cursiva: i % 2 === 1 }))
    .filter((p) => p.texto.length > 0)
}

// Descripción que aparece en Google y al compartir el link de cada ficha (entre 120 y 160 caracteres).
// Se escribe aparte del texto de la ficha para que el resultado de búsqueda diga la ciudad y invite a consultar.
export const DESCRIPCIONES_META: Record<string, string> = {
  'toxina-botulinica':
    'Toxina botulínica en Mar del Plata: relaja las arrugas de expresión con un resultado natural, previa evaluación médica. Consultá por WhatsApp.',
  'relleno-de-labios':
    'Relleno de labios con ácido hialurónico en Mar del Plata: hidratación, definición y armonía con volumen a medida. Consultá por WhatsApp.',
  skinbooster:
    'Skinbooster en Mar del Plata: hidratación profunda de la piel con ácido hialurónico de baja densidad, sin dar volumen. Consultá por WhatsApp.',
  'hidroxiapatita-de-calcio':
    'Hidroxiapatita de calcio en Mar del Plata: bioestimulador de colágeno para ganar firmeza y elasticidad de forma progresiva. Consultá por WhatsApp.',
  sculptra:
    'Sculptra en Mar del Plata: bioestimulador de colágeno para restaurar volumen de forma gradual y natural. Consultá por WhatsApp.',
  dermapen:
    'Dermapen en Mar del Plata: microagujas que estimulan colágeno y elastina para mejorar textura, poros y marcas. Consultá por WhatsApp.',
  'mesoterapia-facial':
    'Mesoterapia facial en Mar del Plata: microinyecciones con activos a medida para hidratar y dar luminosidad a la piel. Consultá por WhatsApp.',
  mesopeel:
    'Mesopeel en Mar del Plata: mesoterapia y peeling médico en un mismo tratamiento para renovar la piel. Consultá por WhatsApp.',
  'plasma-rico-en-plaquetas':
    'Plasma rico en plaquetas en Mar del Plata: tratamiento con tu propia sangre para la piel y el cuero cabelludo. Consultá por WhatsApp.',
  'cellbooster-shape':
    'Cellbooster Shape en Mar del Plata: modela el contorno de papada y óvalo facial y ayuda con la retención de líquidos. Consultá por WhatsApp.',
  fosfatidilcolina:
    'Fosfatidilcolina en Mar del Plata: inyectable para reducir la grasa localizada en papada, abdomen y flancos. Consultá por WhatsApp.',
  'enzimas-lipoliticas':
    'Enzimas lipolíticas en Mar del Plata: degradan el tejido graso localizado y remodelan el contorno. Consultá por WhatsApp.',
  'mesoterapia-corporal':
    'Mesoterapia corporal en Mar del Plata: microinyecciones superficiales para tratar la celulitis en muslos, glúteos y abdomen. Consultá por WhatsApp.',
}

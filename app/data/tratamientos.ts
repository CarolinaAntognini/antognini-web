// Tratamientos del centro. El contenido sale de las fichas que pasó la doctora.
// No se publican precios ni cuidados posteriores.
//
// Todos los tratamientos usan la misma estructura (los mismos bloques y los mismos 4 datos):
// la lista, los filtros y la página de cada uno se arman solos al sumar uno nuevo.
// En los textos, lo que va entre *asteriscos* se muestra en cursiva.
//
// Contenido validado por la doctora el 18/10/2026 (incluye las fichas de Armonización facial, Peeling,
// Mesoterapia NCTF, Mesobotox y Exosomas, y los rangos de sesiones). Cualquier cambio de sesiones, intervalos
// o resultados tiene que pasar por ella. En Exosomas, confirmar además el registro del producto ante ANMAT.
// La foto principal es una foto general del consultorio o del producto. Los antes y después van aparte y
// no muestran los ojos abiertos de la persona; no se usan fotos de glúteos ni de zonas íntimas.

export type Zona = 'Rostro' | 'Cuerpo' | 'Cabello'

export type Foto = {
  src: string
  alt: string
  posicion?: string
  /** Imagen ilustrativa (no es una foto real del consultorio) */
  ilustrativa?: boolean
}

export type ParAntesDespues = {
  antes: string
  despues: string
  alt: string
  /** Proporción original de la foto (ya no define el tamaño del cuadro: todas se muestran completas en un cuadro parejo) */
  proporcion: string
  /** Zona del caso, para el filtro de Resultados. Si falta, se toma la primera zona del tratamiento */
  zona?: Zona
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
  /** Foto principal (general, sin pacientes identificables). Si falta, la ficha muestra el panel con el isotipo */
  foto?: Foto
  /** Fotos de pacientes, ya recortadas sin los ojos. Solo para los tratamientos que tienen */
  antesDespues?: ParAntesDespues[]
  /** Texto corto del cambio que se ve en las fotos (página de resultados) */
  resultado?: string
  /** Solo para tratamientos que son un conjunto de otros: slugs de las fichas que puede incluir el plan */
  incluye?: string[]
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
    slug: 'armonizacion-facial',
    nombre: 'Armonización facial',
    zonas: ['Rostro'],
    resumen: 'Un plan a medida que combina distintos tratamientos para equilibrar los rasgos de forma natural.',
    intro:
      'La armonización facial no es un solo tratamiento: es un conjunto de procedimientos que se combinan según tu rostro, tus rasgos y lo que querés lograr, para equilibrar las proporciones y realzar tu expresión con resultados naturales.',
    datos: {
      sesiones: 'Según el plan de cada persona',
      entreSesiones: 'Según los tratamientos que se combinen',
      resultados: 'Armónicos y naturales, de forma gradual',
      zonas: 'Frente, mirada, pómulos, labios, mentón y mandíbula',
    },
    sirve: {
      encabezado: 'Un rostro *equilibrado*, que conserva tu esencia.',
      items: [
        'Equilibrar las proporciones y la simetría del rostro',
        'Suavizar arrugas de expresión y recuperar una mirada descansada',
        'Recuperar firmeza y volumen de forma progresiva',
        'Definir y armonizar labios, mentón y mandíbula',
      ],
      ideal: 'Ideal para quienes buscan un cambio natural y a medida, en lugar de un solo tratamiento.',
    },
    detalle: [
      'En la consulta se evalúa tu rostro en conjunto para indicar qué tratamientos combinar y en qué orden.',
      'El plan puede ajustarse a medida que se ven los resultados, siempre de forma gradual y natural.',
    ],
    incluye: ['toxina-botulinica', 'relleno-de-labios', 'skinbooster', 'hidroxiapatita-de-calcio', 'sculptra'],
    resultado: 'Perfil más equilibrado, con el mentón y la mandíbula más definidos.',
    antesDespues: [
      {
        antes: '/fotos/antes-despues/armonizacion-1-antes.jpg',
        despues: '/fotos/antes-despues/armonizacion-1-despues.jpg',
        alt: 'Perfil con el mentón y la mandíbula antes y después de la armonización facial',
        proporcion: '2 / 3',
      },
    ],
    foto: { src: '/fotos/trat-armonizacion-facial.jpg', alt: 'Jeringa lista para la aplicación', posicion: '50% 50%' },
  },
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
    resultado: 'Líneas de expresión de la frente más suaves y una mirada más descansada, sin perder naturalidad.',
    antesDespues: [
      {
        antes: '/fotos/antes-despues/toxina-1-antes.jpg',
        despues: '/fotos/antes-despues/toxina-1-despues.jpg',
        alt: 'Frente antes y después de la toxina botulínica, caso 1',
        proporcion: '4 / 3',
      },
      {
        antes: '/fotos/antes-despues/toxina-2-antes.jpg',
        despues: '/fotos/antes-despues/toxina-2-despues.jpg',
        alt: 'Frente antes y después de la toxina botulínica, caso 2',
        proporcion: '4 / 3',
      },
      {
        antes: '/fotos/antes-despues/toxina-3-antes.jpg',
        despues: '/fotos/antes-despues/toxina-3-despues.jpg',
        alt: 'Frente antes y después de la toxina botulínica, caso 3',
        proporcion: '4 / 3',
      },
      {
        antes: '/fotos/antes-despues/toxina-4-antes.jpg',
        despues: '/fotos/antes-despues/toxina-4-despues.jpg',
        alt: 'Frente antes y después de la toxina botulínica, caso 4',
        proporcion: '4 / 3',
      },
    ],
    foto: { src: '/fotos/trat-toxina.jpg', alt: 'Aplicación de toxina botulínica en la zona de la sien', posicion: '50% 50%' },
  },
  {
    slug: 'mesobotox',
    nombre: 'Mesobotox',
    zonas: ['Rostro'],
    resumen: 'Microdosis de toxina botulínica en la piel para mejorar su textura, el brillo y los poros.',
    intro:
      'Es una técnica de microgotas de toxina botulínica aplicadas de forma superficial en la piel, pensada para mejorar su calidad: textura, poros, brillo y líneas finas, sin perder naturalidad en la expresión.',
    datos: {
      sesiones: '1 sesión',
      entreSesiones: 'Cada 3 a 4 meses, cuando termina el efecto',
      resultados: 'Piel más uniforme y con menos brillo. El efecto se nota de forma gradual',
      zonas: 'Rostro',
    },
    sirve: {
      encabezado: 'Una piel más *uniforme*, fina y luminosa.',
      items: [
        'Mejorar la textura y la uniformidad de la piel',
        'Disminuir la apariencia de los poros',
        'Reducir el brillo por exceso de grasa',
        'Suavizar líneas finas',
      ],
      ideal: 'Ideal para pieles con poros marcados, brillo o textura irregular.',
    },
    detalle: [
      'Se aplican múltiples microgotas de toxina botulínica a muy baja concentración, distribuidas de manera uniforme en la zona a tratar.',
      'Es un procedimiento ambulatorio que puede generar enrojecimiento, sensibilidad o pequeños hematomas transitorios.',
    ],
    noApto: NO_APTO_EMBARAZADAS,
    foto: { src: '/fotos/trat-mesobotox.jpg', alt: 'Aplicación de microgotas con una jeringa en la mejilla', posicion: '50% 50%' },
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
    resultado: 'Labios con más volumen, contorno e hidratación, con un resultado natural.',
    antesDespues: [
      {
        antes: '/fotos/antes-despues/labios-1-antes.jpg',
        despues: '/fotos/antes-despues/labios-1-despues.jpg',
        alt: 'Labios antes y después del relleno, caso 1',
        proporcion: '1 / 1',
      },
      {
        antes: '/fotos/antes-despues/labios-2-antes.jpg',
        despues: '/fotos/antes-despues/labios-2-despues.jpg',
        alt: 'Labios antes y después del relleno, caso 2',
        proporcion: '1 / 1',
      },
      {
        antes: '/fotos/antes-despues/labios-3-antes.jpg',
        despues: '/fotos/antes-despues/labios-3-despues.jpg',
        alt: 'Labios antes y después del relleno, caso 3',
        proporcion: '1 / 1',
      },
      {
        antes: '/fotos/antes-despues/labios-4-antes.jpg',
        despues: '/fotos/antes-despues/labios-4-despues.jpg',
        alt: 'Labios antes y después del relleno, caso 4',
        proporcion: '1 / 1',
      },
    ],
    foto: { src: '/fotos/trat-relleno-de-labios.jpg', alt: 'Aplicación de relleno en los labios', posicion: '50% 50%' },
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
    resultado: 'Piel más hidratada y uniforme, con las líneas finas del contorno del ojo menos marcadas.',
    antesDespues: [
      {
        antes: '/fotos/antes-despues/skinbooster-1-antes.jpg',
        despues: '/fotos/antes-despues/skinbooster-1-despues.jpg',
        alt: 'Piel del contorno del ojo antes y después del Skinbooster',
        proporcion: '4 / 3',
      },
    ],
    foto: { src: '/fotos/trat-skinbooster.jpg', alt: 'Aplicación de un tratamiento inyectable en el rostro', posicion: '50% 50%' },
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
    resultado: 'Mejilla y mandíbula con las arrugas menos marcadas y más firmeza.',
    antesDespues: [
      {
        antes: '/fotos/antes-despues/radiesse-1-antes.jpg',
        despues: '/fotos/antes-despues/radiesse-1-despues.jpg',
        alt: 'Perfil de la mejilla y la mandíbula antes y después de la hidroxiapatita de calcio',
        proporcion: '3 / 2',
      },
    ],
    foto: { src: '/fotos/trat-hidroxiapatita-de-calcio.jpg', alt: 'Persona sosteniendo cajas de Radiesse', posicion: '50% 50%' },
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
      sesiones: '1 a 3 sesiones',
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
    antesDespues: [
      {
        antes: '/fotos/antes-despues/sculptra-1-antes.jpg',
        despues: '/fotos/antes-despues/sculptra-1-despues.jpg',
        alt: 'Cuello y escote antes y después de Sculptra',
        proporcion: '2 / 3',
      },
      {
        antes: '/fotos/antes-despues/sculptra-2-antes.jpg',
        despues: '/fotos/antes-despues/sculptra-2-despues.jpg',
        zona: 'Cuerpo',
        alt: 'Abdomen antes y después de Sculptra',
        proporcion: '1 / 1',
      },
    ],
    foto: { src: '/fotos/trat-sculptra.jpg', alt: 'Caja de Sculptra', posicion: '50% 50%' },
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
    foto: { src: '/fotos/trat-dermapen.jpg', alt: 'Dermapen aplicado en la mejilla', posicion: '50% 50%' },
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
    foto: { src: '/fotos/trat-mesoterapia-facial.jpg', alt: 'Aplicación de mesoterapia facial con un algodón de apoyo', posicion: '50% 50%' },
  },
  {
    slug: 'mesoterapia-nctf',
    nombre: 'Mesoterapia NCTF',
    zonas: ['Rostro'],
    resumen: 'Revitalización de la piel con ácido hialurónico, vitaminas y otros activos.',
    intro:
      'Es un tratamiento de mesoterapia que aplica microinyecciones de un complejo de ácido hialurónico no reticulado, vitaminas, minerales y antioxidantes para revitalizar e hidratar la piel desde adentro.',
    datos: {
      sesiones: '3 a 5 sesiones',
      entreSesiones: 'Cada 15 días al comienzo, luego cada mes',
      resultados: 'Piel más hidratada, luminosa y con mejor textura. Mantenimiento cada 3 meses',
      zonas: 'Rostro, ojeras, cuello, escote y manos',
    },
    sirve: {
      encabezado: 'Una piel *revitalizada*, hidratada y luminosa.',
      items: [
        'Hidratar la piel en profundidad',
        'Mejorar la luminosidad y la textura',
        'Atenuar líneas finas, ojeras y signos de cansancio',
        'Revitalizar pieles opacas o deshidratadas',
      ],
      ideal: 'Ideal para pieles cansadas, opacas o con primeros signos de envejecimiento.',
    },
    detalle: [
      'Se aplica mediante microinyecciones superficiales, con activos que ayudan a estimular la producción de colágeno.',
      'Es un procedimiento ambulatorio que puede generar enrojecimiento, sensibilidad o pequeños hematomas transitorios.',
    ],
    noApto: NO_APTO_EMBARAZADAS,
    resultado: 'Zona bajo el ojo con mejor aspecto: ojeras más atenuadas y piel más luminosa.',
    antesDespues: [
      {
        antes: '/fotos/antes-despues/nctf-1-antes.jpg',
        despues: '/fotos/antes-despues/nctf-1-despues.jpg',
        alt: 'Zona bajo el ojo antes y después de la Mesoterapia NCTF para ojeras',
        proporcion: '4 / 3',
      },
    ],
    foto: { src: '/fotos/trat-mesoterapia-nctf.jpg', alt: 'Caja de NCTF 135 HA', posicion: '50% 50%' },
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
    resultado: 'Manchas en la mejilla atenuadas y tono de piel más parejo.',
    antesDespues: [
      {
        antes: '/fotos/antes-despues/mesopeel-1-antes.jpg',
        despues: '/fotos/antes-despues/mesopeel-1-despues.jpg',
        alt: 'Mejilla con manchas antes y después de Mesopeel',
        proporcion: '4 / 3',
      },
    ],
    foto: { src: '/fotos/trat-mesopeel.jpg', alt: 'Ampolla de tratamiento en el consultorio', posicion: '50% 50%' },
  },
  {
    slug: 'peeling',
    nombre: 'Peeling',
    zonas: ['Rostro'],
    resumen: 'Exfoliación médica controlada para renovar la piel y mejorar su textura y luminosidad.',
    intro:
      'Es la aplicación de una solución con ácidos que exfolia la piel de forma controlada, para renovar sus capas superficiales y mejorar la textura, la luminosidad y la uniformidad del tono.',
    datos: {
      sesiones: '4 a 6 sesiones',
      entreSesiones: 'Cada 2 a 4 semanas',
      resultados: 'Progresivos: más luminosidad y textura más uniforme',
      zonas: 'Rostro',
    },
    sirve: {
      encabezado: 'Una piel más *suave*, pareja y luminosa.',
      items: [
        'Renovar las capas superficiales de la piel',
        'Mejorar la textura y la luminosidad',
        'Atenuar manchas, marcas y poros',
        'Unificar el tono de la piel',
      ],
      ideal: 'Ideal para pieles opacas, con manchas, marcas o textura irregular.',
    },
    detalle: [
      'El ácido y su intensidad se eligen según el tipo de piel y el objetivo, en un procedimiento superficial y controlado.',
      'Es un procedimiento ambulatorio que puede generar enrojecimiento, descamación leve y sensibilidad transitoria.',
    ],
    noApto: NO_APTO_EMBARAZADAS,
    foto: { src: '/fotos/trat-peeling.jpg', alt: 'Profesional realizando un tratamiento facial', posicion: '50% 50%' },
  },
  {
    slug: 'exosomas',
    nombre: 'Exosomas',
    zonas: ['Rostro'],
    resumen: 'Bioactivos con exosomas para potenciar la regeneración y la calidad de la piel.',
    intro:
      'Es un tratamiento que aplica exosomas, pequeñas vesículas que transportan señales entre las células, para estimular la regeneración de la piel y mejorar su calidad. Suele combinarse con técnicas como Dermapen.',
    datos: {
      sesiones: '3 a 4 sesiones',
      entreSesiones: 'Cada 2 a 4 semanas',
      resultados: 'Progresivos: piel más luminosa, firme y con mejor textura',
      zonas: 'Rostro',
    },
    sirve: {
      encabezado: 'Una piel *regenerada*, más luminosa y firme.',
      items: [
        'Favorecer la regeneración y la reparación de la piel',
        'Mejorar la textura y la luminosidad',
        'Potenciar la firmeza y la elasticidad',
        'Atenuar líneas finas y signos de envejecimiento',
      ],
      ideal: 'Ideal para pieles opacas, con signos de envejecimiento o textura irregular.',
    },
    detalle: [
      'Se aplican sobre la piel previamente preparada, en general combinados con microagujas, para que los activos lleguen a las capas donde actúan.',
      'Es un procedimiento ambulatorio que puede generar enrojecimiento o sensibilidad transitoria.',
    ],
    noApto: NO_APTO_EMBARAZADAS,
    resultado: 'Piel más uniforme, con menos marcas y mejor textura.',
    antesDespues: [
      {
        antes: '/fotos/antes-despues/exosomas-1-antes.jpg',
        despues: '/fotos/antes-despues/exosomas-1-despues.jpg',
        alt: 'Mejilla antes y después de los exosomas',
        proporcion: '4 / 3',
      },
    ],
    foto: { src: '/fotos/trat-exosomas.jpg', alt: 'Caja con ampollas de tratamiento', posicion: '50% 50%' },
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
    resultado: 'En el rostro, piel más luminosa y uniforme; en el cuero cabelludo, cabello con más densidad en la zona de la raya.',
    antesDespues: [
      {
        antes: '/fotos/antes-despues/plasma-1-antes.jpg',
        despues: '/fotos/antes-despues/plasma-1-despues.jpg',
        alt: 'Rostro antes y después del plasma rico en plaquetas facial',
        proporcion: '4 / 7',
      },
      {
        antes: '/fotos/antes-despues/plasma-2-antes.jpg',
        despues: '/fotos/antes-despues/plasma-2-despues.jpg',
        zona: 'Cabello',
        alt: 'Cuero cabelludo antes y después del plasma rico en plaquetas capilar',
        proporcion: '1 / 1',
      },
    ],
    foto: { src: '/fotos/trat-prp.jpg', alt: 'Aplicación de plasma rico en plaquetas en el rostro', posicion: '50% 50%' },
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
    resultado: 'Contorno de la papada y la mandíbula más definido, con la piel más firme.',
    antesDespues: [
      {
        antes: '/fotos/antes-despues/cellbooster-1-antes.jpg',
        despues: '/fotos/antes-despues/cellbooster-1-despues.jpg',
        alt: 'Rostro y cuello antes y después de Cellbooster Shape, caso 1',
        proporcion: '1 / 1',
      },
      {
        antes: '/fotos/antes-despues/cellbooster-2-antes.jpg',
        despues: '/fotos/antes-despues/cellbooster-2-despues.jpg',
        alt: 'Rostro y cuello antes y después de Cellbooster Shape, caso 2',
        proporcion: '1 / 1',
      },
      {
        antes: '/fotos/antes-despues/cellbooster-3-antes.jpg',
        despues: '/fotos/antes-despues/cellbooster-3-despues.jpg',
        alt: 'Rostro y cuello antes y después de Cellbooster Shape, caso 3',
        proporcion: '1 / 1',
      },
      {
        antes: '/fotos/antes-despues/cellbooster-4-antes.jpg',
        despues: '/fotos/antes-despues/cellbooster-4-despues.jpg',
        alt: 'Rostro y cuello antes y después de Cellbooster Shape, caso 4',
        proporcion: '1 / 1',
      },
    ],
    foto: { src: '/fotos/trat-cellbooster-shape.jpg', alt: 'Caja de Cellbooster Shape', posicion: '50% 50%' },
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
    resultado: 'Menos grasa localizada y contorno más definido en la cintura, los flancos y los muslos.',
    antesDespues: [
      {
        antes: '/fotos/antes-despues/fosfatidilcolina-1-antes.jpg',
        despues: '/fotos/antes-despues/fosfatidilcolina-1-despues.jpg',
        alt: 'Cintura y flancos antes y después de la fosfatidilcolina',
        proporcion: '3 / 4',
      },
      {
        antes: '/fotos/antes-despues/fosfatidilcolina-2-antes.jpg',
        despues: '/fotos/antes-despues/fosfatidilcolina-2-despues.jpg',
        alt: 'Rodillas y muslos antes y después de la fosfatidilcolina',
        proporcion: '2 / 1',
      },
    ],
    foto: { src: '/fotos/trat-fosfatidilcolina.jpg', alt: 'Aplicación inyectable en el abdomen', posicion: '50% 50%' },
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
    resultado: 'Abdomen y cadera con el contorno más definido.',
    antesDespues: [
      {
        antes: '/fotos/antes-despues/enzimas-1-antes.jpg',
        despues: '/fotos/antes-despues/enzimas-1-despues.jpg',
        alt: 'Abdomen y cadera antes y después de las enzimas lipolíticas',
        proporcion: '4 / 3',
      },
    ],
    foto: { src: '/fotos/trat-enzimas-lipoliticas.jpg', alt: 'Profesional aplicando enzimas lipolíticas en el abdomen', posicion: '50% 50%' },
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
    resultado: 'Muslo con menos aspecto de piel de naranja y piel más lisa.',
    antesDespues: [
      {
        antes: '/fotos/antes-despues/corporal-1-antes.jpg',
        despues: '/fotos/antes-despues/corporal-1-despues.jpg',
        alt: 'Muslo con celulitis antes y después de la mesoterapia corporal',
        proporcion: '6 / 7',
      },
    ],
    foto: { src: '/fotos/trat-mesoterapia-corporal.jpg', alt: 'Ampolla de tratamiento para la celulitis', posicion: '50% 50%' },
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
  'armonizacion-facial':
    'Armonización facial en Mar del Plata: un plan a medida que combina tratamientos para equilibrar tus rasgos de forma natural. Consultá por WhatsApp.',
  exosomas:
    'Exosomas en Mar del Plata: tratamiento para estimular la regeneración y mejorar la calidad de la piel. Consultá por WhatsApp.',
  mesobotox:
    'Mesobotox en Mar del Plata: microdosis de toxina botulínica para mejorar la textura de la piel, los poros y el brillo. Consultá por WhatsApp.',
  'mesoterapia-nctf':
    'Mesoterapia NCTF en Mar del Plata: microinyecciones con ácido hialurónico y vitaminas para hidratar y revitalizar la piel. Consultá por WhatsApp.',
  peeling:
    'Peeling médico en Mar del Plata: exfoliación controlada para renovar la piel y mejorar su textura y luminosidad. Consultá por WhatsApp.',
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

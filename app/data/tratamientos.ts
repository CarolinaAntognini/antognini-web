// Tratamientos del centro. El contenido sale de las fichas que pasó la doctora.
// No se publican precios. Para sumar o corregir un tratamiento, se edita acá:
// la lista, los filtros y la página de cada uno se arman solos.
//
// En los textos, lo que va entre *asteriscos* se muestra en cursiva.

export type Zona = 'Rostro' | 'Cuerpo' | 'Cabello'

export type Dato = { etiqueta: string; valor: string }

export type Foto = { src: string; alt: string; posicion?: string }

export type Lista = { titulo: string; items: string[] }

export type Tratamiento = {
  slug: string
  nombre: string
  zonas: Zona[]
  /** Frase corta para la lista de tratamientos */
  resumen: string
  /** Párrafo principal, debajo del título */
  intro: string
  /** Datos rápidos (hasta 4) */
  datos?: Dato[]
  /** Lista numerada de beneficios o usos */
  sirve?: { titulo: string; encabezado: string; items: string[]; ideal?: string }
  /** Párrafos adicionales */
  detalle?: string[]
  /** Listas simples: zonas de aplicación, componentes, modalidades */
  opciones?: Lista
  resultados?: string[]
  cuidados?: Lista
  noApto?: string
  foto?: Foto
}

const NO_APTO_EMBARAZADAS = 'No apto para embarazadas'

export const TRATAMIENTOS: Tratamiento[] = [
  {
    slug: 'toxina-botulinica',
    nombre: 'Toxina botulínica',
    zonas: ['Rostro'],
    resumen:
      'Relaja las arrugas de expresión para una mirada descansada y natural, sin perder gestualidad.',
    intro:
      'La toxina botulínica actúa relajando de forma temporal los músculos responsables de las arrugas dinámicas del tercio superior del rostro, como frente, entrecejo y patas de gallo.',
    datos: [
      { etiqueta: 'Empieza a notarse', valor: '72 a 96 horas' },
      { etiqueta: 'Efecto máximo', valor: 'A los 15 días' },
      { etiqueta: 'Duración del efecto', valor: '3 a 4 meses' },
      { etiqueta: 'Control', valor: 'A los 15 días' },
    ],
    detalle: [
      'El resultado es una expresión más descansada, natural y rejuvenecida, sin perder gestualidad.',
    ],
    opciones: {
      titulo: 'Zonas de aplicación',
      items: ['Tercio superior', 'Tercio inferior (cuello)', 'Bruxismo', 'Hiperhidrosis'],
    },
    resultados: [
      'El efecto no es inmediato: comienza a notarse entre las 72 y 96 horas posteriores a la aplicación y alcanza su efecto máximo a los 15 días.',
      'Al confirmar el turno, es importante contar con disponibilidad para asistir al control a los 15 días.',
    ],
    cuidados: {
      titulo: 'Cuidados posteriores',
      items: [
        'Durante las primeras 4 horas no acostarse ni agachar la cabeza',
        'No masajear la zona tratada',
        'No maquillarse',
        'Evitar fuentes de calor',
        'No realizar actividad física ese día',
      ],
    },
    foto: {
      src: '/fotos/trat-toxina.jpg',
      alt: 'Aplicación de toxina botulínica en la frente',
      posicion: '50% 30%',
    },
  },
  {
    slug: 'relleno-de-labios',
    nombre: 'Relleno de labios',
    zonas: ['Rostro'],
    resumen: 'Ácido hialurónico para mejorar hidratación, definición y armonía, con volumen a medida.',
    intro:
      'Es un tratamiento estético realizado con ácido hialurónico que permite mejorar la hidratación, definición y armonía de los labios.',
    datos: [
      { etiqueta: 'Procedimiento', valor: 'Ambulatorio' },
      { etiqueta: 'Resultados', valor: 'Inmediatos, con evolución los días siguientes' },
    ],
    detalle: [
      'Ayuda a aportar volumen de forma personalizada, mejorar el contorno labial, corregir pequeñas asimetrías y recuperar la proyección natural del labio.',
      'El procedimiento es ambulatorio y los resultados son inmediatos, con evolución durante los días posteriores al tratamiento. Puede generar inflamación, sensibilidad o pequeños hematomas transitorios.',
    ],
    cuidados: {
      titulo: 'A tener en cuenta',
      items: [
        'Evitar maquillaje en la zona durante las primeras horas',
        'No presionar ni masajear los labios salvo indicación',
        'Evitar ejercicio intenso, alcohol y calor excesivo durante 24 a 48 h',
        'No tomar mate ni realizar succión fuerte durante las primeras 24 h',
        'Evitar exposición solar directa',
        'Mantener buena hidratación',
      ],
    },
    noApto: NO_APTO_EMBARAZADAS,
  },
  {
    slug: 'skinbooster',
    nombre: 'Skinbooster',
    zonas: ['Rostro'],
    resumen: 'Hidratación profunda con ácido hialurónico de baja densidad, sin dar volumen.',
    intro:
      'Un tratamiento médico-estético que consiste en la aplicación de ácido hialurónico de baja densidad, diseñado específicamente para hidratar la piel en profundidad y mejorar su calidad, sin dar volumen ni cambiar los rasgos.',
    datos: [
      { etiqueta: 'Sesiones', valor: '2 a 3' },
      { etiqueta: 'Entre sesiones', valor: '3 a 4 semanas' },
      { etiqueta: 'Mantenimiento', valor: 'Cada 6 a 12 meses' },
      { etiqueta: 'Zonas', valor: 'Rostro, cuello, escote y manos' },
    ],
    sirve: {
      titulo: '¿Para qué sirve?',
      encabezado: 'Una piel más *fresca, uniforme* y saludable.',
      items: [
        'Aumentar la hidratación profunda de la piel',
        'Mejorar la textura, la elasticidad y la luminosidad',
        'Suavizar líneas finas',
        'Dar un aspecto más fresco, uniforme y saludable',
      ],
      ideal: 'Ideal para pieles deshidratadas, apagadas o con primeros signos de envejecimiento.',
    },
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
    datos: [
      { etiqueta: 'Primeros resultados', valor: 'Desde el primer mes' },
      { etiqueta: 'Duración', valor: '12 a 18 meses' },
      { etiqueta: 'Zonas', valor: 'Rostro, mandíbula, mentón y cuello' },
    ],
    detalle: [
      'Es un tratamiento seguro, biocompatible y muy utilizado en medicina estética para rejuvenecimiento facial y corporal.',
    ],
    opciones: {
      titulo: '¿Dónde se aplica?',
      items: [
        'Rostro',
        'Mandíbula',
        'Mentón',
        'Cuello',
        'Otras zonas con pérdida de firmeza o volumen',
      ],
    },
    resultados: [
      'Comienzan a verse desde el primer mes, mejoran progresivamente y pueden durar entre 12 y 18 meses, dependiendo de cada paciente.',
    ],
  },
  {
    // Ficha armada con información general pública (no viene de una ficha de la doctora):
    // la doctora tiene que revisar y ajustar sesiones, cuidados y contraindicaciones.
    slug: 'sculptra',
    nombre: 'Sculptra',
    zonas: ['Rostro', 'Cuerpo'],
    resumen: 'Bioestimulador de colágeno de larga duración para restaurar volumen de forma gradual y natural.',
    intro:
      'Sculptra es un bioestimulador de colágeno a base de ácido poli-L-láctico, un material biocompatible y reabsorbible. En lugar de rellenar de inmediato, estimula a la piel a producir su propio colágeno para recuperar firmeza y volumen de forma gradual y natural.',
    datos: [
      { etiqueta: 'Resultados', valor: 'Graduales, durante las semanas siguientes' },
      { etiqueta: 'Sesiones', valor: 'Varias, según cada caso' },
      { etiqueta: 'Entre sesiones', valor: 'Varias semanas, según indicación' },
      { etiqueta: 'Duración', valor: 'Hasta 2 años, según cada paciente' },
    ],
    sirve: {
      titulo: '¿Para qué sirve?',
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
      'Los resultados no son inmediatos: el producto actúa en las semanas posteriores a la sesión, a medida que el cuerpo produce colágeno.',
      'Se aplica en el consultorio mediante inyecciones en las capas profundas de la piel. La cantidad de sesiones y las zonas a tratar se definen en la consulta médica.',
    ],
    resultados: [
      'Aparecen de forma gradual, a lo largo de las semanas posteriores a la sesión, y pueden mantenerse hasta 2 años, según cada paciente.',
    ],
    cuidados: {
      titulo: 'Cuidados posteriores',
      items: [
        'Masajear la zona tratada según la indicación de la doctora',
        'Evitar la exposición solar directa mientras haya inflamación o enrojecimiento',
        'Evitar el ejercicio intenso durante los primeros días',
        'Evitar la presión sobre la zona tratada (ropa ajustada, cintas, vinchas)',
        'Puede haber hinchazón, enrojecimiento o pequeños hematomas transitorios',
        'Consultar de inmediato ante dolor intenso, cambios de color en la piel o alteraciones en la visión',
      ],
    },
    noApto: 'No indicado durante el embarazo ni la lactancia',
  },
  {
    slug: 'dermapen',
    nombre: 'Dermapen',
    zonas: ['Rostro'],
    resumen: 'Microagujas que estimulan colágeno y elastina para mejorar textura, poros y marcas.',
    intro:
      'Es un tratamiento de bioestimulación que mejora la calidad de la piel mediante microperforaciones controladas con microagujas.',
    datos: [
      { etiqueta: 'Procedimiento', valor: 'Ambulatorio' },
      { etiqueta: 'Resultados', valor: 'Progresivos' },
      { etiqueta: 'Sesiones', valor: 'Varias, según cada piel' },
    ],
    detalle: [
      'Estimula la producción de colágeno y elastina, mejorando textura, poros, líneas finas, manchas y marcas de acné.',
      'Los resultados son progresivos y se recomiendan varias sesiones según la necesidad de cada piel. Es un procedimiento ambulatorio que puede generar enrojecimiento o sensibilidad transitoria.',
    ],
    cuidados: {
      titulo: 'A tener en cuenta',
      items: [
        'Acudir con piel limpia y sin maquillaje',
        'Evitar sol directo 48 a 72 h',
        'Usar protector solar FPS 50+',
        'Evitar ácidos, retinoides y exfoliantes posteriores al tratamiento',
      ],
    },
    noApto: NO_APTO_EMBARAZADAS,
    foto: {
      src: '/fotos/trat-dermapen.jpg',
      alt: 'Profesional realizando un tratamiento facial',
      posicion: '50% 50%',
    },
  },
  {
    slug: 'mesoterapia-facial',
    nombre: 'Mesoterapia facial',
    zonas: ['Rostro'],
    resumen: 'Microinyecciones con activos a medida para hidratar y dar luminosidad.',
    intro:
      'Es un tratamiento que consiste en la aplicación de microinyecciones con activos específicos según las necesidades de cada piel.',
    datos: [
      { etiqueta: 'Procedimiento', valor: 'Ambulatorio' },
      { etiqueta: 'Resultados', valor: 'Progresivos' },
      { etiqueta: 'Sesiones', valor: 'Varias, según el objetivo' },
    ],
    detalle: [
      'Aporta hidratación, luminosidad y mejora la calidad de la piel, ayudando a estimular la producción de colágeno y mejorar la textura, líneas finas y signos de cansancio.',
      'Los resultados son progresivos y se recomiendan varias sesiones según el objetivo del tratamiento. Es un procedimiento ambulatorio que puede generar enrojecimiento, sensibilidad o pequeños hematomas transitorios.',
    ],
    cuidados: {
      titulo: 'A tener en cuenta',
      items: [
        'Acudir con piel limpia y sin maquillaje',
        'Evitar sol directo 48 a 72 h',
        'Usar protector solar FPS 50+',
        'No aplicar productos irritantes la noche del tratamiento',
        'Evitar actividad física intensa el mismo día',
      ],
    },
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
    datos: [
      { etiqueta: 'Procedimiento', valor: 'Ambulatorio' },
      { etiqueta: 'Resultados', valor: 'Progresivos' },
      { etiqueta: 'Sesiones', valor: 'Según diagnóstico y objetivo' },
    ],
    detalle: [
      'El peeling favorece la regeneración de la piel, mejorando textura, luminosidad, manchas, poros y signos de envejecimiento.',
      'La mesoterapia permite aportar principios activos según la necesidad de cada paciente, potenciando la hidratación y revitalización cutánea.',
      'Los resultados son progresivos y se recomiendan varias sesiones según el diagnóstico y objetivo del tratamiento. Es un procedimiento ambulatorio que puede generar enrojecimiento, sensibilidad o descamación leve transitoria.',
    ],
    cuidados: {
      titulo: 'A tener en cuenta',
      items: [
        'Acudir con piel limpia y sin maquillaje',
        'Evitar exposición solar directa 48 a 72 h',
        'Usar protector solar FPS 50+',
        'Evitar ácidos, retinoides y exfoliantes posteriores según indicación',
      ],
    },
    noApto: NO_APTO_EMBARAZADAS,
    foto: {
      src: '/fotos/trat-mesopeel.jpg',
      alt: 'Tratamiento facial con cuidado de la piel',
      posicion: '50% 40%',
    },
  },
  {
    slug: 'plasma-rico-en-plaquetas',
    nombre: 'Plasma rico en plaquetas',
    zonas: ['Rostro', 'Cabello', 'Cuerpo'],
    resumen: 'Un tratamiento natural, con tu propia sangre, para piel y cuero cabelludo.',
    intro:
      'Es un tratamiento 100% natural, realizado con sangre del propio paciente. A través de un proceso de centrifugado se obtienen plaquetas ricas en factores de crecimiento que estimulan la regeneración de la piel y el cuero cabelludo.',
    datos: [
      { etiqueta: 'Origen', valor: 'Sangre del propio paciente' },
      { etiqueta: 'Zonas', valor: 'Rostro, cuero cabelludo y cuerpo' },
      { etiqueta: 'Sesiones', valor: 'Se definen en la consulta médica' },
    ],
    sirve: {
      titulo: 'Beneficios',
      encabezado: 'Regenera la piel y *fortalece* el cabello.',
      items: [
        'Mejora arrugas, cicatrices (acné) y estrías',
        'Repara daños solares',
        'Previene y retrasa el envejecimiento',
        'Aporta hidratación y brillo a la piel',
        'Fortalece el cabello y aumenta su grosor',
      ],
    },
    opciones: {
      titulo: 'Modalidades',
      items: ['Facial (rostro y cuello)', 'Capilar', 'Facial y capilar', 'Combinado con Dermapen'],
    },
    detalle: ['La cantidad de sesiones se define en consulta médica.'],
    foto: {
      src: '/fotos/trat-prp.jpg',
      alt: 'Centrífuga para obtener plasma rico en plaquetas',
      posicion: '50% 50%',
    },
  },
  {
    slug: 'cellbooster-shape',
    nombre: 'Cellbooster Shape',
    zonas: ['Rostro', 'Cuerpo'],
    resumen: 'Modela el contorno: papada, óvalo facial y retención de líquidos.',
    intro:
      'Es un tratamiento inyectable de mesoterapia avanzada para modelar contorno, reducir grasa localizada leve y desinflamar tejidos.',
    datos: [
      { etiqueta: 'Protocolo habitual', valor: '3 sesiones' },
      { etiqueta: 'Entre sesiones', valor: '2 a 3 semanas' },
      { etiqueta: 'Mantenimiento', valor: 'Mensual' },
    ],
    opciones: {
      titulo: 'Contiene',
      items: [
        'Ácido hialurónico no reticulado',
        'L-carnitina (metabolismo de grasa)',
        'Vitamina C (calidad de piel)',
      ],
    },
    sirve: {
      titulo: '¿Para qué sirve?',
      encabezado: 'Un contorno *más definido.*',
      items: [
        'Papada y óvalo facial',
        'Jowls / mejillas',
        'Retención de líquidos',
        'Mejorar firmeza y textura',
      ],
    },
    resultados: ['Contorno más definido', 'Menos hinchazón', 'Piel más firme e hidratada'],
  },
  {
    slug: 'fosfatidilcolina',
    nombre: 'Fosfatidilcolina',
    zonas: ['Cuerpo', 'Rostro'],
    resumen: 'Inyectable para reducir la grasa localizada en papada, abdomen, flancos y más.',
    intro:
      'Es un tratamiento indicado para reducir grasa localizada (como papada, abdomen, flancos, brazos o muslos).',
    datos: [
      { etiqueta: 'Resultados', valor: 'Progresivos' },
      { etiqueta: 'Sesiones', valor: 'Varias, según cada paciente' },
      { etiqueta: 'Zonas', valor: 'Papada, abdomen, flancos, brazos y muslos' },
    ],
    detalle: [
      'Se aplica mediante inyecciones en la zona a tratar, ayudando a romper las células grasas para que el cuerpo las elimine de forma natural.',
      'Los resultados son progresivos y suelen requerir varias sesiones, según cada paciente.',
    ],
    cuidados: {
      titulo: 'A tener en cuenta',
      items: [
        'Acudir con calza o faja ajustada',
        'Inflamación o enrojecimiento transitorio y molestias de 48 a 72 h son normales',
        'Se recomienda realizar ejercicio posterior al tratamiento',
        'No aplicar cremas en la zona esa noche',
      ],
    },
    noApto: NO_APTO_EMBARAZADAS,
  },
  {
    slug: 'enzimas-lipoliticas',
    nombre: 'Enzimas lipolíticas',
    zonas: ['Cuerpo', 'Rostro'],
    resumen: 'Degradan los adipocitos del tejido graso localizado y remodelan el contorno.',
    intro:
      'Son sustancias que actúan degradando los adipocitos acumulados en el tejido graso localizado, ayudando a reducir adiposidades rebeldes y a remodelar el contorno corporal.',
    datos: [
      { etiqueta: 'Primeros resultados', valor: '2 a 4 semanas' },
      { etiqueta: 'Entre sesiones', valor: '15 a 20 días' },
      { etiqueta: 'Zonas', valor: 'Papada, flancos, abdomen, brazos, trocánter y rodillas' },
    ],
    detalle: [
      'Son ideales para zonas pequeñas y medianas como papada, flancos, abdomen, brazos, trocánter y rodillas.',
    ],
    resultados: [
      'Progresivos, naturales y definitivos, ya que las células grasas destruidas no se regeneran.',
      'Se empiezan a notar de 2 a 4 semanas posteriores a la primera sesión.',
    ],
    cuidados: {
      titulo: 'Cuidados posteriores',
      items: [
        'Evitar ejercicio intenso durante 48 a 72 h',
        'No exponerse al sol, sauna o calor extremo por 48 a 72 h',
        'No aplicar hielo ni compresas frías en la zona tratada',
        'Beber abundante agua',
        'Reducir grasas y carbohidratos',
        'Evitar alcohol y tabaco durante las primeras 72 h',
      ],
    },
  },
  {
    slug: 'mesoterapia-corporal',
    nombre: 'Mesoterapia corporal',
    zonas: ['Cuerpo'],
    resumen: 'Microinyecciones superficiales para la celulitis en muslos, glúteos y abdomen.',
    intro:
      'Consiste en aplicar microinyecciones superficiales en la piel de las zonas con celulitis (como muslos, glúteos, caderas o abdomen).',
    datos: [
      { etiqueta: 'Duración de la sesión', valor: '20 a 30 minutos' },
      { etiqueta: 'Entre sesiones', valor: '7 a 15 días' },
      { etiqueta: 'Se trabaja por zonas', valor: 'Flancos, abdomen, muslos y pantalón de montar' },
    ],
    sirve: {
      titulo: '¿Para qué sirve en la celulitis?',
      encabezado: 'Menos aspecto de *piel de naranja.*',
      items: [
        'Mejorar la circulación sanguínea y linfática',
        'Favorecer la eliminación de líquidos retenidos',
        'Reducir el tamaño de las células grasas',
        'Disminuir el aspecto de “piel de naranja”',
      ],
    },
    cuidados: {
      titulo: 'A tener en cuenta',
      items: [
        'Leve ardor o rojez en la zona tratada, puntos marcados por 48 h',
        'Evitar ejercicio 24 h',
        'No aplicar cremas la misma noche',
      ],
    },
    noApto: NO_APTO_EMBARAZADAS,
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

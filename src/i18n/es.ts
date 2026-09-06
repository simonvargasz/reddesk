export const es = {
  code: 'es',
  htmlLang: 'es',
  name: 'Español',
  short: 'ES',

  meta: {
    title: 'Red Desk — Estudio de diseño y desarrollo de sistemas',
    description:
      'Red Desk es un estudio de software. Diseña y construye sistemas que se usan todos los días, para empresas y para personas.',
    ogAlt: 'Red Desk — soluciones digitales a medida',
  },

  nav: {
    skip: 'Ir al contenido',
    menu: 'Menú',
    close: 'Cerrar',
    language: 'Idioma',
    items: [
      { href: '#enfoque', label: 'Enfoque' },
      { href: '#que-hace', label: 'Qué hace' },
      { href: '#proceso', label: 'Proceso' },
    ],
    cta: 'Contacto',
  },

  hero: {
    prompt: '$ whoami',
    tagline: 'Soluciones digitales a medida',
    lead: 'Red Desk es un estudio de software. Diseña y construye sistemas que se usan todos los días —de una empresa o de una persona— y que dejan el día mejor de como estaba.',
    primary: 'Qué hace',
    secondary: 'Escribir',
  },

  thesis: {
    n: '01',
    title: 'Por qué existe Red Desk',
    body: [
      'Casi todo el software que usamos a diario nos hace trabajar para él. Pide datos que ya tiene, obliga a recordar pasos que debería recordar solo, y crece añadiendo funciones en vez de quitando fricción.',
      'Red Desk existe para hacer lo contrario: sistemas que se ajustan al trabajo real y que se notan porque el día pesa menos, no porque tengan más pantallas.',
    ],
    terminal: {
      command: 'rd principios',
      lines: [
        'el sistema se adapta al trabajo, no al revés',
        'menos pasos, no más funciones',
        'nada que no se pueda mantener después',
      ],
      last: 'se entrega funcionando',
    },
  },

  services: {
    n: '02',
    title: 'Qué hace',
    items: [
      {
        title: 'Producto a medida',
        body: 'Aplicaciones web y móviles completas, del primer boceto al despliegue. El código queda en un repositorio tuyo, no en el de nadie más.',
      },
      {
        title: 'Sistemas internos',
        body: 'Paneles, flujos y automatizaciones para el trabajo que hoy vive repartido entre hojas de cálculo, correos y copiar-pegar.',
      },
      {
        title: 'Integraciones',
        body: 'Conectar lo que ya se usa —facturación, inventario, CRM, bancos— para que los datos dejen de moverse a mano.',
      },
    ],
    notLabel: 'Lo que no hace',
    not: 'Red Desk no vende plantillas, no hace campañas ni posicionamiento, y no toma un encargo que después no pueda mantener.',
  },

  process: {
    n: '03',
    title: 'Cómo trabaja',
    steps: [
      {
        when: 'Semana 1',
        title: 'Entender el trabajo real',
        body: 'Primero se mira cómo se hace hoy la tarea, junto a quien la hace. Se mapea el proceso tal como es, no como debería ser.',
      },
      {
        when: 'Semanas 2–3',
        title: 'Prototipo navegable',
        body: 'Las pantallas se prueban antes de que exista una línea de código definitiva. Cambiar de opinión ahí no cuesta nada.',
      },
      {
        when: 'Desde la 4',
        title: 'Entregas cada dos semanas',
        body: 'Cada entrega está funcionando y desplegada. Qué sigue se decide con el sistema ya en uso, no sobre un documento.',
      },
    ],
  },

  contact: {
    n: '04',
    title: '¿Qué parte del día se va en trabajo que debería hacer una máquina?',
    lead: 'Escribe dos líneas sobre el problema. La respuesta llega con una lectura del caso y, si encaja, una propuesta de alcance.',
    emailLabel: 'Correo',
    linkedinLabel: 'LinkedIn',
    linkedinCta: 'Ver perfil',
    form: {
      legend: 'Formulario de contacto',
      name: 'Nombre',
      email: 'Correo',
      org: 'Organización',
      orgOptional: 'opcional',
      kind: 'Tipo de encargo',
      kinds: [
        'Producto a medida',
        'Sistema interno',
        'Integración',
        'Otra cosa',
      ],
      message: 'Mensaje',
      messagePlaceholder: 'Qué problema hay que resolver y para quién.',
      submit: 'Enviar',
      sending: 'Enviando…',
      ok: 'Mensaje recibido. La respuesta sale en un par de días hábiles.',
      error: 'No se pudo enviar. Escribe directamente a {email}.',
      required: 'Falta completar este campo.',
      badEmail: 'Ese correo no parece válido.',
      disabled:
        'El formulario todavía no está conectado. Por ahora, el correo directo es el canal.',
    },
  },

  footer: {
    rights: 'Todos los derechos reservados',
    built: 'Hecho en Astro. Sin rastreadores.',
  },

  notFound: {
    title: 'Esta ruta no existe',
    body: 'El enlace apunta a una página que no está aquí.',
    cta: 'Volver al inicio',
  },
};

export type Dict = typeof es;

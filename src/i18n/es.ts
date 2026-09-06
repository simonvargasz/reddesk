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

  /* Sin barra de navegación la página no tiene menú: quedan el salto al
     contenido y el nombre del selector de idioma. */
  nav: {
    skip: 'Ir al contenido',
    language: 'Idioma',
  },

  hero: {
    tagline: 'Soluciones digitales a medida',
    lead: 'Un estudio de software. Construye sistemas que se usan todos los días y hacen el día más liviano.',
    primary: 'Qué hace',
    secondary: 'Escribir',
  },

  thesis: {
    n: '01',
    title: 'Por qué existe Red Desk',
    body: [
      'Casi todo el software que usamos a diario nos hace trabajar para él: pide datos que ya tiene y crece añadiendo funciones en vez de quitando fricción.',
      'Red Desk existe para hacer lo contrario: sistemas ajustados al trabajo real, que se notan porque el día pesa menos y no porque tengan más pantallas.',
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
        body: 'Aplicaciones web y móviles completas, del boceto al despliegue. El código queda en un repositorio tuyo, no en el de nadie más.',
      },
      {
        title: 'Sistemas internos',
        body: 'Paneles, flujos y automatizaciones para el trabajo que hoy vive entre hojas de cálculo, correos y copiar-pegar.',
      },
      {
        title: 'Integraciones',
        body: 'Conectar lo que ya se usa —facturación, inventario, CRM, bancos— para que los datos dejen de moverse a mano.',
      },
    ],
    notLabel: 'Lo que no hace',
    not: 'No vende plantillas, no hace campañas, y no toma un encargo que después no pueda mantener.',
  },

  process: {
    n: '03',
    title: 'Cómo trabaja',
    steps: [
      {
        when: 'Primero',
        title: 'Evaluación',
        body: 'Antes de proponer nada se estudia el trabajo tal como se hace hoy y qué problema hay que resolver, junto a quien lo hace.',
      },
      {
        when: 'Después',
        title: 'Prototipo navegable',
        body: 'Las pantallas se prueban antes de que exista código definitivo. Cambiar de opinión ahí no cuesta nada.',
      },
      {
        when: 'En marcha',
        title: 'Entregas funcionando',
        body: 'Cada entrega está desplegada y en uso. Qué sigue se decide con el sistema funcionando, no sobre un documento.',
      },
    ],
  },

  contact: {
    n: '04',
    title: '¿Qué parte del día se va en trabajo que debería hacer una máquina?',
    lead: 'Dos líneas sobre el problema bastan. La respuesta llega con una lectura del caso y, si encaja, una propuesta de alcance.',
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

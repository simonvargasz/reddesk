import type { Dict } from './es';

export const pt: Dict = {
  code: 'pt',
  htmlLang: 'pt',
  name: 'Português',
  short: 'PT',

  meta: {
    title: 'Red Desk — Estúdio de design e desenvolvimento de sistemas',
    description:
      'A Red Desk é um estúdio de software. Desenha e constrói sistemas usados todos os dias, para empresas e para pessoas.',
    ogAlt: 'Red Desk — soluções digitais sob medida',
  },

  nav: {
    skip: 'Ir para o conteúdo',
    language: 'Idioma',
  },

  hero: {
    tagline: 'Soluções digitais sob medida',
    lead: 'Um estúdio de software. Sistemas usados todos os dias — de uma empresa ou de uma pessoa — que deixam o dia melhor do que estava.',
    primary: 'O que faz',
    secondary: 'Escrever',
  },

  thesis: {
    n: '01',
    title: 'Por que a Red Desk existe',
    body: [
      'Quase todo software que usamos no dia a dia nos faz trabalhar para ele: pede dados que já tem e cresce somando funções em vez de tirar atrito.',
      'A Red Desk existe para fazer o contrário: sistemas ajustados ao trabalho real, que se percebem porque o dia pesa menos e não porque têm mais telas.',
    ],
    terminal: {
      command: 'rd principios',
      lines: [
        'o sistema se adapta ao trabalho, não o contrário',
        'menos passos, não mais funções',
        'nada que não se possa manter depois',
      ],
      last: 'entregue funcionando',
    },
  },

  services: {
    n: '02',
    title: 'O que faz',
    items: [
      {
        title: 'Produto sob medida',
        body: 'Aplicações web e móveis completas, do esboço ao deploy. O código fica num repositório seu, de mais ninguém.',
      },
      {
        title: 'Sistemas internos',
        body: 'Painéis, fluxos e automações para o trabalho que hoje vive entre planilhas, e-mails e copiar-colar.',
      },
      {
        title: 'Integrações',
        body: 'Conectar o que já se usa — faturamento, estoque, CRM, bancos — para que os dados parem de andar na mão.',
      },
    ],
    notLabel: 'O que não faz',
    not: 'Não vende templates, não faz campanhas, e não aceita um projeto que depois não consiga manter.',
  },

  process: {
    n: '03',
    title: 'Como trabalha',
    steps: [
      {
        when: 'Semana 1',
        title: 'Entender o trabalho real',
        body: 'A tarefa é mapeada ao lado de quem a faz, como é feita hoje e não como deveria ser.',
      },
      {
        when: 'Semanas 2–3',
        title: 'Protótipo navegável',
        body: 'As telas são testadas antes de existir uma linha de código definitiva. Mudar de ideia ali não custa nada.',
      },
      {
        when: 'A partir da 4',
        title: 'Entregas a cada duas semanas',
        body: 'Cada entrega está funcionando e no ar. O que vem depois se decide com o sistema já em uso.',
      },
    ],
  },

  contact: {
    n: '04',
    title: 'Que parte do dia se vai em trabalho que uma máquina deveria fazer?',
    lead: 'Duas linhas sobre o problema bastam. A resposta chega com uma leitura do caso e, se encaixar, uma proposta de escopo.',
    emailLabel: 'E-mail',
    linkedinLabel: 'LinkedIn',
    linkedinCta: 'Ver perfil',
    form: {
      legend: 'Formulário de contato',
      name: 'Nome',
      email: 'E-mail',
      org: 'Organização',
      orgOptional: 'opcional',
      kind: 'Tipo de projeto',
      kinds: ['Produto sob medida', 'Sistema interno', 'Integração', 'Outra coisa'],
      message: 'Mensagem',
      messagePlaceholder: 'Que problema precisa ser resolvido, e para quem.',
      submit: 'Enviar',
      sending: 'Enviando…',
      ok: 'Mensagem recebida. A resposta sai em alguns dias úteis.',
      error: 'Não foi possível enviar. Escreva direto para {email}.',
      required: 'Falta preencher este campo.',
      badEmail: 'Esse e-mail não parece válido.',
      disabled:
        'O formulário ainda não está conectado. Por enquanto, o e-mail direto é o canal.',
    },
  },

  footer: {
    rights: 'Todos os direitos reservados',
    built: 'Feito em Astro. Sem rastreadores.',
  },

  notFound: {
    title: 'Esta rota não existe',
    body: 'O link aponta para uma página que não está aqui.',
    cta: 'Voltar ao início',
  },
};

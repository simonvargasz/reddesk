import type { Dict } from './es';

export const en: Dict = {
  code: 'en',
  htmlLang: 'en',
  name: 'English',
  short: 'EN',

  meta: {
    title: 'Red Desk — Systems design and software studio',
    description:
      'Red Desk is a software studio. It designs and builds systems people actually use every day, for companies and for individuals.',
    ogAlt: 'Red Desk — digital systems, built to fit',
  },

  nav: {
    skip: 'Skip to content',
    menu: 'Menu',
    close: 'Close',
    language: 'Language',
    items: [
      { href: '#enfoque', label: 'Approach' },
      { href: '#que-hace', label: 'What it does' },
      { href: '#proceso', label: 'Process' },
    ],
    cta: 'Contact',
  },

  hero: {
    prompt: '$ whoami',
    tagline: 'Digital systems, built to fit',
    lead: 'Red Desk is a software studio. It designs and builds systems that get used every day — by a company or by one person — and that leave the day lighter than they found it.',
    primary: 'What it does',
    secondary: 'Get in touch',
  },

  thesis: {
    n: '01',
    title: 'Why Red Desk exists',
    body: [
      'Most of the software we touch daily makes us work for it. It asks for data it already holds, expects us to remember steps it should remember itself, and grows by adding features instead of removing friction.',
      'Red Desk exists to do the opposite: systems shaped around the actual work, noticeable because the day weighs less — not because there are more screens.',
    ],
    terminal: {
      command: 'rd principles',
      lines: [
        'the system adapts to the work, not the reverse',
        'fewer steps, not more features',
        'nothing that cannot be maintained later',
      ],
      last: 'shipped working',
    },
  },

  services: {
    n: '02',
    title: 'What it does',
    items: [
      {
        title: 'Custom product',
        body: 'Complete web and mobile applications, from first sketch to deployment. The code lives in your repository, nobody else’s.',
      },
      {
        title: 'Internal systems',
        body: 'Dashboards, workflows and automation for the work currently scattered across spreadsheets, email threads and copy-paste.',
      },
      {
        title: 'Integrations',
        body: 'Connecting the tools already in use — billing, inventory, CRM, banks — so data stops moving by hand.',
      },
    ],
    notLabel: 'What it does not do',
    not: 'Red Desk does not sell templates, does not run campaigns or SEO, and does not take on work it cannot maintain afterwards.',
  },

  process: {
    n: '03',
    title: 'How it works',
    steps: [
      {
        when: 'Week 1',
        title: 'Understand the real work',
        body: 'It starts by watching how the task is done today, next to the person doing it. The process gets mapped as it is, not as it should be.',
      },
      {
        when: 'Weeks 2–3',
        title: 'Clickable prototype',
        body: 'Screens get tested before a single line of final code exists. Changing your mind at that stage costs nothing.',
      },
      {
        when: 'Week 4 onward',
        title: 'Delivery every two weeks',
        body: 'Every delivery is working and deployed. What comes next is decided with the system already in use, not on a document.',
      },
    ],
  },

  contact: {
    n: '04',
    title: 'Which part of your day goes to work a machine should be doing?',
    lead: 'Two lines about the problem is enough. The reply comes with a read of the case and, if it fits, a proposed scope.',
    emailLabel: 'Email',
    linkedinLabel: 'LinkedIn',
    linkedinCta: 'View profile',
    form: {
      legend: 'Contact form',
      name: 'Name',
      email: 'Email',
      org: 'Organisation',
      orgOptional: 'optional',
      kind: 'Type of work',
      kinds: ['Custom product', 'Internal system', 'Integration', 'Something else'],
      message: 'Message',
      messagePlaceholder: 'What problem needs solving, and for whom.',
      submit: 'Send',
      sending: 'Sending…',
      ok: 'Message received. A reply goes out within a couple of working days.',
      error: 'Could not send. Write directly to {email}.',
      required: 'This field is still empty.',
      badEmail: 'That email does not look valid.',
      disabled:
        'The form is not connected yet. For now, direct email is the channel.',
    },
  },

  footer: {
    rights: 'All rights reserved',
    built: 'Built with Astro. No trackers.',
  },

  notFound: {
    title: 'This route does not exist',
    body: 'The link points to a page that is not here.',
    cta: 'Back to the start',
  },
};

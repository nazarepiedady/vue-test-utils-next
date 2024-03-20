import type { DefaultTheme, LocalSpecificConfig } from 'vitepress'

export const META_URL = ''
export const META_TITLE = 'Vue Test Utils'
export const META_DESCRIPTION = 'Os utilitários de conjunto de teste oficial para Vue.js 3'

export const ptConfig: LocalSpecificConfig<DefaultTheme.config> = {
  description: META_DESCRIPTION,
  head: [
    ['meta', { property: 'og:url', content: META_URL }],
    ['meta', { property: 'og:title', content: META_TITLE }],
    ['meta', { property: 'og:description', content: META_DESCRIPTION }],
    ['meta', { property: 'twitter:url', content: META_URL }],
    ['meta', { property: 'twitter:title', content: META_TITLE }],
    ['meta', { property: 'twitter:description', content: META_DESCRIPTION }],
  ],

  themeConfig: {
    editLink: {
      pattern: 'https://github.com/vuejs/test-utils/edit/main/docs/pt/:path',
      text: 'Sugerir mudanças a esta página',
    },

    nav: [
      { text: 'Guia', link: '/pt/guide/' },
      { text: 'Referência da API', link: '/pt/api/' },
      { text: 'Migrando da Vue 2', link: '/pt/migration/' },
      {
        text: 'Relatório de Mudança',
        link: 'https://github.com/vuejs/test-utils/releases'
      }
    ],

    sidebar: {
      '/pt/': [
        {
          text: 'Instalação',
          link: '/pt/installation/'
        },
        {
          text: 'Fundamentos',
          collapsable: false,
          items: [
            { text: 'Começar', link: '/pt/guide/' },
            { text: 'Um Curso Intensivo', link: '/pt/guide/essentials/a-crash-course' },
            {
              text: 'Interpretação Condicional',
              link: '/pt/guide/essentials/conditional-rendering'
            },
            {
              text: 'Testando os Eventos Emitidos',
              link: '/pt/guide/essentials/event-handling'
            },
            { text: 'Testando os Formulários', link: '/pt/guide/essentials/forms' },
            {
              text: 'Passando Dados aos Componentes',
              link: '/pt/guide/essentials/passing-data'
            },
            {
              text: 'Escrever Componentes Fáceis de Testar',
              link: '/pt/guide/essentials/easy-to-test'
            }
          ]
        },
        {
          text: 'Vue Test Utils em Profundidade',
          collapsable: false,
          items: [
            { text: 'Ranhuras', link: '/pt/guide/advanced/slots' },
            {
              text: 'Comportamento Assíncrono',
              link: '/pt/guide/advanced/async-suspense'
            },
            {
              text: 'Fazendo Requisições de HTTP',
              link: '/pt/guide/advanced/http-requests'
            },
            { text: 'Transições', link: '/pt/guide/advanced/transitions' },
            {
              text: 'Instância do Componente',
              link: '/pt/guide/advanced/component-instance'
            },
            {
              text: 'Reusabilidade e Composição',
              link: '/pt/guide/advanced/reusability-composition'
            },
            { text: 'Testando a v-model', link: '/pt/guide/advanced/v-model' },
            { text: 'Testando a Vuex', link: '/pt/guide/advanced/vuex' },
            { text: 'Testando a Vue Router', link: '/pt/guide/advanced/vue-router' },
            { text: 'Testando a Teleportação', link: '/pt/guide/advanced/teleport' },
            {
              text: 'Tocos e Montagem Superficial',
              link: '/pt/guide/advanced/stubs-shallow-mount'
            },
            { text: 'Testando a Interpretação do Lado do Servidor', link: '/pt/guide/advanced/ssr' }
          ]
        },
        {
          text: 'Estendendo a Vue Test Utils',
          collapsable: false,
          items: [
            { text: 'Extensões', link: '/pt/guide/extending-vtu/plugins' },
            {
              text: 'Comunidade e Aprendizagem',
              link: '/pt/guide/extending-vtu/community-learning'
            }
          ]
        },
        {
          text: 'Questões Frequentes',
          link: '/pt/guide/faq/'
        },
        {
          text: 'Migrando da Vue 2',
          link: '/pt/migration/'
        },
        {
          text: 'Referência da API',
          link: '/pt/api/'
        }
      ]
    },

    footer: {
      copyright: 'Direitos de Autor © Evan You de 2014-presente ',
      message: 'Lançada sob a Licença MIT.',
    },
  }
}

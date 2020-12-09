module.exports = {
  base: '/blog/',
  title: 'Blog',
  description: 'Blog',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    lastUpdated: 'Last Updated',
    sidebar: [
      {
        title: 'JS',
        path: '/frontEnd/JS/',
        collapsable: false,
        sidebarDepth: 2,
        children: [
          '/frontEnd/JS/手写系列.html'
        ]
      },
      {
        title: 'TypeScript',
        path: '/frontEnd/TypeScript/',
        collapsable: false,
        sidebarDepth: 2,
        children: [
          '/frontEnd/TypeScript/基础知识.html'
        ]
      }
    ],
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about.html' },
      {
        text: '前端',
        link: '/frontEnd/',
        items: [
          {
            text: 'JS',
            link: '/frontEnd/JS/',
            items: [
              {
                text: '手写系列',
                link: '/frontEnd/JS/手写系列.html',
              }
            ]
          },
          {
            text: 'Typescript',
            link: '/frontEnd/Typescript/',
            items: [
              {
                text: '基础知识',
                link: '/frontEnd/Typescript/基础知识.html',
              }
            ]
          },
        ]
      },
      { text: 'External', link: 'https://google.com' },
    ]
  }
}
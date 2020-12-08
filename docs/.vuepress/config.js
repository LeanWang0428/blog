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
      '',
      'about',
    ],
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about.html' },
      { text: 'External', link: 'https://google.com' },
    ]
  }
}
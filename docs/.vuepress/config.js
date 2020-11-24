module.exports = {
  title: 'Pixss',
  description: 'A pragmatical css framework for Minimalist',
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: ``,
      },
    ],
  ],
  plugins: [],
  base: '/vuepress-boilerplate/',
  themeConfig: {
    lastUpdated: 'Last Updated',
    docsDir: 'docs',
    nav: [{ text: 'About', link: 'other/about' }],
    sidebar: [
      ['/', 'HOME'],
      ['/layout', 'Layout'],
    ],
  },
};

module.exports = {
  title: 'Simplx Documentation',
  tagline: 'By Jessica Sutherland Design',
  url: 'https://docs.simplx.jessicasuther.land',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'jsjsjsjsjsjsjsjs', // Usually your GitHub org/user name.
  projectName: 'simplx-policy', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Simplx Docs',
      logo: {
        alt: 'Simplx Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/jsjsjsjsjsjsjsjs/simplx-policy',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Jessica Sutherland Design Hosted Technologies Group. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/jsjsjsjsjsjsjsjs/simplx-policy/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/jsjsjsjsjsjsjsjs/simplx-policy/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

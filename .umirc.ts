const logo = 'https://cdn.jsdelivr.net/gh/wangxingkang/pictures@latest/imgs/sensoro-design.svg';

export default {
  mode: 'site',
  title: 'Sensoro Icons',
  dynamicImport: {},
  favicon: logo,
  logo,
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/sensoro-design/sensoro-design-icons',
    },
  ],
  resolve: {
    includes: ['docs'],
  },
  hash: true,
};

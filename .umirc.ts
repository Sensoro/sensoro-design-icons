import { join } from 'path';

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
    includes: [
      "docs"
    ]
  },
  alias: {
    '@sensoro-design/icons': join(__dirname, 'packages/react/src'),
    '@sensoro-design/icons-svg/es': join(__dirname, 'packages/core/src'),
    '@sensoro-design/icons-svg/lib': join(__dirname, 'packages/core/src'),
  },
  hash: true,
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
    ],
  ],
}

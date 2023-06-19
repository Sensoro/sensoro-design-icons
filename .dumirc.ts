import path from 'path';
import { defineConfig } from 'dumi';

const logo = 'https://cdn.jsdelivr.net/gh/wangxingkang/pictures@latest/imgs/sensoro-design.svg';

const isProd = process.env.NODE_ENV === 'production';

const prodConfig = isProd
  ? defineConfig({
      ssr: {},
    })
  : defineConfig({});

export default defineConfig({
  base: '/sensoro-design-icons/',
  themeConfig: {
    name: 'Icons',
    logo,
    socialLinks: {
      github: 'https://github.com/sensoro-design/sensoro-design-icons',
    },
  },
  alias: {
    '@sensoro-design/icons-svg/es': path.resolve(__dirname, './packages/core/src'),
    '@sensoro-design/icons-svg': path.resolve(__dirname, './packages/core/src/index.ts'),
    '@sensoro-design/icons/es': path.resolve(__dirname, './packages/react/src'),
    '@sensoro-design/icons': path.resolve(__dirname, './packages/react/src/index.ts'),
  },
  favicons: [logo],
  hash: true,
  ...prodConfig,
});

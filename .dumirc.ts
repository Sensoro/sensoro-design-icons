import { defineConfig } from 'dumi';

const logo = 'https://cdn.jsdelivr.net/gh/wangxingkang/pictures@latest/imgs/sensoro-design.svg';

export default defineConfig({
  themeConfig: {
    name: 'Icons',
    logo,
  },
  favicons: [logo],
  hash: true,
});

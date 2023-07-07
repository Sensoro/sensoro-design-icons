import path from 'node:path';
import { logger, fsExtra } from '@umijs/utils';
import { series } from 'gulp';
import * as allIconDefs from '@sensoro-design/icons-svg';

import { generateIcons } from './tasks';
import { clean, generateEntry } from '../../core/scripts/tasks';

const ICON_DIR = path.join(__dirname, '../src/icons');

const iconTemplate = fsExtra.readFileSync(path.join(__dirname, '../templates/icon.ts.ejs'), 'utf8');

logger.info('start');

series(
  // 1. clean
  clean(['src/icons']),

  // 2. generateIcons
  generateIcons({
    iconDir: ICON_DIR,
    iconDefs: allIconDefs,
    template: iconTemplate,
    mapToInterpolate: ({ name, content }) => ({
      svgIdentifier: name,
    }),
  }),

  // 3. generate entry file: src/icons/index.ts
  generateEntry({
    entryName: 'index.ts',
    from: ['src/icons/*.tsx'],
    toDir: 'src/icons',
    banner: '// This index.ts file is generated automatically.\n',
    template: `export { default as <%= identifier %> } from '<%= path %>';`,
    mapToInterpolate: ({ name: identifier }) => ({
      identifier,
      path: `./${identifier}`,
    }),
  }),
)(() => {
  logger.info('end');
});

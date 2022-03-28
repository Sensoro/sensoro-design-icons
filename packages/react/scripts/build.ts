import path from 'path';
import { logger, fsExtra } from '@walrus/cli-utils';
import { series } from 'gulp';

import { generateEntries } from './tasks';
import { clean } from '../../core/scripts/tasks';

const iconTemplate = fsExtra.readFileSync(
  path.join(__dirname, '../templates/export-icon.js.ejs'),
  'utf8'
);

logger.info('start');

series(
  // 1. clean
  clean(['icons']),

  generateEntries({
    from: ['lib/icons/*.d.ts'],
    toDir: 'icons',
    banner: '// This index.ts file is generated automatically.\n',
    template: `export { default } from '<%= path %>';`,
    mapToInterpolate: ({ name: identifier }) => {
      return {
        path: `../lib/icons/${identifier.split('.')[0]}`
      }
    }
  }),

  generateEntries({
    from: ['lib/icons/*.jsx'],
    toDir: 'icons',
    banner: '// This index.ts file is generated automatically.\n',
    template: iconTemplate,
    mapToInterpolate: ({ name: identifier }) => {
      return {
        identifier,
        path: `../lib/icons/${identifier}`
      }
    }
  }),

)(() => {
  logger.info('end');
});

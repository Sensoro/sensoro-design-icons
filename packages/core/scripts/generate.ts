
import path from 'path';
import { series, parallel } from 'gulp';
import { logger, fsExtra } from '@walrus/cli-utils';

import { clean, copy, format, generateIcons, generateEntry, generateInline } from './tasks';
import { ExtractRegExp } from './tasks/generateInline';

import {
  assignAttrsAtTag,
  setDefaultColorAtPathTag,
} from './plugins/svg2Definition/transforms';
import { twotoneStringify } from './plugins/svg2Definition/stringify';
import { generalConfig, remainFillConfig } from './plugins/svgo/presets';

import { getIdentifier } from './utils';

import type { IconDefinition } from '../templates/types';

const CORE_DIR = process.cwd();

const cleanDirs = ['src', 'inline-svg', 'inline-namespaced-svg'];

const iconTemplate = fsExtra.readFileSync(
  path.resolve(CORE_DIR, 'templates/icon.ts.ejs'),
  'utf8'
);

logger.info('start');

series(
  // 1. clean
  clean(cleanDirs),

  parallel(
    // 2.1 copy helpers.ts, types.ts
    copy({
      from: ['templates/*.ts'],
      toDir: 'src'
    }),

    // 2.2 generate abstract node with the theme "filled"
    generateIcons({
      theme: 'filled',
      from: ['svg/filled/*.svg'],
      toDir: 'src/asn',
      svgoConfig: generalConfig,
      extraNodeTransformFactories: [
        assignAttrsAtTag('svg', { focusable: 'false' }),
      ],
      stringify: JSON.stringify,
      template: iconTemplate,
      mapToInterpolate: ({ name, content }) => ({
        identifier: getIdentifier({ name, themeSuffix: 'Filled' }),
        content
      }),
      filename: ({ name }) => getIdentifier({ name, themeSuffix: 'Filled' })
    }),

    // 2.3 generate abstract node with the theme "outlined"
    generateIcons({
      theme: 'outlined',
      from: ['svg/outlined/*.svg'],
      toDir: 'src/asn',
      svgoConfig: generalConfig,
      extraNodeTransformFactories: [
        assignAttrsAtTag('svg', { focusable: 'false' }),
      ],
      stringify: JSON.stringify,
      template: iconTemplate,
      mapToInterpolate: ({ name, content }) => ({
        identifier: getIdentifier({ name, themeSuffix: 'Outlined' }),
        content
      }),
      filename: ({ name }) => getIdentifier({ name, themeSuffix: 'Outlined' })
    }),

    // 2.4 generate abstract node with the theme "twotone"
    generateIcons({
      theme: 'twotone',
      from: ['svg/twotone/*.svg'],
      toDir: 'src/asn',
      svgoConfig: remainFillConfig,
      extraNodeTransformFactories: [
        assignAttrsAtTag('svg', { focusable: 'false' }),
        setDefaultColorAtPathTag('#333')
      ],
      stringify: twotoneStringify,
      template: iconTemplate,
      mapToInterpolate: ({ name, content }) => ({
        identifier: getIdentifier({ name, themeSuffix: 'TwoTone' }),
        content
      }),
      filename: ({ name }) => getIdentifier({ name, themeSuffix: 'TwoTone' })
    })
  ),

  parallel(
    // 3.1 generate entry file: src/index.ts
    generateEntry({
      entryName: 'index.ts',
      from: ['src/asn/*.ts'],
      toDir: 'src',
      banner: '// This index.ts file is generated automatically.\n',
      template: `export { default as <%= identifier %> } from '<%= path %>';`,
      mapToInterpolate: ({ name: identifier }) => ({
        identifier,
        path: `./asn/${identifier}`
      })
    }),

    // 3.2 generate inline SVG files
    generateInline({
      from: ['src/asn/*.ts'],
      toDir: ({ _meta }) => `inline-svg/${_meta && _meta.theme}`,
      getIconDefinitionFromSource: (content: string): IconDefinition => {
        const extract = ExtractRegExp.exec(content);
        if (extract === null || !extract[1]) {
          throw new Error('Failed to parse raw icon definition: ' + content);
        }
        return new Function(`return ${extract[1]}`)() as IconDefinition;
      }
    }),

    // 3.3 generate inline SVG files with namespace
    generateInline({
      from: ['src/asn/*.ts'],
      toDir: ({ _meta }) => `inline-namespaced-svg/${_meta && _meta.theme}`,
      getIconDefinitionFromSource: (content: string): IconDefinition => {
        const extract = ExtractRegExp.exec(content);
        if (extract === null || !extract[1]) {
          throw new Error('Failed to parse raw icon definition: ' + content);
        }
        return new Function(`return ${extract[1]}`)() as IconDefinition;
      },
      renderOptions: {
        extraSVGAttrs: { xmlns: 'http://www.w3.org/2000/svg' }
      }
    }),
  ),

  // 4. prettier code
  format({
    from: ['src/**/*.ts'],
    toDir: 'src'
  }),
)(() => {
  logger.info('end');
});

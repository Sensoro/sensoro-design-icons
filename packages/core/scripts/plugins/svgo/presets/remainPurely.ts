import { mergeRight } from 'ramda';
import uniqueId from 'lodash/uniqueId';
import { base } from './base';

import type { OptimizeOptions } from 'svgo';

export const remainPurelyConfig = (): OptimizeOptions => {
  const prefix = uniqueId('sen__');

  return mergeRight(base, {
    plugins: [
      ...(base.plugins || []),
      {
        name: 'removeAttrs',
        params: {
          attrs: ['class'],
        },
      },
      {
        name: 'prefixIds',
        params: {
          prefix,
        },
      },
    ],
  });
};

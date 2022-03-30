import { mergeRight } from 'ramda';
import { base } from './base';

import type { OptimizeOptions } from 'svgo';

export const remainPurelyConfig: OptimizeOptions = mergeRight(base, {
  plugins: [
    ...(base.plugins || []).filter((p) => p !== 'cleanupIDs'),
    {
      name: 'removeAttrs',
      params: {
        attrs: ['class'],
      },
    },
  ],
});

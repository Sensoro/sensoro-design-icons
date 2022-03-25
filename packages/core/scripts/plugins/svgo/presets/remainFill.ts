import { mergeRight } from 'ramda';
import { base } from './base';

import type { OptimizeOptions } from 'svgo';

export const remainFillConfig: OptimizeOptions = mergeRight(base, {
  plugins: [
    ...(base.plugins || []),
    {
      name: 'removeAttrs',
      params: {
        attrs: ['class']
      }
    }
  ]
});

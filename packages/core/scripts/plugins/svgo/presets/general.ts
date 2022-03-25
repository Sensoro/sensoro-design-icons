import { mergeRight } from 'ramda';
import { base } from './base';

import type { OptimizeOptions } from 'svgo';

export const generalConfig: OptimizeOptions = mergeRight(base, {
  plugins: [
    ...(base.plugins || []),
    {
      name: 'removeAttrs',
      params: {
        attrs: "(fill|class)"
      }
    }
  ]
});

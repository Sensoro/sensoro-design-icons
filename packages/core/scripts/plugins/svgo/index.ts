import { optimize } from 'svgo';
import { createTrasformStreamAsync } from '../creator';

import type { OptimizeOptions, OptimizedSvg } from 'svgo';

export const svgo = (options: OptimizeOptions) => {
  return createTrasformStreamAsync(async (before) => {
    const { data } = optimize(before, options) as OptimizedSvg;
    return data;
  });
};

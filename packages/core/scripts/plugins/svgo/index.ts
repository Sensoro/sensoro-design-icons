import { optimize } from 'svgo';
import isFunction from 'lodash/isFunction';
import { createTrasformStreamAsync } from '../creator';

import type { OptimizeOptions, OptimizedSvg } from 'svgo';

export const svgo = (config: OptimizeOptions | (() => OptimizeOptions)) => {
  return createTrasformStreamAsync(async (before) => {
    const options = isFunction(config) ? config() : config;
    const { data } = optimize(before, options) as OptimizedSvg;
    return data;
  });
};

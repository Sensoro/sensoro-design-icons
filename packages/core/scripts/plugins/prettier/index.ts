import prettier from 'prettier';
import { createTrasformStream } from '../creator';

import type { Options } from 'prettier';

export interface PrettierOptions {
  prettierOpts: Options;
}

export const usePrettier = ({
  prettierOpts
}: PrettierOptions) =>
  createTrasformStream((content, { path }) => {
    return prettier.format(content, { ...prettierOpts, parser: 'babel' });
  });

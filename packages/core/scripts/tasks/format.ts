import prettier from 'prettier';
import { src, dest } from 'gulp';

import { usePrettier } from '../plugins/prettier';

export interface FormatOptions {
  from: string[];
  toDir?: string;
}

export const format = ({ from, toDir = 'src' }: FormatOptions) =>
  async function FormatCodes() {
    const configFile = await prettier.resolveConfigFile() as string;
    const prettierOpts = await prettier.resolveConfig(configFile) ?? {};

    return src(from)
      .pipe(
        usePrettier({
          prettierOpts,
        })
      )
      .pipe(dest(toDir));
  };

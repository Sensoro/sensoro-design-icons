import path from 'path';
import { src, dest, } from 'gulp';
import { fsExtra } from '@walrus/cli-utils';

import { useTemplate } from '../../../core/scripts/plugins'

import type { UseTemplatePluginOptions } from '../../../core/scripts/plugins/useTemplate';

export interface GenerateIconsOptions extends
  UseTemplatePluginOptions
{
  iconDir: string;
  iconDefs: Record<string, any>;
}

export const generateIcons = ({
  iconDir,
  iconDefs,
  template,
  mapToInterpolate,
}: GenerateIconsOptions) =>
  function GenerateIcons() {
    const icons = Object.keys(iconDefs).sort();

    fsExtra.ensureDir(iconDir);

    icons.forEach((icon) => {
      fsExtra.writeFileSync(path.join(iconDir, `${icon}.tsx`), '')
    });

    return src(`${iconDir}/*`)
      .pipe(
        useTemplate({
          template,
          mapToInterpolate
        })
      )
      .pipe(dest(iconDir));
  }


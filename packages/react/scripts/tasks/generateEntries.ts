import { src, dest } from 'gulp';
import header from 'gulp-header';

import { useTemplate } from '../../../core/scripts/plugins'

import type { UseTemplatePluginOptions } from '../../../core/scripts/plugins/useTemplate';

export interface GenerateEntriesOptions extends UseTemplatePluginOptions {
  from: string[];
  toDir: string;
  banner?: string;
}

export const generateEntries = ({
  from,
  toDir,
  template,
  mapToInterpolate,
  banner = ''
}: GenerateEntriesOptions) =>
  function GenerateEntry() {
    return src(from)
      .pipe(
        useTemplate({
          template,
          mapToInterpolate
        })
      )
      .pipe(header(banner))
      .pipe(dest(toDir));
  };

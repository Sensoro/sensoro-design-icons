import { src, dest } from 'gulp';
import rename from 'gulp-rename';

import { useTemplate, svg2Definition, svgo } from '../plugins';

import type { OptimizeOptions } from 'svgo';
import type { SVG2DefinitionOptions } from '../plugins/svg2Definition';
import type { UseTemplatePluginOptions } from '../plugins/useTemplate';

export interface GenerateIconsOptions extends
  SVG2DefinitionOptions,
  UseTemplatePluginOptions
{
  /** 图标来源 */
  from: string[];
  /** 输出目录 */
  toDir: string;
  /** 图标压缩插件 svgo 的配置 */
  svgoConfig: OptimizeOptions;
  /** 最后输出文件命名 */
  filename: (option: { name: string }) => string;
}

export const generateIcons = ({
  from,
  toDir,
  svgoConfig,
  theme,
  extraNodeTransformFactories,
  stringify,
  template,
  mapToInterpolate,
  filename
}: GenerateIconsOptions) =>
  function GenerateIcons() {
    return src(from)
      .pipe(svgo(svgoConfig))
      .pipe(
        svg2Definition({
          theme,
          extraNodeTransformFactories,
          stringify
        })
      )
      .pipe(useTemplate({ template, mapToInterpolate }))
      .pipe(
        rename((file) => {
          if (file.basename) {
            file.basename = filename({ name: file.basename });
            file.extname = '.ts';
          }
        })
      )
      .pipe(dest(toDir));
  };

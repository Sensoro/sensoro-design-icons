import { createTrasformStream } from '../creator';
import template from 'lodash/template';

export interface UseTemplatePluginOptions {
  /** 套用的模板 */
  template: string;
  /** 模板中的插值映射 */
  mapToInterpolate: MapToInterpolate;
}

export interface MapToInterpolate {
  (meta: { name: string; content: string; path: string }): object;
}

export const useTemplate = ({
  template: tplContent,
  mapToInterpolate
}: UseTemplatePluginOptions) => {
  const executor = template(tplContent);
  return createTrasformStream((content, { stem: name, path }) => {
    return executor(mapToInterpolate({ name, content, path }))
  });
};

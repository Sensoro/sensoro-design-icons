// This icon file is generated automatically.
import * as React from 'react';
import TemplateFilledSvg from '@sensoro-design/icons-svg/es/asn/TemplateFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const TemplateFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={TemplateFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(TemplateFilled);

RefIcon.displayName = 'TemplateFilled';

export default RefIcon;

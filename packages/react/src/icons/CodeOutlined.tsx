// This icon file is generated automatically.
import * as React from 'react';
import CodeOutlinedSvg from '@sensoro-design/icons-svg/es/asn/CodeOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CodeOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CodeOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CodeOutlined);

RefIcon.displayName = 'CodeOutlined';

export default RefIcon;

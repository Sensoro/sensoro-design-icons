// This icon file is generated automatically.
import * as React from 'react';
import BigScreenOutlinedSvg from '@sensoro-design/icons-svg/es/asn/BigScreenOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const BigScreenOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={BigScreenOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(BigScreenOutlined);

RefIcon.displayName = 'BigScreenOutlined';

export default RefIcon;

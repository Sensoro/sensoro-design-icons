// This icon file is generated automatically.
import * as React from 'react';
import SunsetOutlinedSvg from '@sensoro-design/icons-svg/es/asn/SunsetOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SunsetOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SunsetOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SunsetOutlined);

RefIcon.displayName = 'SunsetOutlined';

export default RefIcon;

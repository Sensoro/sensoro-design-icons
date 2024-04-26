// This icon file is generated automatically.
import * as React from 'react';
import SunriseOutlinedSvg from '@sensoro-design/icons-svg/es/asn/SunriseOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SunriseOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SunriseOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SunriseOutlined);

RefIcon.displayName = 'SunriseOutlined';

export default RefIcon;

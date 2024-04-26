// This icon file is generated automatically.
import * as React from 'react';
import HomeIsolationOutlinedSvg from '@sensoro-design/icons-svg/es/asn/HomeIsolationOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const HomeIsolationOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={HomeIsolationOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(HomeIsolationOutlined);

RefIcon.displayName = 'HomeIsolationOutlined';

export default RefIcon;

// This icon file is generated automatically.
import * as React from 'react';
import NoDevicePurelySvg from '@sensoro-design/icons-svg/es/asn/NoDevicePurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const NoDevicePurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={NoDevicePurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(NoDevicePurely);

RefIcon.displayName = 'NoDevicePurely';

export default RefIcon;

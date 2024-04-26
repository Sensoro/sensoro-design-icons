// This icon file is generated automatically.
import * as React from 'react';
import DeviceOfflinePurelySvg from '@sensoro-design/icons-svg/es/asn/DeviceOfflinePurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const DeviceOfflinePurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={DeviceOfflinePurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(DeviceOfflinePurely);

RefIcon.displayName = 'DeviceOfflinePurely';

export default RefIcon;

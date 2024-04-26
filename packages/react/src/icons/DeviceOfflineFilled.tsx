// This icon file is generated automatically.
import * as React from 'react';
import DeviceOfflineFilledSvg from '@sensoro-design/icons-svg/es/asn/DeviceOfflineFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const DeviceOfflineFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={DeviceOfflineFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(DeviceOfflineFilled);

RefIcon.displayName = 'DeviceOfflineFilled';

export default RefIcon;

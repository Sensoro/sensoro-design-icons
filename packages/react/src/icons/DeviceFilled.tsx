// This icon file is generated automatically.
import * as React from 'react';
import DeviceFilledSvg from '@sensoro-design/icons-svg/es/asn/DeviceFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const DeviceFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={DeviceFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(DeviceFilled);

RefIcon.displayName = 'DeviceFilled';

export default RefIcon;

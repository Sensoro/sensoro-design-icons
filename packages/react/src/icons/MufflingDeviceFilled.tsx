// This icon file is generated automatically.
import * as React from 'react';
import MufflingDeviceFilledSvg from '@sensoro-design/icons-svg/es/asn/MufflingDeviceFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const MufflingDeviceFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={MufflingDeviceFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(MufflingDeviceFilled);

RefIcon.displayName = 'MufflingDeviceFilled';

export default RefIcon;

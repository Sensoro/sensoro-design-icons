// This icon file is generated automatically.
import * as React from 'react';
import DeviceGroupPurelySvg from '@sensoro-design/icons-svg/es/asn/DeviceGroupPurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const DeviceGroupPurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={DeviceGroupPurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(DeviceGroupPurely);

RefIcon.displayName = 'DeviceGroupPurely';

export default RefIcon;

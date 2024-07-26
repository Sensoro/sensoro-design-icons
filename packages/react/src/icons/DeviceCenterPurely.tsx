// This icon file is generated automatically.
import * as React from 'react';
import DeviceCenterPurelySvg from '@sensoro-design/icons-svg/es/asn/DeviceCenterPurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const DeviceCenterPurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={DeviceCenterPurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(DeviceCenterPurely);

RefIcon.displayName = 'DeviceCenterPurely';

export default RefIcon;

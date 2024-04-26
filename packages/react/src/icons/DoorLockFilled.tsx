// This icon file is generated automatically.
import * as React from 'react';
import DoorLockFilledSvg from '@sensoro-design/icons-svg/es/asn/DoorLockFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const DoorLockFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={DoorLockFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(DoorLockFilled);

RefIcon.displayName = 'DoorLockFilled';

export default RefIcon;

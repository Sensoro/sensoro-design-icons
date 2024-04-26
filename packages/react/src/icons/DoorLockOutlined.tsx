// This icon file is generated automatically.
import * as React from 'react';
import DoorLockOutlinedSvg from '@sensoro-design/icons-svg/es/asn/DoorLockOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const DoorLockOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={DoorLockOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(DoorLockOutlined);

RefIcon.displayName = 'DoorLockOutlined';

export default RefIcon;

// This icon file is generated automatically.
import * as React from 'react';
import BatteryGroupFilledSvg from '@sensoro-design/icons-svg/es/asn/BatteryGroupFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const BatteryGroupFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={BatteryGroupFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(BatteryGroupFilled);

RefIcon.displayName = 'BatteryGroupFilled';

export default RefIcon;

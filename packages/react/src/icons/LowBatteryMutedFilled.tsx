// This icon file is generated automatically.
import * as React from 'react';
import LowBatteryMutedFilledSvg from '@sensoro-design/icons-svg/es/asn/LowBatteryMutedFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LowBatteryMutedFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LowBatteryMutedFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LowBatteryMutedFilled);

RefIcon.displayName = 'LowBatteryMutedFilled';

export default RefIcon;

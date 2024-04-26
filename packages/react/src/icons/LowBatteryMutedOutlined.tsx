// This icon file is generated automatically.
import * as React from 'react';
import LowBatteryMutedOutlinedSvg from '@sensoro-design/icons-svg/es/asn/LowBatteryMutedOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LowBatteryMutedOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LowBatteryMutedOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LowBatteryMutedOutlined);

RefIcon.displayName = 'LowBatteryMutedOutlined';

export default RefIcon;

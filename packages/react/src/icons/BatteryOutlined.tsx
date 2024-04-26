// This icon file is generated automatically.
import * as React from 'react';
import BatteryOutlinedSvg from '@sensoro-design/icons-svg/es/asn/BatteryOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const BatteryOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={BatteryOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(BatteryOutlined);

RefIcon.displayName = 'BatteryOutlined';

export default RefIcon;

// This icon file is generated automatically.
import * as React from 'react';
import GasAlarmOutlinedSvg from '@sensoro-design/icons-svg/es/asn/GasAlarmOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const GasAlarmOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={GasAlarmOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(GasAlarmOutlined);

RefIcon.displayName = 'GasAlarmOutlined';

export default RefIcon;

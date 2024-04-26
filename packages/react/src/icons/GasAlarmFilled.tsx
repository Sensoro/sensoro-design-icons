// This icon file is generated automatically.
import * as React from 'react';
import GasAlarmFilledSvg from '@sensoro-design/icons-svg/es/asn/GasAlarmFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const GasAlarmFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={GasAlarmFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(GasAlarmFilled);

RefIcon.displayName = 'GasAlarmFilled';

export default RefIcon;

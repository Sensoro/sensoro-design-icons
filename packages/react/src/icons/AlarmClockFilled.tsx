// This icon file is generated automatically.
import * as React from 'react';
import AlarmClockFilledSvg from '@sensoro-design/icons-svg/es/asn/AlarmClockFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AlarmClockFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AlarmClockFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AlarmClockFilled);

RefIcon.displayName = 'AlarmClockFilled';

export default RefIcon;

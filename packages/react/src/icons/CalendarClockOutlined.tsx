// This icon file is generated automatically.
import * as React from 'react';
import CalendarClockOutlinedSvg from '@sensoro-design/icons-svg/es/asn/CalendarClockOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CalendarClockOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CalendarClockOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CalendarClockOutlined);

RefIcon.displayName = 'CalendarClockOutlined';

export default RefIcon;

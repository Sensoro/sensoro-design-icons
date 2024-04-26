// This icon file is generated automatically.
import * as React from 'react';
import CalendarCheckOutlinedSvg from '@sensoro-design/icons-svg/es/asn/CalendarCheckOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CalendarCheckOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CalendarCheckOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CalendarCheckOutlined);

RefIcon.displayName = 'CalendarCheckOutlined';

export default RefIcon;

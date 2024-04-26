// This icon file is generated automatically.
import * as React from 'react';
import CalendarCheckFilledSvg from '@sensoro-design/icons-svg/es/asn/CalendarCheckFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CalendarCheckFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CalendarCheckFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CalendarCheckFilled);

RefIcon.displayName = 'CalendarCheckFilled';

export default RefIcon;

// This icon file is generated automatically.
import * as React from 'react';
import CalendarOutlinedSvg from '@sensoro-design/icons-svg/es/asn/CalendarOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CalendarOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CalendarOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CalendarOutlined);

RefIcon.displayName = 'CalendarOutlined';

export default RefIcon;

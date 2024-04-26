// This icon file is generated automatically.
import * as React from 'react';
import ScheduleOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ScheduleOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ScheduleOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ScheduleOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ScheduleOutlined);

RefIcon.displayName = 'ScheduleOutlined';

export default RefIcon;

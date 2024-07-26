// This icon file is generated automatically.
import * as React from 'react';
import EventCenterPurelySvg from '@sensoro-design/icons-svg/es/asn/EventCenterPurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const EventCenterPurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={EventCenterPurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(EventCenterPurely);

RefIcon.displayName = 'EventCenterPurely';

export default RefIcon;

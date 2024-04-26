// This icon file is generated automatically.
import * as React from 'react';
import DroneAirportOutlinedSvg from '@sensoro-design/icons-svg/es/asn/DroneAirportOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const DroneAirportOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={DroneAirportOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(DroneAirportOutlined);

RefIcon.displayName = 'DroneAirportOutlined';

export default RefIcon;

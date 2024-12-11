// This icon file is generated automatically.
import * as React from 'react';
import DroneAirportOpenOutlinedSvg from '@sensoro-design/icons-svg/es/asn/DroneAirportOpenOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const DroneAirportOpenOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={DroneAirportOpenOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(DroneAirportOpenOutlined);

RefIcon.displayName = 'DroneAirportOpenOutlined';

export default RefIcon;

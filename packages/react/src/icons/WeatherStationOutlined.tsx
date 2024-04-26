// This icon file is generated automatically.
import * as React from 'react';
import WeatherStationOutlinedSvg from '@sensoro-design/icons-svg/es/asn/WeatherStationOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const WeatherStationOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={WeatherStationOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(WeatherStationOutlined);

RefIcon.displayName = 'WeatherStationOutlined';

export default RefIcon;

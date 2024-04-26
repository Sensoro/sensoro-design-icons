// This icon file is generated automatically.
import * as React from 'react';
import WeatherStationFilledSvg from '@sensoro-design/icons-svg/es/asn/WeatherStationFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const WeatherStationFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={WeatherStationFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(WeatherStationFilled);

RefIcon.displayName = 'WeatherStationFilled';

export default RefIcon;

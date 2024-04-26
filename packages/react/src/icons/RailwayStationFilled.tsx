// This icon file is generated automatically.
import * as React from 'react';
import RailwayStationFilledSvg from '@sensoro-design/icons-svg/es/asn/RailwayStationFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const RailwayStationFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={RailwayStationFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(RailwayStationFilled);

RefIcon.displayName = 'RailwayStationFilled';

export default RefIcon;

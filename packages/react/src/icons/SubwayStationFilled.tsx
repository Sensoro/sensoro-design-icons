// This icon file is generated automatically.
import * as React from 'react';
import SubwayStationFilledSvg from '@sensoro-design/icons-svg/es/asn/SubwayStationFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SubwayStationFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SubwayStationFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SubwayStationFilled);

RefIcon.displayName = 'SubwayStationFilled';

export default RefIcon;

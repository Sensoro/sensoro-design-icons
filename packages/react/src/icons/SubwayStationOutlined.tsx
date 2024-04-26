// This icon file is generated automatically.
import * as React from 'react';
import SubwayStationOutlinedSvg from '@sensoro-design/icons-svg/es/asn/SubwayStationOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SubwayStationOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SubwayStationOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SubwayStationOutlined);

RefIcon.displayName = 'SubwayStationOutlined';

export default RefIcon;

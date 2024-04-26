// This icon file is generated automatically.
import * as React from 'react';
import MiniatureFireStationOutlinedSvg from '@sensoro-design/icons-svg/es/asn/MiniatureFireStationOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const MiniatureFireStationOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={MiniatureFireStationOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(MiniatureFireStationOutlined);

RefIcon.displayName = 'MiniatureFireStationOutlined';

export default RefIcon;

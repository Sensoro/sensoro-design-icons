// This icon file is generated automatically.
import * as React from 'react';
import MiniatureFireStationFilledSvg from '@sensoro-design/icons-svg/es/asn/MiniatureFireStationFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const MiniatureFireStationFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={MiniatureFireStationFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(MiniatureFireStationFilled);

RefIcon.displayName = 'MiniatureFireStationFilled';

export default RefIcon;

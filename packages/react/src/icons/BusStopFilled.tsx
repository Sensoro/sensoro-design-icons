// This icon file is generated automatically.
import * as React from 'react';
import BusStopFilledSvg from '@sensoro-design/icons-svg/es/asn/BusStopFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const BusStopFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={BusStopFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(BusStopFilled);

RefIcon.displayName = 'BusStopFilled';

export default RefIcon;

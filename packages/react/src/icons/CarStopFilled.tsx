// This icon file is generated automatically.
import * as React from 'react';
import CarStopFilledSvg from '@sensoro-design/icons-svg/es/asn/CarStopFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CarStopFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CarStopFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CarStopFilled);

RefIcon.displayName = 'CarStopFilled';

export default RefIcon;

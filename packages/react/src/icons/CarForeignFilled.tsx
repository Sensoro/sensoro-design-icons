// This icon file is generated automatically.
import * as React from 'react';
import CarForeignFilledSvg from '@sensoro-design/icons-svg/es/asn/CarForeignFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CarForeignFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CarForeignFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CarForeignFilled);

RefIcon.displayName = 'CarForeignFilled';

export default RefIcon;

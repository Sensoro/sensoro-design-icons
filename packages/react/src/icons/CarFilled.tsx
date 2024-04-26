// This icon file is generated automatically.
import * as React from 'react';
import CarFilledSvg from '@sensoro-design/icons-svg/es/asn/CarFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CarFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CarFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CarFilled);

RefIcon.displayName = 'CarFilled';

export default RefIcon;

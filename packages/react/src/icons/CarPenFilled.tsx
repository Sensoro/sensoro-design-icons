// This icon file is generated automatically.
import * as React from 'react';
import CarPenFilledSvg from '@sensoro-design/icons-svg/es/asn/CarPenFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CarPenFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CarPenFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CarPenFilled);

RefIcon.displayName = 'CarPenFilled';

export default RefIcon;

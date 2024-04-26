// This icon file is generated automatically.
import * as React from 'react';
import CarSpecialFilledSvg from '@sensoro-design/icons-svg/es/asn/CarSpecialFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CarSpecialFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CarSpecialFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CarSpecialFilled);

RefIcon.displayName = 'CarSpecialFilled';

export default RefIcon;

// This icon file is generated automatically.
import * as React from 'react';
import CarParkFilledSvg from '@sensoro-design/icons-svg/es/asn/CarParkFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CarParkFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CarParkFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CarParkFilled);

RefIcon.displayName = 'CarParkFilled';

export default RefIcon;

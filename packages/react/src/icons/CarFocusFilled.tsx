// This icon file is generated automatically.
import * as React from 'react';
import CarFocusFilledSvg from '@sensoro-design/icons-svg/es/asn/CarFocusFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CarFocusFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CarFocusFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CarFocusFilled);

RefIcon.displayName = 'CarFocusFilled';

export default RefIcon;

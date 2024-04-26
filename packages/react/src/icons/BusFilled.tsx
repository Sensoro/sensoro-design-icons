// This icon file is generated automatically.
import * as React from 'react';
import BusFilledSvg from '@sensoro-design/icons-svg/es/asn/BusFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const BusFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={BusFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(BusFilled);

RefIcon.displayName = 'BusFilled';

export default RefIcon;

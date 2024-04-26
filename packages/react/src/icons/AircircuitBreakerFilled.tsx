// This icon file is generated automatically.
import * as React from 'react';
import AircircuitBreakerFilledSvg from '@sensoro-design/icons-svg/es/asn/AircircuitBreakerFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AircircuitBreakerFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AircircuitBreakerFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AircircuitBreakerFilled);

RefIcon.displayName = 'AircircuitBreakerFilled';

export default RefIcon;

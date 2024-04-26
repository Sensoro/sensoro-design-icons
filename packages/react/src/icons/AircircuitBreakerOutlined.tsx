// This icon file is generated automatically.
import * as React from 'react';
import AircircuitBreakerOutlinedSvg from '@sensoro-design/icons-svg/es/asn/AircircuitBreakerOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AircircuitBreakerOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AircircuitBreakerOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AircircuitBreakerOutlined);

RefIcon.displayName = 'AircircuitBreakerOutlined';

export default RefIcon;

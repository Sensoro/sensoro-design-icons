// This icon file is generated automatically.
import * as React from 'react';
import FireBreakerFilledSvg from '@sensoro-design/icons-svg/es/asn/FireBreakerFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FireBreakerFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FireBreakerFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FireBreakerFilled);

RefIcon.displayName = 'FireBreakerFilled';

export default RefIcon;

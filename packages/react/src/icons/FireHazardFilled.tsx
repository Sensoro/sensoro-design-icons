// This icon file is generated automatically.
import * as React from 'react';
import FireHazardFilledSvg from '@sensoro-design/icons-svg/es/asn/FireHazardFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FireHazardFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FireHazardFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FireHazardFilled);

RefIcon.displayName = 'FireHazardFilled';

export default RefIcon;

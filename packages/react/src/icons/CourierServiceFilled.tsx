// This icon file is generated automatically.
import * as React from 'react';
import CourierServiceFilledSvg from '@sensoro-design/icons-svg/es/asn/CourierServiceFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CourierServiceFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CourierServiceFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CourierServiceFilled);

RefIcon.displayName = 'CourierServiceFilled';

export default RefIcon;

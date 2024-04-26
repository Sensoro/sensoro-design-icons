// This icon file is generated automatically.
import * as React from 'react';
import ServiceCardFilledSvg from '@sensoro-design/icons-svg/es/asn/ServiceCardFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ServiceCardFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ServiceCardFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ServiceCardFilled);

RefIcon.displayName = 'ServiceCardFilled';

export default RefIcon;

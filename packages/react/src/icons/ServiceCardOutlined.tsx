// This icon file is generated automatically.
import * as React from 'react';
import ServiceCardOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ServiceCardOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ServiceCardOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ServiceCardOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ServiceCardOutlined);

RefIcon.displayName = 'ServiceCardOutlined';

export default RefIcon;

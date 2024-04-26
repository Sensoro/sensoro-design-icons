// This icon file is generated automatically.
import * as React from 'react';
import TenantFilledSvg from '@sensoro-design/icons-svg/es/asn/TenantFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const TenantFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={TenantFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(TenantFilled);

RefIcon.displayName = 'TenantFilled';

export default RefIcon;

// This icon file is generated automatically.
import * as React from 'react';
import TenantOutlinedSvg from '@sensoro-design/icons-svg/es/asn/TenantOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const TenantOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={TenantOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(TenantOutlined);

RefIcon.displayName = 'TenantOutlined';

export default RefIcon;

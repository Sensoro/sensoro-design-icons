// This icon file is generated automatically.
import * as React from 'react';
import PublicSecurityOutlinedSvg from '@sensoro-design/icons-svg/es/asn/PublicSecurityOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PublicSecurityOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PublicSecurityOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PublicSecurityOutlined);

RefIcon.displayName = 'PublicSecurityOutlined';

export default RefIcon;

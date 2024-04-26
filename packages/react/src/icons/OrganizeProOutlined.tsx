// This icon file is generated automatically.
import * as React from 'react';
import OrganizeProOutlinedSvg from '@sensoro-design/icons-svg/es/asn/OrganizeProOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const OrganizeProOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={OrganizeProOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(OrganizeProOutlined);

RefIcon.displayName = 'OrganizeProOutlined';

export default RefIcon;

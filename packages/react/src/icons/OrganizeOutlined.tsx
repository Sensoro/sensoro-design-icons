// This icon file is generated automatically.
import * as React from 'react';
import OrganizeOutlinedSvg from '@sensoro-design/icons-svg/es/asn/OrganizeOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const OrganizeOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={OrganizeOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(OrganizeOutlined);

RefIcon.displayName = 'OrganizeOutlined';

export default RefIcon;

// This icon file is generated automatically.
import * as React from 'react';
import GatewayOutlinedSvg from '@sensoro-design/icons-svg/es/asn/GatewayOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const GatewayOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={GatewayOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(GatewayOutlined);

RefIcon.displayName = 'GatewayOutlined';

export default RefIcon;

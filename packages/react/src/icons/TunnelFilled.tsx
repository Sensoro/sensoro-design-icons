// This icon file is generated automatically.
import * as React from 'react';
import TunnelFilledSvg from '@sensoro-design/icons-svg/es/asn/TunnelFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const TunnelFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={TunnelFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(TunnelFilled);

RefIcon.displayName = 'TunnelFilled';

export default RefIcon;

// This icon file is generated automatically.
import * as React from 'react';
import RouteOutlinedSvg from '@sensoro-design/icons-svg/es/asn/RouteOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const RouteOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={RouteOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(RouteOutlined);

RefIcon.displayName = 'RouteOutlined';

export default RefIcon;

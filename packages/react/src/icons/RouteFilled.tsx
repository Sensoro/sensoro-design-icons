// This icon file is generated automatically.
import * as React from 'react';
import RouteFilledSvg from '@sensoro-design/icons-svg/es/asn/RouteFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const RouteFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={RouteFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(RouteFilled);

RefIcon.displayName = 'RouteFilled';

export default RefIcon;

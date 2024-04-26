// This icon file is generated automatically.
import * as React from 'react';
import DroneProFilledSvg from '@sensoro-design/icons-svg/es/asn/DroneProFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const DroneProFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={DroneProFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(DroneProFilled);

RefIcon.displayName = 'DroneProFilled';

export default RefIcon;

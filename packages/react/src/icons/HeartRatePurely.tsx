// This icon file is generated automatically.
import * as React from 'react';
import HeartRatePurelySvg from '@sensoro-design/icons-svg/es/asn/HeartRatePurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const HeartRatePurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={HeartRatePurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(HeartRatePurely);

RefIcon.displayName = 'HeartRatePurely';

export default RefIcon;

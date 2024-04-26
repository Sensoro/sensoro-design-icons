// This icon file is generated automatically.
import * as React from 'react';
import SmokePurelySvg from '@sensoro-design/icons-svg/es/asn/SmokePurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SmokePurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SmokePurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SmokePurely);

RefIcon.displayName = 'SmokePurely';

export default RefIcon;

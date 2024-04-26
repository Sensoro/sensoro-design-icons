// This icon file is generated automatically.
import * as React from 'react';
import FireHydrantPurelySvg from '@sensoro-design/icons-svg/es/asn/FireHydrantPurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FireHydrantPurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FireHydrantPurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FireHydrantPurely);

RefIcon.displayName = 'FireHydrantPurely';

export default RefIcon;

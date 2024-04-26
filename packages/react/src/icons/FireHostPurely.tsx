// This icon file is generated automatically.
import * as React from 'react';
import FireHostPurelySvg from '@sensoro-design/icons-svg/es/asn/FireHostPurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FireHostPurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FireHostPurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FireHostPurely);

RefIcon.displayName = 'FireHostPurely';

export default RefIcon;

// This icon file is generated automatically.
import * as React from 'react';
import Pm25OutlinedSvg from '@sensoro-design/icons-svg/es/asn/Pm25Outlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const Pm25Outlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={Pm25OutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(Pm25Outlined);

RefIcon.displayName = 'Pm25Outlined';

export default RefIcon;

// This icon file is generated automatically.
import * as React from 'react';
import Ch4OutlinedSvg from '@sensoro-design/icons-svg/es/asn/Ch4Outlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const Ch4Outlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={Ch4OutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(Ch4Outlined);

RefIcon.displayName = 'Ch4Outlined';

export default RefIcon;

// This icon file is generated automatically.
import * as React from 'react';
import O2OutlinedSvg from '@sensoro-design/icons-svg/es/asn/O2Outlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const O2Outlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={O2OutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(O2Outlined);

RefIcon.displayName = 'O2Outlined';

export default RefIcon;

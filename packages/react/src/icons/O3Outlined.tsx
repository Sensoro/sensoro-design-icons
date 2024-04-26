// This icon file is generated automatically.
import * as React from 'react';
import O3OutlinedSvg from '@sensoro-design/icons-svg/es/asn/O3Outlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const O3Outlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={O3OutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(O3Outlined);

RefIcon.displayName = 'O3Outlined';

export default RefIcon;

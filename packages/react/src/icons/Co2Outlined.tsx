// This icon file is generated automatically.
import * as React from 'react';
import Co2OutlinedSvg from '@sensoro-design/icons-svg/es/asn/Co2Outlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const Co2Outlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={Co2OutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(Co2Outlined);

RefIcon.displayName = 'Co2Outlined';

export default RefIcon;

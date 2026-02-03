// This icon file is generated automatically.
import * as React from 'react';
import NightModeAutoOutlinedSvg from '@sensoro-design/icons-svg/es/asn/NightModeAutoOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const NightModeAutoOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={NightModeAutoOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(NightModeAutoOutlined);

RefIcon.displayName = 'NightModeAutoOutlined';

export default RefIcon;

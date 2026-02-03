// This icon file is generated automatically.
import * as React from 'react';
import NightModeOnOutlinedSvg from '@sensoro-design/icons-svg/es/asn/NightModeOnOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const NightModeOnOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={NightModeOnOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(NightModeOnOutlined);

RefIcon.displayName = 'NightModeOnOutlined';

export default RefIcon;

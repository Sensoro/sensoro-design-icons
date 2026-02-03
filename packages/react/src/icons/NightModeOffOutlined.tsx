// This icon file is generated automatically.
import * as React from 'react';
import NightModeOffOutlinedSvg from '@sensoro-design/icons-svg/es/asn/NightModeOffOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const NightModeOffOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={NightModeOffOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(NightModeOffOutlined);

RefIcon.displayName = 'NightModeOffOutlined';

export default RefIcon;

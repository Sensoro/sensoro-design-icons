// This icon file is generated automatically.
import * as React from 'react';
import PlatformSwitchOutlinedSvg from '@sensoro-design/icons-svg/es/asn/PlatformSwitchOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PlatformSwitchOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PlatformSwitchOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PlatformSwitchOutlined);

RefIcon.displayName = 'PlatformSwitchOutlined';

export default RefIcon;

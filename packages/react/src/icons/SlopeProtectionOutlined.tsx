// This icon file is generated automatically.
import * as React from 'react';
import SlopeProtectionOutlinedSvg from '@sensoro-design/icons-svg/es/asn/SlopeProtectionOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SlopeProtectionOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SlopeProtectionOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SlopeProtectionOutlined);

RefIcon.displayName = 'SlopeProtectionOutlined';

export default RefIcon;

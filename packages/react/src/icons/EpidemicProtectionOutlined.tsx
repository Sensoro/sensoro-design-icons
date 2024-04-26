// This icon file is generated automatically.
import * as React from 'react';
import EpidemicProtectionOutlinedSvg from '@sensoro-design/icons-svg/es/asn/EpidemicProtectionOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const EpidemicProtectionOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={EpidemicProtectionOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(EpidemicProtectionOutlined);

RefIcon.displayName = 'EpidemicProtectionOutlined';

export default RefIcon;

// This icon file is generated automatically.
import * as React from 'react';
import SafetySearchOutlinedSvg from '@sensoro-design/icons-svg/es/asn/SafetySearchOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SafetySearchOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SafetySearchOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SafetySearchOutlined);

RefIcon.displayName = 'SafetySearchOutlined';

export default RefIcon;

// This icon file is generated automatically.
import * as React from 'react';
import SafetyRopeOutlinedSvg from '@sensoro-design/icons-svg/es/asn/SafetyRopeOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SafetyRopeOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SafetyRopeOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SafetyRopeOutlined);

RefIcon.displayName = 'SafetyRopeOutlined';

export default RefIcon;

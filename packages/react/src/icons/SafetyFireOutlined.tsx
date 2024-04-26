// This icon file is generated automatically.
import * as React from 'react';
import SafetyFireOutlinedSvg from '@sensoro-design/icons-svg/es/asn/SafetyFireOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SafetyFireOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SafetyFireOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SafetyFireOutlined);

RefIcon.displayName = 'SafetyFireOutlined';

export default RefIcon;

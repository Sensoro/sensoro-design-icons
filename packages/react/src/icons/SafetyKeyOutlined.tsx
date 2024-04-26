// This icon file is generated automatically.
import * as React from 'react';
import SafetyKeyOutlinedSvg from '@sensoro-design/icons-svg/es/asn/SafetyKeyOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SafetyKeyOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SafetyKeyOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SafetyKeyOutlined);

RefIcon.displayName = 'SafetyKeyOutlined';

export default RefIcon;

// This icon file is generated automatically.
import * as React from 'react';
import SafetySearchFilledSvg from '@sensoro-design/icons-svg/es/asn/SafetySearchFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SafetySearchFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SafetySearchFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SafetySearchFilled);

RefIcon.displayName = 'SafetySearchFilled';

export default RefIcon;

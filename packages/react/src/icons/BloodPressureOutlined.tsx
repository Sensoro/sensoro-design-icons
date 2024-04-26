// This icon file is generated automatically.
import * as React from 'react';
import BloodPressureOutlinedSvg from '@sensoro-design/icons-svg/es/asn/BloodPressureOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const BloodPressureOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={BloodPressureOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(BloodPressureOutlined);

RefIcon.displayName = 'BloodPressureOutlined';

export default RefIcon;

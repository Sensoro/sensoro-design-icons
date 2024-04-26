// This icon file is generated automatically.
import * as React from 'react';
import BloodOxygenOutlinedSvg from '@sensoro-design/icons-svg/es/asn/BloodOxygenOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const BloodOxygenOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={BloodOxygenOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(BloodOxygenOutlined);

RefIcon.displayName = 'BloodOxygenOutlined';

export default RefIcon;

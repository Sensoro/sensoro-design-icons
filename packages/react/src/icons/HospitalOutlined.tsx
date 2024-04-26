// This icon file is generated automatically.
import * as React from 'react';
import HospitalOutlinedSvg from '@sensoro-design/icons-svg/es/asn/HospitalOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const HospitalOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={HospitalOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(HospitalOutlined);

RefIcon.displayName = 'HospitalOutlined';

export default RefIcon;

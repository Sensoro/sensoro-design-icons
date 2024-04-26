// This icon file is generated automatically.
import * as React from 'react';
import DoctorOutlinedSvg from '@sensoro-design/icons-svg/es/asn/DoctorOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const DoctorOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={DoctorOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(DoctorOutlined);

RefIcon.displayName = 'DoctorOutlined';

export default RefIcon;

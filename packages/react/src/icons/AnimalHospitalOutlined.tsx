// This icon file is generated automatically.
import * as React from 'react';
import AnimalHospitalOutlinedSvg from '@sensoro-design/icons-svg/es/asn/AnimalHospitalOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AnimalHospitalOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AnimalHospitalOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AnimalHospitalOutlined);

RefIcon.displayName = 'AnimalHospitalOutlined';

export default RefIcon;

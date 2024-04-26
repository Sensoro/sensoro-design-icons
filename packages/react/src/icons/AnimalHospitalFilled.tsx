// This icon file is generated automatically.
import * as React from 'react';
import AnimalHospitalFilledSvg from '@sensoro-design/icons-svg/es/asn/AnimalHospitalFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AnimalHospitalFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AnimalHospitalFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AnimalHospitalFilled);

RefIcon.displayName = 'AnimalHospitalFilled';

export default RefIcon;

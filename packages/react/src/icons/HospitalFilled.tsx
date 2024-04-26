// This icon file is generated automatically.
import * as React from 'react';
import HospitalFilledSvg from '@sensoro-design/icons-svg/es/asn/HospitalFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const HospitalFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={HospitalFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(HospitalFilled);

RefIcon.displayName = 'HospitalFilled';

export default RefIcon;

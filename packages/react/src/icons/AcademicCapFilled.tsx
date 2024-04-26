// This icon file is generated automatically.
import * as React from 'react';
import AcademicCapFilledSvg from '@sensoro-design/icons-svg/es/asn/AcademicCapFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AcademicCapFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AcademicCapFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AcademicCapFilled);

RefIcon.displayName = 'AcademicCapFilled';

export default RefIcon;

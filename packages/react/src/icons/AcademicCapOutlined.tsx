// This icon file is generated automatically.
import * as React from 'react';
import AcademicCapOutlinedSvg from '@sensoro-design/icons-svg/es/asn/AcademicCapOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AcademicCapOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AcademicCapOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AcademicCapOutlined);

RefIcon.displayName = 'AcademicCapOutlined';

export default RefIcon;

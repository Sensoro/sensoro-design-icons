// This icon file is generated automatically.
import * as React from 'react';
import EmployerOutlinedSvg from '@sensoro-design/icons-svg/es/asn/EmployerOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const EmployerOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={EmployerOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(EmployerOutlined);

RefIcon.displayName = 'EmployerOutlined';

export default RefIcon;

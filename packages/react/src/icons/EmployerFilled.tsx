// This icon file is generated automatically.
import * as React from 'react';
import EmployerFilledSvg from '@sensoro-design/icons-svg/es/asn/EmployerFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const EmployerFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={EmployerFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(EmployerFilled);

RefIcon.displayName = 'EmployerFilled';

export default RefIcon;

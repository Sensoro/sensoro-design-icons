// This icon file is generated automatically.
import * as React from 'react';
import ComputerOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ComputerOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ComputerOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ComputerOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ComputerOutlined);

RefIcon.displayName = 'ComputerOutlined';

export default RefIcon;

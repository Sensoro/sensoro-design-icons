// This icon file is generated automatically.
import * as React from 'react';
import MachineOutlinedSvg from '@sensoro-design/icons-svg/es/asn/MachineOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const MachineOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={MachineOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(MachineOutlined);

RefIcon.displayName = 'MachineOutlined';

export default RefIcon;

// This icon file is generated automatically.
import * as React from 'react';
import ElevatorOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ElevatorOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ElevatorOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ElevatorOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ElevatorOutlined);

RefIcon.displayName = 'ElevatorOutlined';

export default RefIcon;

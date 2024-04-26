// This icon file is generated automatically.
import * as React from 'react';
import ElevatorPurelySvg from '@sensoro-design/icons-svg/es/asn/ElevatorPurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ElevatorPurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ElevatorPurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ElevatorPurely);

RefIcon.displayName = 'ElevatorPurely';

export default RefIcon;

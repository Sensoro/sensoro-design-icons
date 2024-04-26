// This icon file is generated automatically.
import * as React from 'react';
import ElevatorStoppedFilledSvg from '@sensoro-design/icons-svg/es/asn/ElevatorStoppedFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ElevatorStoppedFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ElevatorStoppedFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ElevatorStoppedFilled);

RefIcon.displayName = 'ElevatorStoppedFilled';

export default RefIcon;

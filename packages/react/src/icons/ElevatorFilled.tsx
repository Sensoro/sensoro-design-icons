// This icon file is generated automatically.
import * as React from 'react';
import ElevatorFilledSvg from '@sensoro-design/icons-svg/es/asn/ElevatorFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ElevatorFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ElevatorFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ElevatorFilled);

RefIcon.displayName = 'ElevatorFilled';

export default RefIcon;

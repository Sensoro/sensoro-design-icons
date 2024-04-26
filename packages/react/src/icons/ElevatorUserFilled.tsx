// This icon file is generated automatically.
import * as React from 'react';
import ElevatorUserFilledSvg from '@sensoro-design/icons-svg/es/asn/ElevatorUserFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ElevatorUserFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ElevatorUserFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ElevatorUserFilled);

RefIcon.displayName = 'ElevatorUserFilled';

export default RefIcon;

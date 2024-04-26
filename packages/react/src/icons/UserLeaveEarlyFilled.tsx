// This icon file is generated automatically.
import * as React from 'react';
import UserLeaveEarlyFilledSvg from '@sensoro-design/icons-svg/es/asn/UserLeaveEarlyFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const UserLeaveEarlyFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={UserLeaveEarlyFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(UserLeaveEarlyFilled);

RefIcon.displayName = 'UserLeaveEarlyFilled';

export default RefIcon;

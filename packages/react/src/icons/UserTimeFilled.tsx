// This icon file is generated automatically.
import * as React from 'react';
import UserTimeFilledSvg from '@sensoro-design/icons-svg/es/asn/UserTimeFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const UserTimeFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={UserTimeFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(UserTimeFilled);

RefIcon.displayName = 'UserTimeFilled';

export default RefIcon;

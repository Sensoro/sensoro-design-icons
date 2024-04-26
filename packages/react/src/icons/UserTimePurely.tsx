// This icon file is generated automatically.
import * as React from 'react';
import UserTimePurelySvg from '@sensoro-design/icons-svg/es/asn/UserTimePurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const UserTimePurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={UserTimePurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(UserTimePurely);

RefIcon.displayName = 'UserTimePurely';

export default RefIcon;

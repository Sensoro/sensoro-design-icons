// This icon file is generated automatically.
import * as React from 'react';
import UserPurelySvg from '@sensoro-design/icons-svg/es/asn/UserPurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const UserPurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={UserPurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(UserPurely);

RefIcon.displayName = 'UserPurely';

export default RefIcon;

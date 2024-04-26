// This icon file is generated automatically.
import * as React from 'react';
import UserRoleFilledSvg from '@sensoro-design/icons-svg/es/asn/UserRoleFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const UserRoleFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={UserRoleFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(UserRoleFilled);

RefIcon.displayName = 'UserRoleFilled';

export default RefIcon;

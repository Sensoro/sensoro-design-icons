// This icon file is generated automatically.
import * as React from 'react';
import UserManageOutlinedSvg from '@sensoro-design/icons-svg/es/asn/UserManageOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const UserManageOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={UserManageOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(UserManageOutlined);

RefIcon.displayName = 'UserManageOutlined';

export default RefIcon;

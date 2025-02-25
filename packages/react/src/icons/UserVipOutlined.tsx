// This icon file is generated automatically.
import * as React from 'react';
import UserVipOutlinedSvg from '@sensoro-design/icons-svg/es/asn/UserVipOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const UserVipOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={UserVipOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(UserVipOutlined);

RefIcon.displayName = 'UserVipOutlined';

export default RefIcon;

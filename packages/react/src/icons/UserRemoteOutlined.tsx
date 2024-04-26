// This icon file is generated automatically.
import * as React from 'react';
import UserRemoteOutlinedSvg from '@sensoro-design/icons-svg/es/asn/UserRemoteOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const UserRemoteOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={UserRemoteOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(UserRemoteOutlined);

RefIcon.displayName = 'UserRemoteOutlined';

export default RefIcon;

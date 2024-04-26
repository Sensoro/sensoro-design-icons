// This icon file is generated automatically.
import * as React from 'react';
import UserOutlinedSvg from '@sensoro-design/icons-svg/es/asn/UserOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const UserOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={UserOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(UserOutlined);

RefIcon.displayName = 'UserOutlined';

export default RefIcon;

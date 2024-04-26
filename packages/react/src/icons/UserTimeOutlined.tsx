// This icon file is generated automatically.
import * as React from 'react';
import UserTimeOutlinedSvg from '@sensoro-design/icons-svg/es/asn/UserTimeOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const UserTimeOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={UserTimeOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(UserTimeOutlined);

RefIcon.displayName = 'UserTimeOutlined';

export default RefIcon;

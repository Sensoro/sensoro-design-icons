// This icon file is generated automatically.
import * as React from 'react';
import UserPlusCircleOutlinedSvg from '@sensoro-design/icons-svg/es/asn/UserPlusCircleOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const UserPlusCircleOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={UserPlusCircleOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(UserPlusCircleOutlined);

RefIcon.displayName = 'UserPlusCircleOutlined';

export default RefIcon;

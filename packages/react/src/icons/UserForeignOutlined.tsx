// This icon file is generated automatically.
import * as React from 'react';
import UserForeignOutlinedSvg from '@sensoro-design/icons-svg/es/asn/UserForeignOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const UserForeignOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={UserForeignOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(UserForeignOutlined);

RefIcon.displayName = 'UserForeignOutlined';

export default RefIcon;

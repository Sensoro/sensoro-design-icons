// This icon file is generated automatically.
import * as React from 'react';
import UserForeignFilledSvg from '@sensoro-design/icons-svg/es/asn/UserForeignFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const UserForeignFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={UserForeignFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(UserForeignFilled);

RefIcon.displayName = 'UserForeignFilled';

export default RefIcon;

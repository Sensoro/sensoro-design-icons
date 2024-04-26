// This icon file is generated automatically.
import * as React from 'react';
import UserVipFilledSvg from '@sensoro-design/icons-svg/es/asn/UserVipFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const UserVipFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={UserVipFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(UserVipFilled);

RefIcon.displayName = 'UserVipFilled';

export default RefIcon;

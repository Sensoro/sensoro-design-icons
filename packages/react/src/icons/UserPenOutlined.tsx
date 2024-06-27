// This icon file is generated automatically.
import * as React from 'react';
import UserPenOutlinedSvg from '@sensoro-design/icons-svg/es/asn/UserPenOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const UserPenOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={UserPenOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(UserPenOutlined);

RefIcon.displayName = 'UserPenOutlined';

export default RefIcon;

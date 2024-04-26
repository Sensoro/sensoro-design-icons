// This icon file is generated automatically.
import * as React from 'react';
import UserPenFilledSvg from '@sensoro-design/icons-svg/es/asn/UserPenFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const UserPenFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={UserPenFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(UserPenFilled);

RefIcon.displayName = 'UserPenFilled';

export default RefIcon;

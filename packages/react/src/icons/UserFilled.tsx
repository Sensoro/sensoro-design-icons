// This icon file is generated automatically.
import * as React from 'react';
import UserFilledSvg from '@sensoro-design/icons-svg/es/asn/UserFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const UserFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={UserFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(UserFilled);

RefIcon.displayName = 'UserFilled';

export default RefIcon;

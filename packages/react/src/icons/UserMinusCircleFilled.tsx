// This icon file is generated automatically.
import * as React from 'react';
import UserMinusCircleFilledSvg from '@sensoro-design/icons-svg/es/asn/UserMinusCircleFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const UserMinusCircleFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={UserMinusCircleFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(UserMinusCircleFilled);

RefIcon.displayName = 'UserMinusCircleFilled';

export default RefIcon;

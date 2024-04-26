// This icon file is generated automatically.
import * as React from 'react';
import UsersFilledSvg from '@sensoro-design/icons-svg/es/asn/UsersFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const UsersFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={UsersFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(UsersFilled);

RefIcon.displayName = 'UsersFilled';

export default RefIcon;

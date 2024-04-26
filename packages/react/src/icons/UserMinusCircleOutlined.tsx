// This icon file is generated automatically.
import * as React from 'react';
import UserMinusCircleOutlinedSvg from '@sensoro-design/icons-svg/es/asn/UserMinusCircleOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const UserMinusCircleOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={UserMinusCircleOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(UserMinusCircleOutlined);

RefIcon.displayName = 'UserMinusCircleOutlined';

export default RefIcon;

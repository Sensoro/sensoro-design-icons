// This icon file is generated automatically.
import * as React from 'react';
import UserExclamationCircleFilledSvg from '@sensoro-design/icons-svg/es/asn/UserExclamationCircleFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const UserExclamationCircleFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={UserExclamationCircleFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(UserExclamationCircleFilled);

RefIcon.displayName = 'UserExclamationCircleFilled';

export default RefIcon;

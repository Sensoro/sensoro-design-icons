// This icon file is generated automatically.
import * as React from 'react';
import UserExclamationCircleOutlinedSvg from '@sensoro-design/icons-svg/es/asn/UserExclamationCircleOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const UserExclamationCircleOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={UserExclamationCircleOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(UserExclamationCircleOutlined);

RefIcon.displayName = 'UserExclamationCircleOutlined';

export default RefIcon;

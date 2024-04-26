// This icon file is generated automatically.
import * as React from 'react';
import LoginOutlinedSvg from '@sensoro-design/icons-svg/es/asn/LoginOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LoginOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LoginOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LoginOutlined);

RefIcon.displayName = 'LoginOutlined';

export default RefIcon;

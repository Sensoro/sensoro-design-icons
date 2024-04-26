// This icon file is generated automatically.
import * as React from 'react';
import LogoutOutlinedSvg from '@sensoro-design/icons-svg/es/asn/LogoutOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LogoutOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LogoutOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LogoutOutlined);

RefIcon.displayName = 'LogoutOutlined';

export default RefIcon;

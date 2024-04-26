// This icon file is generated automatically.
import * as React from 'react';
import SecurityGuardOutlinedSvg from '@sensoro-design/icons-svg/es/asn/SecurityGuardOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SecurityGuardOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SecurityGuardOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SecurityGuardOutlined);

RefIcon.displayName = 'SecurityGuardOutlined';

export default RefIcon;

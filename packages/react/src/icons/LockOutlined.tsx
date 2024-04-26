// This icon file is generated automatically.
import * as React from 'react';
import LockOutlinedSvg from '@sensoro-design/icons-svg/es/asn/LockOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LockOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LockOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LockOutlined);

RefIcon.displayName = 'LockOutlined';

export default RefIcon;

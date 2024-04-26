// This icon file is generated automatically.
import * as React from 'react';
import SecurityCenterOutlinedSvg from '@sensoro-design/icons-svg/es/asn/SecurityCenterOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SecurityCenterOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SecurityCenterOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SecurityCenterOutlined);

RefIcon.displayName = 'SecurityCenterOutlined';

export default RefIcon;

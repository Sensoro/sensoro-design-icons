// This icon file is generated automatically.
import * as React from 'react';
import FireMonitorOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FireMonitorOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FireMonitorOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FireMonitorOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FireMonitorOutlined);

RefIcon.displayName = 'FireMonitorOutlined';

export default RefIcon;

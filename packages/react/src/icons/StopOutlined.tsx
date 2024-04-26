// This icon file is generated automatically.
import * as React from 'react';
import StopOutlinedSvg from '@sensoro-design/icons-svg/es/asn/StopOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const StopOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={StopOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(StopOutlined);

RefIcon.displayName = 'StopOutlined';

export default RefIcon;

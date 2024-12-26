// This icon file is generated automatically.
import * as React from 'react';
import StayLeftOutlinedSvg from '@sensoro-design/icons-svg/es/asn/StayLeftOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const StayLeftOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={StayLeftOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(StayLeftOutlined);

RefIcon.displayName = 'StayLeftOutlined';

export default RefIcon;

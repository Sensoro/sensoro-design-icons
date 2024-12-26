// This icon file is generated automatically.
import * as React from 'react';
import StayRightOutlinedSvg from '@sensoro-design/icons-svg/es/asn/StayRightOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const StayRightOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={StayRightOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(StayRightOutlined);

RefIcon.displayName = 'StayRightOutlined';

export default RefIcon;

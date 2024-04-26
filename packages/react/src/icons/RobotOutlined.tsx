// This icon file is generated automatically.
import * as React from 'react';
import RobotOutlinedSvg from '@sensoro-design/icons-svg/es/asn/RobotOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const RobotOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={RobotOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(RobotOutlined);

RefIcon.displayName = 'RobotOutlined';

export default RefIcon;

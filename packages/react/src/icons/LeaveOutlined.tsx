// This icon file is generated automatically.
import * as React from 'react';
import LeaveOutlinedSvg from '@sensoro-design/icons-svg/es/asn/LeaveOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LeaveOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LeaveOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LeaveOutlined);

RefIcon.displayName = 'LeaveOutlined';

export default RefIcon;

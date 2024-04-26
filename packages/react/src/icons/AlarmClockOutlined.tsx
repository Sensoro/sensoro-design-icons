// This icon file is generated automatically.
import * as React from 'react';
import AlarmClockOutlinedSvg from '@sensoro-design/icons-svg/es/asn/AlarmClockOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AlarmClockOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AlarmClockOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AlarmClockOutlined);

RefIcon.displayName = 'AlarmClockOutlined';

export default RefIcon;

// This icon file is generated automatically.
import * as React from 'react';
import AudibleAlarmHostOutlinedSvg from '@sensoro-design/icons-svg/es/asn/AudibleAlarmHostOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AudibleAlarmHostOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AudibleAlarmHostOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AudibleAlarmHostOutlined);

RefIcon.displayName = 'AudibleAlarmHostOutlined';

export default RefIcon;

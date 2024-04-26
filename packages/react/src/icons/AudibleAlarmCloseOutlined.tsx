// This icon file is generated automatically.
import * as React from 'react';
import AudibleAlarmCloseOutlinedSvg from '@sensoro-design/icons-svg/es/asn/AudibleAlarmCloseOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AudibleAlarmCloseOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AudibleAlarmCloseOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AudibleAlarmCloseOutlined);

RefIcon.displayName = 'AudibleAlarmCloseOutlined';

export default RefIcon;

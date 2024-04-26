// This icon file is generated automatically.
import * as React from 'react';
import AudibleAlarmOpenOutlinedSvg from '@sensoro-design/icons-svg/es/asn/AudibleAlarmOpenOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AudibleAlarmOpenOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AudibleAlarmOpenOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AudibleAlarmOpenOutlined);

RefIcon.displayName = 'AudibleAlarmOpenOutlined';

export default RefIcon;

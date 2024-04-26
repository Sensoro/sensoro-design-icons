// This icon file is generated automatically.
import * as React from 'react';
import NoAlarmPurelySvg from '@sensoro-design/icons-svg/es/asn/NoAlarmPurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const NoAlarmPurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={NoAlarmPurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(NoAlarmPurely);

RefIcon.displayName = 'NoAlarmPurely';

export default RefIcon;

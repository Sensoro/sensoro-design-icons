// This icon file is generated automatically.
import * as React from 'react';
import AttendanceRateFilledSvg from '@sensoro-design/icons-svg/es/asn/AttendanceRateFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AttendanceRateFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AttendanceRateFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AttendanceRateFilled);

RefIcon.displayName = 'AttendanceRateFilled';

export default RefIcon;

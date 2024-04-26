// This icon file is generated automatically.
import * as React from 'react';
import UserReportPurelySvg from '@sensoro-design/icons-svg/es/asn/UserReportPurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const UserReportPurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={UserReportPurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(UserReportPurely);

RefIcon.displayName = 'UserReportPurely';

export default RefIcon;

// This icon file is generated automatically.
import * as React from 'react';
import HealthMonitoringPurelySvg from '@sensoro-design/icons-svg/es/asn/HealthMonitoringPurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const HealthMonitoringPurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={HealthMonitoringPurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(HealthMonitoringPurely);

RefIcon.displayName = 'HealthMonitoringPurely';

export default RefIcon;

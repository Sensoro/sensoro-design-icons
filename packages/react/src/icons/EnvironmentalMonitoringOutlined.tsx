// This icon file is generated automatically.
import * as React from 'react';
import EnvironmentalMonitoringOutlinedSvg from '@sensoro-design/icons-svg/es/asn/EnvironmentalMonitoringOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const EnvironmentalMonitoringOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={EnvironmentalMonitoringOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(EnvironmentalMonitoringOutlined);

RefIcon.displayName = 'EnvironmentalMonitoringOutlined';

export default RefIcon;

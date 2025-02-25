// This icon file is generated automatically.
import * as React from 'react';
import GasMonitoringOutlinedSvg from '@sensoro-design/icons-svg/es/asn/GasMonitoringOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const GasMonitoringOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={GasMonitoringOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(GasMonitoringOutlined);

RefIcon.displayName = 'GasMonitoringOutlined';

export default RefIcon;

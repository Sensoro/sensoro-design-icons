// This icon file is generated automatically.
import * as React from 'react';
import GasMonitoringFilledSvg from '@sensoro-design/icons-svg/es/asn/GasMonitoringFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const GasMonitoringFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={GasMonitoringFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(GasMonitoringFilled);

RefIcon.displayName = 'GasMonitoringFilled';

export default RefIcon;

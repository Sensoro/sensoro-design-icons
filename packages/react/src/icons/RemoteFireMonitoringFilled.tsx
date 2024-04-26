// This icon file is generated automatically.
import * as React from 'react';
import RemoteFireMonitoringFilledSvg from '@sensoro-design/icons-svg/es/asn/RemoteFireMonitoringFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const RemoteFireMonitoringFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={RemoteFireMonitoringFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(RemoteFireMonitoringFilled);

RefIcon.displayName = 'RemoteFireMonitoringFilled';

export default RefIcon;

// This icon file is generated automatically.
import * as React from 'react';
import RemoteFireMonitoringOutlinedSvg from '@sensoro-design/icons-svg/es/asn/RemoteFireMonitoringOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const RemoteFireMonitoringOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={RemoteFireMonitoringOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(RemoteFireMonitoringOutlined);

RefIcon.displayName = 'RemoteFireMonitoringOutlined';

export default RefIcon;

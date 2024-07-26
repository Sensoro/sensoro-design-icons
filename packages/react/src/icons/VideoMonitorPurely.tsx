// This icon file is generated automatically.
import * as React from 'react';
import VideoMonitorPurelySvg from '@sensoro-design/icons-svg/es/asn/VideoMonitorPurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const VideoMonitorPurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={VideoMonitorPurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(VideoMonitorPurely);

RefIcon.displayName = 'VideoMonitorPurely';

export default RefIcon;

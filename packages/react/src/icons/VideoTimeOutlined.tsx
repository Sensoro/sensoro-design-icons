// This icon file is generated automatically.
import * as React from 'react';
import VideoTimeOutlinedSvg from '@sensoro-design/icons-svg/es/asn/VideoTimeOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const VideoTimeOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={VideoTimeOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(VideoTimeOutlined);

RefIcon.displayName = 'VideoTimeOutlined';

export default RefIcon;

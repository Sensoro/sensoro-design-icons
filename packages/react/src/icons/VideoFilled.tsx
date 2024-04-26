// This icon file is generated automatically.
import * as React from 'react';
import VideoFilledSvg from '@sensoro-design/icons-svg/es/asn/VideoFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const VideoFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={VideoFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(VideoFilled);

RefIcon.displayName = 'VideoFilled';

export default RefIcon;

// This icon file is generated automatically.
import * as React from 'react';
import VideoFailFilledSvg from '@sensoro-design/icons-svg/es/asn/VideoFailFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const VideoFailFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={VideoFailFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(VideoFailFilled);

RefIcon.displayName = 'VideoFailFilled';

export default RefIcon;

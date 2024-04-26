// This icon file is generated automatically.
import * as React from 'react';
import VideoOutlinedSvg from '@sensoro-design/icons-svg/es/asn/VideoOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const VideoOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={VideoOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(VideoOutlined);

RefIcon.displayName = 'VideoOutlined';

export default RefIcon;

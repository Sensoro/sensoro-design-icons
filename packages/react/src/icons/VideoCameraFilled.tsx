// This icon file is generated automatically.
import * as React from 'react';
import VideoCameraFilledSvg from '@sensoro-design/icons-svg/es/asn/VideoCameraFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const VideoCameraFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={VideoCameraFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(VideoCameraFilled);

RefIcon.displayName = 'VideoCameraFilled';

export default RefIcon;

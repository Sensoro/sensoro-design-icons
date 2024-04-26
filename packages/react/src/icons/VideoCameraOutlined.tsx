// This icon file is generated automatically.
import * as React from 'react';
import VideoCameraOutlinedSvg from '@sensoro-design/icons-svg/es/asn/VideoCameraOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const VideoCameraOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={VideoCameraOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(VideoCameraOutlined);

RefIcon.displayName = 'VideoCameraOutlined';

export default RefIcon;

// This icon file is generated automatically.
import * as React from 'react';
import IndoorTrackOutlinedSvg from '@sensoro-design/icons-svg/es/asn/IndoorTrackOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const IndoorTrackOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={IndoorTrackOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(IndoorTrackOutlined);

RefIcon.displayName = 'IndoorTrackOutlined';

export default RefIcon;

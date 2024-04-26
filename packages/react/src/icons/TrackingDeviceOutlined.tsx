// This icon file is generated automatically.
import * as React from 'react';
import TrackingDeviceOutlinedSvg from '@sensoro-design/icons-svg/es/asn/TrackingDeviceOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const TrackingDeviceOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={TrackingDeviceOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(TrackingDeviceOutlined);

RefIcon.displayName = 'TrackingDeviceOutlined';

export default RefIcon;

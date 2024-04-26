// This icon file is generated automatically.
import * as React from 'react';
import DetectionDeviceOutlinedSvg from '@sensoro-design/icons-svg/es/asn/DetectionDeviceOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const DetectionDeviceOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={DetectionDeviceOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(DetectionDeviceOutlined);

RefIcon.displayName = 'DetectionDeviceOutlined';

export default RefIcon;

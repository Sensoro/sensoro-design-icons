// This icon file is generated automatically.
import * as React from 'react';
import VirtualCameraOutlinedSvg from '@sensoro-design/icons-svg/es/asn/VirtualCameraOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const VirtualCameraOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={VirtualCameraOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(VirtualCameraOutlined);

RefIcon.displayName = 'VirtualCameraOutlined';

export default RefIcon;

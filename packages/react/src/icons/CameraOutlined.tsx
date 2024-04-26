// This icon file is generated automatically.
import * as React from 'react';
import CameraOutlinedSvg from '@sensoro-design/icons-svg/es/asn/CameraOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CameraOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CameraOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CameraOutlined);

RefIcon.displayName = 'CameraOutlined';

export default RefIcon;

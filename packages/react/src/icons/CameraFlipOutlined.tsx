// This icon file is generated automatically.
import * as React from 'react';
import CameraFlipOutlinedSvg from '@sensoro-design/icons-svg/es/asn/CameraFlipOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CameraFlipOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CameraFlipOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CameraFlipOutlined);

RefIcon.displayName = 'CameraFlipOutlined';

export default RefIcon;

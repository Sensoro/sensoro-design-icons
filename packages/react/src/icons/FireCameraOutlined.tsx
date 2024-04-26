// This icon file is generated automatically.
import * as React from 'react';
import FireCameraOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FireCameraOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FireCameraOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FireCameraOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FireCameraOutlined);

RefIcon.displayName = 'FireCameraOutlined';

export default RefIcon;

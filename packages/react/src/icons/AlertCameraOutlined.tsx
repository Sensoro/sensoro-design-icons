// This icon file is generated automatically.
import * as React from 'react';
import AlertCameraOutlinedSvg from '@sensoro-design/icons-svg/es/asn/AlertCameraOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AlertCameraOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AlertCameraOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AlertCameraOutlined);

RefIcon.displayName = 'AlertCameraOutlined';

export default RefIcon;

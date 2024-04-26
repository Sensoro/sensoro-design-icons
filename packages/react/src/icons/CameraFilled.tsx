// This icon file is generated automatically.
import * as React from 'react';
import CameraFilledSvg from '@sensoro-design/icons-svg/es/asn/CameraFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CameraFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CameraFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CameraFilled);

RefIcon.displayName = 'CameraFilled';

export default RefIcon;

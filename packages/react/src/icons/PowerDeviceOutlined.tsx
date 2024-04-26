// This icon file is generated automatically.
import * as React from 'react';
import PowerDeviceOutlinedSvg from '@sensoro-design/icons-svg/es/asn/PowerDeviceOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PowerDeviceOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PowerDeviceOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PowerDeviceOutlined);

RefIcon.displayName = 'PowerDeviceOutlined';

export default RefIcon;

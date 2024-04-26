// This icon file is generated automatically.
import * as React from 'react';
import DeviceOutlinedSvg from '@sensoro-design/icons-svg/es/asn/DeviceOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const DeviceOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={DeviceOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(DeviceOutlined);

RefIcon.displayName = 'DeviceOutlined';

export default RefIcon;

// This icon file is generated automatically.
import * as React from 'react';
import UsbOutlinedSvg from '@sensoro-design/icons-svg/es/asn/UsbOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const UsbOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={UsbOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(UsbOutlined);

RefIcon.displayName = 'UsbOutlined';

export default RefIcon;

// This icon file is generated automatically.
import * as React from 'react';
import AppleOutlinedSvg from '@sensoro-design/icons-svg/es/asn/AppleOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AppleOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AppleOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AppleOutlined);

RefIcon.displayName = 'AppleOutlined';

export default RefIcon;

// This icon file is generated automatically.
import * as React from 'react';
import WifiOutlinedSvg from '@sensoro-design/icons-svg/es/asn/WifiOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const WifiOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={WifiOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(WifiOutlined);

RefIcon.displayName = 'WifiOutlined';

export default RefIcon;

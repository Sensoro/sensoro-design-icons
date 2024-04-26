// This icon file is generated automatically.
import * as React from 'react';
import SmartWatchOutlinedSvg from '@sensoro-design/icons-svg/es/asn/SmartWatchOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SmartWatchOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SmartWatchOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SmartWatchOutlined);

RefIcon.displayName = 'SmartWatchOutlined';

export default RefIcon;

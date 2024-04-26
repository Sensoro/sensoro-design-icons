// This icon file is generated automatically.
import * as React from 'react';
import SmartWaterMeterOutlinedSvg from '@sensoro-design/icons-svg/es/asn/SmartWaterMeterOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SmartWaterMeterOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SmartWaterMeterOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SmartWaterMeterOutlined);

RefIcon.displayName = 'SmartWaterMeterOutlined';

export default RefIcon;

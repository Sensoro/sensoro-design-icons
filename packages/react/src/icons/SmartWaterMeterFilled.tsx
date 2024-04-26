// This icon file is generated automatically.
import * as React from 'react';
import SmartWaterMeterFilledSvg from '@sensoro-design/icons-svg/es/asn/SmartWaterMeterFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SmartWaterMeterFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SmartWaterMeterFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SmartWaterMeterFilled);

RefIcon.displayName = 'SmartWaterMeterFilled';

export default RefIcon;

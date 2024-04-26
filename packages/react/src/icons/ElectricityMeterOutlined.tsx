// This icon file is generated automatically.
import * as React from 'react';
import ElectricityMeterOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ElectricityMeterOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ElectricityMeterOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ElectricityMeterOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ElectricityMeterOutlined);

RefIcon.displayName = 'ElectricityMeterOutlined';

export default RefIcon;

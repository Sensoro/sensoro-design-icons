// This icon file is generated automatically.
import * as React from 'react';
import ElectricCarPurelySvg from '@sensoro-design/icons-svg/es/asn/ElectricCarPurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ElectricCarPurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ElectricCarPurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ElectricCarPurely);

RefIcon.displayName = 'ElectricCarPurely';

export default RefIcon;

// This icon file is generated automatically.
import * as React from 'react';
import ForeignVehiclePurelySvg from '@sensoro-design/icons-svg/es/asn/ForeignVehiclePurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ForeignVehiclePurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ForeignVehiclePurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ForeignVehiclePurely);

RefIcon.displayName = 'ForeignVehiclePurely';

export default RefIcon;

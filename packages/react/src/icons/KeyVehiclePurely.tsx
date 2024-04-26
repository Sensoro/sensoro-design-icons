// This icon file is generated automatically.
import * as React from 'react';
import KeyVehiclePurelySvg from '@sensoro-design/icons-svg/es/asn/KeyVehiclePurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const KeyVehiclePurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={KeyVehiclePurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(KeyVehiclePurely);

RefIcon.displayName = 'KeyVehiclePurely';

export default RefIcon;

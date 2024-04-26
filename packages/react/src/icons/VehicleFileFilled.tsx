// This icon file is generated automatically.
import * as React from 'react';
import VehicleFileFilledSvg from '@sensoro-design/icons-svg/es/asn/VehicleFileFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const VehicleFileFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={VehicleFileFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(VehicleFileFilled);

RefIcon.displayName = 'VehicleFileFilled';

export default RefIcon;

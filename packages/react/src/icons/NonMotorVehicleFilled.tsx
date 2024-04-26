// This icon file is generated automatically.
import * as React from 'react';
import NonMotorVehicleFilledSvg from '@sensoro-design/icons-svg/es/asn/NonMotorVehicleFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const NonMotorVehicleFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={NonMotorVehicleFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(NonMotorVehicleFilled);

RefIcon.displayName = 'NonMotorVehicleFilled';

export default RefIcon;

// This icon file is generated automatically.
import * as React from 'react';
import NonMotorVehicleOutlinedSvg from '@sensoro-design/icons-svg/es/asn/NonMotorVehicleOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const NonMotorVehicleOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={NonMotorVehicleOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(NonMotorVehicleOutlined);

RefIcon.displayName = 'NonMotorVehicleOutlined';

export default RefIcon;

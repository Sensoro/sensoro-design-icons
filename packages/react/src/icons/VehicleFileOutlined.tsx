// This icon file is generated automatically.
import * as React from 'react';
import VehicleFileOutlinedSvg from '@sensoro-design/icons-svg/es/asn/VehicleFileOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const VehicleFileOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={VehicleFileOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(VehicleFileOutlined);

RefIcon.displayName = 'VehicleFileOutlined';

export default RefIcon;

// This icon file is generated automatically.
import * as React from 'react';
import AirPressureOutlinedSvg from '@sensoro-design/icons-svg/es/asn/AirPressureOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AirPressureOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AirPressureOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AirPressureOutlined);

RefIcon.displayName = 'AirPressureOutlined';

export default RefIcon;

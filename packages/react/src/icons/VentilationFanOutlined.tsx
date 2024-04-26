// This icon file is generated automatically.
import * as React from 'react';
import VentilationFanOutlinedSvg from '@sensoro-design/icons-svg/es/asn/VentilationFanOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const VentilationFanOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={VentilationFanOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(VentilationFanOutlined);

RefIcon.displayName = 'VentilationFanOutlined';

export default RefIcon;

// This icon file is generated automatically.
import * as React from 'react';
import WindSpeedOutlinedSvg from '@sensoro-design/icons-svg/es/asn/WindSpeedOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const WindSpeedOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={WindSpeedOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(WindSpeedOutlined);

RefIcon.displayName = 'WindSpeedOutlined';

export default RefIcon;

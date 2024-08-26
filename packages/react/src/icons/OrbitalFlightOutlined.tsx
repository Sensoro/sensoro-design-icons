// This icon file is generated automatically.
import * as React from 'react';
import OrbitalFlightOutlinedSvg from '@sensoro-design/icons-svg/es/asn/OrbitalFlightOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const OrbitalFlightOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={OrbitalFlightOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(OrbitalFlightOutlined);

RefIcon.displayName = 'OrbitalFlightOutlined';

export default RefIcon;

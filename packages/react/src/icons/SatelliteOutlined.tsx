// This icon file is generated automatically.
import * as React from 'react';
import SatelliteOutlinedSvg from '@sensoro-design/icons-svg/es/asn/SatelliteOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SatelliteOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SatelliteOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SatelliteOutlined);

RefIcon.displayName = 'SatelliteOutlined';

export default RefIcon;

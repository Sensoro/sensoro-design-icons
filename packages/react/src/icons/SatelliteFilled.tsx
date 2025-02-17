// This icon file is generated automatically.
import * as React from 'react';
import SatelliteFilledSvg from '@sensoro-design/icons-svg/es/asn/SatelliteFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SatelliteFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SatelliteFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SatelliteFilled);

RefIcon.displayName = 'SatelliteFilled';

export default RefIcon;

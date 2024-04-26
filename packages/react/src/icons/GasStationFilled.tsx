// This icon file is generated automatically.
import * as React from 'react';
import GasStationFilledSvg from '@sensoro-design/icons-svg/es/asn/GasStationFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const GasStationFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={GasStationFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(GasStationFilled);

RefIcon.displayName = 'GasStationFilled';

export default RefIcon;

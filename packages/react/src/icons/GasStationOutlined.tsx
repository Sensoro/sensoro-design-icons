// This icon file is generated automatically.
import * as React from 'react';
import GasStationOutlinedSvg from '@sensoro-design/icons-svg/es/asn/GasStationOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const GasStationOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={GasStationOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(GasStationOutlined);

RefIcon.displayName = 'GasStationOutlined';

export default RefIcon;

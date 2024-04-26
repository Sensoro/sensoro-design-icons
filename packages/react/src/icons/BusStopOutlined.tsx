// This icon file is generated automatically.
import * as React from 'react';
import BusStopOutlinedSvg from '@sensoro-design/icons-svg/es/asn/BusStopOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const BusStopOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={BusStopOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(BusStopOutlined);

RefIcon.displayName = 'BusStopOutlined';

export default RefIcon;

// This icon file is generated automatically.
import * as React from 'react';
import GeomagnetismOutlinedSvg from '@sensoro-design/icons-svg/es/asn/GeomagnetismOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const GeomagnetismOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={GeomagnetismOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(GeomagnetismOutlined);

RefIcon.displayName = 'GeomagnetismOutlined';

export default RefIcon;

// This icon file is generated automatically.
import * as React from 'react';
import GeoLocationOutlinedSvg from '@sensoro-design/icons-svg/es/asn/GeoLocationOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const GeoLocationOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={GeoLocationOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(GeoLocationOutlined);

RefIcon.displayName = 'GeoLocationOutlined';

export default RefIcon;

// This icon file is generated automatically.
import * as React from 'react';
import GeoLocationFilledSvg from '@sensoro-design/icons-svg/es/asn/GeoLocationFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const GeoLocationFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={GeoLocationFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(GeoLocationFilled);

RefIcon.displayName = 'GeoLocationFilled';

export default RefIcon;

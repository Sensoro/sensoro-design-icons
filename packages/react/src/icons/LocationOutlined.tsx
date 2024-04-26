// This icon file is generated automatically.
import * as React from 'react';
import LocationOutlinedSvg from '@sensoro-design/icons-svg/es/asn/LocationOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LocationOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LocationOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LocationOutlined);

RefIcon.displayName = 'LocationOutlined';

export default RefIcon;

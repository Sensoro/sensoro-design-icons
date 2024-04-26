// This icon file is generated automatically.
import * as React from 'react';
import PanoramaMapOutlinedSvg from '@sensoro-design/icons-svg/es/asn/PanoramaMapOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PanoramaMapOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PanoramaMapOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PanoramaMapOutlined);

RefIcon.displayName = 'PanoramaMapOutlined';

export default RefIcon;

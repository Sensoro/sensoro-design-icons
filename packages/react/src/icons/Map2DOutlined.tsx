// This icon file is generated automatically.
import * as React from 'react';
import Map2DOutlinedSvg from '@sensoro-design/icons-svg/es/asn/Map2DOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const Map2DOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={Map2DOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(Map2DOutlined);

RefIcon.displayName = 'Map2DOutlined';

export default RefIcon;

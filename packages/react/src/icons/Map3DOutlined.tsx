// This icon file is generated automatically.
import * as React from 'react';
import Map3DOutlinedSvg from '@sensoro-design/icons-svg/es/asn/Map3DOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const Map3DOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={Map3DOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(Map3DOutlined);

RefIcon.displayName = 'Map3DOutlined';

export default RefIcon;

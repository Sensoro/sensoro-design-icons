// This icon file is generated automatically.
import * as React from 'react';
import DistanceOutlinedSvg from '@sensoro-design/icons-svg/es/asn/DistanceOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const DistanceOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={DistanceOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(DistanceOutlined);

RefIcon.displayName = 'DistanceOutlined';

export default RefIcon;

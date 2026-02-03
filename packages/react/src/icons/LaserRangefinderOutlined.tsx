// This icon file is generated automatically.
import * as React from 'react';
import LaserRangefinderOutlinedSvg from '@sensoro-design/icons-svg/es/asn/LaserRangefinderOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LaserRangefinderOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LaserRangefinderOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LaserRangefinderOutlined);

RefIcon.displayName = 'LaserRangefinderOutlined';

export default RefIcon;

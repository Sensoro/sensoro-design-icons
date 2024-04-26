// This icon file is generated automatically.
import * as React from 'react';
import WaterAreaOutlinedSvg from '@sensoro-design/icons-svg/es/asn/WaterAreaOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const WaterAreaOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={WaterAreaOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(WaterAreaOutlined);

RefIcon.displayName = 'WaterAreaOutlined';

export default RefIcon;

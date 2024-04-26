// This icon file is generated automatically.
import * as React from 'react';
import WaterLevelOutlinedSvg from '@sensoro-design/icons-svg/es/asn/WaterLevelOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const WaterLevelOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={WaterLevelOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(WaterLevelOutlined);

RefIcon.displayName = 'WaterLevelOutlined';

export default RefIcon;

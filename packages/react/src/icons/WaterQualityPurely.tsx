// This icon file is generated automatically.
import * as React from 'react';
import WaterQualityPurelySvg from '@sensoro-design/icons-svg/es/asn/WaterQualityPurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const WaterQualityPurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={WaterQualityPurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(WaterQualityPurely);

RefIcon.displayName = 'WaterQualityPurely';

export default RefIcon;

// This icon file is generated automatically.
import * as React from 'react';
import HeatmapFilledSvg from '@sensoro-design/icons-svg/es/asn/HeatmapFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const HeatmapFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={HeatmapFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(HeatmapFilled);

RefIcon.displayName = 'HeatmapFilled';

export default RefIcon;

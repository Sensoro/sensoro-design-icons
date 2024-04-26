// This icon file is generated automatically.
import * as React from 'react';
import WatersFilledSvg from '@sensoro-design/icons-svg/es/asn/WatersFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const WatersFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={WatersFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(WatersFilled);

RefIcon.displayName = 'WatersFilled';

export default RefIcon;

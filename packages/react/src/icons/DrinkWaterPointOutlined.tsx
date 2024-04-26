// This icon file is generated automatically.
import * as React from 'react';
import DrinkWaterPointOutlinedSvg from '@sensoro-design/icons-svg/es/asn/DrinkWaterPointOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const DrinkWaterPointOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={DrinkWaterPointOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(DrinkWaterPointOutlined);

RefIcon.displayName = 'DrinkWaterPointOutlined';

export default RefIcon;

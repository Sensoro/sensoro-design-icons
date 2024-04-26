// This icon file is generated automatically.
import * as React from 'react';
import HydropowerPlantsOutlinedSvg from '@sensoro-design/icons-svg/es/asn/HydropowerPlantsOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const HydropowerPlantsOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={HydropowerPlantsOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(HydropowerPlantsOutlined);

RefIcon.displayName = 'HydropowerPlantsOutlined';

export default RefIcon;

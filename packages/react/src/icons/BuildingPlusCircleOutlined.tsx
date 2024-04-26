// This icon file is generated automatically.
import * as React from 'react';
import BuildingPlusCircleOutlinedSvg from '@sensoro-design/icons-svg/es/asn/BuildingPlusCircleOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const BuildingPlusCircleOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={BuildingPlusCircleOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(BuildingPlusCircleOutlined);

RefIcon.displayName = 'BuildingPlusCircleOutlined';

export default RefIcon;

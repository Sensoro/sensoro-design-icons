// This icon file is generated automatically.
import * as React from 'react';
import BuildingMaterialsFilledSvg from '@sensoro-design/icons-svg/es/asn/BuildingMaterialsFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const BuildingMaterialsFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={BuildingMaterialsFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(BuildingMaterialsFilled);

RefIcon.displayName = 'BuildingMaterialsFilled';

export default RefIcon;

// This icon file is generated automatically.
import * as React from 'react';
import BuildingFilledSvg from '@sensoro-design/icons-svg/es/asn/BuildingFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const BuildingFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={BuildingFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(BuildingFilled);

RefIcon.displayName = 'BuildingFilled';

export default RefIcon;

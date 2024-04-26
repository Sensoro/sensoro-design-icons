// This icon file is generated automatically.
import * as React from 'react';
import BuildingOutlinedSvg from '@sensoro-design/icons-svg/es/asn/BuildingOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const BuildingOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={BuildingOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(BuildingOutlined);

RefIcon.displayName = 'BuildingOutlined';

export default RefIcon;

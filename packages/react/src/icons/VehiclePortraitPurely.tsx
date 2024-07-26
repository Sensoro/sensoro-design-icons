// This icon file is generated automatically.
import * as React from 'react';
import VehiclePortraitPurelySvg from '@sensoro-design/icons-svg/es/asn/VehiclePortraitPurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const VehiclePortraitPurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={VehiclePortraitPurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(VehiclePortraitPurely);

RefIcon.displayName = 'VehiclePortraitPurely';

export default RefIcon;

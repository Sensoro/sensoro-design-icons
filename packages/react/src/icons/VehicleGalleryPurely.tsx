// This icon file is generated automatically.
import * as React from 'react';
import VehicleGalleryPurelySvg from '@sensoro-design/icons-svg/es/asn/VehicleGalleryPurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const VehicleGalleryPurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={VehicleGalleryPurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(VehicleGalleryPurely);

RefIcon.displayName = 'VehicleGalleryPurely';

export default RefIcon;

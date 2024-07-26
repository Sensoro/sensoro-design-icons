// This icon file is generated automatically.
import * as React from 'react';
import VesselGalleryPurelySvg from '@sensoro-design/icons-svg/es/asn/VesselGalleryPurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const VesselGalleryPurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={VesselGalleryPurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(VesselGalleryPurely);

RefIcon.displayName = 'VesselGalleryPurely';

export default RefIcon;

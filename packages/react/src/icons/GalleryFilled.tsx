// This icon file is generated automatically.
import * as React from 'react';
import GalleryFilledSvg from '@sensoro-design/icons-svg/es/asn/GalleryFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const GalleryFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={GalleryFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(GalleryFilled);

RefIcon.displayName = 'GalleryFilled';

export default RefIcon;

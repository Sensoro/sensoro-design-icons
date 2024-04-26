// This icon file is generated automatically.
import * as React from 'react';
import ImagePurelySvg from '@sensoro-design/icons-svg/es/asn/ImagePurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ImagePurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ImagePurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ImagePurely);

RefIcon.displayName = 'ImagePurely';

export default RefIcon;

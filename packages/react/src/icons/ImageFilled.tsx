// This icon file is generated automatically.
import * as React from 'react';
import ImageFilledSvg from '@sensoro-design/icons-svg/es/asn/ImageFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ImageFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ImageFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ImageFilled);

RefIcon.displayName = 'ImageFilled';

export default RefIcon;

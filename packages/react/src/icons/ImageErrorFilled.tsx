// This icon file is generated automatically.
import * as React from 'react';
import ImageErrorFilledSvg from '@sensoro-design/icons-svg/es/asn/ImageErrorFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ImageErrorFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ImageErrorFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ImageErrorFilled);

RefIcon.displayName = 'ImageErrorFilled';

export default RefIcon;

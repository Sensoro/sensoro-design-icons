// This icon file is generated automatically.
import * as React from 'react';
import ImageCameraOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ImageCameraOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ImageCameraOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ImageCameraOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ImageCameraOutlined);

RefIcon.displayName = 'ImageCameraOutlined';

export default RefIcon;

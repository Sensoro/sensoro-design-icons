// This icon file is generated automatically.
import * as React from 'react';
import ImageSearchOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ImageSearchOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ImageSearchOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ImageSearchOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ImageSearchOutlined);

RefIcon.displayName = 'ImageSearchOutlined';

export default RefIcon;

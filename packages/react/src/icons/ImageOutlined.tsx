// This icon file is generated automatically.
import * as React from 'react';
import ImageOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ImageOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ImageOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ImageOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ImageOutlined);

RefIcon.displayName = 'ImageOutlined';

export default RefIcon;

// This icon file is generated automatically.
import * as React from 'react';
import HomeOutlinedSvg from '@sensoro-design/icons-svg/es/asn/HomeOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const HomeOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={HomeOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(HomeOutlined);

RefIcon.displayName = 'HomeOutlined';

export default RefIcon;

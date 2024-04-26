// This icon file is generated automatically.
import * as React from 'react';
import BannerOutlinedSvg from '@sensoro-design/icons-svg/es/asn/BannerOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const BannerOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={BannerOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(BannerOutlined);

RefIcon.displayName = 'BannerOutlined';

export default RefIcon;

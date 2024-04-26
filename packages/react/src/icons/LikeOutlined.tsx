// This icon file is generated automatically.
import * as React from 'react';
import LikeOutlinedSvg from '@sensoro-design/icons-svg/es/asn/LikeOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LikeOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LikeOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LikeOutlined);

RefIcon.displayName = 'LikeOutlined';

export default RefIcon;

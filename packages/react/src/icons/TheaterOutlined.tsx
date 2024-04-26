// This icon file is generated automatically.
import * as React from 'react';
import TheaterOutlinedSvg from '@sensoro-design/icons-svg/es/asn/TheaterOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const TheaterOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={TheaterOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(TheaterOutlined);

RefIcon.displayName = 'TheaterOutlined';

export default RefIcon;

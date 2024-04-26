// This icon file is generated automatically.
import * as React from 'react';
import HashrateCenterOutlinedSvg from '@sensoro-design/icons-svg/es/asn/HashrateCenterOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const HashrateCenterOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={HashrateCenterOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(HashrateCenterOutlined);

RefIcon.displayName = 'HashrateCenterOutlined';

export default RefIcon;

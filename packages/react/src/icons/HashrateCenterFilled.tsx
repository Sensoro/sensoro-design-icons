// This icon file is generated automatically.
import * as React from 'react';
import HashrateCenterFilledSvg from '@sensoro-design/icons-svg/es/asn/HashrateCenterFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const HashrateCenterFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={HashrateCenterFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(HashrateCenterFilled);

RefIcon.displayName = 'HashrateCenterFilled';

export default RefIcon;

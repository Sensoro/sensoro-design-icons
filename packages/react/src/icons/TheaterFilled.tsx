// This icon file is generated automatically.
import * as React from 'react';
import TheaterFilledSvg from '@sensoro-design/icons-svg/es/asn/TheaterFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const TheaterFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={TheaterFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(TheaterFilled);

RefIcon.displayName = 'TheaterFilled';

export default RefIcon;
